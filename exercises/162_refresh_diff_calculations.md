# Kata: Refresh Diff Calculations

> **Environment:** Vim or Neovim; built-in diff mode.
> **Dependencies:** None.
> **Portability:** Uses built-in `:diffupdate` and `diff_hlID()`.

## Objective

By the end of this kata, you will be able to force diff highlighting to catch
up with manual edits by running `:diffupdate`.

Success means: you can prove a within-line edit is not yet treated as a diff,
then make it visible with `:diffupdate`.

## Prerequisites

- Know: how to enter diff mode and edit text in one diff window.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo exists('*diff_hlID')` and confirm it prints `1`.

## Setup

1. Run the setup block exactly:

```vim
:let g:kata_162_dir = tempname()
:call mkdir(g:kata_162_dir, 'p')
:call writefile(['alpha', 'BETA', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta'], g:kata_162_dir.'/left.txt')
:call writefile(['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta'], g:kata_162_dir.'/right.txt')
:execute 'edit '.fnameescape(g:kata_162_dir.'/left.txt')
:execute 'vert diffsplit '.fnameescape(g:kata_162_dir.'/right.txt')
:wincmd h
```

2. Stay in `left.txt`.
3. Put the cursor on the `z` in `zeta` at line 6, column 1.
4. Confirm `:echo expand('%:t') . ' ' . line('.') . ',' . col('.')` prints
   `left.txt 6,1`.

## Initial Fixture

The two files must contain:

```text
left.txt
alpha
BETA
gamma
delta
epsilon
zeta
eta
theta
```

```text
right.txt
alpha
beta
gamma
delta
epsilon
zeta
eta
theta
```

Only line 2 differs initially.

## Constraints

- Make the line-6 edit in `left.txt`.
- Use `:diffupdate` rather than reopening the diff.
- Reset with `:edit! | diffupdate` before drills that need the original text.

## Tasks

### Drill A - Show the stale diff state

**Goal:** prove a new within-line edit is not yet tracked as a diff.

1. From line 6 in `left.txt`, run `:echo diff_hlID(6, 1)`.
2. Change `zeta` to `ZETA`.
3. Run `:echo diff_hlID(6, 1)` again before refreshing.

**Verify:** both checks print `0`.

### Drill B - Refresh the diff

**Goal:** make the new line-6 difference visible.

1. Staying in `left.txt`, run `:diffupdate`.
2. Run `:echo diff_hlID(6, 1) > 0`.

**Verify:** the expression prints `1`, meaning line 6 is now highlighted as a
diff.

### Drill C - Clear the diff again

**Goal:** make both files match and refresh the diff state.

1. Switch to `right.txt`.
2. Change line 6 from `zeta` to `ZETA`.
3. Run `:diffupdate`.
4. Check `:echo diff_hlID(6, 1)`.

**Verify:** the check prints `0`, because line 6 now matches in both windows.

### Challenge - Create and remove a diff on demand

Reset the setup. Create a new line-6 difference, confirm it is invisible
before refresh, then make it visible with `:diffupdate`, then edit the other
window to match and clear it with a final `:diffupdate`.

**Verify:** the sequence of checks on line 6 is `0`, then `1`, then `0`.

## Hints

<details>
<summary>Hint 1</summary>

`diff_hlID()` returns `0` when the location is not currently highlighted as a
diff.

</details>

<details>
<summary>Hint 2</summary>

The diff engine usually notices inserted or deleted lines quickly, but
within-line edits often need an explicit refresh.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:echo diff_hlID(6, 1)<CR>`
2. `cwZETA<Esc>`
3. `:echo diff_hlID(6, 1)<CR>`

### Drill B

1. `:diffupdate<CR>`
2. `:echo diff_hlID(6, 1) > 0<CR>`

### Drill C

1. `<C-w>l`
2. `6GcwZETA<Esc>`
3. `:diffupdate<CR>`
4. `:echo diff_hlID(6, 1)<CR>`

### Challenge

`cwZETA<Esc>:echo diff_hlID(6, 1)<CR>:diffupdate<CR>:echo diff_hlID(6, 1) > 0<CR><C-w>l6GcwZETA<Esc>:diffupdate<CR>:echo diff_hlID(6, 1)<CR>`

</details>

## Reset and Cleanup

- Between drills: in `left.txt`, run `:edit! | diffupdate`, then restore the
  cursor to line 6. If you changed `right.txt`, reset it the same way there.
- After the kata:

```vim
:diffoff!
:for g:kata_162_buf in getbufinfo()
:  if stridx(g:kata_162_buf.name, g:kata_162_dir) == 0
:    execute 'bwipeout! ' . g:kata_162_buf.bufnr
:  endif
:endfor
:call delete(g:kata_162_dir, 'rf')
:unlet g:kata_162_buf g:kata_162_dir
```

- Preserve user data: both files live in a temporary directory created by the
  setup.

## Notes and Portability

- `diff_hlID()` is a built-in Vimscript function that exposes whether a given
  location is currently highlighted by diff mode.
- This kata focuses on within-line edits because they are a common case where
  `:diffupdate` is needed explicitly.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:diffupdate` | Command-line | Recompute diff highlighting and folds. |
| `diff_hlID({lnum}, {col})` | Vimscript function | Return the diff highlight group ID at a position, or `0` when absent. |
| `cw...<Esc>` | Normal | Replace one word to create a within-line change. |

## References

- [`:help :diffupdate`](https://vimhelp.org/diff.txt.html#%3Adiffupdate) - refresh diff highlighting and folds.
- [`:help diff_hlID()`](https://vimhelp.org/builtin.txt.html#diff_hlID%28%29) - inspect diff highlighting programmatically.
- [Neovim help: `:diffupdate`](https://neovim.io/doc/user/diff.html#%3Adiffupdate) - Neovim diff refresh behavior.
