# Kata: Open the File Under Cursor in a Split

> **Environment:** Vim or Neovim; built-in file and window commands only.
> **Dependencies:** None.
> **Portability:** Uses built-in `<C-w>f`. This setup writes throwaway local files with Vimscript so the file targets are deterministic.

## Objective

By the end of this kata, you will be able to open the filename under the cursor in a new split with `<C-w>f` while keeping the source file visible.

Success means: after triggering `<C-w>f`, the referenced file is open in the current window and the source buffer still remains visible in another window.

## Prerequisites

- Know: `:enew`, `:only`, and `<C-w>p`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Run `:enew`.
2. Create the throwaway fixture files with these exact commands:
   - `:let g:kata_split_root = tempname()`
   - `:call mkdir(g:kata_split_root . '/drafts', 'p')`
   - `:let g:kata_notes = g:kata_split_root . '/notes.txt'`
   - `:let g:kata_todo = g:kata_split_root . '/drafts/todo.txt'`
   - `:let g:kata_links = g:kata_split_root . '/links.txt'`
   - `:call writefile(['alpha note', 'beta note'], g:kata_notes)`
   - `:call writefile(['todo one', 'todo two'], g:kata_todo)`
   - `:call writefile([g:kata_notes, g:kata_todo], g:kata_links)`
3. Open the source file with `:execute 'edit ' . fnameescape(g:kata_links)`.
4. Put the cursor on the first character of line 1.
5. Confirm `:echo expand('%:t') . ' ' . line('.') . ',' . col('.') . ' ' . winnr('$')` prints `links.txt 1,1 1`.

## Initial Fixture

After setup, `links.txt` contains exactly two absolute file paths:

```text
<temp-dir>/notes.txt
<temp-dir>/drafts/todo.txt
```

Here, `<temp-dir>` is the exact directory path created by `tempname()` during setup.

Start in Normal mode at line 1, column 1 in `links.txt`. Do not edit any file content before beginning Drill A.

## Constraints

- Use `<C-w>f` for the final file opening in every drill.
- Do not use `:split {file}`, `:edit {file}`, `gf`, netrw, or the mouse to open the target file.
- Reset to a single visible source window before each drill unless the drill explicitly builds on an earlier split state.

## Tasks

### Drill A - Isolate the skill

**Goal:** open the first referenced file in a split.

1. From line 1 in `links.txt`, open the file under the cursor with `<C-w>f`.

**Verify:** all of the following are true:

- `:echo expand('%:t')` prints `notes.txt`.
- `:echo winnr('$')` prints `2`.
- `:echo bufwinnr(fnamemodify(g:kata_links, ':p')) > 0` prints `1`.

### Drill B - Add precision or repetition

**Goal:** open the nested path from line 2 in a split.

1. Reset to one visible window with `:only`.
2. Reopen the source buffer with `:execute 'edit ' . fnameescape(g:kata_links)`.
3. Move to line 2, column 1 on the path that ends in `todo.txt`.
4. Open that file with `<C-w>f`.

**Verify:** all of the following are true:

- `:echo expand('%:t')` prints `todo.txt`.
- `:echo winnr('$')` prints `2`.
- `:echo bufwinnr(fnamemodify(g:kata_links, ':p')) > 0` prints `1`.

### Drill C - Apply the workflow

**Goal:** keep the source file visible while opening both referenced files in separate windows.

1. Reset to one visible source window.
2. Open `notes.txt` from line 1 with `<C-w>f`.
3. Return to `links.txt` with `<C-w>p`.
4. Move to line 2 and open `todo.txt` with `<C-w>f`.

**Verify:** all of the following are true:

- `:echo winnr('$')` prints `3`.
- `:echo expand('%:t')` prints `todo.txt`.
- `:echo bufwinnr(fnamemodify(g:kata_links, ':p')) > 0` prints `1`.
- `:echo bufwinnr(fnamemodify(g:kata_notes, ':p')) > 0` prints `1`.
- `:echo bufwinnr(fnamemodify(g:kata_todo, ':p')) > 0` prints `1`.

### Challenge - Recall without prompts

Reset to the initial one-window state. Open both referenced files from `links.txt` so that `links.txt`, `notes.txt`, and `todo.txt` are all visible at once, using `<C-w>f` for each file open.

**Verify:** the final window count is `3`, the current buffer is `todo.txt`, and all three buffers are visible in separate windows.

## Expected Final State

After the challenge, verify all of the following:

- `:echo winnr('$')` reports `3`.
- `:echo expand('%:t')` reports `todo.txt`.
- `:echo bufwinnr(fnamemodify(g:kata_links, ':p')) > 0` reports `1`.
- `:echo bufwinnr(fnamemodify(g:kata_notes, ':p')) > 0` reports `1`.
- `:echo bufwinnr(fnamemodify(g:kata_todo, ':p')) > 0` reports `1`.
- The contents of `notes.txt` and `todo.txt` are unchanged from setup.

## Hints

<details>
<summary>Hint 1</summary>

`<C-w>f` is the split-opening variant of file-under-cursor navigation.

</details>

<details>
<summary>Hint 2</summary>

After the first split, use `<C-w>p` to return to the source window before opening the second referenced file.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `<C-w>f` - open the path on line 1 in a new split and enter that window.

### Drill B

1. `:only`
2. `:execute 'edit ' . fnameescape(g:kata_links)`
3. `2G0`
4. `<C-w>f`

### Drill C

1. `:only`
2. `:execute 'edit ' . fnameescape(g:kata_links)`
3. `<C-w>f`
4. `<C-w>p`
5. `2G0`
6. `<C-w>f`

### Challenge

`:only`
`:execute 'edit ' . fnameescape(g:kata_links)`
`<C-w>f<C-w>p2G0<C-w>f`

</details>

## Reset and Cleanup

- Between drills: run `:only`, then `:execute 'edit ' . fnameescape(g:kata_links)` to restore the one-window source view.
- After the kata:
  - `:only`
  - `:silent! execute 'bwipeout! ' . bufnr(fnamemodify(g:kata_links, ':p'))`
  - `:silent! execute 'bwipeout! ' . bufnr(fnamemodify(g:kata_notes, ':p'))`
  - `:silent! execute 'bwipeout! ' . bufnr(fnamemodify(g:kata_todo, ':p'))`
  - `:call delete(g:kata_split_root, 'rf')`
  - `:unlet g:kata_split_root g:kata_notes g:kata_todo g:kata_links`
- Preserve user data: all file creation stays inside a temp directory created by `tempname()`.

## Notes and Portability

- Built-in behavior: `<C-w>f` is standard in Vim and Neovim.
- This kata uses absolute paths so `'path'` does not affect resolution.
- Edge case: on systems where full paths include characters outside `'isfname'`, the cursor must stay on the filename text that Vim recognizes as one file path.
- Alternative: if full paths are awkward in your environment, `:lcd` into the temp directory and use relative paths instead.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `<C-w>f` | Normal | Open the filename under the cursor in a new split and enter that window. |
| `<C-w>p` | Normal | Return to the previous window. |
| `:only` | Command-line | Close all windows except the current one. |
| `bufwinnr({name})` | Vimscript | Report whether a buffer is currently visible in a window. |

## References

- [`:help CTRL-W_f`](https://vimhelp.org/windows.txt.html#CTRL-W_f) - split-opening file-under-cursor behavior.
- [Neovim help: `CTRL-W_f`](https://neovim.io/doc/user/windows.html#CTRL-W_f) - the same built-in window command in Neovim.
- [`:help gf`](https://vimhelp.org/editing.txt.html#gf) - related file-under-cursor behavior and filename parsing rules.
