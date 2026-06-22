# Kata: Edit a Macro as Text

> **Environment:** Vim or Neovim; built-in commands

## Objective
Put a known macro into the buffer, edit its literal keys, and write it back to a register. Success means repairing a case-toggling macro so it always uppercases.

## Initial Fixture
```text
1. One
2. two
3. Three
4. four
```
Start line 1, column 1. Define a deliberately flawed macro with `:let @a='0f.r)w~j'`.

## Tasks
### Drill A - Expose the macro
Put register `a` on a new line below the fixture. **Verify:** line 5 visibly contains `0f.r)w~j`.

### Drill B - Edit and write back
On line 5, replace `~` with `vU`, then yank the line characterwise back into register `a` without its newline. Delete the temporary line. **Verify:** `:echo @a` prints `0f.r)wvUj`.

### Drill C - Execute repaired macro
Return to line 1 and execute `a` four times. **Verify:** list text is `One`, `Two`, `Three`, `Four`; all punctuation is `)`.

### Challenge
Reset, perform the complete expose-edit-writeback-replay workflow, and leave no temporary macro line in the buffer.

## Hints
<details><summary>Hints</summary>
`:put a` creates a linewise copy. Use `"ay$`, not `"add`, to write edited characters back without a trailing newline.
</details>

## Solution
<details><summary>Show exact commands and keys</summary>
- A: `G:put a<CR>`
- B: `f~clvU<Esc>0"ay$dd`
- C: `gg4@a`
- Challenge: combine the above from reset
</details>

## Reset and Cleanup
Restore fixture and clear register `a` with `:let @a=''`; close scratch buffer.

## Command Reference
| Command | Effect |
|---|---|
| `:put a` | Put register as a new line |
| `"ay$` | Yank through line end into `a`, characterwise |
| `:let @a=...` | Define register deterministically |

## References
- [`:help :put`](https://vimhelp.org/change.txt.html#%3Aput)
- [`:help let-register`](https://vimhelp.org/change.txt.html#let-register)
