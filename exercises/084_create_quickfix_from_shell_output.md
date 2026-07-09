# Kata: Create Quickfix from Shell Output

## Task

Practice turning shell output into a quickfix list with `:cexpr systemlist(...)`.
Use LazyVim keys to open and move through the imported results.

## Start

Open `practice_155_shell_output.txt`:

```text
TODO alpha first
plain spacer
TODO alpha second
plain beta
TODO beta only
```

Start in Normal mode on the `T` in `TODO alpha first` at line 1, column 1.

## End

The quickfix list should be visible with three imported shell results. The
current buffer should be `practice_155_shell_output.txt`, with the cursor on the
`T` in `TODO beta only` at line 5, column 1.

## Commands

Run these command steps:

```text
1. :edit practice_155_shell_output.txt<CR>
2. :set errorformat=%f:%l:%m<CR>
3. :cexpr systemlist('grep -Hn TODO practice_155_shell_output.txt')<CR>
4. :cfirst<CR>
5. <leader>xq
6. ]q
7. ]q
```
