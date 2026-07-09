# Kata: Diff Mode Basics

## Task

Practice opening two files in diff mode, jumping to one hunk, and obtaining the change.

## Start

From this directory, start in Normal mode in an unnamed scratch buffer with the cursor at line 1, column 1.

## End

After `do`, both diff buffers should show:

```text
owner = "team"
status = "ready"
```

The final command closes the diff session without saving the practice files.

## Commands

Run these command steps:

```text
1. :edit practice_089_diff_left.txt<CR>
2. :vertical diffsplit practice_089_diff_right.txt<CR>
3. <C-w>p
4. ]c
5. do
6. :diffoff! | qall!<CR>
```
