---
name: component-ai-json
description: 生成或更新 Rark UI 组件的 AI 文档 JSON（*.ai.json）。Use when creating/updating machine-executable component docs based on the Button AI JSON.
---

# Rark UI 组件 AI 文档（v2）Agent 规范

你负责为 Rark UI 组件生成或更新机器可执行文档 `*.ai.json`。
输出必须以 `packages/vue/core/src/components/button/button.ai.json` 作为结构蓝本，并保持字段稳定、可校验、可追溯。

## 1. 核心目标

- 让 AI Agent 能直接消费文档完成：检索、代码生成、能力校验。
- 保证字段语义一致，避免不同组件出现结构漂移。
- 明确文档来源与冲突优先级，降低“文档与代码不一致”的风险。

## 2. 输出文件规则

- 目标文件命名：`<component>.ai.json`。
- 输出位置：组件同级目录（与 `<component>.doc.mdx` 同级）。
- JSON 必须是合法对象，不包含注释，不包含 Markdown 包裹。
- 文本默认中文；代码/表达式保持英文技术标识。

## 3. 必须包含的顶层字段

按如下顺序组织：

1. `schemaVersion`（固定 `2.0.0`）
2. `docId`
3. `component`
4. `contracts`
5. `behaviorModel`
6. `examples`
7. `generationHints`
8. `provenance`

除非用户明确要求，不要新增顶层字段。**不要**在 `*.ai.json` 产物中包含 `quality` 字段。

## 4. component 字段要求

- 必填：`name`、`framework`、`package`、`importPath`、`exportName`、`category`、`description`。
- 必填：`basePrimitive.library`、`basePrimitive.primitive`、`basePrimitive.nativeElement`。
- 必填：`passThrough.htmlAttributes`（数组）与 `passThrough.notes`。
- 必填：`capabilities`（如 `click`、`loading`、`ripple`、`theme`、`ui-override`）。

## 5. contracts 字段要求（重点）

### 5.1 props

每个 prop 都要包含：

- `name`
- `required`
- `requiredSource`（`runtime | type | doc`）
- `typeText`
- `typeSchema`（机器可判定的 JSON Schema 片段）
- `default`
- `defaultKind`（`explicit-runtime | explicit-doc | implicit-undefined | unknown`）
- `nullable`
- `passthrough`
- `deprecated`
- `dependsOn`（数组）
- `conflictsWith`（数组）
- `description`

规则：

- 不要只写 `typeText`，必须同时提供 `typeSchema`。
- `default` 不明确时使用 `null`，并通过 `defaultKind` 标注来源不确定性。
- 结构化字段优先，描述性文本次之。

### 5.2 events

每个事件都要包含：

- `name`
- `payload.typeText`
- `payload.typeSchema`
- `emitWhen`（数组）
- `notEmitWhen`（数组，可为空）
- `order`（事件执行顺序）
- `description`

### 5.3 slots

每个插槽都要包含：

- `name`
- `slotPropsSchema`
- `renderWhen`
- `fallback`
- `description`

### 5.4 themeConfiguration / uiConfiguration

- 使用 `fields` 数组表达。
- 每个字段至少包含：`name`、`typeText`、`typeSchema`、`default`、`defaultKind`、`description`。

## 6. behaviorModel 字段要求

必须包含：

- `stateVars`
- `derived`
- `transitions`

`transitions` 中至少包含：

- `on`
- `guard`
- `effects`

表达要可被规则引擎或代码生成器直接读取，不写模糊语义（如“通常”“一般”）。

## 7. examples 字段要求

每个示例必须包含：

- `id`
- `mcp`（对象，含 `invoke` 与 `hint`）
- `description`

- 重要: `mcp` 为结构化 JSON，便于机器直接调用,比如:

```json
{
  "mcp": {
    "server": "rark-ui",
    "tool": "get-example",
    "args": { "framework": "vue", "componentName": "Button" },
    "exampleId": "basic"
  }
}
```
- 若示例对应 `examples/*.vue` 文件，使用 rark-ui MCP；
- 若为 story 内联示例（无独立 example 文件），`invoke` 仍指向 `get-example`，
- 若无对对应示例,则应该调用`ark-ui``mcp`,比如:

```json
{
  "mcp": {
    "server": "ark-ui",
    "tool": "get-example",
    "args": { "framework": "vue", "componentName": "Button" },
    "exampleId": "basic"
  }
}
```

## 8. generationHints 字段要求

必须包含：

- `preferredUsageOrder`
- `safeDefaults`
- `a11yChecklist`
- `codegenTemplates`
- `antiPatterns`

要求：

- `codegenTemplates` 提供最小可运行示例。
- `antiPatterns` 必须是可执行反例，不要写空泛原则。

## 9. quality 输出要求（不写入产物）

`quality` 不写入 `*.ai.json` 文件。每次 skill/agent 执行完成后，在**报告中**输出质量评估，包含：

- `completenessScore`（0~1）
- `machineReadabilityScore`（0~1）
- `gaps`（数组）
- `lastReviewedBy`
- `lastReviewedAt`（`YYYY-MM-DD`）

分数要与内容一致，不能机械给满分。

## 10. provenance 字段要求

必须包含：

- `sources[]`（`path` + `kind`）
- `precedence`（默认 `["runtime","type","doc"]`）
- `fieldSourceMap`

冲突处理规则：

- 同一字段冲突时，按 `precedence` 决定最终值。
- `fieldSourceMap` 记录关键字段来源，至少覆盖 default、event order、核心行为规则。

## 11. 信息采集优先级

生成/更新文档时，按顺序读取：

1. 运行时代码（如 `Component.vue`）
2. 类型定义（如 `props.ts`、`types.ts`）
3. 文档与示例（`*.doc.mdx`、`*.stories.ts`）

禁止只依据 `doc.mdx` 推断运行时行为。

## 12. 输出前检查清单

- 顶层字段是否完整且顺序稳定（不含 quality）。
- 每个 prop 是否同时有 `typeText` 和 `typeSchema`。
- `default + defaultKind` 是否成对出现。
- `behaviorModel` 是否能解释关键交互流程。
- `examples[].mcp` 是否与 MCP 工具签名一致（server、tool、args、exampleId）。
- `provenance.precedence` 是否存在且合理。
- JSON 是否可被标准解析器直接解析。
