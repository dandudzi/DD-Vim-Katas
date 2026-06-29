# Kata: Owned Session File

## Task

Practice writing a Vim session file only inside an owned temporary directory.

## Start

In Vim or Neovim, run:

```text
:let g:kata_194_dir=tempname() | call mkdir(g:kata_194_dir, 'p')
:enew | file kata-session-owned
:call setline(1, ['owned session buffer'])
```

Start in Normal mode on the `o` in `owned`.

## End

The observable state should be:

```text
owned-session.vim exists inside g:kata_194_dir.
kata-session-owned still contains owned session buffer.
```

## Commands

Run these command steps:

```text
1. :execute 'mksession! '.fnameescape(g:kata_194_dir.'/owned-session.vim')<CR>
2. :echo filereadable(g:kata_194_dir.'/owned-session.vim')<CR>
3. :echo getline(1)<CR>
```
