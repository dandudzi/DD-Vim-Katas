# Kata: LazyVim Neotest Workflow

## Task

Practice verifying Neotest readiness, running the nearest test, running the current file, inspecting output, and stopping safely.

## Start

Open a disposable test file supported by a configured Neotest adapter:

```text
current buffer: disposable test file
cursor: inside one small test case
test execution: safe to repeat and safe to interrupt
```

Start in Normal mode on the first character of the chosen test name.

## End

The observable final state should be:

```text
nearest test run or skipped because readiness failed
current file test run or skipped because readiness failed
output or summary inspected
test file unmodified
Neotest run stopped or no run active
```

## Commands

Run these command steps:

```text
1. :lua print(pcall(require, 'neotest'))<CR>
2. :verbose nmap <Space>tr<CR>
3. :verbose nmap <Space>tt<CR>
4. :verbose nmap <Space>to<CR>
5. :verbose nmap <Space>ts<CR>
6. :verbose nmap <Space>tS<CR>
7. <Space>tr
8. <Space>ts
9. <Space>to
10. q
11. <Space>tt
12. <Space>to
13. q
14. <Space>tS
15. :echo &modified<CR>
```
