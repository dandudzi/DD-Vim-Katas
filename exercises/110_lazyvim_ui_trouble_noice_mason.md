# Kata: Trouble Quickfix View

## Task

Practice opening LazyVim's Trouble quickfix view with owned quickfix entries.

## Start

In Neovim with LazyVim and Trouble, run:

```text
:let g:kata_110_qf=getqflist({'items':1,'title':1,'context':1,'idx':1,'quickfixtextfunc':1})
:enew | file kata-trouble-owned
:call setline(1, ['first owned line','second owned line'])
:let g:kata_110_buf=bufnr('%')
:call setqflist([], 'r', {'title':'kata-110', 'items':[{'bufnr':g:kata_110_buf,'lnum':1,'col':1,'text':'first'},{'bufnr':g:kata_110_buf,'lnum':2,'col':1,'text':'second'}]})
```

Start in Normal mode on the `f` in `first`.

## End

The buffer should become:

```text
first owned line
second owned line
```

## Commands

Run these command steps:

```text
1. :verbose nmap <Space>xQ<CR>
2. <Space>xQ
3. j
4. <CR>
5. :echo line('.')<CR>
6. k
7. <CR>
8. :echo line('.')<CR>
9. <Space>xQ
10. :echo len(getqflist())<CR>
```
