# Kata: Parse the Current Buffer as Errors

## Task

Practice parsing compiler-style lines from the current buffer into quickfix with `:cgetbuffer`.

## Start

Open a scratch buffer and insert:

```text
app.txt:2:1: missing semicolon
app.txt:4:1: wrong flag
config.txt:2:1: unknown key
```

Start in Normal mode on the `a` in `app.txt` at line 1, column 1.

## End

The log buffer text should be unchanged. The current buffer should be `config.txt`, the cursor should be on line 2, column 1, and the quickfix list should contain three parsed entries from the original log buffer.

## Commands

Run these command steps:

```text
1. :let g:kata_157_dir = tempname() | call mkdir(g:kata_157_dir, 'p')<CR>
2. :call writefile(['alpha ok', 'missing semicolon', 'middle', 'wrong flag'], g:kata_157_dir . '/app.txt')<CR>
3. :call writefile(['mode=prod', 'unknown_key=true', 'extra_setting=true'], g:kata_157_dir . '/config.txt')<CR>
4. :execute 'write ' . fnameescape(g:kata_157_dir . '/ci.log')<CR>
5. :execute 'cd ' . fnameescape(g:kata_157_dir)<CR>
6. :edit ci.log<CR>
7. :set errorformat=%f:%l:%c:%m<CR>
8. :cgetbuffer<CR>
9. :cc 2<CR>
10. :buffer ci.log<CR>
11. :cgetbuffer<CR>
12. :cc 3<CR>
```
