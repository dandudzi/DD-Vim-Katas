# Kata: Return to Local and Built-in Marks

> **Environment:** Vim or Neovim; built-in marks

## Objective
Set a local mark and return by line or exact position; use built-in change and visual-selection marks. Success means returning to exact documented coordinates.

## Initial Fixture
```text
alpha one
beta two
gamma three
delta four
epsilon five
```
Start in Normal mode on the `t` in `two` (line 2, column 6).

## Tasks

### Drill A - Exact local mark
Set mark `a`, move to the end of the file, then return to its exact position. **Verify:** line 2, column 6.

### Drill B - Linewise return
Repeat, but return to the first nonblank of the marked line. **Verify:** line 2, column 1.

### Drill C - Built-in change mark
Change `two` to `TWO`, move elsewhere, then jump to the position of the last change. **Verify:** cursor is in the changed region on line 2; `:echo line('.')` prints `2`.

### Challenge
Visually select lines 3-4, leave Visual mode, move to line 1, then jump to the exact start and end of the previous selection. **Verify:** `` `< `` is line 3 column 1 and `` `> `` is line 4 column 10.

## Hints
<details><summary>Hints</summary>
A backtick returns to an exact position; an apostrophe returns to the first nonblank on the marked line. `.` identifies the latest change.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `maG` then `` `a ``
- B: `maG'a`
- C: `ciwTWO<Esc>G` then `` `. ``
- Challenge: `jVj<Esc>gg` then `` `< `` and `` `> ``
</details>

## Reset and Cleanup
Restore the fixture after Drill C. Remove mark `a` with `:delmarks a`; close with `:bwipeout!`.

## Command Reference
| Keys | Effect |
|---|---|
| `m{a-z}` | Set local mark |
| `` `{mark} `` / `'{mark}` | Exact / linewise return |
| `` `. `` | Position of last change |
| `` `< `` / `` `> `` | Exact Visual selection endpoints |

## References
- [`:help mark-motions`](https://vimhelp.org/motion.txt.html#mark-motions)
