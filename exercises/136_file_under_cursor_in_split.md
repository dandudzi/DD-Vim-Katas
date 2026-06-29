# Kata: File Under Cursor in Split

## Task

Practice opening filenames under the cursor in split windows with `<C-w>f`.

## Start

The command steps create three practice files. The source file contains the two absolute paths to open.

`/tmp/vim-kata-136/links.txt`

```text
/tmp/vim-kata-136/notes.txt
/tmp/vim-kata-136/drafts/todo.txt
```

`/tmp/vim-kata-136/notes.txt`

```text
alpha note
beta note
```

`/tmp/vim-kata-136/drafts/todo.txt`

```text
todo one
todo two
```

Start in Normal mode in `/tmp/vim-kata-136/links.txt` at line 1, column 1, with one visible window.

## End

All three practice files should remain unchanged and visible in separate windows. The active window should show `/tmp/vim-kata-136/drafts/todo.txt`.

## Commands

Run these command steps:

```text
1. :call delete('/tmp/vim-kata-136', 'rf')<CR>
2. :call mkdir('/tmp/vim-kata-136/drafts', 'p')<CR>
3. :call writefile(['/tmp/vim-kata-136/notes.txt', '/tmp/vim-kata-136/drafts/todo.txt'], '/tmp/vim-kata-136/links.txt')<CR>
4. :call writefile(['alpha note', 'beta note'], '/tmp/vim-kata-136/notes.txt')<CR>
5. :call writefile(['todo one', 'todo two'], '/tmp/vim-kata-136/drafts/todo.txt')<CR>
6. :edit /tmp/vim-kata-136/links.txt<CR>
7. 1G0
8. <C-w>f
9. <C-w>p
10. 2G0
11. <C-w>f
```
