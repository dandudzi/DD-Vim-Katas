# Kata: Put Registers in Normal and Insert Modes

> **Environment:** Vim or Neovim; built-in commands

## Objective
Insert register text with Normal-mode put and Insert-mode `<C-r>`. Success means preserving exact spacing and choosing the right register type.

## Tasks

### Drill A - Insert a characterwise yank
Fixture:
```javascript
collection = getCollection();
process(wrongName, target);
```
Start on `collection`. Yank it, then replace `wrongName` in Insert mode using register `0`. **Verify:** second line is `process(collection, target);`.

### Drill B - Put a linewise register
Fixture:
```text
red
blue
```
Start on line 1. Yank the line and put it after line 2. **Verify:** lines are `red`, `blue`, `red`.

### Drill C - Put before without cursor drift
Reset Drill B, yank line 2 and put it above line 1 with `gP`. **Verify:** lines are `blue`, `red`, `blue`; the cursor is on line 2 (`red`), immediately after the inserted linewise text.

### Challenge
Reset Drill A and complete it without using Normal-mode `p`/`P`.

## Hints
<details><summary>Hints</summary>
In Insert mode, `<C-r>0` inserts the latest yank. `gP` behaves like `P` but leaves the cursor after inserted text.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A/Challenge: `yiwj2wciw<C-r>0<Esc>`
- B: `yyjp`
- C: `jyygggP`
</details>

## Reset and Cleanup
Restore fixtures between drills; close with `:bwipeout!`. Registers retain only fixture text.

## Command Reference
| Keys | Mode | Effect |
|---|---|---|
| `<C-r>0` | Insert | Insert latest yank |
| `p` / `P` | Normal | Put after / before |
| `gP` | Normal | Put before, leaving cursor after inserted text (on the following line for a linewise register) |

## References
- [`:help i_CTRL-R`](https://vimhelp.org/insert.txt.html#i_CTRL-R)
- [`:help gP`](https://vimhelp.org/change.txt.html#gP)
