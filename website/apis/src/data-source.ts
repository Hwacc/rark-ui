import type {
  DocumentDetail,
  DocumentSummary,
  ExampleDetail,
  ExampleSummary,
  Framework,
} from './types'
import { readdir, readFile } from 'node:fs/promises'

import path from 'node:path'
import { ApiError } from './errors'

async function safeReadDir(targetPath: string) {
  try {
    return await readdir(targetPath, { withFileTypes: true })
  }
  catch {
    return []
  }
}

function minimizeJsonContent(rawContent: string): string {
  const parsed = JSON.parse(rawContent) as unknown
  return JSON.stringify(parsed)
}

function sanitizeDocumentContent(rawContent: string): string {
  // Normalize windows newlines and collapse excessive blank lines.
  const normalizedNewlines = rawContent.replace(/\r\n/g, '\n').replace(/\n{2,}/g, '\n')
  // Remove table-related tags while keeping textual content.
  return normalizedNewlines
    .replace(/<\/?table\b[^>]*>/gi, '')
    .replace(/<\/?thead\b[^>]*>/gi, '')
    .replace(/<\/?tbody\b[^>]*>/gi, '')
    .replace(/<\/?tr\b[^>]*>/gi, '')
    .replace(/<\/?th\b[^>]*>/gi, '')
    .replace(/<\/?td\b[^>]*>/gi, '')
    .replace(/<\/?code\b[^>]*>/gi, '')
    .replace(/\n/g, '')
    .trim()
}

export class LocalDataSource {
  private readonly repoRoot: string

  constructor(repoRoot: string) {
    this.repoRoot = repoRoot
  }

  async listComponents(framework: Framework): Promise<string[]> {
    this.assertFramework(framework)
    const entries = await safeReadDir(this.getVueComponentsDir())
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
      .sort()
  }

  async listExamples(framework: Framework): Promise<ExampleSummary[]> {
    this.assertFramework(framework)
    const components = await this.listComponents(framework)
    const result: ExampleSummary[] = []

    for (const componentName of components) {
      const examplesDir = path.join(this.getVueComponentsDir(), componentName, 'examples')
      const entries = await safeReadDir(examplesDir)
      const exampleIds = entries
        .filter(entry => entry.isFile() && entry.name.endsWith('.vue'))
        .map(entry => entry.name.replace(/\.vue$/i, ''))
        .sort()

      if (exampleIds.length > 0) {
        result.push({ componentName, exampleIds })
      }
    }

    return result
  }

  async getExample(framework: Framework, componentName: string): Promise<ExampleDetail> {
    this.assertFramework(framework)
    const examplesDir = path.join(this.getVueComponentsDir(), componentName, 'examples')
    const entries = await safeReadDir(examplesDir)
    const files = entries
      .filter(entry => entry.isFile() && entry.name.endsWith('.vue'))
      .sort((a, b) => {
        return a.name.localeCompare(b.name)
      })

    if (files.length === 0) {
      throw new ApiError(
        'EXAMPLE_NOT_FOUND',
        `No examples found for component: ${componentName}`,
        404,
        framework,
      )
    }

    const examples = []
    for (const file of files) {
      const fullPath = path.join(examplesDir, file.name)
      const content = await readFile(fullPath, 'utf-8')
      examples.push({
        id: file.name.replace(/\.vue$/i, ''),
        title: file.name,
        code: content,
      })
    }

    return {
      componentName,
      examples,
    }
  }

  async listDocuments(framework: Framework): Promise<DocumentSummary[]> {
    this.assertFramework(framework)
    const components = await this.listComponents(framework)
    const result: DocumentSummary[] = []

    for (const componentName of components) {
      const fileName = `${componentName}.doc.mdx`
      const documentPath = path.join(this.getVueComponentsDir(), componentName, fileName)
      try {
        await readFile(documentPath, 'utf-8')
        result.push({
          componentName,
          title: fileName,
        })
      }
      catch {
        continue
      }
    }

    return result
  }

  async getDocument(framework: Framework, componentName: string): Promise<DocumentDetail> {
    this.assertFramework(framework)
    const fileName = `${componentName}.ai.json`
    const documentPath = path.join(this.getVueComponentsDir(), componentName, fileName)

    try {
      const rawContent = await readFile(documentPath, 'utf-8')
      const content = minimizeJsonContent(rawContent)
      return {
        componentName,
        title: fileName,
        content,
      }
    }
    catch {
      throw new ApiError(
        'DOCUMENT_NOT_FOUND',
        `No document found for component: ${componentName}`,
        404,
        framework,
      )
    }
  }

  private getVueComponentsDir(): string {
    return path.join(this.repoRoot, 'packages', 'vue', 'core', 'src', 'components')
  }

  private assertFramework(framework: Framework): void {
    switch (framework) {
      case 'vue':
        return
      default: {
        const neverFramework: never = framework
        throw new ApiError(
          'FRAMEWORK_NOT_SUPPORTED',
          `Framework is not supported: ${String(neverFramework)}`,
          400,
        )
      }
    }
  }
}
