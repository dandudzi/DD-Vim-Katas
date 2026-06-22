# Kata: Traverse the Jump List

> **Environment:** Vim or Neovim; built-in commands

## Objective
Create a predictable jump history and traverse it with `<C-o>` and `<C-i>`. Success means visiting three distant lines in reverse and forward order.

## Initial Fixture
Create 40 numbered lines with `:put =range(1,40)`, then delete the initial blank line with `ggdd`. Start on line 1 in Normal mode.

## Tasks

### Drill A - Build history
Jump to lines 10, 25, and 40 using linewise Ex jumps. **Verify:** `:jumps` shows entries for the earlier locations and the cursor is on line 40.

### Drill B - Go backward
Traverse backward three times. **Verify:** successive cursor lines are 25, 10, and 1.

### Drill C - Go forward
Traverse forward twice. **Verify:** successive cursor lines are 10 and 25.

### Challenge
Return to line 40 with a count, then go back to line 10 with a count. **Verify:** final `:echo line('.')` is `10`.

## Hints
<details><summary>Hints</summary>
`<C-o>` visits older jump-list entries; `<C-i>` visits newer ones. A count traverses several entries.
</details>

## Solution
<details><summary>Show exact commands and keys</summary>
- A: `:10<CR>:25<CR>:40<CR>`
- B: `<C-o><C-o><C-o>`
- C: `<C-i><C-i>`
- Challenge: `<C-i>` then `2<C-o>`
</details>

## Reset and Cleanup
Jump-list contents are session state; use a fresh scratch buffer/session for a fully deterministic rerun. Close with `:bwipeout!`.

## Command Reference
| Keys/command | Effect |
|---|---|
| `<C-o>` / `<C-i>` | Older / newer jump |
| `:jumps` | Inspect jump list |

## References
- [`:help jump-list`](https://vimhelp.org/motion.txt.html#jump-list)
