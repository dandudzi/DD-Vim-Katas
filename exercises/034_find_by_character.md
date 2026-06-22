# Kata: Find Characters on a Line

> **Environment:** Vim or Neovim; built-in motions

## Objective
Use `f`, `F`, `t`, `T`, `;`, and `,` for precise same-line movement. Success means reaching specified columns without search or arrows.

## Initial Fixture
```text
alpha: beta: gamma: delta
```
Start in Normal mode at column 1. Reset with `0` before each drill.

## Tasks

### Drill A - Find and repeat
Find the first colon, then repeat twice. **Verify:** columns are `6`, `12`, then `19`.

### Drill B - Reverse repeat
From the third colon, reverse the last find once. **Verify:** column `12`.

### Drill C - Stop before
From column 1, stop immediately before the second colon. **Verify:** cursor is on `a` in `beta`, column `11`.

### Challenge
Go to line end, stop immediately after the second colon when searching backward. **Verify:** cursor is on the space at column `13`.

## Hints
<details><summary>Hints</summary>
`f/F` land on the character; `t/T` stop one character before it in the direction of travel. `;` repeats and `,` reverses.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `f:;;`
- B: `,`
- C: `0t:;`
- Challenge: `$T:;`
</details>

## Reset and Cleanup
Use `0` between drills; close with `:bwipeout!`.

## Command Reference
| Keys | Effect |
|---|---|
| `f{c}` / `F{c}` | Find character forward / backward |
| `t{c}` / `T{c}` | Stop before character forward / backward |
| `;` / `,` | Repeat / reverse latest character find |

## References
- [`:help f`](https://vimhelp.org/motion.txt.html#f)
