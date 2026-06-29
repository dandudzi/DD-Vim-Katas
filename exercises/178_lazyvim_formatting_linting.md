# Kata: LazyVim Formatting and Linting Readiness

## Task

Practice deciding whether the current buffer has provider formatting, then inspect diagnostics without assuming a linter is installed.

## Start

Open a generated `sample.js` buffer containing:

```text
function total(items){
return items.reduce((sum,item)=>sum+item.price,0)
}

const message = "format me"
```

Start in Normal mode on the `r` in `return`.

## End

The observable final state should be:

```text
format mapping inspected
provider formatting run only when a formatter is available
diagnostic counts inspected
file remains inside the generated kata directory
```

## Commands

Run these command steps:

```text
1. :let g:kata_178_dir = tempname()<CR>
2. :call mkdir(g:kata_178_dir, 'p')<CR>
3. :call writefile(['function total(items){', 'return items.reduce((sum,item)=>sum+item.price,0)', '}', '', 'const message = "format me"'], g:kata_178_dir.'/sample.js')<CR>
4. :execute 'edit '.fnameescape(g:kata_178_dir.'/sample.js')<CR>
5. :setlocal filetype=javascript<CR>
6. :verbose nmap <Space>cf<CR>
7. :lua local ok, conform = pcall(require, 'conform'); local ok_list, list = false, {}; if ok and type(conform.list_formatters_to_run) == 'function' then ok_list, list = pcall(conform.list_formatters_to_run, 0) end; print(ok_list and vim.inspect(list) or 'conform unavailable')<CR>
8. gg=G
9. :edit!<CR>
10. :lua local ok, conform = pcall(require, 'conform'); local ok_list, list = false, {}; if ok and type(conform.list_formatters_to_run) == 'function' then ok_list, list = pcall(conform.list_formatters_to_run, 0) end; if ok and ok_list and #list > 0 then conform.format({ bufnr = 0, timeout_ms = 3000 }) else print('skip: no formatter for this buffer') end<CR>
11. :lua print(vim.inspect(vim.diagnostic.count(0)))<CR>
12. :echo expand('%:p') =~# g:kata_178_dir<CR>
```
