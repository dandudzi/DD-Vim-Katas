# Kata: Diff Mode Basics

## Task

Jump to a changed hunk and obtain the version from the other diff buffer.

## Start

Use the prepared files `practice_089_diff_left.txt` and
`practice_089_diff_right.txt`, already open in a vertical diff split. The left
buffer contains `status = "draft"`; the right buffer contains
`status = "ready"`.

Start in Normal mode in the left buffer on the `o` in `owner` at line 1,
column 1.

## End

The left buffer should become:

```text
owner = "team"
status = "ready"
```

The right practice split should be closed without exiting Neovim.

## Commands

Run these command steps:

```text
1. ]c
2. do
3. <C-l>
4. <leader>wd (LazyVim: Delete Window)
```
