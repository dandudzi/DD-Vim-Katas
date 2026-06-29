# Kata: Open an Existing Buffer in a Split

## Task

Practice using `:sbuffer {number}` to show already listed buffers in new
splits.

## Start

Open a fresh Vim or Neovim session with one empty scratch buffer.

Start in Normal mode on line 1, column 1.

## End

The window stack should show:

```text
kata-current.txt
kata-notes.txt
kata-reference.txt
```

The current window should be `kata-notes.txt`.

## Commands

Run these command steps:

```text
1. :set splitbelow switchbuf=<CR>
2. :setlocal buftype=nofile bufhidden=hide noswapfile<CR>:file kata-current.txt<CR>iline one<Esc>:setlocal nomodified<CR>
3. :enew<CR>:setlocal buftype=nofile bufhidden=hide noswapfile<CR>:file kata-reference.txt<CR>iline one<Esc>:setlocal nomodified<CR>
4. :enew<CR>:setlocal buftype=nofile bufhidden=hide noswapfile<CR>:file kata-notes.txt<CR>iline one<Esc>:setlocal nomodified<CR>
5. :buffer 1<CR>
6. :sbuffer 2<CR>
7. <C-w>k
8. :sbuffer 3<CR>
```
