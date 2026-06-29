# Kata: Open File at Line Number

## Task

Practice using `gF` to open the file under the cursor and land on the line number written after it.

## Start

The command steps create these practice files.

`/tmp/vim-kata-135/refs.txt`

```text
First target docs/todo.txt:3
Second target docs/todo.txt (5)
Third target docs/todo.txt line 2
```

`/tmp/vim-kata-135/docs/todo.txt`

```text
line one
line two
line three
line four
line five
```

Start in Normal mode in `/tmp/vim-kata-135/refs.txt` on the `d` in `docs/todo.txt (5)` at line 2, column 15.

## End

The practice files should remain unchanged. The current buffer should be `/tmp/vim-kata-135/docs/todo.txt`, with the cursor on the `l` in `line five` at line 5, column 1.

## Commands

Run these command steps:

```text
1. :call delete('/tmp/vim-kata-135', 'rf')<CR>
2. :call mkdir('/tmp/vim-kata-135/docs', 'p')<CR>
3. :call writefile(['First target docs/todo.txt:3', 'Second target docs/todo.txt (5)', 'Third target docs/todo.txt line 2'], '/tmp/vim-kata-135/refs.txt')<CR>
4. :call writefile(['line one', 'line two', 'line three', 'line four', 'line five'], '/tmp/vim-kata-135/docs/todo.txt')<CR>
5. :edit /tmp/vim-kata-135/refs.txt<CR>
6. 2G15|
7. gF
```
