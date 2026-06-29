# Kata: Choose a Source in a Three-Way Diff

## Task

Practice pulling a diff hunk from a specific source buffer with `:diffget {bufspec}`.

## Start

Open a scratch buffer and insert:

```text
base.txt
status = base
shared = same
owner = base
note = keep

local.txt
status = local
shared = same
owner = local
note = keep

remote.txt
status = remote
shared = same
owner = remote
note = keep
```

Start in Normal mode on line 1, column 1 of the scratch buffer.

## End

`local.txt` should become:

```text
status = remote
shared = same
owner = base
note = keep
```

The current buffer should be `local.txt` in diff mode.

## Commands

Run these command steps:

```text
1. :let g:kata_161_dir = tempname() | call mkdir(g:kata_161_dir, 'p')<CR>
2. :call writefile(['status = base', 'shared = same', 'owner = base', 'note = keep'], g:kata_161_dir . '/base.txt')<CR>
3. :call writefile(['status = local', 'shared = same', 'owner = local', 'note = keep'], g:kata_161_dir . '/local.txt')<CR>
4. :call writefile(['status = remote', 'shared = same', 'owner = remote', 'note = keep'], g:kata_161_dir . '/remote.txt')<CR>
5. :execute 'edit ' . fnameescape(g:kata_161_dir . '/local.txt')<CR>
6. :execute 'vert diffsplit ' . fnameescape(g:kata_161_dir . '/base.txt')<CR>
7. :wincmd h<CR>
8. :execute 'vert diffsplit ' . fnameescape(g:kata_161_dir . '/remote.txt')<CR>
9. :buffer local.txt<CR>
10. :1diffget remote.txt<CR>
11. :3diffget base.txt<CR>
```
