# Kata: Jump to Another Quickfix File

## Task

Practice jumping between files represented in the quickfix list with `:cnfile`
and `:cpfile`, using LazyVim keys to open and step through the list.

## Start

Use these practice files:

```text
practice_153_alpha.txt
TODO alpha first
plain alpha
TODO alpha second

practice_153_beta.txt
header beta
TODO beta first
plain beta
TODO beta second

practice_153_gamma.txt
start gamma
plain gamma
TODO gamma first
middle gamma
TODO gamma second
```

Open `practice_153_alpha.txt`. Start in Normal mode on the `T` in
`TODO alpha first` at line 1, column 1.

## End

The quickfix list should be visible with six `TODO` entries across the three
practice files. The current buffer should be `practice_153_gamma.txt`, with the
cursor on the `T` in `TODO gamma first` at line 3, column 1.

## Commands

Run these command steps:

```text
1. :edit practice_153_alpha.txt<CR>
2. :vimgrep /TODO/gj practice_153_alpha.txt practice_153_beta.txt practice_153_gamma.txt<CR>
3. :cfirst<CR>
4. <leader>xq
5. ]q
6. :cnfile<CR>
7. :cpfile<CR>
8. :2cnfile<CR>
```
