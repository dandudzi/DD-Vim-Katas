# Kata: List, Visit, and Delete Buffers

## Task

Practice listing buffers, visiting a named buffer, cycling to the next buffer,
and deleting the current buffer.

## Start

Open an empty scratch buffer.

Start in Normal mode on line 1, column 1.

## End

The listed kata buffers should be `kata-alpha` and `kata-gamma`; `kata-beta`
should be deleted.

## Commands

Run these command steps:

```text
1. :enew<CR>:file kata-alpha<CR>ialpha<Esc>:setlocal nomodified<CR>
2. :enew<CR>:file kata-beta<CR>ibeta<Esc>:setlocal nomodified<CR>
3. :enew<CR>:file kata-gamma<CR>igamma<Esc>:setlocal nomodified<CR>
4. :ls<CR>
5. :buffer kata-alpha<CR>
6. :bnext<CR>
7. :bdelete<CR>
```
