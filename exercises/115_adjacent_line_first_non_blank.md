# Kata: Move to the Adjacent Line's First Non-Blank

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode motions `+` and `-`.

## Objective

By the end of this kata, you will be able to move to the first non-blank character of the next or previous line with `+` and `-`.

Success means: vertical movement lands directly on the first visible character of the destination line instead of preserving the current column.

## Prerequisites

- Know: counts in Normal mode.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm `n`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
alpha root
  beta branch
    gamma leaf
```

Start in Normal mode on the `t` in `beta` on line 2. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `+` or `-` for the final landing in each drill.
- Do not use `j`, `k`, `0`, `^`, arrow keys, or the mouse.
- Reset to the initial fixture before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** move downward and land on the first non-blank of the next line.

1. Move from line 2 to the first non-blank character of line 3.

**Verify:** the cursor is on the `g` in `gamma`, and `:echo line('.') . ',' . col('.')` prints `3,5`.

### Drill B - Add precision or repetition

**Goal:** move upward and land on the first non-blank of the previous line.

1. Reset the cursor to the documented start.
2. Move to the first non-blank character of line 1.

**Verify:** the cursor is on the `a` in `alpha`, and `:echo line('.') . ',' . col('.')` prints `1,1`.

### Drill C - Apply the workflow

**Goal:** add a count to skip directly to a farther line.

1. Reset the cursor to the documented start.
2. Move two lines downward in one motion.

**Verify:** the cursor is on the `g` in `gamma`, and the destination is still its first non-blank character.

### Challenge - Recall without prompts

Reset the fixture. Starting on line 2, move to the first non-blank of line 1, then finish on the first non-blank of line 3 using only adjacent-line first-non-blank motions and counts.

**Verify:** the final cursor position is line 3, column 5, and the buffer text is unchanged.

## Expected Final State

After the challenge, the buffer content must still be:

```text
alpha root
  beta branch
    gamma leaf
```

## Hints

<details>
<summary>Hint 1</summary>

These motions combine vertical travel with an automatic jump to the destination line's first visible character.

</details>

<details>
<summary>Hint 2</summary>

A count can make the downward motion skip multiple lines while keeping the same landing behavior.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `+` - move to the first non-blank of the next line.

### Drill B

1. `-` - move to the first non-blank of the previous line.

### Drill C

1. `2+` - move two lines down and land on the first non-blank there.

### Challenge

`-2+`

`-` lands on line 1's first non-blank. `2+` then skips directly to line 3 and lands on its `g`.

</details>

## Reset and Cleanup

- Between drills: return to the documented start position.
- After the kata: close the throwaway buffer with `:bd!`.
- Preserve user data: perform the exercise only in a scratch buffer.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `+` | Normal | Move to the first non-blank character of the next line. |
| `-` | Normal | Move to the first non-blank character of the previous line. |

## References

- `:help +`
- `:help -`
