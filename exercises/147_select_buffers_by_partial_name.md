# Kata: Select Buffers by Partial Name

## Task

Practice using `:ls` and `:buffer {partial-name}` to switch to listed buffers
by unique name fragments.

## Start

Open a fresh Vim or Neovim session with one empty scratch buffer.

Start in Normal mode on line 1, column 1.

## End

The current buffer should be:

```text
kata-beta-notes.txt
```

The listed buffers should still include `kata-alpha-notes.txt`,
`kata-alpha-tests.txt`, `kata-beta-notes.txt`, and `kata-beta-tests.txt`.

## Commands

Run these command steps:

```text
1. :setlocal buftype=nofile bufhidden=hide noswapfile<CR>:file kata-alpha-notes.txt<CR>ibuffer practice<Esc>:setlocal nomodified<CR>
2. :enew<CR>:setlocal buftype=nofile bufhidden=hide noswapfile<CR>:file kata-alpha-tests.txt<CR>ibuffer practice<Esc>:setlocal nomodified<CR>
3. :enew<CR>:setlocal buftype=nofile bufhidden=hide noswapfile<CR>:file kata-beta-notes.txt<CR>ibuffer practice<Esc>:setlocal nomodified<CR>
4. :enew<CR>:setlocal buftype=nofile bufhidden=hide noswapfile<CR>:file kata-beta-tests.txt<CR>ibuffer practice<Esc>:setlocal nomodified<CR>
5. :buffer alpha-n<CR>
6. :ls<CR>
7. :buffer alpha-t<CR>
8. :buffer beta-t<CR>
9. :buffer beta-n<CR>
```
