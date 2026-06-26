# Kata: Filter an Existing Quickfix List

> **Environment:** Vim or Neovim.
> **Dependencies:** Standard `cfilter` runtime plugin, loaded with `:packadd cfilter`.
> **Portability:** `:Cfilter` is not built in by default; it comes from the standard optional `cfilter` plugin. Verify availability with `:echo exists(':Cfilter')`.

## Objective

By the end of this kata, you will be able to narrow an existing quickfix list by matching or excluding filenames and entry text using `:Cfilter`.

Success means: you can create a smaller quickfix list from an existing one, use the filtered list, and return to the unfiltered list through quickfix history.

## Prerequisites

- Know: basic quickfix creation with `:vimgrep`.
- Required option/state: none.
- Required external tool/plugin: `cfilter`.
- Readiness check: run `:packadd cfilter | echo exists(':Cfilter')` and confirm it prints `2`.

## Setup

1. Start this kata in a fresh session, because it intentionally creates multiple quickfix history entries.
2. Run `:let g:kata_154_dir = tempname() | call mkdir(g:kata_154_dir, 'p')`.
3. Run the setup block exactly:

```vim
:packadd cfilter
:let g:kata_154_src = g:kata_154_dir . '/src_main.txt'
:let g:kata_154_test = g:kata_154_dir . '/app_test.txt'
:let g:kata_154_vendor = g:kata_154_dir . '/vendor_blob.txt'
:let g:kata_154_docs = g:kata_154_dir . '/docs_notes.txt'
:call writefile(['TODO core', 'plain src', 'TODO shared'], g:kata_154_src)
:call writefile(['TODO test'], g:kata_154_test)
:call writefile(['TODO vendor'], g:kata_154_vendor)
:call writefile(['TODO docs'], g:kata_154_docs)
:execute 'edit ' . fnameescape(g:kata_154_src)
:execute 'vimgrep /TODO/gj ' . fnameescape(g:kata_154_src) . ' ' . fnameescape(g:kata_154_test) . ' ' . fnameescape(g:kata_154_vendor) . ' ' . fnameescape(g:kata_154_docs)
:call setqflist([], 'a', {'title': 'All TODOs'})
:cfirst
```

4. Confirm the current quickfix list has five entries and `:echo getqflist({'title': 1}).title . '|' . getqflist({'size': 1}).size` prints `All TODOs|5`.

## Initial Fixture

The setup creates these disposable files:

```text
src_main.txt
1  TODO core
2  plain src
3  TODO shared

app_test.txt
1  TODO test

vendor_blob.txt
1  TODO vendor

docs_notes.txt
1  TODO docs
```

Start in Normal mode on the `T` in `TODO core` at line 1, column 1 of `src_main.txt`. Do not modify any file before beginning Drill A.

## Constraints

- Use `:Cfilter` or `:Cfilter!` to create the filtered list.
- Do not rerun `:vimgrep` during any drill.
- Do not edit quickfix items with `setqflist()` after setup.
- Reset by rerunning the documented setup before each drill unless the drill explicitly builds on quickfix history.

## Tasks

### Drill A - Isolate the skill

**Goal:** keep only the quickfix entries whose filename or text matches `test`.

1. Starting from the unfiltered quickfix list, create a filtered list that keeps only `test` entries.
2. Inspect the remaining quickfix entry.

**Verify:** `:echo len(getqflist()) . '|' . fnamemodify(bufname(getqflist()[0].bufnr), ':t') . '|' . getqflist()[0].lnum` prints `1|app_test.txt|1`.

### Drill B - Add precision or repetition

**Goal:** exclude one class of entries without rebuilding the original search.

1. Reset to the documented setup.
2. Create a filtered list that removes every quickfix entry whose filename or text matches `vendor`.

**Verify:** `:echo len(getqflist()) . '|' . join(map(copy(getqflist()), 'fnamemodify(bufname(v:val.bufnr), '':t'')'), ',')` prints `4|src_main.txt,src_main.txt,app_test.txt,docs_notes.txt`.

### Drill C - Apply the workflow

**Goal:** filter first, then review one remaining match per file.

1. Reset to the documented setup.
2. Exclude the `vendor` entry.
3. Starting from `src_main.txt` line 1, jump forward by file through the filtered quickfix list until you land on `docs_notes.txt`.

