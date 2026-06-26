# Kata: Safe Grug-far Replacement and Picker Export

> **Environment:** Neovim with LazyVim, Grug-far, `rg`, and a configured picker.
> **Readiness:** `:echo executable('rg')` must be `1`; `:verbose nmap <Space>sr` must resolve to Grug-far. Picker export keys vary by provider, so inspect the picker's help before exporting.

## Objective
Preview and apply a project-wide replacement only inside a generated directory, then export the same two matches to quickfix.

## Setup
```vim
:let g:kata_109_qf=getqflist({'items':1,'title':1,'context':1,'idx':1,'quickfixtextfunc':1})
:let g:kata_109_dir=tempname() | call mkdir(g:kata_109_dir, 'p')
:call writefile(['old_token one', 'keep'], g:kata_109_dir.'/a.txt')
:call writefile(['old_token two'], g:kata_109_dir.'/b.txt')
:execute 'lcd '.fnameescape(g:kata_109_dir) | edit a.txt
```

Only this disposable directory may be searched or replaced.

## A. Grug-far Preview and Replace
1. Open Grug-far. Set Search to `old_token`, Replace to `new_token`, Files filter to `*.txt`, and Paths to the absolute value shown by `:echo g:kata_109_dir`. **Verify before applying:** exactly two result lines appear, both under `g:kata_109_dir`.
2. Press `g?` in the Grug-far buffer and identify the active `Replace` and `Qf List` mappings. Current defaults use `<localleader>r` and `<localleader>q`; do not assume what `<localleader>` is.
3. Invoke Replace, confirm if prompted, then verify `readfile(g:kata_109_dir.'/a.txt')` and `readfile(g:kata_109_dir.'/b.txt')` contain `new_token` and `keep` is unchanged.

## B. Export Results
Reset the two files with `:call writefile(['old_token one','keep'],g:kata_109_dir.'/a.txt') | call writefile(['old_token two'],g:kata_109_dir.'/b.txt') | execute 'silent! checktime '.bufnr(g:kata_109_dir.'/a.txt')`, then refresh Grug-far. `:checktime` reloads the already-loaded owned buffer without editing the Grug-far UI buffer. Invoke the discovered `Qf List` action. **Verify:** `:echo len(getqflist())` is `2` and every entry path begins with `g:kata_109_dir`.

For a LazyVim picker, open root grep with the mapping reported by `:verbose nmap <Space>/`, search `old_token`, open provider help, and use its documented quickfix export. Do not assume a fixed export key. **Verify the same two-entry quickfix list.** Trouble export is optional and must be discovered from provider help.

If the exported quickfix list is later used for `:cdo` or `:cfdo`, save the pre-kata list first with `getqflist({'items': 1, 'title': 1, 'context': 1, 'idx': 1, 'quickfixtextfunc': 1})` and restore it with `setqflist([], 'r', saved)`. Treat picker and Trouble exports as list creation steps, not as replacements for reviewing the exact file set.

## Hints and Solution
<details><summary>Exact default Grug-far workflow</summary>

`<Space>sr`; fill the four fields; `g?`; then `<localleader>r` to replace or `<localleader>q` to export, provided help confirms those defaults.
</details>

## Cleanup and References
Close Grug-far, then `:cclose | for g:kata_109_buf in getbufinfo() | if stridx(g:kata_109_buf.name,g:kata_109_dir)==0 | execute 'bwipeout! '.g:kata_109_buf.bufnr | endif | endfor | call setqflist([], 'r', g:kata_109_qf) | lcd - | call delete(g:kata_109_dir, 'rf') | unlet g:kata_109_buf g:kata_109_qf g:kata_109_dir`. References: https://github.com/MagicDuck/grug-far.nvim and https://lazyvim.github.io/keymaps.

| Action | Verification |
|---|---|
| Replace | Only generated `.txt` files change |
| Qf List | Exactly two generated-file entries |
