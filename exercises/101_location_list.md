# Kata: Keep Per-Window Location Lists

> **Environment:** Vim or Neovim. **Dependencies:** None.

## Objective
Build, navigate, and compare independent location lists owned by two windows.

## Setup
```vim
:let g:kata_101_qf=getqflist({'items':1,'title':1,'context':1,'idx':1,'quickfixtextfunc':1})
:let g:kata_101_dir=tempname() | call mkdir(g:kata_101_dir, 'p')
:call writefile(['RED one', 'plain', 'RED two'], g:kata_101_dir.'/left.txt')
:call writefile(['BLUE one', 'BLUE two'], g:kata_101_dir.'/right.txt')
:execute 'edit '.fnameescape(g:kata_101_dir.'/left.txt') | vsplit
```

You now have two windows. Location lists belong to windows; a split may initially copy list state, so each drill explicitly replaces its current list.

## Drills
1. In the left window, populate a location list from `left.txt` for `RED`. **Verify:** `:echo len(getloclist(0))` is `2` and `:llist` shows lines 1 and 3.
2. Navigate first, next, previous. **Verify:** final cursor is `left.txt` line 1.
3. In the right window, build a `BLUE` list from `right.txt`. **Verify:** right list length is `2`; switch left and its entries still say `RED`.
4. Open each list with `:lopen`, choose an entry, and close with `:lclose`. **Verify:** quickfix remains untouched: `:echo getqflist({'items':1,'title':1,'context':1,'idx':1,'quickfixtextfunc':1}) ==# g:kata_101_qf` prints `1`, regardless of the pre-kata quickfix contents.

## Hints
<details><summary>Hints</summary>

Use `:lvimgrep` in the window that should own the list. `getloclist(winid)` makes ownership observable.
</details>

## Solution
<details><summary>Exact commands</summary>

1. `<C-w>h`, then `:execute 'lvimgrep /RED/gj '.fnameescape(g:kata_101_dir.'/left.txt')`
2. `:lfirst | lnext | lprev`
3. `<C-w>l`, then `:execute 'edit '.fnameescape(g:kata_101_dir.'/right.txt') | execute 'lvimgrep /BLUE/gj '.fnameescape(g:kata_101_dir.'/right.txt')`; compare after `<C-w>h`.
4. `:lopen`, select with `<CR>`, then `:lclose` in each owner window.
</details>

## Cleanup and Reference
Run `:silent! lclose` in each kata window, then wipe only the owned buffers: `:for g:kata_101_buf in getbufinfo() | if stridx(g:kata_101_buf.name,g:kata_101_dir)==0 | execute 'bwipeout! '.g:kata_101_buf.bufnr | endif | endfor | call setqflist([], 'r', g:kata_101_qf) | call delete(g:kata_101_dir, 'rf') | unlet g:kata_101_buf g:kata_101_qf g:kata_101_dir`. Do not use `:only`, because it can collapse unrelated user windows. See `:help location-list`, `:help :lvimgrep`.

| Command | Effect |
|---|---|
| `:lopen` / `:lclose` | Open / close current window's location list |
| `:lnext` / `:lprev` | Navigate that list |
