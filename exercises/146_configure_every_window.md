# Kata: Configure Every Window

## Task

Practice using `:windo` to apply one window-local configuration command across
every window in the current tab page.

## Start

Open a fresh Vim or Neovim session with one empty scratch buffer.

Start in Normal mode on line 1, column 1.

## End

The current tab should have four windows named:

```text
kata-top-left
kata-bottom-left
kata-top-right
kata-bottom-right
```

Every window should have `number` on, `relativenumber` off, and `cursorline` on.
The current window should be `kata-bottom-right`.

## Commands

Run these command steps:

```text
1. :setlocal buftype=nofile bufhidden=hide noswapfile<CR>:file kata-top-left<CR>ialpha<Esc>:setlocal nonumber norelativenumber nocursorline nomodified<CR>
2. :rightbelow vsplit<CR>:enew<CR>:setlocal buftype=nofile bufhidden=hide noswapfile<CR>:file kata-top-right<CR>ialpha<Esc>:setlocal number relativenumber nocursorline nomodified<CR>
3. <C-w>h:belowright split<CR>:enew<CR>:setlocal buftype=nofile bufhidden=hide noswapfile<CR>:file kata-bottom-left<CR>ialpha<Esc>:setlocal nonumber norelativenumber cursorline nomodified<CR>
4. <C-w>l:belowright split<CR>:enew<CR>:setlocal buftype=nofile bufhidden=hide noswapfile<CR>:file kata-bottom-right<CR>ialpha<Esc>:setlocal number norelativenumber cursorline nomodified<CR>
5. <C-w>t<C-w>h
6. :windo setlocal number norelativenumber cursorline<CR>
```
