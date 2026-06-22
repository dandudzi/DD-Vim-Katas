# Kata: Refactor Quickfix Files with `:cfdo`

> **Environment:** Vim or Neovim. **Dependencies:** None.

## Objective
Review a deterministic quickfix list, apply one substitution per represented file with `:cfdo`, and save only disposable files.

## Setup
```vim
:let g:kata_100_qf=getqflist({'items':1,'title':1,'context':1,'idx':1,'quickfixtextfunc':1})
:let g:kata_100_dir=tempname() | call mkdir(g:kata_100_dir, 'p')
:call writefile(['oldName();', 'oldName();'], g:kata_100_dir.'/a.js')
:call writefile(['const x = oldName();'], g:kata_100_dir.'/b.js')
:call writefile(['untouched();'], g:kata_100_dir.'/keep.js')
:execute 'edit '.fnameescape(g:kata_100_dir.'/a.js')
:execute 'vimgrep /oldName/gj '.fnameescape(g:kata_100_dir).'/*.js'
```

Confirm `:echo len(getqflist())` is `3`. Do not point any command at a real repository.

## Drills
1. Review the list with `:copen`/`:clist`. **Verify:** only `a.js` and `b.js` appear.
2. Run a whole-buffer rename once per quickfix file, without writing yet. **Verify:** `:echo getbufinfo({'bufmodified':1})->len()` reports two modified buffers.
3. Write each quickfix file with `:cfdo update`. **Verify:** `readfile(g:kata_100_dir.'/a.js')` contains two `newName()` lines, `b.js` one, and `keep.js` remains `untouched();`.
4. Contrast safely: rewrite the disposable files to their initial contents, explicitly reload the already-loaded quickfix buffers, rebuild quickfix, then use `:cdo s/oldName/newName/`. **Verify:** all three quickfix-entry lines change in memory and `:echo getbufline(bufnr(g:kata_100_dir.'/a.js'),1,'$')` shows two `newName();` lines.

## Hints
<details><summary>Hints</summary>

`:cfdo` visits each file once; `%s` handles every match in that file. Add `e` so files without a later match do not stop a batch.
</details>

## Solution
<details><summary>Exact commands</summary>

1. `:copen`, inspect, `:cclose`
2. `:cfdo %s/oldName/newName/ge`
3. `:cfdo update`
4. `:call writefile(['oldName();','oldName();'],g:kata_100_dir.'/a.js') | call writefile(['const x = oldName();'],g:kata_100_dir.'/b.js') | cfdo edit!`, then `:execute 'vimgrep /oldName/gj '.fnameescape(g:kata_100_dir).'/*.js'`, then `:cdo s/oldName/newName/e`.

`writefile()` changes disk, not an existing buffer. `:cfdo edit!` is therefore required before rebuilding the list; otherwise Drill 4 could operate on stale `newName` buffer contents.
</details>

## Cleanup and Reference
`:cclose | for g:kata_100_buf in getbufinfo() | if stridx(g:kata_100_buf.name,g:kata_100_dir)==0 | execute 'bwipeout! '.g:kata_100_buf.bufnr | endif | endfor | call setqflist([], 'r', g:kata_100_qf) | call delete(g:kata_100_dir, 'rf') | unlet g:kata_100_buf g:kata_100_qf g:kata_100_dir`. Never use repository-wide checkout as cleanup. See `:help :cfdo`, `:help :cdo`.

| Command | Scope |
|---|---|
| `:cdo` | Every valid quickfix entry |
| `:cfdo` | Every file represented in quickfix |
