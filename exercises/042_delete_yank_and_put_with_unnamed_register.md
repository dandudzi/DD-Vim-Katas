# Kata: Delete, Yank, and Put Safely

> **Environment:** Vim or Neovim; built-in registers

## Objective
Use the unnamed register for transposition and preserve a yank with the black-hole register. Success means exact text transformations with verified register contents.

## Tasks

### Drill A - Swap characters
Fixture: `Practica lvim`. Start on `l` in `lvim`. Swap it with the preceding space. **Verify:** `Practical vim`.

### Drill B - Swap lines
Fixture:
```text
2) two
1) one
3) three
```
Start on line 1. Move it below line 2. **Verify:** lines are ordered 1, 2, 3.

### Drill C - Preserve a yank
Fixture:
```javascript
collection = getCollection();
process(wrongName, target);
```
Start on `collection`. Yank it, delete `wrongName` without changing the unnamed register, then put the yank in its place. **Verify:** second line is `process(collection, target);` and `:reg 0` contains `collection`.

### Challenge
Reset Drill C and complete it without entering Visual mode.

## Hints
<details><summary>Hints</summary>
`x` writes the deleted character to the unnamed register; `p` puts it after the cursor. Register `"_` discards deletions, while register `0` retains the latest yank.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `F<Space>xp`
- B: `ddp`
- C/Challenge: `yiwj2w"_diw"0P`
</details>

## Reset and Cleanup
Restore the relevant fixture before each drill. Close the scratch buffer with `:bwipeout!`; registers may retain kata text only.

## Command Reference
| Keys | Effect |
|---|---|
| `x` / `dd` | Delete character / line into unnamed register |
| `p` / `P` | Put after / before |
| `"_d{motion}` | Delete into black-hole register |
| `"0p` | Put latest yank |

## References
- [`:help quote_`](https://vimhelp.org/change.txt.html#quote_)
- [`:help quote0`](https://vimhelp.org/change.txt.html#quote0)
