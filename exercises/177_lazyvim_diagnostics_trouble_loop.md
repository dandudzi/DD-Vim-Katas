# Kata: LazyVim Diagnostics and Trouble Loop

## Task

Practice deterministic diagnostics by opening a float, converting diagnostics to quickfix and location lists, and optionally viewing them in Trouble.

## Start

Open the generated `diag.txt` buffer with these lines:

```text
ERROR alpha
WARN beta
ERROR gamma
```

Start in Normal mode on the `E` in `ERROR alpha`.

## End

The buffer should become:

```text
FIXED alpha
FIXED beta
FIXED gamma
```

## Commands

Run these command steps:

```text
1. :let g:kata_177_dir = tempname()<CR>
2. :call mkdir(g:kata_177_dir, 'p')<CR>
3. :call writefile(['ERROR alpha', 'WARN beta', 'ERROR gamma'], g:kata_177_dir.'/diag.txt')<CR>
4. :execute 'edit '.fnameescape(g:kata_177_dir.'/diag.txt')<CR>
5. :lua _G.kata_177_ns = vim.api.nvim_create_namespace('kata_177')<CR>
6. :lua local b = vim.api.nvim_get_current_buf(); vim.diagnostic.set(_G.kata_177_ns, b, { {lnum = 0, col = 0, severity = vim.diagnostic.severity.ERROR, message = 'alpha must be fixed'}, {lnum = 1, col = 0, severity = vim.diagnostic.severity.WARN, message = 'beta should be reviewed'}, {lnum = 2, col = 0, severity = vim.diagnostic.severity.ERROR, message = 'gamma must be fixed'} })<CR>
7. :lua vim.diagnostic.open_float()<CR>
8. :lua vim.diagnostic.goto_next()<CR>
9. :lua vim.diagnostic.open_float()<CR>
10. :lua vim.diagnostic.setqflist()<CR>
11. :cwindow<CR>
12. :cc 3<CR>
13. :lua vim.diagnostic.setloclist()<CR>
14. :lopen<CR>
15. :ll 2<CR>
16. :echo exists(':Trouble')<CR>
17. :verbose nmap <Space>xx<CR>
18. {if exists(':Trouble') printed 2, run :Trouble diagnostics toggle<CR>; otherwise skip to step 20}
19. g?{use Trouble help to jump to the line 3 diagnostic}
20. gg
21. cwFIXED<Esc>
22. :lua vim.diagnostic.goto_next()<CR>
23. cwFIXED<Esc>
24. :lua vim.diagnostic.goto_next()<CR>
25. cwFIXED<Esc>
```
