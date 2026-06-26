# Kata: Restore the Most Recently Changed Line with `U`

> **Environment:** Vim or Neovim; built-in commands only.
> **Dependencies:** None.
> **Portability:** Uses the built-in Normal-mode command `U`. This kata focuses on line restore, not general undo-tree navigation with `u`, `<C-r>`, `g-`, or `g+`.

## Objective

By the end of this kata, you will be able to restore the entire most recently changed line with `U`.

Success means: after making one or more edits on a line, you can bring that whole line back to its pre-change state with a single `U`, even if the cursor has moved elsewhere.

## Prerequisites

- Know: basic Normal-mode editing on a single line.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Open a scratch buffer with `:enew`.
2. Make it disposable with `:setlocal buftype=nofile bufhidden=hide noswapfile`.
3. Insert the fixture exactly as shown below.
4. Put the cursor on the `d` in `draft tax = 2` at line 2, column 1.
5. Confirm `:echo line('.') . ',' . col('.')` prints `2,1`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
draft subtotal = 10
draft tax = 2
draft total = 12
audit status = ok
```

Start in Normal mode on the `d` in `draft tax = 2` on line 2. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `U` for the final restore step in every drill.
- Do not use `u`, `<C-r>`, or retype the original line to repair it.
- Treat `U` as a line restore for the most recently changed line, not as a full-buffer undo.
- Reset to the initial fixture before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** restore one line after several edits on that same line.

1. Change `draft tax = 2` so it reads `draft fee = 5`.
2. Restore the entire changed line with one `U`.

**Verify:** line 2 reads `draft tax = 2`, and `:echo getline(2)` prints `draft tax = 2`.

### Drill B - Add precision or repetition

**Goal:** restore only the most recently changed line after editing two different lines.

1. Reset to the initial fixture.
2. Change line 2 so it reads `draft fee = 5`.
3. Change line 4 so it reads `audit status = hold`.
4. Restore the most recently changed line with `U`.

**Verify:** all of the following are true:

- `:echo getline(2)` prints `draft fee = 5`.
- `:echo getline(4)` prints `audit status = ok`.
- `:echo line('.') . ',' . col('.')` prints `4,1`.

### Drill C - Apply the workflow

**Goal:** restore the most recently changed line even after moving the cursor away.

1. Reset to the initial fixture.
2. Change line 2 so it reads `draft fee = 5`.
3. Move to line 4 without making any more edits.
4. Restore the most recently changed line with `U`.

**Verify:** all of the following are true:

- `:echo getline(2)` prints `draft tax = 2`.
- `:echo line('.') . ',' . col('.')` prints `2,1`.
- The other three lines are unchanged.

### Challenge - Recall without prompts

Reset the fixture. Starting on line 2, change `tax` to `fee` and `2` to `5`, move to line 4 without editing it, and restore the changed line with one `U`.

**Verify:** the whole buffer matches the initial fixture exactly, and `:echo line('.') . ',' . col('.')` prints `2,1`.

## Expected Final State

After the challenge, the buffer content must be:

```text
draft subtotal = 10
draft tax = 2
draft total = 12
audit status = ok
```

Verify all of the following:

- `:echo line('.') . ',' . col('.')` prints `2,1`.
- `:echo getline(2)` prints `draft tax = 2`.
- No other line differs from the initial fixture.

## Hints

<details>
<summary>Hint 1</summary>

`U` restores a whole line at once; it does not step backward through each individual edit the way `u` does.

</details>

<details>
<summary>Hint 2</summary>

The target is the line of the latest change, not necessarily the line where the cursor is standing when you press `U`.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. Change line 2 to `draft fee = 5` with any Normal-mode edits.
2. `U` - restore the entire most recently changed line to `draft tax = 2`.

### Drill B

1. Change line 2 to `draft fee = 5`.
2. Change line 4 to `audit status = hold`.
3. `U` - restore line 4, which is the most recently changed line, while leaving line 2 changed.

### Drill C

1. Change line 2 to `draft fee = 5`.
2. `4G` - move to line 4 without editing it.
3. `U` - restore line 2 and jump back to it.

### Challenge

Change line 2 to `draft fee = 5`, then:

`4GU`

`4G` moves away without changing the latest-change record. `U` restores the whole most recently changed line and returns the cursor to that line.

</details>

## Reset and Cleanup

- Between drills: run `:enew`, recreate the scratch buffer, and reinsert the initial fixture.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer with `buftype=nofile` and `noswapfile`.

## Notes and Portability

- Built-in behavior: `U` works in both Vim and Neovim.
- Scope detail: `U` restores all latest changes on one line, specifically the line where the latest change was made.
- Undo detail: `U` itself counts as a change, so `u` can undo a `U` and `<C-r>` can redo it, but that behavior is outside this kata's scope.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `U` | Normal | Restore all latest changes on the most recently changed line. |
| `4G` | Normal | Move to line 4 without creating a new change. |
| `:echo getline(2)` | Command-line | Verify the exact text of line 2. |
| `:echo line('.') . ',' . col('.')` | Command-line | Report the cursor position for verification. |

## References

- [`:help U`](https://vimhelp.org/undo.txt.html#U) - line restore semantics and the note that `U` itself counts as a change.
- [`:help undo-redo`](https://vimhelp.org/undo.txt.html#undo-redo) - relationship between `U`, `u`, and `<C-r>`.

