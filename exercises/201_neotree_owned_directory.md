# Kata: Neo-Tree Owned Directory

## Task

Practice opening Neo-tree on an owned directory and selecting an existing file without file operations.

## Start

In Neovim with LazyVim and Neo-tree, run:

```text
:let g:kata_201_dir=tempname() | call mkdir(g:kata_201_dir, 'p')
:call writefile(['first owned line','second owned line'], g:kata_201_dir.'/only.txt')
:execute 'lcd '.fnameescape(g:kata_201_dir) | edit only.txt
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
1. :verbose nmap <Space>e<CR>
2. <Space>e
3. /only.txt<CR><CR>
4. :echo expand('%:p') ==# g:kata_201_dir.'/only.txt'<CR>
5. :echo getline(1, '$')<CR>
6. <Space>e
```
