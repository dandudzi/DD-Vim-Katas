# Kata: Grug-Far Quickfix Export

## Task

Practice exporting Grug-Far search results to the quickfix list without replacing text.

## Start

In Neovim with LazyVim and Grug-Far, create two files:

```text
a.txt: old_token one
b.txt: old_token two
```

Start in Normal mode in `a.txt` on the `o` in `old_token`.

## End

The quickfix list should contain two `old_token` matches, and both files should stay unchanged.

## Commands

Run these command steps:

```text
1. :let g:kata_197_dir=tempname()<CR>
2. :call mkdir(g:kata_197_dir, 'p')<CR>
3. :call writefile(['old_token one'], g:kata_197_dir.'/a.txt')<CR>
4. :call writefile(['old_token two'], g:kata_197_dir.'/b.txt')<CR>
5. :execute 'lcd '.fnameescape(g:kata_197_dir).' | edit a.txt'<CR>
6. <leader>sr
7. old_token<Tab><Tab>*.txt<CR>
8. <localleader>q
9. :copen<CR>
```
