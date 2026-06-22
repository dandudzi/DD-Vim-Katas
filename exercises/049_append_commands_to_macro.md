# Kata: Append to an Existing Macro

> **Environment:** Vim or Neovim; built-in macros

## Objective
Repair a macro by appending commands with uppercase register recording. Success means making a one-line macro advance safely through all targets.

## Initial Fixture
```text
1. one
2. two
3. three
4. four
```
Start line 1, column 1; clear register `a`.

## Tasks

### Drill A - Record the incomplete macro
Record a transformation that produces `1) One` but does not move down. **Verify:** cursor remains on line 1 and `:reg a` has no final `j`.

### Drill B - Append movement
Append a downward movement to `a` without replacing its existing contents. **Verify:** `:reg a` now ends in `j` and recording that append has moved the cursor to line 2.

### Drill C - Replay
From line 2, replay the repaired macro three times. **Verify:** all four lines match `N) Capitalized` and the cursor ends at line 4 (the final `j` cannot move below the last line).

### Challenge
Reset and complete the process without manually reconstructing register `a`.

## Hints
<details><summary>Hints</summary>
Recording to uppercase `A` appends to lowercase register `a`; `qa` would overwrite it.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `qa0f.r)w~q`
- B: `qAjq`
- C: `3@a`
- Challenge: combine the above after reset
</details>

## Reset and Cleanup
Restore fixture, clear register with `:let @a=''`, and close with `:bwipeout!`.

## Command Reference
| Keys | Effect |
|---|---|
| `qa` | Record, replacing register `a` |
| `qA` | Record, appending to register `a` |
| `:reg a` | Inspect register |

## References
- [`:help q`](https://vimhelp.org/repeat.txt.html#q)
