# Kata: Close and Manage Buffers

## Task

Practice deleting the current buffer, deleting a specific buffer by number, and force-deleting an intentionally modified scratch buffer.

## Start

In Vim or Neovim, run:

```text
:enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-close-alpha
:call setline(1, ['alpha']) | setlocal nomodified | let g:kata_107_alpha=bufnr()
:enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-close-beta
:call setline(1, ['beta']) | setlocal nomodified | let g:kata_107_beta=bufnr()
:enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-close-gamma
:call setline(1, ['gamma']) | setlocal nomodified | let g:kata_107_gamma=bufnr()
```

Start in Normal mode on the `g` in `gamma` in `kata-close-gamma`.

## End

The observable state should be:

```text
kata-close-alpha remains listed.
kata-close-beta is deleted.
kata-close-gamma is force-deleted after its scratch change.
```

## Commands

Run these command steps:

```text
1. :ls<CR>
2. :execute 'bdelete ' . g:kata_107_beta<CR>
3. :echo bufnr('kata-close-beta')<CR>
4. Gounsaved<Esc>
5. :bdelete<CR>
6. :bdelete!<CR>
7. :echo bufnr('kata-close-alpha') > 0<CR>
8. :echo bufnr('kata-close-beta')<CR>
9. :echo bufnr('kata-close-gamma')<CR>
```
