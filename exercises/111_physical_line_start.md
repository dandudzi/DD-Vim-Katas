# Kata: Return to Physical Line Start

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode motion `0`.

## Objective

By the end of this kata, you will be able to jump to the physical start of a line with `0`, even when the line begins with indentation.

Success means: you land on column 1 exactly, without skipping leading spaces.

## Prerequisites

- Know: `j`, `k`, and `$`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm `n`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
alpha start
    beta branch
  gamma leaf
```

Start in Normal mode on the `b` in `beta` on line 2. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `0` for the final landing in each drill.
- Do not use `^`, `Home`, arrow keys, or the mouse.
- Reset to the initial fixture before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** land on the physical start of the current indented line.

1. Move from the `b` in `beta` to the physical beginning of line 2.

**Verify:** the cursor is on the first leading space of line 2, and `:echo col('.')` prints `1`.

### Drill B - Add precision or repetition

**Goal:** repeat the same landing on a line with a different indentation depth.

1. Reset the cursor to the documented start.
2. Move to line 3 and land on its physical start.

**Verify:** the cursor is on the first leading space of line 3, and `:echo line('.') . ',' . col('.')` prints `3,1`.

### Drill C - Apply the workflow

**Goal:** recover column 1 after moving away from it on the same line.

1. Reset the cursor to the documented start.
2. Move to the end of line 2.
3. Return to the physical start of line 2.

**Verify:** the cursor ends on line 2, column 1, and the buffer text is unchanged.

### Challenge - Recall without prompts

Reset the fixture. Starting on the `b` in `beta`, visit line 1 and then line 3, landing on the physical start of each destination line before finishing.

**Verify:** the final cursor position is line 3, column 1, and the fixture still matches the original text exactly.

## Expected Final State

After the challenge, the buffer content must still be:

```text
alpha start
    beta branch
  gamma leaf
```

## Hints

<details>
<summary>Hint 1</summary>

`0` goes to the literal first column, not the first non-blank character.

</details>

<details>
<summary>Hint 2</summary>

If you move to another line first, finish that line landing with the same single motion.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `0` - jump to column 1 of the current line.

### Drill B

1. `j0` - move to line 3, then jump to its physical start.

### Drill C

1. `$0` - go to the line end, then return to column 1.

### Challenge

`k0j0j0`

This sequence lands on the physical start of line 1, then line 2, then line 3. Each `0` targets column 1, so indentation is never skipped.

</details>

## Reset and Cleanup

- Between drills: return to the documented start position.
- After the kata: close the throwaway buffer with `:bd!`.
- Preserve user data: perform the exercise only in a scratch buffer.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `0` | Normal | Jump to column 1 of the current line. |

## References

- `:help 0`
- `:help motion.txt`
