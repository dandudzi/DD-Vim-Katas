# Kata: Go to File End or an Exact Line Number

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode motions `G` and `{count}G`.

## Objective

By the end of this kata, you will be able to jump to the last line with `G` or to an exact line number with `{count}G`.

Success means: you can treat `G` as fast file-level landing, either to the end or to a chosen line number, while keeping the current column when possible.

## Prerequisites

- Know: counts in Normal mode and how to inspect `line('.')`.
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

Start in Normal mode on the `1` on line 1, column 3. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `G` for the final landing in each drill.
- Do not use `gg`, `j`, `k`, `/`, `:$`, arrow keys, or the mouse.
- Reset to the initial fixture before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** jump directly to the last line of the file.

1. Move from line 1 to the final line with one `G` motion.

**Verify:** the cursor is on the `6`, and `:echo line('.') . ',' . col('.')` prints `6,3`.

### Drill B - Add precision or repetition

**Goal:** use a count to land on an exact middle line.

1. Reset the cursor to the documented start.
2. Jump directly to line 3 with one counted `G` motion.

**Verify:** the cursor is on the `3`, and `:echo line('.') . ',' . col('.')` prints `3,3`.

### Drill C - Apply the workflow

**Goal:** land on another exact line using the same motion family.

1. Reset the cursor to the documented start.
2. Jump directly to line 5 with one counted `G` motion.

**Verify:** the cursor is on the `5`, and `:echo line('.') . ',' . col('.')` prints `5,3`.

### Challenge - Recall without prompts

Reset the fixture. Starting on the `1`, jump to the last line and then finish on line 3 using only `G` motions with or without counts.

**Verify:** the final cursor position is line 3, column 5, and the buffer text is unchanged.

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

Bare `G` means "go to the final line"; a prefixed count turns it into an exact line-number jump.

</details>

<details>
<summary>Hint 2</summary>

Like `gg`, this family tries to preserve your current column on the destination line.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `G` - jump to the final line.

### Drill B

1. `3G` - jump directly to line 3.

### Drill C

1. `5G` - jump directly to line 5.

### Challenge

`G3G`

`G` lands on the file's final line. `3G` then jumps straight back to line 3. In this fixed-width fixture, both jumps preserve column 3.

</details>

## Reset and Cleanup

- Between drills: return to the documented start position.
- After the kata: close the throwaway buffer with `:bd!`.
- Preserve user data: perform the exercise only in a scratch buffer.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `G` | Normal | Jump to the final line, keeping the current column when possible. |
| `{count}G` | Normal | Jump to line `{count}`, keeping the current column when possible. |

## References

- `:help G`
- `:help gg`
- `:help motion.txt`
