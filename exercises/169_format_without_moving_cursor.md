# Kata: Format Without Moving the Cursor

> **Environment:** Vim or Neovim; built-in formatting.
> **Dependencies:** None.
> **Portability:** Uses built-in `gw`.

## Objective

By the end of this kata, you will be able to format text with `gw` while
keeping the cursor at the same position in the text.

Success means: you can reflow a paragraph and still stay on the same anchor
word afterward.

## Prerequisites

- Know: paragraph text object `ap`.
- Required option/state: `textwidth=32`.
- Required external tool/plugin: none.
- Readiness check: run `:echo &textwidth` and confirm it prints `32`.

## Setup

1. Open a scratch buffer with `:enew`.
2. Insert exactly:

```text
This paragraph carries ANCHOR midstream so formatting can reflow without moving the cursor away from the anchor word.
```

3. Run `:setlocal textwidth=32`.
4. Search for `ANCHOR` with `/ANCHOR`.
5. Confirm `:echo line('.') . ',' . col('.') . ' ' . expand('<cword>')` prints
   `1,24 ANCHOR`.

## Initial Fixture

The starting buffer is one long line:

```text
This paragraph carries ANCHOR midstream so formatting can reflow without moving the cursor away from the anchor word.
```

Start on the word `ANCHOR`.

## Constraints

- Use `gwap` for the paragraph reflow.
- Do not use `gq` for the final formatting step.
- Reset the fixture before each drill.

## Tasks

### Drill A - Reflow the paragraph

**Goal:** wrap the line at `textwidth=32`.

1. Starting on `ANCHOR`, run `gwap`.

**Verify:** the buffer becomes:

```text
This paragraph carries ANCHOR
midstream so formatting can
reflow without moving the cursor
away from the anchor word.
```

### Drill B - Confirm the cursor stayed put

**Goal:** verify the cursor did not move away from the anchor text.

1. Starting from the formatted paragraph, run
   `:echo line('.') . ',' . col('.') . ' ' . expand('<cword>')`.

**Verify:** it still prints `1,24 ANCHOR`.

### Drill C - Contrast with the movement you were avoiding

**Goal:** understand why `gw` is different from `gq`.

1. Reset the fixture.
2. Starting on `ANCHOR`, run `gqap`.
3. Inspect the cursor position.

**Verify:** the text is formatted, but the cursor is no longer guaranteed to
be on `ANCHOR`.

### Challenge - Reflow and keep your place

Reset the fixture. Format the paragraph and finish still on `ANCHOR`.

**Verify:** the text matches Drill A and the cursor check from Drill B still
prints `1,24 ANCHOR`.

## Hints

<details>
<summary>Hint 1</summary>

`gw` formats like `gq`, but tries to restore your position in the text.

</details>

<details>
<summary>Hint 2</summary>

Use a stable anchor word so you can tell whether the cursor really stayed in
place.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `gwap`

### Drill B

1. `:echo line('.') . ',' . col('.') . ' ' . expand('<cword>')<CR>`

### Drill C

1. `gqap`

### Challenge

`gwap`

</details>

## Reset and Cleanup

- Between drills: run `:enew`, restore the single long line, set
  `textwidth=32`, and search for `ANCHOR` again.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: the exercise runs only in a throwaway scratch buffer.

## Notes and Portability

- `gw` is built in and intentionally ignores `formatexpr` and `formatprg`.
- This makes it a reliable fallback when you want built-in formatting behavior
  and cursor preservation.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `gwap` | Normal | Format the current paragraph and keep the cursor at the same text position. |
| `gqap` | Normal | Format the current paragraph but leave the cursor where the motion lands. |
| `:setlocal textwidth=32` | Command-line | Make the wrap result deterministic. |

## References

- [`:help gw`](https://vimhelp.org/change.txt.html#gw) - format while restoring cursor position.
- [`:help gq`](https://vimhelp.org/change.txt.html#gq) - standard formatting motion.
- [Neovim help: `gw`](https://neovim.io/doc/user/change.html#gw) - Neovim documentation for `gw`.
