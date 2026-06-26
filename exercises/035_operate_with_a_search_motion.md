# Kata: Combine an Operator with Search

> **Environment:** Vim or Neovim; built-in commands

## Objective
Use a search as a motion for `d` and `c`. Success means changing text up to a searched destination without Visual mode.

## Initial Fixture
```text
This phrase takes time but
eventually gets to the point.
```
Start in Normal mode on the `t` in `takes` (line 1, column 13). Reset before each drill.

## Tasks

### Drill A - Navigate only
Search forward for `gets`. **Verify:** cursor is on its `g`, line 2 column 12.

### Drill B - Delete to search
Reset, then delete from `takes` up to, but not including, `gets`, using one operator plus search motion. **Verify:** buffer is `This phrase gets to the point.` on one line.

### Drill C - Change to search
Reset, replace that same span with `finally `. **Verify:** buffer is `This phrase finally gets to the point.`

### Challenge
Complete Drill C without entering Visual mode or issuing a separate navigation search first.

## Hints
<details><summary>Hints</summary>
After an operator, `/pattern<CR>` supplies a characterwise motion ending just before the match.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `/gets<CR>`
- B: `d/gets<CR>`
- C/Challenge: `c/gets<CR>finally <Esc>`
</details>

## Reset and Cleanup
Use `u` immediately after a drill or restore the fixture. `:nohlsearch` clears highlighting; `:bwipeout!` closes the scratch buffer.

## LazyVim Note
If Flash is installed, operator-pending Flash can sometimes replace the `/pattern<CR>` motion for visible targets. Verify the operator-pending mapping with `:verbose omap s` or the mapping documented by your config; do not assume a fixed label or provider-specific key. The built-in solution remains `operator` plus search.

## Command Reference
| Form | Effect |
|---|---|
| `d/pat<CR>` | Delete to next match |
| `c/pat<CR>` | Change to next match |

## References
- [`:help search-commands`](https://vimhelp.org/pattern.txt.html#search-commands)
- [`:help operator`](https://vimhelp.org/motion.txt.html#operator)
