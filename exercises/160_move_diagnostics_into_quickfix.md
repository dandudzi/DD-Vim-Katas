# Kata: Move Diagnostics into Quickfix

## Task

Practice converting Neovim diagnostics into a quickfix list with
`vim.diagnostic.setqflist()`, then use LazyVim keys to inspect and navigate it.

## Start

Open a scratch buffer and insert:

```text
alpha()
beta()
gamma()
```

Start in Normal mode on the `a` in `alpha()` at line 1, column 1.

## End

The quickfix list should be visible with two diagnostic entries from the current
buffer. The cursor should be on the `a` in `alpha()` at line 1, column 1.

## Commands

Run these command steps:

```text
1. :lua local ns = vim.api.nvim_create_namespace('kata_160'); local b = vim.api.nvim_get_current_buf(); vim.diagnostic.set(ns, b, { { lnum = 0, col = 0, severity = vim.diagnostic.severity.ERROR, message = 'alpha needs work' }, { lnum = 2, col = 0, severity = vim.diagnostic.severity.WARN, message = 'gamma needs review' } })<CR>
2. :lua vim.diagnostic.setqflist({ open = false })<CR>
3. <leader>xq
4. ]q
5. [q
```
