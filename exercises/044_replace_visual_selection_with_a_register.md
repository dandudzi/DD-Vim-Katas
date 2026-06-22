# Kata: Replace a Visual Selection from a Register

> **Environment:** Vim or Neovim; built-in commands

## Objective
Replace selected text with a register and understand that Visual `p` stores the displaced text in the unnamed register. Success means replacing and swapping words exactly.

## Tasks

### Drill A - Replace from yank register
Fixture:
```javascript
collection = getCollection();
process(wrongName, target);
```
Start on `collection`. Yank it, select `wrongName`, and replace the selection from register `0`. **Verify:** second line contains `process(collection, target);`.

### Drill B - Inspect displaced text
After Drill A, inspect the unnamed register. **Verify:** `:echo getreg('"')` prints `wrongName`.

### Drill C - Swap words
Fixture: `I like chips and fish.` Start on `chips`. Swap `chips` and `fish` using Visual replacement and the displaced unnamed-register content. **Verify:** `I like fish and chips.`

### Challenge
Reset Drill C and perform the swap without using a named mark.

## Hints
<details><summary>Hints</summary>
After Visual `p`, the replaced selection becomes the unnamed register. Return to the first location with a temporary local mark for Drill C; the challenge can use a search.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `yiwj2wviw"0p`
- B: `:echo getreg('"')<CR>`
- C: `diwmmwwviwp` then `` `mP ``.
- Challenge: `diwwwviwp2F<Space>P`

In Drill C, deleting `chips` stores it; Visual `p` over `fish` places `chips` and stores `fish`; returning and `P` inserts `fish` at the deletion point.
</details>

## Reset and Cleanup
Restore the fixture before each drill and close with `:bwipeout!`. These drills overwrite unnamed and delete registers with fixture text.

## Command Reference
| Keys | Effect |
|---|---|
| `viw` | Select inner word |
| `"0p` | Replace selection from yank register |
| Visual `p` | Replace selection; displaced text enters unnamed register |

## References
- [`:help v_p`](https://vimhelp.org/change.txt.html#v_p)
