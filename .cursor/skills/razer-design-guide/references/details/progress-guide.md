# Progress 设计细节

## Variant（变体）

| Variant | 说明 | 轨道（track） | 进度条（range） |
|---------|------|---------------|-----------------|
| **primary** | 主进度，Razer 绿 | secondary background (#222222) | primary / primary highlight |
| **secondary** | 次要进度，灰色 | secondary dark (#373737) | secondary / secondary highlight |

## State（状态）

| State | 轨道 | 进度条 | 说明 |
|-------|------|--------|------|
| **default** | 轨道背景色 | 填充色 | 正常进度显示 |
| **indeterminate** | 轨道背景色 | 填充色 + 动画 | 不确定进度，无具体数值 |
| **disabled** | 50% 透明度 | 50% 透明度 | 禁用状态 |
| **focus** | 2px outline primary | — | 焦点状态（可聚焦时） |

## Size（尺寸）

| Size | 轨道高度 | track radius | range radius | 说明 |
|------|----------|--------------|--------------|------|
| **xs** | 4px | 2px (pill) | 2px | 轻量进度 |
| **sm** | 6px | 3px (pill) | 3px | 小进度 |
| **base** | 8px | 4px (pill) | 4px | 默认档位 |
| **lg** | 12px | 6px (pill) | 6px | 强调进度 |

## 其他规范

- **方向**：支持 horizontal（默认）、vertical
- **布局**：Track 为容器，Range 为填充部分，宽度/高度由 value 控制
- **标签**：可选 label 和 value text，使用 text white / text white secondary
- **数值显示**：可选在进度条右侧或下方显示百分比
