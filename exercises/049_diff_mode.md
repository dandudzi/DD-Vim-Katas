# Kata: Diff Mode Basics

## Task

Jump to a changed hunk, obtain the version from the other diff buffer, and
close the right-hand diff window.

## Start

From the shell, start Neovim with:

```text
nvim -d practice_089_diff_left.txt practice_089_diff_right.txt
```

The left buffer should contain `status = "draft"`, and the right buffer should
contain `status = "ready"`. Start in Normal mode in the left buffer on the `o`
in `owner` at line 1, column 1.

## End

The left buffer should become:

```text
owner = "team"
status = "ready"
```

The right diff window should be closed without exiting Neovim.

## Commands

Run these command steps:

```text
1. ]c
2. do
3. <C-w>l
4. <leader>wd (LazyVim: Delete Window)
```
