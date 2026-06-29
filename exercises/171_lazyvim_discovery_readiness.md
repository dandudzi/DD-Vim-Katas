# Kata: LazyVim Discovery and Readiness Checks

## Task

Practice checking LazyVim mappings and optional plugin readiness before running plugin-specific drills.

## Start

Open a scratch buffer and insert:

```text
| Feature | Check | Provider/source evidence | Status | Next action |
|---|---|---|---|---|
| Leader key | g:mapleader |  |  |  |
| Plugin manager | :Lazy |  |  |  |
| Explorer | <Space>e |  |  |  |
| Project search | <Space>/ |  |  |  |
| Quickfix UI | <Space>xQ |  |  |  |
| Tests | <Space>tt |  |  |  |
| Debug continue | <Space>dc |  |  |  |
```

Start in Normal mode on line 1, column 1, on the first `|`.

## End

The buffer should remain unchanged. The command line should show the configured leader values, whether `:Lazy` and `:LazyExtras` exist, each requested mapping source, and whether `neotest` and `dap` can be required.

## Commands

Run these command steps:

```text
1. :echo get(g:, 'mapleader', '\')<CR>
2. :echo get(g:, 'maplocalleader', '\')<CR>
3. :echo exists(':Lazy')<CR>
4. :echo exists(':LazyExtras')<CR>
5. :verbose nmap <Space>e<CR>
6. :verbose nmap <Space>/<CR>
7. :verbose nmap <Space>xQ<CR>
8. :verbose nmap <Space>tt<CR>
9. :verbose nmap <Space>dc<CR>
10. :lua print(pcall(require, 'neotest'))<CR>
11. :lua print(pcall(require, 'dap'))<CR>
```
