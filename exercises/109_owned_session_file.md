# Kata: Owned Session File

## Task

Practice writing a Vim session file into an owned temporary directory.

## Start

Open a scratch buffer and insert:

```text
owned session buffer
```

Start in Normal mode on the `o` in `owned`.

## End

The buffer should stay unchanged, and `owned-session.vim` should exist inside `g:kata_194_dir`.

## Commands

Run these command steps:

```text
1. :let g:kata_194_dir=tempname()<CR>
2. :call mkdir(g:kata_194_dir, 'p')<CR>
3. :execute 'mksession! '.fnameescape(g:kata_194_dir.'/owned-session.vim')<CR>
4. :echo filereadable(g:kata_194_dir.'/owned-session.vim')<CR>
```
