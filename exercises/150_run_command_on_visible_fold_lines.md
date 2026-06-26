# Kata: Run a Command on Visible Fold Lines

> **Environment:** Vim or Neovim; built-in commands only.
> **Dependencies:** None.
> **Portability:** Uses built-in manual folds plus `:folddoopen`. The command acts on lines that are not in a closed fold; open-fold lines still count as visible.

## Objective

By the end of this kata, you will be able to run one Ex command only on visible fold lines with `:folddoopen`.

Success means: you can transform visible `end` lines while leaving matching text inside closed folds untouched.

## Prerequisites

- Know: basic Ex substitutions and how to open or close a fold.
- Required option/state: `foldmethod=manual`, `foldenable`, and a known open/closed fold layout.
- Required external tool/plugin: none.
- Readiness check: run `:echo has('folding')` and confirm it prints `1`.

## Setup

1. Open a scratch buffer with `:enew`.
2. Make it disposable with `:setlocal buftype=nofile bufhidden=hide noswapfile`.
3. Run `:setlocal foldmethod=manual foldenable foldlevel=99`.
4. Insert the fixture exactly as shown below.
5. Create two manual folds:
   - `:3,5fold`
   - `:8,10fold`
6. Close the first fold with `:3foldclose`.
7. Open the second fold with `:8foldopen`.
8. Put the cursor on line 1, column 1 and confirm all of the following:
   - `:echo [foldclosed(3), foldclosed(8)]` prints `[3, -1]`.
   - `:echo mode()` prints `n`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
section visible_a start
end
section hidden start
end
section hidden finish
section visible_b start
end
section open start
end
section open finish
```

Start in Normal mode on line 1. The fold covering lines 3 through 5 must be closed, and the fold covering lines 8 through 10 must be open. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `:folddoopen s/end/loop_end/ge` or a range-limited form of the same command.
- Do not use `:%s`, `:global`, or manually edit the protected `end` lines.
- Do not open the closed fold on lines 3 through 5 unless a drill explicitly tells you to.
- Reset to the initial fixture and fold state before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** rename visible `end` lines across the whole buffer while leaving the closed fold untouched.

1. Starting from the documented fold state, run the substitution on all visible lines.

**Verify:** the buffer content is:

```text
section visible_a start
loop_end
section hidden start
end
section hidden finish
section visible_b start
loop_end
section open start
loop_end
section open finish
```

And `:echo [foldclosed(3), foldclosed(8)]` still prints `[3, -1]`.

### Drill B - Add precision or repetition

**Goal:** limit the visible-line command to a line range.

1. Reset to the initial fixture and fold state.
2. Run the same substitution, but only for lines 1 through 7.

**Verify:** lines 2 and 7 read `loop_end`, line 4 still reads `end`, and line 9 still reads `end`.

### Drill C - Apply the workflow

**Goal:** protect an additional folded region before running the batch command.

1. Reset to the initial fixture and fold state.
2. Close the fold that starts on line 8.
3. Run the whole-buffer visible-line substitution.

**Verify:** the buffer content is:

```text
section visible_a start
loop_end
section hidden start
end
section hidden finish
section visible_b start
loop_end
section open start
end
section open finish
```

And `:echo [foldclosed(3), foldclosed(8)]` prints `[3, 8]`.

### Challenge - Recall without prompts

Reset the fixture and fold state. Protect both folded sections by closing the fold that starts on line 8, then rename every visible `end` to `loop_end` with one `:folddoopen` command.

**Verify:** the final buffer matches the Drill C result exactly, `:echo [foldclosed(3), foldclosed(8)]` prints `[3, 8]`, and no hidden `end` was changed.

## Expected Final State

After the challenge, the buffer content must be:

```text
section visible_a start
loop_end
section hidden start
end
section hidden finish
section visible_b start
loop_end
section open start
end
section open finish
```

Verify all of the following:

- `:echo [foldclosed(3), foldclosed(8)]` prints `[3, 8]`.
- Line 4 still reads `end`.
- Line 9 still reads `end`.

## Hints

<details>
<summary>Hint 1</summary>

`folddoopen` does not mean “open all folds first.” It means “operate on lines that are not inside a closed fold.”

</details>

<details>
<summary>Hint 2</summary>

Open folds still count as visible, so close the second fold yourself if you want to protect its `end`.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:folddoopen s/end/loop_end/ge` - substitute on every line that is not inside a closed fold.

### Drill B

1. `:1,7folddoopen s/end/loop_end/ge` - do the same substitution only in lines 1 through 7, still skipping lines hidden inside closed folds.

### Drill C

1. `:8foldclose` - close the second fold so its interior lines become protected.
2. `:folddoopen s/end/loop_end/ge` - rename only the still-visible `end` lines.

### Challenge

`:8foldclose`
`:folddoopen s/end/loop_end/ge`

The `e` flag suppresses errors on lines that do not contain `end`, and the closed folds keep lines 4 and 9 out of the command's target set.

</details>

## Reset and Cleanup

- Between drills: recreate the scratch buffer, the exact fixture text, and the two documented fold states.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer with `buftype=nofile` and `noswapfile`.

## Notes and Portability

- Built-in behavior: `:folddoopen` works in both Vim and Neovim.
- Selection detail: the command marks all lines not in a closed fold before execution, similar to `:global`.
- Fold-state detail: open folds are treated as visible; only closed folds protect their interior lines.
- Error-suppression detail: the `e` flag on `:s` avoids no-match errors on lines without `end`.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:3,5fold` | Command-line | Create a manual fold covering lines 3 through 5. |
| `:8,10fold` | Command-line | Create a manual fold covering lines 8 through 10. |
| `:3foldclose` / `:8foldclose` | Command-line | Close the fold that starts on the given line. |
| `:8foldopen` | Command-line | Open the fold that starts on line 8. |
| `:folddoopen s/end/loop_end/ge` | Command-line | Substitute on all lines not inside a closed fold. |
| `:1,7folddoopen s/end/loop_end/ge` | Command-line | Run the same visible-line substitution, but only in lines 1 through 7. |

## References

- [`:help :folddoopen`](https://vimhelp.org/fold.txt.html#%3Afolddoopen) - execute a command on all lines not in a closed fold.
- [`:help :foldclose`](https://vimhelp.org/fold.txt.html#%3Afoldclose) - closing a fold to protect its interior lines.
- [`:help fold-commands`](https://vimhelp.org/fold.txt.html#fold-commands) - manual fold creation and state control.
