# Kata: Return to the Previous Jump Origin

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses the built-in previous-context motions ```` and `''`. This kata deliberately excludes general jumplist traversal such as `<C-o>` and `<C-i>`.

## Objective

By the end of this kata, you will be able to return to the origin of the latest jump with ```` and `''`.

Success means: after making a jump with a search, you can return either to the exact original cursor position or to the first non-blank character of the origin line on demand.

## Prerequisites

- Know: basic forward search with `/pattern<CR>`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Open a scratch buffer with `:enew`.
2. Insert the fixture exactly as written below.
3. Put the cursor on the `m` in `marker` on line 2, column 12.
4. Run `:nohlsearch` and confirm you are in Normal mode before each drill.

## Initial Fixture

Create a new buffer and insert exactly:

```text
alpha lead
    origin marker here
plain middle
target arrives now
omega tail
```

Start in Normal mode on the `m` in `marker` on line 2, column 12. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `/target<CR>` to create the jump and use ```` or `''` to return from it.
- Treat the two return motions as distinct: ```` must preserve the exact column, and `''` must land on the first non-blank of the origin line.
- Do not use `<C-o>`, `<C-i>`, `m{char}`, `gg`, `G`, arrow keys, or the mouse.
- Reset to the initial fixture before each drill.

## Tasks

### Drill A - Isolate the exact return

**Goal:** return to the exact cursor position from before the latest jump.

1. From `marker`, jump to the unique `target` match with one forward search.
2. Return to the position before that jump with the exact previous-context motion.

**Verify:** the cursor is on the `m` in `marker`, and `:echo line('.') . ',' . col('.')` prints `2,12`.

### Drill B - Isolate the linewise return

**Goal:** return to the origin line without restoring the original column.

1. Reset to the documented start state.
2. Jump to the unique `target` match again.
3. Return to the previous jump origin with the linewise previous-context motion.

**Verify:** the cursor is on the `o` in `origin`, and `:echo line('.') . ',' . col('.')` prints `2,5`.

### Drill C - Apply the workflow

**Goal:** bounce between both sides of the same jump with the exact-return motion.

1. Reset to the documented start state.
2. Jump to `target`.
3. Use the exact previous-context motion twice in a row.

**Verify:** the cursor finishes back on the `t` in `target`, and `:echo line('.') . ',' . col('.')` prints `4,1`.

### Challenge - Recall without prompts

Reset the fixture. Jump from `marker` to `target`, then use the linewise previous-context motion twice to bounce to the origin line and back to `target`.

**Verify:** the final cursor position is line 4, column 1 on `target`, and the buffer text is unchanged.

## Expected Final State

After the challenge, the buffer content must still be:

```text
alpha lead
    origin marker here
plain middle
target arrives now
omega tail
```

Verify all of the following:

- The cursor is on the `t` in `target` at line 4, column 1.
- `:echo line('.') . ',' . col('.')` prints `4,1`.
- No text in the buffer has changed.

## Hints

<details>
<summary>Hint 1</summary>

Both motions use the previous-context mark left by the latest jump, but they land differently.

</details>

<details>
<summary>Hint 2</summary>

```` returns to the exact old cursor position; `''` returns to the first non-blank character of that line. Repeating either motion toggles back to the other side of the same jump.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `/target<CR>` - jump from line 2 to the unique `target` match on line 4.
2. ```` - return to the exact pre-jump cursor position at line 2, column 12.

### Drill B

1. `/target<CR>` - jump from line 2 to `target`.
2. `''` - return to the first non-blank character of the origin line at line 2, column 5.

### Drill C

1. `/target<CR>` - jump to `target`.
2. ```` - return to `marker` at line 2, column 12.
3. ```` - jump back to `target` at line 4, column 1.

### Challenge

`/target<CR>''''`

The search sets the previous-context mark at line 2, column 12. The first `''` returns linewise to line 2, column 5, and the second `''` jumps back to the search result on line 4.

</details>

## Reset and Cleanup

- Between drills: run `:enew`, reinsert the fixture, and return the cursor to line 2, column 12.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: both Vim and Neovim treat ```` as an exact jump and `''` as a linewise jump to the same previous-context mark.
- Scope boundary: these motions target only the latest previous-context location; full jumplist traversal with `<C-o>` and `<C-i>` is a different skill.
- Edge case: `:keepjumps` suppresses updates to this mark, so do not use it during this kata.
- LazyVim note: Flash jumps and search-like plugin motions may or may not update the previous-context mark in the same way as `/target<CR>`. If you try a Flash variant, verify the mapping with `:verbose nmap s`, then test ```` immediately and compare the landing position.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `/target<CR>` | Normal -> Command-line | Jump to the unique `target` match and set the previous-context mark at the origin. |
| ```` | Normal | Jump to the exact position before the latest jump. |
| `''` | Normal | Jump to the first non-blank character of the line before the latest jump. |
| `:echo line('.') . ',' . col('.')` | Command-line | Report the current line and column for verification. |

## References

- `:help mark-motions`
- `:help ''`
- `:help m'`
- `:help :keepjumps`
- `:help jump-motions`
