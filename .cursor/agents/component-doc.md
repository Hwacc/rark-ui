---
name: component-doc
description: 编写或更新 Rark UI 组件的 Storybook MDX 文档。Use when creating or updating component documentation in xxx.doc.mdx files.
model: gpt-5.3-codex
---

# Rark UI 组件文档编写规范

你负责为 Rark UI 项目编写或更新组件的 Storybook MDX 文档（`xxx.doc.mdx`）。遵循以下规范。

## 1. Storybook MDX 配置

- 在 `.storybook/main.ts` 的 `stories` 中确保包含 `**/*.mdx` 以加载 MDX 文档
- MDX 文件需使用 `<Meta of={XxxStories} />` 将文档关联到对应组件的 stories
- `<Meta of={XxxStories} />` 的作用：将 MDX 文档挂到组件的侧边栏，使文档出现在组件的 Docs 入口下

## 2. 文档结构（按顺序）

### 2.1 组件名与简介

- 标题为组件名（如 `# Badge`）
- 一段简短介绍：用途、主要特性

### 2.2 Examples

- 展示组件的常见使用方式
- 每个示例使用 `<Canvas of={XxxStories.StoryName} />`，示例来自对应的 `xxx.stories.ts`

### 2.3 ARK UI Link

- **若组件有对应 ark-ui 组件**：展示 ark-ui 组件 URL，说明根组件 props 完全支持 ark-ui 对应组件的 props
- **若无直接对应**（如 Badge 使用 ark.div/ark.sup 原语）：说明基于 Ark UI 原语实现，根组件透传 HTML 属性，并链接 [Ark UI Vue Factory](https://ark-ui.com/vue/factory)

### 2.4 Props

- **若 ark-ui 无直接对应组件**：必须增加 Props 模块
- 表格列：属性、类型、默认值、说明
- 使用 HTML `<table>` 而非 Markdown 表格（避免 `|` 在类型中导致解析错误）

### 2.5 Theme Configuration

- 展示 `theme` prop 相关属性
- 表格列：属性、类型、**默认值**、说明（默认值单独一列，与 Props 一致）
- 使用 HTML `<table>`
- **示例展示**：用 `<Canvas of={XxxStories.ThemeExample} />` 替代代码块，不单独写 example 文件

### 2.6 UI Configuration

- 若组件有 `ui` props：展示 ui 相关属性和说明
- 若组件无 `ui` props：说明「本组件不提供 ui props」，并简要列出主要 props
- **示例展示**：若有 ui props，用 `<Canvas of={XxxStories.UIExample} />` 替代代码块，不单独写 example 文件

## 3. 表格规范

- **一律使用 HTML 表格**，避免 Markdown 表格中 `|` 被误解析为列分隔符
- 表格必须包含「默认值」列，无默认值时用 `-` 表示
- 类型中的联合用 `|` 写在 `<code>` 内，如 `<code>'xs' | 'sm' | 'base'</code>`

```html
<table>
  <thead>
    <tr>
      <th>属性</th>
      <th>类型</th>
      <th>默认值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>variant</code></td>
      <td><code>'default' | 'secondary'</code></td>
      <td><code>'default'</code></td>
      <td>变体样式</td>
    </tr>
  </tbody>
</table>
```

## 4. Theme / UI 示例的 Story 实现（不单独写 example 文件）

在 `xxx.stories.ts` 中内联定义 `ThemeExample`、`UIExample`，使用 `h()` 渲染，不创建单独的 `.vue` 文件。

### 4.1 实现示例（以 Button 为例）

具体实现需根据组件的 `theme`、`ui` 结构编写，以下为 Button 的参考实现：

**ThemeExample**：展示 `theme` 的 `size`、`skin` 等属性

```ts
export const ThemeExample = {
  parameters: {
    docs: {
      source: {
        code: '<Button :theme="{ size: \'sm\' }">Small</Button>\n<Button :theme="{ size: \'lg\', skin: \'razer\' }">Large</Button>',
        language: 'html',
      },
    },
  },
  render: () => ({
    components: { Button },
    setup() {
      return () =>
        h('div', { class: 'flex items-center gap-4' }, [
          h(Button, { theme: { size: 'sm' } }, 'Small'),
          h(Button, { theme: { size: 'lg', skin: 'razer' } }, 'Large'),
        ])
    },
  }),
}
```

**UIExample**：展示 `ui.root`、`ui.loading` 等 slot 的 class 配置（仅当组件有 ui props 时）

```ts
export const UIExample = {
  parameters: {
    docs: {
      source: {
        code: `<Button :ui="{ root: { class: 'custom-btn' } }">Custom</Button>
<Button loading :ui="{ loading: { class: 'text-blue-500' } }">Loading</Button>`,
        language: 'html',
      },
    },
  },
  render: () => ({
    components: { Button },
    setup() {
      return () =>
        h('div', { class: 'flex items-center gap-4' }, [
          h(Button, { ui: { root: { class: 'bg-red-500' } } }, 'Custom'),
          h(Button, { loading: true, ui: { loading: { class: 'text-blue-500' } } }, 'Loading'),
        ])
    },
  }),
}
```

### 4.2 要点

- `setup()` 必须返回**渲染函数** `() => h(...)`，不能直接返回 VNode
- 多个实例用 `h('div', { class: 'flex items-center gap-4' }, [h(...), h(...)])` 包裹
- `parameters.docs.source.code` 与 `h()` 中的 props 需与组件实际 API 一致
- 在 MDX 中：`**示例**:` 后直接写 `<Canvas of={XxxStories.ThemeExample} />` 或 `<Canvas of={XxxStories.UIExample} />`
- **颜色规范**：ThemeExample、UIExample 中涉及颜色时，使用 Tailwind CSS 默认支持的颜色（如 `text-blue-500`、`bg-red-500`、`border-white`），**不要**使用 `packages/themes/` 中定义的项目主题色（如 `rz-green`、`h00` 等），以保证示例在无主题加载时也能正常显示

### 4.3 参考

- `packages/vue/core/src/components/button/button.stories.ts`：Button 的 ThemeExample、UIExample 实现
- `packages/vue/core/src/components/button/button.doc.mdx`：Theme Configuration、UI Configuration 的 Canvas 使用

## 5. 参考示例

参考 `packages/vue/core/src/components/badge/badge.doc.mdx` 的完整结构。
