# Kata: LazyVim Formatting and Linting Readiness

## Task

Practice deciding whether the current buffer has provider formatting, then inspect diagnostics without assuming a linter is installed.

## Start

From any buffer, open the shared JS/TS practice file in a vertical split and
jump to this kata:

```text
:vsplit practice_js_ts_filetypes.ts<CR>
:/return items.reduce<CR>
```

Start in Normal mode on the `r` in `return`.

## End

The observable final state should be:

```text
format mapping inspected
provider formatting run only when a formatter is available
diagnostic counts inspected
current file is practice_js_ts_filetypes.ts
```

## Commands

Run these command steps:

```text
1. :setlocal filetype=javascript<CR>
2. :verbose nmap <Space>cf<CR>
3. :lua local ok, conform = pcall(require, 'conform'); local ok_list, list = false, {}; if ok and type(conform.list_formatters_to_run) == 'function' then ok_list, list = pcall(conform.list_formatters_to_run, 0) end; print(ok_list and vim.inspect(list) or 'conform unavailable')<CR>
4. =a{
5. :edit!<CR>
6. :setlocal filetype=javascript<CR>
7. :lua local ok, conform = pcall(require, 'conform'); local ok_list, list = false, {}; if ok and type(conform.list_formatters_to_run) == 'function' then ok_list, list = pcall(conform.list_formatters_to_run, 0) end; if ok and ok_list and #list > 0 then conform.format({ bufnr = 0, timeout_ms = 3000 }) else print('skip: no formatter for this buffer') end<CR>
8. :lua print(vim.inspect(vim.diagnostic.count(0)))<CR>
9. :echo expand('%:t') ==# 'practice_js_ts_filetypes.ts'<CR>
```
