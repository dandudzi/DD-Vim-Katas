# Kata: Picker Fuzzy Finding

## Task

Practice LazyVim picker workflows for finding files, grepping text, switching buffers, and resuming the last picker.

## Start

In Neovim with LazyVim, run:

```text
:let g:kata_102_dir=tempname() | call mkdir(g:kata_102_dir, 'p')
:call writefile(['ALPHA_TOKEN', 'shared'], g:kata_102_dir.'/alpha-note.txt')
:call writefile(['BETA_TOKEN', 'shared'], g:kata_102_dir.'/beta-code.txt')
:execute 'lcd '.fnameescape(g:kata_102_dir) | edit alpha-note.txt | edit beta-code.txt
```

Start in Normal mode in `beta-code.txt` on the `B` in `BETA_TOKEN`.

## End

The observable state should be:

```text
beta-code.txt is still the current buffer.
Both alpha-note.txt and beta-code.txt are listed buffers.
The previous picker was resumed and cancelled without changing buffers.
```

## Commands

Run these command steps:

```text
1. :verbose nmap <leader><leader><CR>
2. :verbose nmap <leader>/<CR>
3. :verbose nmap <leader>,<CR>
4. :verbose nmap <leader>sR<CR>
5. <leader><leader>alpha note<CR>
6. :echo expand('%:t')<CR>
7. <leader>/BETA_TOKEN<CR>
8. :echo expand('%:t') . ':' . line('.')<CR>
9. <leader>,alpha<CR>
10. :echo expand('%:t')<CR>
11. :buffer beta-code.txt<CR>
12. <leader>sR<Esc>
13. :echo expand('%:t')<CR>
```
