# Kata: Parse the Current Buffer as Errors

## Task

Practice parsing compiler-style lines from the current buffer into quickfix with
`:cgetbuffer`, then use LazyVim keys to view and navigate the results.

## Start

Open `practice_157_errors.txt`:

```text
practice_157_app.txt:2:1: missing semicolon
practice_157_app.txt:4:1: wrong flag
practice_157_config.txt:2:1: unknown key
```

Start in Normal mode on the `p` in `practice_157_app.txt` at line 1, column 1.

## End

The quickfix list should be visible with three parsed entries from
`practice_157_errors.txt`. The current buffer should be
`practice_157_config.txt` on line 2, column 1.

## Commands

Run these command steps:

```text
1. :edit practice_157_errors.txt<CR>
2. :set errorformat=%f:%l:%c:%m<CR>
3. :cgetbuffer<CR>
4. <leader>xq
5. :cfirst<CR>
6. ]q
7. ]q
```
