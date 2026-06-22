# Kata: Traverse the Change List

> **Environment:** Vim or Neovim; built-in commands

## Objective
Create distinct changes and revisit them using `g;`, `g,`, `` `. ``, and `gi`. Success means reaching each changed location in known order.

## Initial Fixture
```text
alpha
beta
gamma
delta
```
Start in Normal mode on line 1. Use a fresh scratch buffer so earlier changes do not affect the list.

## Setup
Make these changes in order: append `!` to line 1, line 3, then line 4. End on line 4.

## Tasks

### Drill A - Inspect
Display the change list. **Verify:** `:changes` includes entries on lines 1, 3, and 4.

### Drill B - Traverse backward
Visit older change positions twice. **Verify:** cursor visits line 3, then line 1.

### Drill C - Traverse forward
Visit newer change positions twice. **Verify:** cursor visits line 3, then line 4.

### Challenge
Move to line 2; jump to the last change, then return to the last insertion and enter Insert mode there. Type `?`, leave Insert mode. **Verify:** line 4 ends `!?`.

## Hints
<details><summary>Hints</summary>
`g;` is older, `g,` newer. `` `. `` jumps to the latest change. `gi` resumes Insert mode at the last insertion point.
</details>

## Solution
<details><summary>Show exact keys</summary>
- Setup: `A!<Esc>2jA!<Esc>jA!<Esc>`
- B: `g;g;`
- C: `g,g,`
- Challenge: `2G` then `` `. `` then `gi?<Esc>`
</details>

## Reset and Cleanup
Use a new scratch buffer for each rerun because undo does not erase all historical change-list entries. Close with `:bwipeout!`.

## Command Reference
| Keys | Effect |
|---|---|
| `g;` / `g,` | Older / newer change position |
| `` `. `` | Latest change position |
| `gi` | Insert at last insertion position |

## References
- [`:help change-list`](https://vimhelp.org/motion.txt.html#change-list)
