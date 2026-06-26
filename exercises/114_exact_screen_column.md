# Kata: Jump to an Exact Screen Column

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode motion `{count}|`.

## Objective

By the end of this kata, you will be able to land on an exact screen column with `{count}|`.

Success means: you reach the requested column when it exists, or the final character if the line is shorter.

## Prerequisites

- Know: `j` and `k`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm `n`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
12345678901234567890
short
abcdefghijklmnop
```

Start in Normal mode on the first `1` of line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `{count}|` for the final landing in each drill.
- Do not use `f`, `/`, arrow keys, or the mouse.
- Reset to the initial fixture before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** land on a precise column of the current line.

1. Move to column 7 on line 1.

**Verify:** the cursor is on `7`, and `:echo line('.') . ',' . col('.')` prints `1,7`.

### Drill B - Add precision or repetition

**Goal:** observe how the motion behaves on a shorter line.

1. Reset the cursor to the documented start.
2. Move to line 2.
3. Ask for column 12.

**Verify:** the cursor ends on the `t` in `short`, and `:echo line('.') . ',' . col('.')` prints `2,5`.

### Drill C - Apply the workflow

**Goal:** use the motion on a different line with enough width to satisfy the exact target.

1. Reset the cursor to the documented start.
2. Move to line 3.
3. Land on column 16.

**Verify:** the cursor is on `p`, and `:echo line('.') . ',' . col('.')` prints `3,16`.

### Challenge - Recall without prompts

Reset the fixture. Land on column 10 of line 1, then finish on the last character of line 2 by requesting a column beyond that line's length.

**Verify:** the final cursor position is on the `t` in `short`, and the buffer text is unchanged.

## Expected Final State

After the challenge, the buffer content must still be:

```text
12345678901234567890
short
abcdefghijklmnop
```

## Hints

<details>
<summary>Hint 1</summary>

The count belongs to the motion itself: the bar motion means "go to this column."

</details>

<details>
<summary>Hint 2</summary>

On a short line, the motion clamps at the line end instead of failing.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `7|` - jump to column 7 on the current line.

### Drill B

1. `j12|` - move to line 2, then request column 12, which clamps to column 5.

### Drill C

1. `jj16|` - move to line 3, then jump to column 16.

### Challenge

`10|j12|`

The first motion lands exactly on column 10 of line 1. The second requests a larger column on a shorter line, so Vim or Neovim places the cursor on the final character instead.

</details>

## Reset and Cleanup

- Between drills: return to the documented start position.
- After the kata: close the throwaway buffer with `:bd!`.
- Preserve user data: perform the exercise only in a scratch buffer.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `{count}|` | Normal | Jump to the requested screen column on the current line, clamping at line end if needed. |

## References

- `:help bar`
- `:help |`
