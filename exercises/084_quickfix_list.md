# Kata: Build and Navigate a Quickfix List

> **Environment:** Vim or Neovim. **Dependencies:** None; uses built-in `:vimgrep`.

## Objective
Populate quickfix from known files, inspect its size/order, and navigate with `:cnext` and `:cprev`.

## Setup
Run exactly:

```vim
:let g:kata_084_qf=getqflist({'items':1,'title':1,'context':1,'idx':1,'quickfixtextfunc':1})
:let g:kata_084_dir=tempname() | call mkdir(g:kata_084_dir, 'p')
:call writefile(['alpha TODO', 'plain', 'omega TODO'], g:kata_084_dir.'/one.txt')
:call writefile(['TODO beta', 'plain'], g:kata_084_dir.'/two.txt')
:execute 'edit '.fnameescape(g:kata_084_dir.'/one.txt')
```

Start in the file window, Normal mode. These files are disposable.

## Drills
1. Populate quickfix with every `TODO` in the two files. **Verify:** `:echo len(getqflist())` prints `3`; `:clist` shows `one.txt` lines 1 and 3, then `two.txt` line 1.
2. Open quickfix and choose the third entry with `<CR>`. **Verify:** current buffer is `two.txt`, line 1.
3. Close quickfix, go to first, next twice, then previous once. **Verify:** final location is `one.txt`, line 3.
4. Replace the list with matches for `plain`. **Verify:** list length is `2`; no `TODO` entry remains.

## Hints
<details><summary>Hints</summary>

`:vimgrep /pattern/gj files` adds all matches (`g`) and avoids jumping (`j`). A new `:vimgrep` replaces the current list.
</details>

## Solution
<details><summary>Exact commands</summary>

1. `:execute 'vimgrep /TODO/gj '.fnameescape(g:kata_084_dir).'/*.txt'`
2. `:copen`, `G<CR>`
3. `:cclose | cfirst | cnext | cnext | cprev`
4. `:execute 'vimgrep /plain/gj '.fnameescape(g:kata_084_dir).'/*.txt'`
</details>

## Cleanup and Reference
`:cclose | for g:kata_084_buf in getbufinfo() | if stridx(g:kata_084_buf.name,g:kata_084_dir)==0 | execute 'bwipeout! '.g:kata_084_buf.bufnr | endif | endfor | call setqflist([], 'r', g:kata_084_qf) | call delete(g:kata_084_dir, 'rf') | unlet g:kata_084_buf g:kata_084_qf g:kata_084_dir`. Never substitute a real project path. See `:help quickfix`, `:help :vimgrep`.

| Command | Effect |
|---|---|
| `:copen` / `:cclose` | Open / close quickfix window |
| `:cnext` / `:cprev` | Next / previous entry |
