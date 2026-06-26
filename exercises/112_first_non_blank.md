# Kata: Land on the First Non-Blank Character

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode motion `^`.

## Objective

By the end of this kata, you will be able to jump to the first non-blank character on a line with `^`.

Success means: you skip indentation and land on the first visible character of the target line.

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

Start in Normal mode on the second leading space before `beta` on line 2. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `^` for the final landing in each drill.
- Do not use `0`, `Home`, arrow keys, or the mouse.
- Reset to the initial fixture before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** skip indentation on the current line.

1. Move from the leading space on line 2 to its first non-blank character.

**Verify:** the cursor is on the `b` in `beta`, and `:echo line('.') . ',' . col('.')` prints `2,5`.

### Drill B - Add precision or repetition

**Goal:** repeat the landing on another indented line.

1. Reset the cursor to the documented start.
2. Move to line 3 and land on its first non-blank character.

**Verify:** the cursor is on the `g` in `gamma`, and `:echo line('.') . ',' . col('.')` prints `3,3`.

### Drill C - Apply the workflow

**Goal:** recover the first non-blank after moving to the line end.

1. Reset the cursor to the documented start.
2. Move to the end of line 2.
3. Return to the first non-blank character of line 2.

**Verify:** the cursor ends on the `b` in `beta`, and the text is unchanged.

### Challenge - Recall without prompts

Reset the fixture. Starting on line 2, land on the first non-blank of line 1, then line 2, then line 3.

**Verify:** the final cursor position is on the `g` in `gamma`, and the fixture still matches the original text exactly.

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

`^` differs from `0`: it ignores leading spaces.

</details>

<details>
<summary>Hint 2</summary>

After moving to another line or to its end, finish by returning to that line's first visible character.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `^` - jump to the first non-blank character on line 2.

### Drill B

1. `j^` - move to line 3, then jump to its first non-blank.

### Drill C

1. `$^` - go to the line end, then return to the first non-blank.

### Challenge

`k^j^j^`

This sequence lands on the first visible character of each destination line. The motion always skips indentation, so line 2 lands on `b` and line 3 lands on `g`.

</details>

## Reset and Cleanup

- Between drills: return to the documented start position.
- After the kata: close the throwaway buffer with `:bd!`.
- Preserve user data: perform the exercise only in a scratch buffer.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `^` | Normal | Jump to the first non-blank character of the current line. |

## References

- `:help ^`
- `:help motion.txt`
