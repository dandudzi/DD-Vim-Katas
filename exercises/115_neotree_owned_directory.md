# Kata: Neo-Tree Select Owned File

## Task

Practice opening Neo-tree and selecting an existing file from an owned directory.

## Start

In Neovim with LazyVim and Neo-tree, create one file:

```text
only.txt
```

Start in Normal mode in `only.txt` on the `f` in `first`.

## End

The current buffer should be `only.txt` and remain unchanged:

```text
first owned line
second owned line
```

## Commands

Run these command steps:

```text
1. :let g:kata_201_dir=tempname()<CR>
2. :call mkdir(g:kata_201_dir, 'p')<CR>
3. :call writefile(['first owned line', 'second owned line'], g:kata_201_dir.'/only.txt')<CR>
4. :execute 'lcd '.fnameescape(g:kata_201_dir).' | edit only.txt'<CR>
5. <leader>e
6. /only.txt<CR><CR>
```
