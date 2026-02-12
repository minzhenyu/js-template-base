# 参考：

https://eslint.org/docs/latest/use/configure/configuration-files-new

# Git 提交规范

```
build: 改变了项目构建系统或外部依赖项。
ci: 更改了 CI 配置或脚本。
docs: 只更改文档。
feat: 新功能。
fix: 修复了一个 bug。
perf: 改进了性能。
refactor: 代码重构，既没有增加新功能，也没有修复 bug。
style: 格式化、缺少分号等；对代码逻辑没有影响的更改。
test: 增加或修改了测试代码。

```

# Vim 常用操作

Vim 是一款经典的文本编辑器，它拥有强大的编辑和操作功能。以下是一些常用的 Vim 风格操作：

```
i：进入插入模式，可以开始编辑文本。
Esc：退出插入模式，回到命令模式。
:wq：保存并退出编辑器。
:q!：放弃修改并退出编辑器。
dd：删除当前行。
yy：复制当前行。
p：粘贴复制的内容。
```

# 依赖说明

| 依赖                             | 作用描述                                                             |
| -------------------------------- | -------------------------------------------------------------------- |
| eslint                           | ESLint 核心库                                                        |
| eslint-config-prettier           | 关掉所有和 Prettier 冲突的 ESLint 的配置                             |
| eslint-plugin-prettier           | 将 Prettier 的 rules 以插件的形式加入到 ESLint 里面                  |
| eslint-plugin-vue                | 为 Vue 使用 ESLint 的插件                                            |
| @typescript-eslint/eslint-plugin | ESLint 插件，包含了各类定义好的检测 TypeScript 代码的规范            |
| @typescript-eslint/parser        | ESLint 的解析器，用于解析 TypeScript，从而检查和规范 TypeScript 代码 |
