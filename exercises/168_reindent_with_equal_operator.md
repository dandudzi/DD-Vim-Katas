# Kata: Reindent with the Equal Operator

> **Environment:** Vim or Neovim; built-in indenting.
> **Dependencies:** None.
> **Portability:** Uses built-in `=` with `cindent`.

## Objective

By the end of this kata, you will be able to reindent a motion or range with
the `=` operator.

Success means: you can fix indentation structurally without inserting or
deleting whitespace by hand.

## Prerequisites

- Know: operator-pending motions such as `=G` and `=ap`.
- Required option/state: `cindent`, `shiftwidth=4`, `expandtab`.
- Required external tool/plugin: none.
- Readiness check: run `:echo &l:cindent . ' ' . &l:shiftwidth` and confirm it
  prints `1 4`.

## Setup

1. Open a scratch buffer with `:enew`.
2. Insert exactly:

```c
if (ready) {
printf("ok");
if (nested) {
puts("done");
}
}
```

3. Run `:setlocal cindent shiftwidth=4 expandtab`.
4. Put the cursor on the `i` in `if (ready)` at line 1, column 1.

## Initial Fixture

The starting buffer must be:

```c
if (ready) {
printf("ok");
if (nested) {
puts("done");
}
}
```

## Constraints

- Use the `=` operator for the final indentation change in each drill.
- Do not insert spaces manually.
- Reset the fixture before each drill.

## Tasks

### Drill A - Reindent to the end of the file

**Goal:** fix the full block with one operator motion.

1. From line 1, run `=G`.

**Verify:** the buffer becomes:

```c
if (ready) {
    printf("ok");
    if (nested) {
        puts("done");
    }
}
```

### Drill B - Reindent only the inner block

**Goal:** target a smaller structural region.

1. Reset the fixture.
2. Move to line 3.
3. Run `=2j`.

**Verify:** lines 3 through 5 become:

```c
    if (nested) {
        puts("done");
    }
```

### Drill C - Reindent from the current line downward

**Goal:** use the same operator with a different motion.

1. Reset the fixture.
2. Move to line 2.
3. Run `=G`.

**Verify:** line 2 becomes `    printf("ok");` and the remaining lines are
correctly indented beneath it.

### Challenge - Fix the block without touching the text content

Reset the fixture. Reindent the whole snippet using one `=` operator command.

**Verify:** the final buffer matches the fully indented block shown in Drill A.

## Hints

<details>
<summary>Hint 1</summary>

`=` is an operator, so it needs a motion or text object after it.

</details>

<details>
<summary>Hint 2</summary>

`cindent` gives `=` enough language-aware rules to indent this C-style block
usefully.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `=G`

### Drill B

1. `3G`
2. `=2j`

### Drill C

1. `2G`
2. `=G`

### Challenge

`=G`

</details>

## Reset and Cleanup

- Between drills: run `:enew` and restore the initial fixture and options.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: the exercise runs only in a throwaway scratch buffer.

## Notes and Portability

- The exact indentation style depends on the current indent method. This kata
  makes it deterministic by enabling `cindent`.
- `=` is built in and works with many motions and text objects, not only file
  ranges.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `=G` | Normal | Reindent from the cursor line to the end of the file. |
| `=2j` | Normal | Reindent the current line and the next two lines. |
| `:setlocal cindent shiftwidth=4 expandtab` | Command-line | Make the indentation result deterministic for this fixture. |

## References

- [`:help =`](https://vimhelp.org/change.txt.html#%3D) - the indent operator.
- [`:help cindent`](https://vimhelp.org/indent.txt.html#cindent) - C-style indentation rules.
- [Neovim help: `=`](https://neovim.io/doc/user/change.html#%3D) - Neovim operator documentation.
