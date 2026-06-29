# Kata: Move Diagnostics into Quickfix

## Task

Practice converting Neovim diagnostics into a standard quickfix list with `vim.diagnostic.setqflist()`.

## Start

Open a scratch buffer and insert:

```text
ERROR alpha
WARN beta
ERROR gamma
```

Start in Normal mode on the `E` in `ERROR alpha` at line 1, column 1.

## End

The buffer should become:

```text
FIXED alpha
FIXED beta
FIXED gamma
```

The quickfix list should contain three diagnostic entries from the original buffer.

## Commands

Run these command steps:

```text
1. :lua _G.kata_160_ns = vim.api.nvim_create_namespace('kata_160')<CR>
2. :lua local b = vim.api.nvim_get_current_buf(); vim.diagnostic.set(_G.kata_160_ns, b, { {lnum = 0, col = 0, severity = vim.diagnostic.severity.ERROR, message = 'first error'}, {lnum = 1, col = 0, severity = vim.diagnostic.severity.WARN, message = 'one warning'}, {lnum = 2, col = 0, severity = vim.diagnostic.severity.ERROR, message = 'second error'} })<CR>
3. :lua vim.diagnostic.setqflist({ severity = vim.diagnostic.severity.ERROR, open = false })<CR>
4. :lua vim.diagnostic.setqflist({ open = false })<CR>
5. :cfirst<CR>
6. cwFIXED<Esc>
7. :cnext<CR>
8. cwFIXED<Esc>
9. :cnext<CR>
10. cwFIXED<Esc>
```
