# Kata: Diff Mode Basics

> **Environment:** Vim or Neovim; built-in diff mode.
> **Dependencies:** None.
> **Portability:** Uses two-way diff commands `]c`, `[c`, `do`, `dp`, and
> `:diffoff`.

## Objective

Open a two-way diff, move among hunks, pull one change from the other buffer,
push one change back, and leave diff mode cleanly.

Success means: you can compare two files, use `do` and `dp` on specific hunks,
and exit diff mode without touching advanced diff commands.

## Setup

Create two disposable files:

`/tmp/diff_a.txt`

```text
function greet(name) {
  console.log("Hello, " + name);
  return true;
}

const defaultName = "World";
```

`/tmp/diff_b.txt`

```text
function greet(name) {
  console.log("Hi, " + name + "!");
  return true;
}

const defaultName = "User";
```

Open them with:

```sh
nvim -d /tmp/diff_a.txt /tmp/diff_b.txt
```

Start in the left diff window.

## Drills

1. Use `]c` and `[c` to move between the changed hunks. Verify you can jump
   from the greeting change to the `defaultName` change and back.
2. On the greeting hunk in the left window, use `do`. Verify the left buffer
   changes from `"Hello"` to `"Hi"`.
3. Undo, move to the `defaultName` hunk in the left window, and use `dp`.
   Verify the right buffer changes from `"User"` to `"World"`.
4. Use `:diffoff!`. Verify both windows leave diff mode.

## Challenge

Restart the diff. Pull the greeting hunk into the left buffer, push the
`defaultName` hunk from the left buffer into the right buffer, then turn diff
mode off everywhere.

## Hints

<details>
<summary>Hints</summary>

`do` pulls the other window's hunk into the current buffer. `dp` pushes the
current hunk into the other buffer. This kata stays on two-way diff basics
only.

</details>

## Solution

<details>
<summary>Exact keys</summary>

1. `]c`, `]c`, `[c`
2. On the left greeting hunk: `do`
3. `u`, then move to `defaultName` and press `dp`
4. `:diffoff!`

</details>

## Cleanup and Scope

Close the disposable diff session normally, or wipe the temporary files if you
created them just for the exercise.

This foundation kata no longer tries to cover advanced diff workflows. Those
now live elsewhere:

- [161_choose_source_in_three_way_diff.md](161_choose_source_in_three_way_diff.md)
- [162_refresh_diff_calculations.md](162_refresh_diff_calculations.md)
- [163_compare_with_patch_result.md](163_compare_with_patch_result.md)

Git-adjacent note: Vim diff mode compares buffers and files; it is not the same
surface as Git hunk signs. In LazyVim, inspect any Git hunk mappings with
`:verbose nmap ]h`, `:verbose nmap [h`, and the documented hunk action keys
before using them. The standalone hunk workflow belongs in
[179_gitsigns_hunk_workflow.md](179_gitsigns_hunk_workflow.md).

## Command Reference

| Command | Effect |
|---|---|
| `]c` | Jump to the next diff hunk |
| `[c` | Jump to the previous diff hunk |
| `do` | Obtain the other buffer's current hunk |
| `dp` | Put the current hunk into the other buffer |
| `:diffoff!` | Turn off diff mode in all diff windows in the tab |
