# Kata: Picker Quickfix Export

## Task

Practice exporting one LazyVim picker grep result set to the quickfix list.

## Start

In Neovim with LazyVim, create two files:

```text
a.txt: match_token one
b.txt: match_token two
```

Start in Normal mode in `a.txt` on the `m` in `match_token`.

## End

The quickfix list should show two `match_token` entries.

## Commands

Run these command steps:

```text
1. :let g:kata_198_dir=tempname()<CR>
2. :call mkdir(g:kata_198_dir, 'p')<CR>
3. :call writefile(['match_token one'], g:kata_198_dir.'/a.txt')<CR>
4. :call writefile(['match_token two'], g:kata_198_dir.'/b.txt')<CR>
5. :execute 'lcd '.fnameescape(g:kata_198_dir).' | edit a.txt'<CR>
6. <leader>/match_token<CR>
7. <C-q>
8. :copen<CR>
```
