# Kata: Safe Grug-Far Replacement

## Task

Practice previewing and applying a Grug-Far replacement only inside a generated directory.

## Start

In Neovim with LazyVim and Grug-Far, run:

```text
:let g:kata_109_dir=tempname() | call mkdir(g:kata_109_dir, 'p')
:call writefile(['old_token one', 'keep'], g:kata_109_dir.'/a.txt')
:call writefile(['old_token two'], g:kata_109_dir.'/b.txt')
:execute 'lcd '.fnameescape(g:kata_109_dir) | edit a.txt
```

Start in Normal mode on the `o` in `old_token` in `a.txt`.

## End

The generated files should contain:

```text
a.txt: new_token one
a.txt: keep
b.txt: new_token two
```

## Commands

Run these command steps:

```text
1. :echo executable('rg')<CR>
2. :verbose nmap <Space>sr<CR>
3. <Space>sr
4. old_token<Tab>new_token<Tab>*.txt<Tab><C-r>=g:kata_109_dir<CR><CR>
5. g?
6. <localleader>r
7. :echo readfile(g:kata_109_dir.'/a.txt')<CR>
8. :echo readfile(g:kata_109_dir.'/b.txt')<CR>
```
