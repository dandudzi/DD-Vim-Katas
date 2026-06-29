# Kata: Picker Quickfix Export

## Task

Practice exporting LazyVim picker grep results to the quickfix list.

## Start

In Neovim with LazyVim and a configured picker, run:

```text
:let g:kata_198_qf=getqflist({'items':1,'title':1,'context':1,'idx':1,'quickfixtextfunc':1})
:let g:kata_198_dir=tempname() | call mkdir(g:kata_198_dir, 'p')
:call writefile(['match_token one', 'keep'], g:kata_198_dir.'/a.txt')
:call writefile(['match_token two'], g:kata_198_dir.'/b.txt')
:execute 'lcd '.fnameescape(g:kata_198_dir) | edit a.txt
```

Start in Normal mode on the `m` in `match_token` in `a.txt`.

## End

The observable state should be:

```text
The quickfix list has exactly two entries.
Both entries point inside g:kata_198_dir.
a.txt and b.txt are unchanged.
```

## Commands

Run these command steps:

```text
1. :verbose nmap <Space>/<CR>
2. <Space>/match_token<CR>
3. g?
4. <C-q>
5. :echo len(getqflist())<CR>
6. :echo readfile(g:kata_198_dir.'/a.txt')<CR>
7. :echo readfile(g:kata_198_dir.'/b.txt')<CR>
```
