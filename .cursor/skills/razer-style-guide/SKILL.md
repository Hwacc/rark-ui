---
name: razer-style-guide
description: Provides Razer brand design system and style guide for .pen file design work. Use when designing components in .pen files, working with Razer theme, creating UI components following Razer brand guidelines, or when the user mentions Razer design system, style guide, or .pen file design.
version: 1.0.0
---

# Razer 样式指南

## 关键规则

**必须首先阅读**：
在设计 .pen 文件中的组件时：
1. 在设计工作开始之前阅读此样式指南
2. 严格遵守此处定义的所有规范
3. 严格按照指定的颜色值和尺寸比例使用

## 品牌背景

- **品牌**：Razer
- **参考**：https://www.razer.com/store
- **组件样式参考**：从 Razer 官方商店页面提取组件样式信息
- **组件标准**：遵循 Shadcn-ui 组件规范

## 颜色系统
颜色定义与使用指南请参阅 [references/color-system.md](references/color-system.md)。

## 尺寸系统

### 尺寸档位
四个尺寸档位：`xs`、`sm`、`base`、`lg`

### 字体尺寸
- **xs**：12px
- **sm**：14px
- **base**：16px
- **lg**：18px

### 间距系统
内边距、间距和空白应遵循尺寸档位系统：
- 根据组件的尺寸档位使用一致的间距
- 保持尺寸档位之间的比例关系
- 系统性地应用于所有组件

## 组件设计原则

### Checkbox 组件
- **未选中状态**：透明背景，边框颜色 `#909090`
- **选中状态**：背景 `#44d62c`，边框 `#44d62c`，白色勾选图标
- **悬停状态**：未选中时边框变为 `#44d62c`，选中时背景变为 `#73e161`
- **禁用状态**：降低透明度（50%），灰色边框和文字
- **标准尺寸**：20x20px，圆角 4px
- **小尺寸**：16x16px，圆角 3px

### 通用组件指南
- 始终使用定义的颜色值 - 绝不硬编码任意颜色
- 遵循尺寸档位系统以保持一致的缩放
- 保持适当的对比度以确保可访问性
- 使用 Razer 绿色 (`#44d62c`) 作为主要强调色
- 确保组件在深色背景 (`#111111`) 上正常工作

## .pen 文件设计工作流程

在处理 .pen 文件时：

1. **第一步**：完整阅读此样式指南
2. **检查上下文**：查找 .pen 文件中可能包含额外样式指南信息的 Context 节点
3. **应用颜色**：使用上面指定的确切颜色值
4. **应用尺寸**：使用尺寸档位系统（xs、sm、base、lg）及对应的像素值
5. **验证**：确保所有设计元素遵循 Razer 品牌指南

## 其他资源

- 颜色系统：[references/color-system.md](references/color-system.md)
- 详细的组件规范（尺寸、间距、状态、字体）：[references/component-specs.md](references/component-specs.md)

组件特定实现，请参考：
- Razer 主题 CSS 文件：`packages/themes/src/razer/components/`
- 现有组件示例：`.pencil/razer.pen`
- .pen 文件中的 Context 节点，用于组件特定指南
