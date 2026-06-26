# Kata: Generate an Incrementing Sequence

> **Environment:** Vim or Neovim.
> **Dependencies:** None.
> **Portability:** Uses built-in Visual-mode `g<C-a>`.

## Objective

By the end of this kata, you will be able to turn repeated numbers into an
incrementing sequence with Visual selection and `g<C-a>`.

Success means: you can transform identical IDs into a numbered run without
editing each line separately.

## Prerequisites

- Know: Visual block mode with `<C-v>`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo exists(':normal')` and confirm it prints `2`.

## Setup

1. Open a scratch buffer with `:enew`.
2. Insert exactly:

```text
item_01
item_01
item_01
item_01
```

3. Put the cursor on the first `0` in line 1.
4. Confirm `:echo line('.') . ',' . col('.')` prints `1,6`.

## Initial Fixture

The starting buffer must be:

```text
item_01
item_01
item_01
item_01
```

Start in Normal mode on the `0` in the first line's number.

## Constraints

- Use Visual selection plus `g<C-a>`.
- Do not type the replacement numbers by hand.
- Reset the fixture before each drill.

## Tasks

### Drill A - Build a simple sequence

**Goal:** turn four copies of `01` into four consecutive numbers.

1. Select the two-digit number column across all four lines with Visual block
   mode.
2. Press `g<C-a>`.

**Verify:** the buffer becomes:

```text
item_02
item_03
item_04
item_05
```

### Drill B - Start from a larger count

**Goal:** apply a larger per-line increment.

1. Reset the fixture.
2. Select the same number column.
3. Press `3g<C-a>`.

**Verify:** the buffer becomes:

```text
item_04
item_07
item_10
item_13
```

### Drill C - Understand the selection boundary

**Goal:** keep the increment focused on the number, not the whole line.

1. Reset the fixture.
2. Select only the numeric column again.
3. Run `g<C-a>`.

**Verify:** the `item_` prefix remains unchanged on every line.

### Challenge - Generate the run from memory

Reset the fixture. Create `item_02` through `item_05` using one Visual
selection and one incrementing command.

**Verify:** the final buffer matches Drill A exactly.

## Hints

<details>
<summary>Hint 1</summary>

In Visual mode, `g<C-a>` increments each selected line by an additional step,
creating a sequence instead of repeating the same increment everywhere.

</details>

<details>
<summary>Hint 2</summary>

Start the block on the first digit of the number and include both digits.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `<C-v>jjjlg<C-a>`

### Drill B

1. `<C-v>jjjl`
2. `3g<C-a>`

### Drill C

1. `<C-v>jjjlg<C-a>`

### Challenge

`<C-v>jjjlg<C-a>`

</details>

## Reset and Cleanup

- Between drills: run `:enew` and restore the initial fixture.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: the exercise runs only in a throwaway scratch buffer.

## Notes and Portability

- `g<C-a>` differs from plain `<C-a>` in Visual mode: it creates an
  incrementing sequence across the selected lines instead of applying the same
  increment everywhere.
- Leading zeroes are preserved when possible, which keeps the two-digit shape
  of this fixture.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `<C-v>...g<C-a>` | Visual block | Increment each selected line by an increasing amount. |
| `{count}g<C-a>` | Visual | Increase the per-line step size for the generated sequence. |

## References

- [`:help v_g_CTRL-A`](https://vimhelp.org/change.txt.html#v_g_CTRL-A) - Visual `g<C-a>` sequence incrementing.
- [`:help visual-block`](https://vimhelp.org/visual.txt.html#visual-block) - blockwise Visual selection.
- [Neovim help: `v_g_CTRL-A`](https://neovim.io/doc/user/change.html#v_g_CTRL-A) - Neovim documentation for sequence increments.
