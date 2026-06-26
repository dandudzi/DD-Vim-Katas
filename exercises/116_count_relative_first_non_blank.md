# Kata: Jump Count-Relative to a Line's First Non-Blank

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode motion `_`.

## Objective

By the end of this kata, you will be able to use `_` and `{count}_` to land on the first non-blank character of the current line or a later line in one motion.

Success means: you can skip directly to the destination line's first visible character without separate vertical motion and column correction.

## Prerequisites

- Know: `j`, counts in Normal mode, and the difference between physical line start and first non-blank.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm `n`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
alpha root
  beta branch
    gamma leaf
 delta trunk
    epsilon twig
```

Start in Normal mode on the `e` in `beta` on line 2. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `_` for the final landing in each drill.
- Do not use `+`, `-`, `j`, `k`, `0`, `^`, arrow keys, or the mouse.
- Reset to the initial fixture before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** land on the first non-blank character of the current line.

1. Move from the middle of line 2 to that line's first non-blank character with one `_` motion.

**Verify:** the cursor is on the `b` in `beta`, and `:echo line('.') . ',' . col('.')` prints `2,3`.

### Drill B - Add precision or repetition

**Goal:** use a count so the same motion lands on a later line.

1. Reset the cursor to the documented start.
2. Jump to the first non-blank character of line 4 with a single counted `_` motion.

**Verify:** the cursor is on the `d` in `delta`, and `:echo line('.') . ',' . col('.')` prints `4,2`.

### Drill C - Apply the workflow

**Goal:** skip farther ahead while keeping the same landing behavior.

1. Reset the cursor to the documented start.
2. Jump directly to the first non-blank character of line 5 with one counted `_` motion.

**Verify:** the cursor is on the `e` in `epsilon`, and `:echo line('.') . ',' . col('.')` prints `5,5`.

### Challenge - Recall without prompts

Reset the fixture. Starting on the `e` in `beta`, land on the first non-blank of line 4 and then finish on the first non-blank of line 5 using only `_` motions and counts.

**Verify:** the final cursor position is line 5, column 5, and the buffer text is unchanged.

## Expected Final State

After the challenge, the buffer content must still be:

```text
alpha root
  beta branch
    gamma leaf
 delta trunk
    epsilon twig
```

## Hints

<details>
<summary>Hint 1</summary>

Without a count, `_` stays on the current line and lands on its first non-blank character.

</details>

<details>
<summary>Hint 2</summary>

The count includes the current line, so `{count}_` moves `count - 1` lines downward before landing.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `_` - move to the first non-blank character of the current line.

### Drill B

1. `3_` - move two lines down and land on line 4's first non-blank character.

### Drill C

1. `4_` - move three lines down and land on line 5's first non-blank character.

### Challenge

`3_2_`

`3_` lands on line 4 because the count includes the starting line. From line 4, `2_` lands on line 5's first non-blank character.

</details>

## Reset and Cleanup

- Between drills: return to the documented start position.
- After the kata: close the throwaway buffer with `:bd!`.
- Preserve user data: perform the exercise only in a scratch buffer.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `_` | Normal | Move to the first non-blank character of the current line. |
| `{count}_` | Normal | Move `count - 1` lines down and land on the destination line's first non-blank character. |

## References

- `:help _`
- `:help motion.txt`
