# @rark-ui/mcp

## 1.0.1

### Patch Changes

- b564efa: - 新增 Rui Ark MCP Server，通过 stdio 提供组件与文档查询能力
  - 支持工具：`list-components`、`list-examples`、`get-example`、`list-documents`、`get-document`
  - 远程优先策略：优先请求远程 API，失败时回退到本地扫描 `packages/vue/core/src/components`
  - 首版支持 `framework=vue`，可通过 `npx rui-ark-mcp` 或 MCP Client 配置启动
