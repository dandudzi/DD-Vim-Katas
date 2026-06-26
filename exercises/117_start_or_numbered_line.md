# Kata: Go to Line 1 or an Exact Line Number

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode motions `gg` and `{count}gg`.

## Objective

By the end of this kata, you will be able to jump to the first line with `gg` or to an exact line number with `{count}gg`.

Success means: you land on the target line immediately while keeping the current column when the destination line is long enough.

## Prerequisites

- Know: counts in Normal mode and how to check the cursor position with `:echo line('.')`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm `n`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
ab1xy
ab2xy
ab3xy
ab4xy
ab5xy
ab6xy
```

Start in Normal mode on the `5` on line 5, column 3. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `gg` for the final landing in each drill.
- Do not use `G`, `j`, `k`, `/`, `:5`, arrow keys, or the mouse.
- Reset to the initial fixture before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** jump directly to the start of the file.

1. Move from line 5 to line 1 with one `gg` motion.

**Verify:** the cursor is on the `1`, and `:echo line('.') . ',' . col('.')` prints `1,3`.

### Drill B - Add precision or repetition

**Goal:** use a count to land on an exact line in the middle of the file.

1. Reset the cursor to the documented start.
2. Jump directly to line 4 with one counted `gg` motion.

**Verify:** the cursor is on the `4`, and `:echo line('.') . ',' . col('.')` prints `4,3`.

### Drill C - Apply the workflow

**Goal:** jump to another exact line lower in the file without traversing line by line.

1. Reset the cursor to the documented start.
2. Jump directly to line 6 with one counted `gg` motion.

**Verify:** the cursor is on the `6`, and `:echo line('.') . ',' . col('.')` prints `6,3`.

### Challenge - Recall without prompts

Reset the fixture. Starting on the `5`, jump to line 1 and then finish on line 6 using only `gg` motions with or without counts.

**Verify:** the final cursor position is line 6, column 3, and the buffer text is unchanged.

## Expected Final State

After the challenge, the buffer content must still be:

```text
ab1xy
ab2xy
ab3xy
ab4xy
ab5xy
ab6xy
```

## Hints

<details>
<summary>Hint 1</summary>

`gg` and `{count}gg` jump to the requested line and try to keep your current column.

</details>

<details>
<summary>Hint 2</summary>

For an exact destination, put the line number before `gg` instead of moving there incrementally.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `gg` - jump to the first line.

### Drill B

1. `4gg` - jump directly to line 4.

### Drill C

1. `6gg` - jump directly to line 6.

### Challenge

`gg6gg`

`gg` lands on line 1. `6gg` then jumps straight to line 6. In this fixed-width fixture, both jumps preserve column 3.

</details>

## Reset and Cleanup

- Between drills: return to the documented start position.
- After the kata: close the throwaway buffer with `:bd!`.
- Preserve user data: perform the exercise only in a scratch buffer.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `gg` | Normal | Jump to line 1, keeping the current column when possible. |
| `{count}gg` | Normal | Jump to line `{count}`, keeping the current column when possible. |

## References

- `:help gg`
- `:help G`
- `:help motion.txt`
