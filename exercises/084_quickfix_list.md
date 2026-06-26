# Kata: Build and Navigate a Quickfix List

> **Environment:** Vim or Neovim; built-in `:vimgrep` and quickfix commands.
> **Dependencies:** None.
> **Portability:** Uses only built-in quickfix features.

## Objective

Build one quickfix list from known files, open it, inspect its order, and move
through it with `:cnext` and `:cprev`.

Success means: you can populate a three-entry list, jump to a chosen entry,
and replace the list with a new search without touching advanced quickfix
history or compiler workflows.

## Setup

Run exactly:

```vim
:let g:kata_084_qf = getqflist({'items': 1, 'title': 1, 'context': 1, 'idx': 1, 'quickfixtextfunc': 1})
:let g:kata_084_dir = tempname() | call mkdir(g:kata_084_dir, 'p')
:call writefile(['alpha TODO', 'plain', 'omega TODO'], g:kata_084_dir.'/one.txt')
:call writefile(['TODO beta', 'plain'], g:kata_084_dir.'/two.txt')
:execute 'edit '.fnameescape(g:kata_084_dir.'/one.txt')
```

Start in Normal mode in `one.txt`.

## Drills

1. Populate quickfix with every `TODO` in the two files. Verify
   `:echo len(getqflist())` prints `3`, and `:clist` shows `one.txt` lines 1
   and 3, then `two.txt` line 1.
2. Open quickfix and choose the third entry with `<CR>`. Verify the current
   buffer is `two.txt` on line 1.
3. Close quickfix, jump to the first entry, then use `:cnext` twice and
   `:cprev` once. Verify the final location is `one.txt` line 3.
4. Replace the list with matches for `plain`. Verify the new list length is
   `2` and no `TODO` entry remains.

## Challenge

Reset the setup. Build the `TODO` quickfix list, jump to the last entry, then
replace the list with `plain` matches and confirm the new size.

## Hints

<details>
<summary>Hints</summary>

Use `:vimgrep /pattern/gj files` so all matches are added and the cursor does
not jump during list creation. A new `:vimgrep` replaces the current quickfix
list.

</details>

## Solution

<details>
<summary>Exact commands</summary>

1. `:execute 'vimgrep /TODO/gj '.fnameescape(g:kata_084_dir).'/*.txt'`
2. `:copen`, then `G<CR>`
3. `:cclose | cfirst | cnext | cnext | cprev`
4. `:execute 'vimgrep /plain/gj '.fnameescape(g:kata_084_dir).'/*.txt'`

</details>

## Cleanup and Scope

Run:

```vim
:cclose
:for g:kata_084_buf in getbufinfo()
:  if stridx(g:kata_084_buf.name, g:kata_084_dir) == 0
:    execute 'bwipeout! '.g:kata_084_buf.bufnr
:  endif
:endfor
:call setqflist([], 'r', g:kata_084_qf)
:call delete(g:kata_084_dir, 'rf')
:unlet g:kata_084_buf g:kata_084_qf g:kata_084_dir
```

This kata stays on foundational quickfix creation and entry navigation.
Advanced follow-ups now live elsewhere:

- [151_traverse_quickfix_history.md](151_traverse_quickfix_history.md)
- [154_filter_existing_quickfix_list.md](154_filter_existing_quickfix_list.md)
- [156_open_quickfix_only_when_useful.md](156_open_quickfix_only_when_useful.md)
- [157_parse_current_buffer_as_errors.md](157_parse_current_buffer_as_errors.md)
- [158_compile_and_navigate_errors.md](158_compile_and_navigate_errors.md)

Optional LazyVim note: Trouble can display quickfix entries if it is installed, but this drill should still be completed with `:copen`, `:cnext`, and `:cprev` first. Check `:echo exists(':Trouble')` and `:verbose nmap <Space>xq`, then use Trouble's `g?` help inside the Trouble window instead of assuming a fixed action key.

## Command Reference

| Command | Effect |
|---|---|
| `:vimgrep /pat/gj files` | Build a quickfix list from matching files |
| `:copen` / `:cclose` | Open or close the quickfix window |
| `:cnext` / `:cprev` | Move to next or previous quickfix entry |
| `:cfirst` | Jump to the first quickfix entry |
