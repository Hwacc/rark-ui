# DropdownMenu 设计细节

## 组件结构

- **Trigger**：触发按钮，点击展开菜单
- **Content**：下拉面板容器
- **Item**：菜单项
- **Separator**：分隔线（可选）
- **Indicator**：展开指示图标（如 ChevronDown）

## Variant（变体）

| Variant | 说明 | Trigger 主色 |
|---------|------|--------------|
| **primary** | 主要操作，Razer 绿 | primary / primary highlight / primary dark |
| **secondary** | 次要操作，灰色 | secondary / secondary highlight / secondary dark |

## State（状态）

### Trigger 状态

| State | primary | secondary |
|-------|---------|-----------|
| **default** | 背景 primary，文字 black | 背景 secondary，文字 white |
| **hover** | 背景 primary highlight | 背景 secondary highlight |
| **active/open** | 背景 primary dark | 背景 secondary dark |
| **focus** | 2px outline primary | 2px outline secondary |
| **disabled** | 50% 透明度 | 50% 透明度 |

### Menu Item 状态

| State | 背景 | 文字 |
|-------|------|------|
| **default** | 透明 | text white |
| **hover/highlighted** | secondary background | text white |
| **disabled** | 透明 | text white secondary，50% 透明度 |

- **Item 宽度**：必须为 `fill_container`，确保 hover 背景铺满整行
- **Item padding**：左右对称，如 `[8, 10, 8, 10]`（top, right, bottom, left）

### Content 面板

| 属性 | 值 |
|------|-----|
| **背景** | #000000 |
| **边框** | primary / Razer 绿 (#44d62c)，2-3px |
| **内边距** | 4px，避免 Item hover 覆盖 border |
| **圆角** | 遵循 size-guide |
| **阴影** | shadow black (rgba(0,0,0,0.8))，blur 10px |

## Size（尺寸）

| Size | font size | padding x | padding y | border radius | Item min-height |
|------|-----------|-----------|-----------|---------------|-----------------|
| **xs** | 12px | 6px | 4px | 2px | 28px |
| **sm** | 14px | 8px | 6px | 2px | 32px |
| **base** | 16px | 10px | 8px | 2px | 36px |
| **lg** | 18px | 12px | 8px | 4px | 40px |

## 其他规范

- **定位**：优先显示在 Trigger 下方，避免超出视口
- **Trigger 与 Content 间距**：8px
- **最小宽度**：与 Trigger 等宽或 min 10rem
- **分隔线**：1px 高度，secondary border 颜色
- **箭头**（可选）：与 Content 同背景色和边框色
