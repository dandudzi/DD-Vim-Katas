# Kata: Search Help into a Location List

> **Environment:** Vim or Neovim; built-in help and location list commands only.
> **Dependencies:** None.
> **Portability:** Uses built-in `:lhelpgrep` and `:lopen`. Exact match counts can vary with installed help docs, so this kata verifies relative behavior and isolation from the global quickfix list.

## Objective

By the end of this kata, you will be able to search Vim help into the current window's location list using `:lhelpgrep` and review the matches with `:lopen`.

Success means: you can inspect help results for `quickfix` while leaving the global quickfix list unchanged.

## Prerequisites

- Know: basic help usage with `:help {topic}`.
- Required option/state: a normal help runtime with generated help tags.
- Required external tool/plugin: none.
- Readiness check: run `:echo has('quickfix')` and confirm it prints `1`.

## Setup

1. Run the commands below exactly once:

```vim
:enew
:let g:kata_159_qf = getqflist({'items': 1, 'title': 1, 'context': 1, 'idx': 1, 'quickfixtextfunc': 1})
:let g:kata_159_ll = getloclist(0, {'items': 1, 'title': 1, 'context': 1, 'idx': 1, 'quickfixtextfunc': 1})
:call setqflist([], 'r', {'title': 'kata-159 global', 'items': [{'filename': 'keep.txt', 'lnum': 1, 'col': 1, 'text': 'keep quickfix unchanged'}]})
:cclose
:lclose
```

2. Stay in the scratch buffer and confirm Normal mode is active.
3. Run `:echo getqflist({'title': 1}).title` and confirm it prints `kata-159 global`.

## Initial Fixture

Start in an empty scratch buffer with these non-text conditions:

- The global quickfix list contains one manual entry titled `kata-159 global`.
- No quickfix or location list window is open.
- The current window owns no help-search results yet.

Do not replace the global quickfix list before beginning Drill A.

## Constraints

- Use `:lhelpgrep` to create the results and `:lopen` to inspect them.
- Keep the global quickfix list intact throughout the kata.
- Do not use `:helpgrep`, `:vimgrep`, or manual `:setloclist()` item dictionaries.
- Reset to the documented start state before each drill unless the drill explicitly builds on the previous one.

## Tasks

### Drill A - Isolate the help search

**Goal:** put help matches for `quickfix` into the current window's location list.

1. Search help for `quickfix` into the current window's location list.
2. Inspect the resulting list metadata.

**Verify:** `:echo (getloclist(0, {'size': 1}).size >= 3) . ' ' . getloclist(0, {'title': 1}).title` prints `1 :lhelpgrep quickfix`.

### Drill B - Open and visit a help result

**Goal:** review one location-list entry without disturbing global quickfix.

1. Reset to the documented start state.
2. Search help for `quickfix` again.
3. Open the location list and jump to its first entry.

**Verify:** `:echo &filetype . ' ' . getqflist({'title': 1}).title` prints `help kata-159 global`.

### Drill C - Apply the workflow

**Goal:** review several help matches while keeping quickfix untouched.

1. Reset to the documented start state.
2. Search help for `quickfix`, open the location list, and visit the first three matches.
3. Finish on the third visited result.

**Verify:** `:echo (getline('.') =~# 'quickfix') . ' ' . getqflist({'title': 1}).title` prints `1 kata-159 global`.

### Challenge - Recall without prompts

Reset the fixture. Starting in the scratch buffer, search help for `quickfix`, open the location list, and visit three results without replacing the global quickfix list.

**Verify:** the final buffer is a help file, the current line contains `quickfix`, and the global quickfix title is still `kata-159 global`.

## Expected Final State

After the challenge, verify all of the following:

- `:echo &filetype` prints `help`.
- `:echo getline('.') =~# 'quickfix'` prints `1`.
- `:echo getqflist({'title': 1}).title` prints `kata-159 global`.
- `:echo getloclist(0, {'size': 1}).size >= 3` prints `1`.

No text in the scratch buffer matters after the help jump; the important state is that help results live in a location list and the global quickfix list remains intact.

## Hints

<details>
<summary>Hint 1</summary>

Use the location-list variant of helpgrep, not the global quickfix variant.

</details>

<details>
<summary>Hint 2</summary>

If you can still read `kata-159 global` from `getqflist({'title': 1}).title`, then your help search did not replace the global quickfix list.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:lhelpgrep quickfix` - search the help docs and store the matches in the current window's location list.

### Drill B

1. `:lhelpgrep quickfix` - rebuild the location list.
2. `:lopen` - open the location-list window.
3. `<CR>` - jump to the first result.

### Drill C

1. `:lhelpgrep quickfix` - rebuild the location list.
2. `:lopen` - show the matches.
3. `<CR>` - jump to the first result.
4. `:lnext` - move to the second result.
5. `:lnext` - move to the third result.

### Challenge

`:lhelpgrep quickfix<CR>:lopen<CR><CR>:lnext<CR>:lnext<CR>`

`lhelpgrep` fills the window-local list, `lopen` shows it, and `lnext` keeps advancing through those help matches without touching the global quickfix list.

</details>

## Reset and Cleanup

- Between drills: run `:lclose | enew | call setqflist([], 'r', {'title': 'kata-159 global', 'items': [{'filename': 'keep.txt', 'lnum': 1, 'col': 1, 'text': 'keep quickfix unchanged'}]})`.
- After the kata: run `:lclose | cclose | call setqflist([], 'r', g:kata_159_qf) | call setloclist(0, [], 'r', g:kata_159_ll) | bwipeout! | unlet g:kata_159_qf g:kata_159_ll`.
- Preserve user data: this kata uses only a scratch buffer and restores the pre-kata quickfix and current-window location list.

## Notes and Portability

- Built-in behavior: `:lhelpgrep` and `:lopen` work in both Vim and Neovim.
- Version-sensitive detail: the exact number and order of `quickfix` help matches can vary slightly across help versions, so the verification checks for at least three matches instead of hard-coded line numbers.
- Scope boundary: this kata isolates help search into a location list; broader per-window location-list management is covered elsewhere.
- Alternative: use a narrower pattern such as `cwindow` later if you want fewer results, but `quickfix` gives enough matches for repetition practice.
- LazyVim/Trouble note: if Trouble is installed, location-list views are optional review surfaces. Check `:echo exists(':Trouble')`, inspect `:verbose nmap <Space>xl`, and remember that the underlying list remains window-local.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:lhelpgrep quickfix` | Command-line | Search help and store matches in the current window's location list. |
| `:lopen` | Command-line | Open the current window's location list. |
| `:lnext` | Command-line | Jump to the next entry in the current location list. |
| `<CR>` in the location list | Normal | Jump to the selected help result. |

## References

- [`:help :lhelpgrep`](https://vimhelp.org/quickfix.txt.html#%3Alhelpgrep) - help search into a location list.
- [`:help location-list`](https://vimhelp.org/quickfix.txt.html#location-list) - window-local list behavior.
- [`:help :lopen`](https://vimhelp.org/quickfix.txt.html#%3Alopen) - open the current location list window.
- [Neovim help: `:lhelpgrep`](https://neovim.io/doc/user/quickfix.html#%3Alhelpgrep) - Neovim helpgrep into a location list.
