# Kata: Jump Spatially Through Quickfix

> **Environment:** Vim or Neovim; built-in quickfix commands only.
> **Dependencies:** None.
> **Portability:** Uses built-in quickfix spatial commands `:cbelow` and `:cabove`.

## Objective

By the end of this kata, you will be able to jump to the next or previous quickfix entry in the current buffer based on cursor position using `:cbelow` and `:cabove`.

Success means: after moving manually to a non-match line, you can land on the correct quickfix entry above or below the cursor without stepping through unrelated entries.

## Prerequisites

- Know: basic quickfix creation with `:vimgrep`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo exists(':cbelow') . '|' . exists(':cabove')` and confirm it prints `2|2`.

## Setup

1. The setup saves the current quickfix list before replacing it.
2. Run `:let g:kata_152_dir = tempname() | call mkdir(g:kata_152_dir, 'p')`.
3. Run the setup block exactly:

```vim
:if !exists('g:kata_152_qf') | let g:kata_152_qf = getqflist({'items': 1, 'title': 1, 'context': 1, 'idx': 1, 'quickfixtextfunc': 1}) | endif
:let g:kata_152_file = g:kata_152_dir . '/notes.txt'
:call writefile([
\ 'alpha intro',
\ 'TODO first',
\ 'plain spacer',
\ 'cursor anchor',
\ 'TODO second',
\ 'plain spacer',
\ 'lower anchor',
\ 'TODO third',
\ 'omega tail',
\ ], g:kata_152_file)
:execute 'edit ' . fnameescape(g:kata_152_file)
:execute 'vimgrep /TODO/gj ' . fnameescape(g:kata_152_file)
:call setqflist([], 'a', {'title': 'Spatial TODOs'})
```

4. Put the cursor on the `c` in `cursor anchor` at line 4, column 1.
5. Confirm Normal mode is active and `:echo line('.') . ',' . col('.') . '|' . getqflist({'size': 1}).size` prints `4,1|3`.

## Initial Fixture

The setup creates this disposable file:

```text
alpha intro
TODO first
plain spacer
cursor anchor
TODO second
plain spacer
lower anchor
TODO third
omega tail
```

Start in Normal mode on the `c` in `cursor anchor` at line 4, column 1. Do not modify the file before beginning Drill A.

## Constraints

- Use `:cbelow` or `:cabove` for the final landing in each drill.
- Do not use `:cnext`, `:cprev`, `:cfirst`, `:clast`, `/`, `?`, or the mouse.
- Reset by rerunning the documented setup before each drill unless the drill explicitly gives a new cursor position.

## Tasks

### Drill A - Isolate the skill

**Goal:** jump to the nearest quickfix entry below the cursor.

1. Start from line 4, `cursor anchor`.
2. Jump to the next quickfix entry below the current line.

**Verify:** the cursor is on the `T` in `TODO second`, and `:echo line('.') . ',' . col('.')` prints `5,1`.

### Drill B - Add precision or repetition

**Goal:** jump upward to the nearest quickfix entry above the cursor.

1. Reset to the documented setup.
2. Put the cursor on the `l` in `lower anchor` at line 7, column 1.
3. Jump to the quickfix entry above the current line.

**Verify:** the cursor is on the `T` in `TODO second`, and `:echo line('.') . ',' . col('.')` prints `5,1`.

### Drill C - Apply the workflow

**Goal:** skip directly to the second quickfix entry below a manual cursor move.

1. Reset to the documented setup.
2. Put the cursor on the `p` in `plain spacer` at line 3, column 1.
3. Jump to the second quickfix entry below the current line with one command.

**Verify:** the cursor is on the `T` in `TODO third`, and `:echo line('.') . ',' . col('.')` prints `8,1`.

### Challenge - Recall without prompts

Reset the setup. Put the cursor on the `l` in `lower anchor` at line 7, column 1. Land on `TODO first` using one spatial quickfix command with a count.

**Verify:** the cursor is on line 2, column 1, and the buffer text is unchanged.

## Expected Final State

After the challenge, the relevant content must still be:

```text
alpha intro
TODO first
plain spacer
cursor anchor
TODO second
plain spacer
lower anchor
TODO third
omega tail
```

Verify all of the following:

- The current buffer is `notes.txt`.
- The cursor is on line 2, column 1.
- `:echo getqflist({'title': 1}).title` prints `Spatial TODOs`.

## Hints

<details>
<summary>Hint 1</summary>

These commands use the cursor's current line inside the current buffer, not the current quickfix index.

</details>

<details>
<summary>Hint 2</summary>

Counts go before the command name, so `:2cabove` and `:2cbelow` can skip one matching line and land on the next one.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:cbelow<CR>` - jump to the first quickfix entry below line 4.

### Drill B

1. `7G` - place the cursor on `lower anchor`.
2. `:cabove<CR>` - jump to the first quickfix entry above line 7.

### Drill C

1. `3G` - place the cursor on line 3.
2. `:2cbelow<CR>` - jump to the second quickfix entry below line 3.

### Challenge

`7G:2cabove<CR>`

From line 7, the quickfix entries above are at lines 5 and 2. A count of `2` lands on the older one at line 2.

</details>

## Reset and Cleanup

- Between drills: rerun the documented setup to restore the file, quickfix list, and starting cursor position.
- After the kata: run `:silent! cclose | for g:kata_152_buf in getbufinfo() | if stridx(g:kata_152_buf.name, g:kata_152_dir) == 0 | execute 'bwipeout! ' . g:kata_152_buf.bufnr | endif | endfor | call setqflist([], 'r', g:kata_152_qf) | call delete(g:kata_152_dir, 'rf') | unlet g:kata_152_buf g:kata_152_dir g:kata_152_file g:kata_152_qf`.
- Preserve user data: cleanup restores the quickfix list that was current before the first setup run.

## Notes and Portability

- Built-in behavior: `:cabove` and `:cbelow` are built into Vim and Neovim.
- Ordering requirement: these commands assume the quickfix entries are sorted by buffer number and line number.
- Same-line detail: if multiple entries exist on the same line, only the first one on that line is considered by `:cabove` and `:cbelow`.
- LazyVim/Trouble note: Trouble is useful for viewing the list, but it does not replace the spatial quickfix commands practiced here. Use `:cbelow` and `:cabove` for the drill, and verify Trouble mappings with `:verbose nmap <Space>xq` only as an optional view.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:cbelow` | Command-line | Jump to the first quickfix entry below the current line in the current buffer. |
| `:cabove` | Command-line | Jump to the first quickfix entry above the current line in the current buffer. |
| `:2cbelow` | Command-line | Jump to the second quickfix entry below the current line in the current buffer. |
| `:2cabove` | Command-line | Jump to the second quickfix entry above the current line in the current buffer. |

## References

- [`:help :cbelow`](https://vimhelp.org/quickfix.txt.html#%3Acbelow) - jumping to quickfix entries below the current line.
- [`:help :cabove`](https://vimhelp.org/quickfix.txt.html#%3Acabove) - jumping to quickfix entries above the current line.
- [Neovim help: `:cbelow`](https://neovim.io/doc/user/quickfix.html#:cbelow) - Neovim quickfix spatial navigation.
