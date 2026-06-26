# Kata: Jump to a Percentage Through the Buffer

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode motion `{count}%` as a percentage jump.

## Objective

By the end of this kata, you will be able to use `{count}%` to jump to an approximate percentage position in the current buffer.

Success means: you can land on requested file-depth checkpoints such as 25%, 50%, or 75% without counting lines manually.

## Prerequisites

- Know: counts in Normal mode and how to verify the current line with `:echo line('.')`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm `n`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
01 anchor
02 branch
03 canopy
04 drift
05 ember
06 field
07 grove
08 harbor
09 island
10 junction
11 knoll
12 lantern
```

Start in Normal mode on the `a` in `anchor` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use counted `%` for the final landing in each drill.
- Do not use bare `%` on a bracket match, `gg`, `G`, `:{line}`, arrow keys, or the mouse.
- Reset to the initial fixture before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** jump to the quarter-way point of the buffer.

1. Move to the 25% position in the file with one counted `%` motion.

**Verify:** the cursor is on line 3 at `03 canopy`, and `:echo line('.')` prints `3`.

### Drill B - Add precision or repetition

**Goal:** use the same motion to land at the middle of the buffer.

1. Reset the cursor to the documented start.
2. Move to the 50% position in the file with one counted `%` motion.

**Verify:** the cursor is on line 6 at `06 field`, and `:echo line('.')` prints `6`.

### Drill C - Apply the workflow

**Goal:** jump to a later checkpoint in the same file.

1. Reset the cursor to the documented start.
2. Move to the 75% position in the file with one counted `%` motion.

**Verify:** the cursor is on line 9 at `09 island`, and `:echo line('.')` prints `9`.

### Challenge - Recall without prompts

Reset the fixture. Starting on line 1, visit the 25% position, then the 50% position, and finish at the 75% position using only counted `%` jumps.

**Verify:** the final cursor position is line 9, and the buffer text is unchanged.

## Expected Final State

After the challenge, the buffer content must still be:

```text
01 anchor
02 branch
03 canopy
04 drift
05 ember
06 field
07 grove
08 harbor
09 island
10 junction
11 knoll
12 lantern
```

## Hints

<details>
<summary>Hint 1</summary>

When `%` has a numeric prefix in Normal mode, it means percentage through the buffer, not bracket matching.

</details>

<details>
<summary>Hint 2</summary>

Use the percentage directly as the count: `25%`, `50%`, `75%`.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `25%` - jump to the 25% position in the buffer.

### Drill B

1. `50%` - jump to the middle of the buffer.

### Drill C

1. `75%` - jump to the 75% position in the buffer.

### Challenge

`25%50%75%`

Each counted `%` recalculates the landing line from the whole buffer, so you can move among coarse checkpoints without manual line counts.

</details>

## Reset and Cleanup

- Between drills: return to the documented start position.
- After the kata: close the throwaway buffer with `:bd!`.
- Preserve user data: perform the exercise only in a scratch buffer.

## Notes and Portability

- This kata exercises counted `%` as a percentage jump, not bare `%` as a matching-delimiter motion.
- In this 12-line fixture, `25%`, `50%`, and `75%` land on lines 3, 6, and 9.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `{count}%` | Normal | Jump to approximately `{count}` percent through the buffer. |

## References

- `:help %`
- `:help motion.txt`
