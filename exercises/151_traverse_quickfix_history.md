# Kata: Traverse Quickfix History

## Task

Practice using `:colder` and `:cnewer` to move through existing quickfix
history without rebuilding the lists.

## Start

Open a fresh Vim or Neovim session. The exercise creates disposable quickfix
lists for these matches:

```text
TODO alpha
TODO beta
NOTE alpha
NOTE beta
FIXME alpha
FIXME beta
```

Start in Normal mode on line 1, column 1 after the setup commands create the
newest quickfix list titled `FIXME review`.

## End

The current quickfix list should be:

```text
NOTE review
```

The current buffer should be `beta.txt` on line 3.

## Commands

Run these command steps:

```text
1. :let g:kata_151_dir = tempname()<CR>:call mkdir(g:kata_151_dir, 'p')<CR>
2. :let g:kata_151_alpha = g:kata_151_dir . '/alpha.txt'<CR>:let g:kata_151_beta = g:kata_151_dir . '/beta.txt'<CR>
3. :call writefile(['TODO alpha', 'NOTE alpha', 'plain alpha', 'FIXME alpha'], g:kata_151_alpha)<CR>
4. :call writefile(['plain beta', 'TODO beta', 'NOTE beta', 'FIXME beta'], g:kata_151_beta)<CR>
5. :execute 'edit ' . fnameescape(g:kata_151_alpha)<CR>
6. :execute 'vimgrep /TODO/gj ' . fnameescape(g:kata_151_alpha) . ' ' . fnameescape(g:kata_151_beta)<CR>:call setqflist([], 'a', {'title': 'TODO review'})<CR>
7. :execute 'vimgrep /NOTE/gj ' . fnameescape(g:kata_151_alpha) . ' ' . fnameescape(g:kata_151_beta)<CR>:call setqflist([], 'a', {'title': 'NOTE review'})<CR>
8. :execute 'vimgrep /FIXME/gj ' . fnameescape(g:kata_151_alpha) . ' ' . fnameescape(g:kata_151_beta)<CR>:call setqflist([], 'a', {'title': 'FIXME review'})<CR>
9. :colder 2<CR>
10. :cnewer<CR>
11. :cnext<CR>
```
