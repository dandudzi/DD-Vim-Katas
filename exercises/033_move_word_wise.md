# Kata: Move Precisely by Words

> **Environment:** Vim or Neovim; built-in motions

## Objective
Distinguish `w`, `b`, `e`, and `ge` across punctuation. Success means landing on exact characters without using search or arrow keys.

## Initial Fixture
```text
one,two  three-four five
```
Start in Normal mode on the `o` in `one`.

## Constraints
Use only `w`, `b`, `e`, `ge`, and counts. Reset with `0` before each drill.

## Tasks

### Drill A - Starts
Move forward twice by word starts. **Verify:** cursor is on `t` in `two`; `:echo col('.')` prints `5`.

### Drill B - Ends
Move to the end of the third word-like item. **Verify:** cursor is on `o` in `two`; column is `7`.

### Drill C - Reverse
Go to end of line, then move backward to the end of the previous word once. **Verify:** cursor is on `r` in `four`; column is `19`.

### Challenge
Reset to column 1, land on the `f` in `five` with one counted motion. **Verify:** column `21`.

## Hints
<details><summary>Hints</summary>
Punctuation forms separate words for lowercase word motions. A count applies to the motion.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `2w`
- B: `3e`
- C: `$ge`
- Challenge: `06w`
</details>

## Reset and Cleanup
Use `0` between drills and `:bwipeout!` afterward.

## Command Reference
| Motion | Destination |
|---|---|
| `w` / `b` | Next / previous word start |
| `e` / `ge` | Next / previous word end |

## References
- [`:help word`](https://vimhelp.org/motion.txt.html#word)
