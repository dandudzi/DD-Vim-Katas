# Kata: Jump to an Exact Byte Offset

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode motion `{count}go`.

## Objective

By the end of this kata, you will be able to jump to an exact byte offset in the current buffer with `{count}go`.

Success means: given a byte position, you can land on that byte directly instead of converting it into a line and column by hand.

## Prerequisites

- Know: counts in Normal mode and how newlines separate lines in a text buffer.
- Required option/state: use ASCII-only fixture text so each visible character is one byte.
- Required external tool/plugin: none.
- Readiness check: run `:echo &encoding` and confirm it reports your normal editing encoding, then use the provided ASCII fixture exactly.

## Initial Fixture

Create a new buffer and insert exactly:

```text
abc
def
ghi
jkl
```

Start in Normal mode on the `a` in `abc` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use counted `go` for the final landing in each drill.
- Treat newline characters as bytes between lines.
- Do not use `gg`, `G`, `:{line}`, searches, arrow keys, or the mouse.
- Reset to the initial fixture before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** jump to the first character of the second line by byte offset.

1. Move to byte offset 5 with one counted `go` motion.

**Verify:** the cursor is on the `d` in `def`, and `:echo line('.') . ',' . col('.')` prints `2,1`.

### Drill B - Add precision or repetition

**Goal:** jump into the middle of a later line by byte offset.

1. Reset the cursor to the documented start.
2. Move to byte offset 10 with one counted `go` motion.

**Verify:** the cursor is on the `h` in `ghi`, and `:echo line('.') . ',' . col('.')` prints `3,2`.

### Drill C - Apply the workflow

**Goal:** jump to the first character of the final line by byte offset.

1. Reset the cursor to the documented start.
2. Move to byte offset 13 with one counted `go` motion.

**Verify:** the cursor is on the `j` in `jkl`, and `:echo line('.') . ',' . col('.')` prints `4,1`.

### Challenge - Recall without prompts

Reset the fixture. Starting on `a`, jump to byte offset 5, then byte offset 10, and finish at byte offset 13 using only counted `go` motions.

**Verify:** the final cursor position is line 4, column 1, and the buffer text is unchanged.

## Expected Final State

After the challenge, the buffer content must still be:

```text
abc
def
ghi
jkl
```

## Hints

<details>
<summary>Hint 1</summary>

Count visible characters and newline separators together; the second line starts after the first line's three letters plus one newline byte.

</details>

<details>
<summary>Hint 2</summary>

Because the fixture is pure ASCII, one visible character equals one byte.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `5go` - jump to byte offset 5, which is the `d` in `def`.

### Drill B

1. `10go` - jump to byte offset 10, which is the `h` in `ghi`.

### Drill C

1. `13go` - jump to byte offset 13, which is the `j` in `jkl`.

### Challenge

`5go10go13go`

The offsets count from the start of the buffer, including newline bytes, so each motion lands directly on the requested byte location.

</details>

## Reset and Cleanup

- Between drills: return to the documented start position.
- After the kata: close the throwaway buffer with `:bd!`.
- Preserve user data: perform the exercise only in a scratch buffer.

## Notes and Portability

- Use ASCII-only text when learning `go`; multibyte characters make byte positions diverge from visible character counts.
- Newlines count toward the offset, so line starts are not just the sum of visible characters on earlier lines.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `{count}go` | Normal | Jump to byte offset `{count}` in the current buffer. |

## References

- `:help go`
- `:help motion.txt`
