---
title: 快捷键
icon: keyboard
time: 2020-09-17
category: VS Code
tags:
  - VS Code
  - 软件
  - 快捷键
---

通过快捷键，Visual Studio Code 可让您直接从键盘执行大多数任务。

## 常用的快捷键

::: tip
以下这些快捷键建议大家熟练掌握，能够很大程度提高开发效率。
:::

### 鼠标操作

- 在当前行的位置，鼠标三击，可以选中当前行。

- 用鼠标单击文件的行号，可以选中当前行。

- 在某个行号的位置，上下移动鼠标，可以选中多行。

### 移动光标

- 「方向键」: 在**单个字符**之间移动光标

- 「Ctrl + 左右方向键」: 在**单词**之间移动光标(很常用)。

### 快速选中

在任意位置单击放置光标，按住 `shift` 在第二个位置单击，即可选中两光标位置间的所有文字。

- `Ctrl + Alt + ↑/↓`: 向方向键方向的相邻行放置一个光标；

- `Alt + Click`: 放置辅助游标；

- `Shift + Alt + ←/→`: 收缩/扩展选择；

- `Shift + Alt` 同时拖动到对角: 列(框)选择；

### 删除

- `Ctrl + Backspace`: 删除光标之前的一个单词

- `Ctrl + delete`: 　删除光标之后的一个单词

- `Ctrl + Shift + K`: 删除整行

### 移动文字

- `Alt + ↑`: 光标所在行或选中的文字的所有行整体上移一行；

- `Alt + ↓`: 光标所在行或选中文字的所有行整体下移一行

### 复制文字

- `Alt + shift + ↑`: 光标所在行或选中的文字的所有行整体向下复制一行(如果选中了多行就是复制多行)；

- `Alt + shift + ↓`: 光标所在行或选中文字的所有行整体向上复制一行(如果选中了多行就是复制多行)；

- `Ctrl + D`: 选择光标处的单词，或下一次出现的当前选择；

### 代码操作

- `Ctrl + /`: 添加单行注释

- `Alt + shift + F`: 代码格式化

- `Ctrl + U`: 将光标的移动回退到上一个位置、撤销光标的移动和选择

- `Ctrl + Enter`: 在当前行下面新增一行，然后跳至该行 (即使光标不在行尾，也能快速向下插入一行)

- `Ctrl + P`: 在当前的项目工程里，**全局**搜索文件

- `Ctrl + G`: 跳转到指定行

- `Ctrl + shift + O`: 在当前文件的各种**方法之间**进行跳转

#### 搜索

- `Ctrl + F`: 查找，光标在搜索框里；

- `F3`: 在当前文件中搜索，光标仍在编辑器里

- `Ctrl + Shift +F`: 全局搜索

- `Ctrl + H`: 替换。

#### 多光标的使用

1. 按住 Alt 键，然后在页面中希望中现光标的位置点击鼠标。

1. 选中某个文本，然后反复按住快捷键 `Ctrl + D` 键， 即可将全文中与光标当前所在位置的词相同的词逐一加入选择。

1. 选中一堆文本后，按住`Alt + Shift + I` 键，既可在**每一行的末尾**都创建一个光标。

#### 工作区快捷键

- `Ctrl + B`: 显示/隐藏侧边栏

- `Ctrl + \`: 创建多个编辑器

- `Ctrl + Pagedown/Pageup`: 在已经打开的文件之间进行**切换**

- `` Ctrl + ` ``: 打开终端

### 代码折叠

`Ctrl + Shift + [`: 折叠光标处最内部的未折叠区域；

`Ctrl + Shift +]`: 展开光标处的折叠区域；

`Ctrl + K Ctrl + [`: 折叠光标处最内部的未折叠区域以及该区域内的所有区域；

`Ctrl + K Ctrl +]`: 展开光标处的区域以及该区域内的所有区域；

`Ctrl + K Ctrl + 0`: 折叠编辑器中的所有区域；

`Ctrl + K Ctrl + J`: 展开编辑器中的所有区域；

`Ctrl + K` `Ctrl` + `X`: 折叠级别`X`的所有区域，但当前光标位置的区域除外；

`Ctrl + K Ctrl + /`: 折叠以块注释标记开头的所有区域；

::: info 官方文档
[Windows 下 VSCode 快捷键指南](./assets/vscodeKeyboardShortcutsWindows.pdf) (英文)
:::

### Windows 快捷键

`Ctrl + X`: 剪切；

`Ctrl + C`: 复制；

`Ctrl + V`: 粘贴；

`Ctrl + A`: 全选；

`Ctrl + Z`: 撤销；

`Ctrl + Y`: 恢复；

::: info
更多请见 [Windows 快捷键介绍](../../code/windows/shortcut-key.md)
:::

---

以下是一些高级内容

## 快捷键编辑器

Visual Studio Code 使用 **键盘快捷键编辑器** 提供了丰富而便捷的键盘快捷键编辑体验。它列出了所有可用命令(无论是否已有快捷键绑定)，您可以轻松 更改 / 删除 / 重置 其键绑定。它还在顶部有一个搜索框，可帮助您查找命令或快捷键。您可以通过转到 `文件 > 首选项 > 键盘快捷方式` 下的菜单来打开此编辑器。(macOS 上为 `代码 > 首选项 > 键盘快捷键`)

### 检测键绑定冲突

如果您安装了许多扩展程序或自定义了键盘快捷键，则有时会将同一键盘快捷键映射到多个命令时会发生键绑定冲突。这可能导致混乱的行为，尤其是当您在编辑器中移动时，不同的键绑定进入和超出范围时。

该键盘快捷键编辑器有一个上下文菜单命令显示相同的按键组合，这将筛选基于键盘快捷键来显示冲突的键绑定。

选择一个您认为被覆盖掉的键绑定命令，您可以查看是否定义了多个命令，键绑定的来源以及它们何时处于活动状态。

### 查看修改键绑定

您可以使用 **更多操作(...)** 菜单中的 **显示用户按键绑定**命令。

### 高级定制

VS Code 中的所有键盘快捷键都可以通过该 `keybindings.json`文件进行自定义。

- 要通过 JSON 文件配置键盘快捷键，请打开 **键盘快捷键** 编辑器，然后选择编辑器标题栏右侧的 **打开键盘快捷键 (JSON)**按钮。
- 这将打开您的 `keybindings.json` 文件，您可以在其中覆盖默认的案件绑定。

您也可以使用从命令面板(Ctrl + Shift + P)中选择 **首选项: 打开键盘快捷方式 (JSON)** 命令打开 `keybindings.json` 文件。