**Verify:** the current buffer is `docs_notes.txt`, the cursor is on line 1, column 1, and `:echo fnamemodify(bufname('%'), ':t') . '|' . line('.') . '|' . len(getqflist())` prints `docs_notes.txt|1|4`.

### Challenge - Recall without prompts

Reset the setup. Exclude the `vendor` entry, then return to the original unfiltered quickfix list without rerunning `:vimgrep`.

**Verify:** `:echo getqflist({'title': 1}).title . '|' . len(getqflist()) . '|' . join(map(copy(getqflist()), 'fnamemodify(bufname(v:val.bufnr), '':t'')'), ',')` prints `All TODOs|5|src_main.txt,src_main.txt,app_test.txt,vendor_blob.txt,docs_notes.txt`.

## Expected Final State

After the challenge, verify all of the following:

- The current quickfix list title is `All TODOs`.
- The quickfix list size is `5`.
- `vendor_blob.txt` is present again in the current quickfix list.
- The file contents remain:

```text
src_main.txt
TODO core
plain src
TODO shared

app_test.txt
TODO test

vendor_blob.txt
TODO vendor

docs_notes.txt
TODO docs
```

## Hints

<details>
<summary>Hint 1</summary>

` :Cfilter /pattern/` keeps matching entries. `:Cfilter! /pattern/` keeps non-matching entries.

</details>

<details>
<summary>Hint 2</summary>

Filtering creates a new quickfix list instead of mutating the existing one. That means `:colder` can return to the earlier, unfiltered list.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:Cfilter /test/<CR>` - create a new quickfix list containing only entries whose filename or text matches `test`.

### Drill B

1. `:Cfilter! /vendor/<CR>` - create a new quickfix list containing all entries except the vendor one.

### Drill C

1. `:Cfilter! /vendor/<CR>` - remove the vendor entry from the active list.
2. `:cnfile<CR>` - jump from `src_main.txt` to `app_test.txt`.
3. `:cnfile<CR>` - jump from `app_test.txt` to `docs_notes.txt`.

### Challenge

`:Cfilter! /vendor/<CR>:colder<CR>`

The filter command creates a new quickfix list with four entries. `:colder` then makes the earlier `All TODOs` list current again.

</details>

## Reset and Cleanup

- Between drills: rerun the documented setup to restore the original files and quickfix history state for the kata.
- After the kata: run `:silent! cclose | for g:kata_154_buf in getbufinfo() | if stridx(g:kata_154_buf.name, g:kata_154_dir) == 0 | execute 'bwipeout! ' . g:kata_154_buf.bufnr | endif | endfor | call setqflist([], 'f') | call delete(g:kata_154_dir, 'rf') | unlet g:kata_154_buf g:kata_154_dir g:kata_154_docs g:kata_154_src g:kata_154_test g:kata_154_vendor`.
- Preserve user data: use a fresh session, because this kata depends on quickfix history and clearing it will also remove any unrelated quickfix history from the same session.

## Notes and Portability

- Plugin detail: `:Cfilter` comes from the standard optional `cfilter` runtime plugin.
- Match scope: the filter pattern is applied to both the entry text and the file name.
- History detail: filtering creates a new quickfix list, so `:colder` can restore the previous one.
- Verify the command source with `:verbose command Cfilter`.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:packadd cfilter` | Command-line | Load the optional `cfilter` runtime plugin for the current session. |
| `:Cfilter /{pat}/` | Command-line | Create a new quickfix list containing entries that match `{pat}`. |
| `:Cfilter! /{pat}/` | Command-line | Create a new quickfix list containing entries that do not match `{pat}`. |
| `:colder` | Command-line | Make the previous quickfix list current. |
| `:cnfile` | Command-line | Jump to the first entry in the next represented file. |

## References

- [`:help :Cfilter`](https://vimhelp.org/quickfix.txt.html#%3ACfilter) - filtering a quickfix list with the `cfilter` plugin.
- [`:help cfilter-plugin`](https://vimhelp.org/quickfix.txt.html#cfilter-plugin) - plugin overview and history behavior.
- [`:help :colder`](https://vimhelp.org/quickfix.txt.html#%3Acolder) - returning to the earlier quickfix list.
- [Neovim help: `cfilter-plugin`](https://neovim.io/doc/user/quickfix.html#cfilter-plugin) - Neovim quickfix filtering documentation.
