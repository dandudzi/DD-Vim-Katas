# Kata: Navigate Between Folds

> **Environment:** Vim or Neovim; built-in folding.
> **Dependencies:** None.
> **Portability:** Uses built-in fold motions `zj` and `zk`.

## Objective

By the end of this kata, you will be able to jump to the next fold start with
`zj` and the previous fold end with `zk`.

Success means: you can move among closed folds without opening them.

## Prerequisites

- Know: basic fold visibility and how to move in Normal mode.
- Required option/state: `foldmethod=marker`.
- Required external tool/plugin: none.
- Readiness check: run `:echo &foldmethod` after setup and confirm it prints
  `marker`.

## Setup

1. Open a scratch buffer with `:enew`.
2. Insert exactly:

```text
one {{{
  alpha
}}}
two {{{
  beta
}}}
three {{{
  gamma
}}}
```

3. Run `:setlocal foldmethod=marker foldlevel=0`.
4. Put the cursor on line 1, column 1.
5. Confirm `:echo foldclosed(1) . ' ' . foldclosed(4)` prints `1 4`.

## Initial Fixture

The buffer must be:

```text
one {{{
  alpha
}}}
two {{{
  beta
}}}
three {{{
  gamma
}}}
```

All three top-level folds should be closed.

## Constraints

- Use `zj` and `zk` for the fold-to-fold movement.
- Do not open folds with `zo`, `zR`, or `za`.
- Reset to line 1 before each drill unless the drill says otherwise.

## Tasks

### Drill A - Jump to the next fold start

**Goal:** land on the second closed fold without opening anything.

1. Start on line 1.
2. Press `zj`.

**Verify:** the cursor lands on line 4, and `:echo getline('.')` prints
`two {{{`.

### Drill B - Skip another closed fold

**Goal:** move from the second fold to the third.

1. Starting from line 4, press `zj`.

**Verify:** the cursor lands on line 7, and `:echo getline('.')` prints
`three {{{`.

### Drill C - Move back to the previous fold boundary

**Goal:** move upward to the previous fold's end.

1. Starting from line 7, press `zk`.

**Verify:** the cursor lands on line 6, and `:echo getline('.')` prints
`}}}`.

### Challenge - Traverse folds without opening them

Reset to line 1. Move to the third fold, then back to the end of the second
fold, using only fold motions.

**Verify:** the final cursor line is 6 and all three folds are still closed.

## Hints

<details>
<summary>Hint 1</summary>

`zj` targets the next fold start, but `zk` targets the previous fold end.

</details>

<details>
<summary>Hint 2</summary>

A closed fold counts as one fold for both motions.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `zj`

### Drill B

1. `zj`

### Drill C

1. `zk`

### Challenge

`zjzjzk`

</details>

## Reset and Cleanup

- Between drills: return to line 1 with `gg` if needed.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: the exercise runs only in a throwaway scratch buffer.

## Notes and Portability

- `zj` moves to the start of the next fold.
- `zk` moves to the end of the previous fold, which is easy to misremember if
  you expect a symmetric start-to-start jump.
- LazyVim compatibility: fold providers can create folds from Treesitter, LSP,
  indentation, or custom expressions. The motion keys are built in, but the fold
  boundaries they visit come from the active `foldmethod`; inspect it with
  `:setlocal foldmethod? foldexpr?`.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `zj` | Normal | Move to the start of the next fold. |
| `zk` | Normal | Move to the end of the previous fold. |
| `:setlocal foldmethod=marker foldlevel=0` | Command-line | Build deterministic closed folds from `{{{` and `}}}` markers. |

## References

- [`:help zj`](https://vimhelp.org/fold.txt.html#zj) - next-fold motion.
- [`:help zk`](https://vimhelp.org/fold.txt.html#zk) - previous-fold motion.
- [Neovim help: `folding`](https://neovim.io/doc/user/fold.html#folding) - fold concepts and commands.
