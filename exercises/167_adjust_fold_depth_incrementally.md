# Kata: Adjust Fold Depth Incrementally

> **Environment:** Vim or Neovim; built-in folding.
> **Dependencies:** None.
> **Portability:** Uses built-in `zr` and `zm`.

## Objective

By the end of this kata, you will be able to raise and lower `'foldlevel'`
step by step with `zr` and `zm`.

Success means: you can reveal nested folds one level at a time and then hide
them again without changing the fold definitions.

## Prerequisites

- Know: basic fold visibility.
- Required option/state: `foldmethod=marker`.
- Required external tool/plugin: none.
- Readiness check: after setup, run `:echo &foldlevel` and confirm it prints
  `0`.

## Setup

1. Open a scratch buffer with `:enew`.
2. Insert exactly:

```text
root {{{
  child one {{{
    leaf A
  }}}
  child two {{{
    leaf B
  }}}
}}}
```

3. Run `:setlocal foldmethod=marker foldlevel=0`.
4. Put the cursor on line 1.
5. Confirm `:echo foldclosed(2) . ' ' . foldclosed(5)` prints `1 1`.

## Initial Fixture

The buffer must be:

```text
root {{{
  child one {{{
    leaf A
  }}}
  child two {{{
    leaf B
  }}}
}}}
```

At `foldlevel=0`, only the outer fold header is visible.

## Constraints

- Use `zr` and `zm` to change visibility.
- Do not open folds directly with `zo`, `zR`, or `za`.
- Reset to `foldlevel=0` before each drill.

## Tasks

### Drill A - Reveal one level

**Goal:** expose the child fold headers but keep their contents folded.

1. Starting at `foldlevel=0`, press `zr`.

**Verify:** `:echo &foldlevel . ' ' . foldclosed(2) . ' ' . foldclosed(5)`
prints `1 2 5`.

### Drill B - Reveal the nested content

**Goal:** raise the fold depth again.

1. Starting from Drill A's state, press `zr` once more.

**Verify:** `:echo &foldlevel . ' ' . foldclosed(2) . ' ' . foldclosed(5)`
prints `2 -1 -1`.

### Drill C - Hide one level again

**Goal:** lower the fold depth without deleting any folds.

1. Starting from Drill B's state, press `zm`.

**Verify:** `:echo &foldlevel . ' ' . foldclosed(2) . ' ' . foldclosed(5)`
prints `1 2 5`.

### Challenge - Walk overview to detail and back

Reset to `foldlevel=0`. Reveal the child fold headers, then the leaf lines,
then collapse back to the child-header view.

**Verify:** the final state is `foldlevel=1`, with line 2 and line 5 closed.

## Hints

<details>
<summary>Hint 1</summary>

`zr` increases `'foldlevel'` by one. `zm` decreases it by one.

</details>

<details>
<summary>Hint 2</summary>

Use `foldclosed({lnum})` to check whether a line is still inside a closed
fold. It returns `-1` when the line is visible.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `zr`

### Drill B

1. `zr`

### Drill C

1. `zm`

### Challenge

`zrzrzm`

</details>

## Reset and Cleanup

- Between drills: run `:setlocal foldlevel=0`.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: the exercise runs only in a throwaway scratch buffer.

## Notes and Portability

- `zr` and `zm` do not create or delete folds; they only adjust the currently
  visible depth.
- This makes them useful for overview/detail workflows when the fold structure
  is already meaningful.
- LazyVim compatibility: if a plugin restores folds or sets a high default
  `foldlevel`, the first `zr` / `zm` may appear to do little. Confirm the
  current value with `:setlocal foldlevel? foldmethod?` before diagnosing the
  keys themselves.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `zr` | Normal | Increase `'foldlevel'` by one. |
| `zm` | Normal | Decrease `'foldlevel'` by one. |
| `foldclosed({lnum})` | Vimscript function | Return the first line of the closed fold containing `{lnum}`, or `-1` when visible. |

## References

- [`:help zr`](https://vimhelp.org/fold.txt.html#zr) - raise foldlevel.
- [`:help zm`](https://vimhelp.org/fold.txt.html#zm) - lower foldlevel.
- [`:help foldclosed()`](https://vimhelp.org/builtin.txt.html#foldclosed%28%29) - inspect closed-fold state.
