# Kata: Compile and Navigate Errors

## Task

Practice populating quickfix with `:make`, then use LazyVim quickfix keys to
move through errors and fix each reported line.

## Start

Open `practice_158_app.txt`:

```text
intro
BROKEN first
middle
BROKEN second
middle
BROKEN third
```

Start in Normal mode on the `i` in `intro` at line 1, column 1.

## End

The buffer should become:

```text
intro
FIXED first
middle
FIXED second
middle
FIXED third
```

The quickfix list should be visible with three errors from
`practice_158_build.log`.

## Commands

Run these command steps:

```text
1. :edit practice_158_app.txt<CR>
2. :set makeprg=cat\ practice_158_build.log<CR>
3. :set errorformat=%f:%l:%c:%m<CR>
4. :make<CR>
5. cwFIXED<Esc>
6. ]q
7. cwFIXED<Esc>
8. ]q
9. cwFIXED<Esc>
10. [q
11. <leader>xq
```
