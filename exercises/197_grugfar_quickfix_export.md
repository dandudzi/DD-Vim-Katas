# Kata: Grug-Far Quickfix Export

## Task

Practice exporting Grug-Far search results to the quickfix list without applying replacements.

## Start

In Neovim with LazyVim and Grug-Far, run:

```text
:let g:kata_197_qf=getqflist({'items':1,'title':1,'context':1,'idx':1,'quickfixtextfunc':1})
:let g:kata_197_dir=tempname() | call mkdir(g:kata_197_dir, 'p')
:call writefile(['old_token one', 'keep'], g:kata_197_dir.'/a.txt')
:call writefile(['old_token two'], g:kata_197_dir.'/b.txt')
:execute 'lcd '.fnameescape(g:kata_197_dir) | edit a.txt
```

Start in Normal mode on the `o` in `old_token` in `a.txt`.

## End

The observable state should be:

```text
The quickfix list has exactly two entries.
Both entries point inside g:kata_197_dir.
No file text was changed.
```

## Commands

Run these command steps:

```text
1. :verbose nmap <Space>sr<CR>
2. <Space>sr
3. old_token<Tab><Tab>*.txt<Tab><C-r>=g:kata_197_dir<CR><CR>
4. g?
5. <localleader>q
6. :echo len(getqflist())<CR>
7. :echo readfile(g:kata_197_dir.'/a.txt')<CR>
8. :echo readfile(g:kata_197_dir.'/b.txt')<CR>
```
