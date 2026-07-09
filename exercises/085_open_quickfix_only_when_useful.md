# Kata: Open Quickfix Only When Useful

## Task

Practice `:cwindow` after refreshing quickfix contents. It should stay closed
for an empty list and open once parsed entries exist.

## Start

Open `practice_156_app.txt`:

```text
alpha ok
broken target
middle ok
second failure
tail ok
```

Start in Normal mode on the `a` in `alpha ok` at line 1, column 1.

## End

The quickfix window should be visible with two entries from
`practice_156_fail.txt`. The current buffer should be `practice_156_app.txt` on
line 2, column 1.

## Commands

Run these command steps:

```text
1. :edit practice_156_app.txt<CR>
2. :set errorformat=%f:%l:%c:%m<CR>
3. :cexpr []<CR>
4. :cwindow<CR>
5. :cgetfile practice_156_fail.txt<CR>
6. :cwindow<CR>
7. ]q
8. [q
```
