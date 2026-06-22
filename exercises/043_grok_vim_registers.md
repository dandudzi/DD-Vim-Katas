# Kata: Choose the Correct Vim Register

> **Environment:** Vim or Neovim
> **Dependencies:** Clipboard drill requires `:echo has('clipboard')` to print `1`; skip it otherwise.

## Objective
Distinguish named, yank, black-hole, expression, and clipboard registers. Success means placing known values without accidental register overwrites.

## Initial Fixture
```text
alpha
beta
result:
```
Start on line 1 in Normal mode.

## Tasks

### Drill A - Named registers
Yank `alpha` into `a` and `beta` into `b`; append them after `result:` in order `beta alpha`. **Verify:** line 3 is `result: beta alpha` and `:reg a b` contains the two words.

### Drill B - Yank register survives deletion
Reset. Yank `alpha`, delete `beta`, then append the yank from register `0` to `result:`. **Verify:** line 3 is `result: alpha`.

### Drill C - Expression register
At the end of `result:`, enter Insert mode and insert the value of `6*35`. **Verify:** line 3 is `result:210`.

### Challenge - Clipboard, when available
Select all three lines and yank them to the `+` register. **Verify:** `:echo getreg('+')` contains all three lines. The correct Visual form is `ggVG"+y`, not `"+yy`.

## Hints
<details><summary>Hints</summary>
Prefix a yank or put with `"{register}`. In Insert mode, `<C-r>=` evaluates an expression.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `"ayiwj"byiwGA<Space><Esc>"bpA<Space><Esc>"ap`
- B: `yiwjddGA<Space><Esc>"0p`
- C: `GA<C-r>=6*35<CR><Esc>`
- Challenge: `ggVG"+y`
</details>

## Reset and Cleanup
Restore the fixture between drills. Clear kata registers with `:let @a='' | let @b=''`; clipboard cleanup is intentionally omitted to avoid overwriting prior clipboard data again.

## Command Reference
| Register | Meaning |
|---|---|
| `a-z` | Named registers |
| `0` | Latest yank |
| `_` | Black hole |
| `=` | Expression register |
| `+` | System clipboard, when supported |

## References
- [`:help registers`](https://vimhelp.org/change.txt.html#registers)
