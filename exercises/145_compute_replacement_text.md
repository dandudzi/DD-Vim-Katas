# Kata: Compute Replacement Text

> **Environment:** Vim or Neovim; built-in `:substitute` only.
> **Dependencies:** None.
> **Portability:** Uses built-in expression replacements that begin with `\=`.

## Objective

By the end of this kata, you will be able to compute replacement text with a `\=` expression during substitution.

Success means: you can multiply matched numbers by `10` without typing the new numbers manually.

## Prerequisites

- Know: basic `:substitute` usage.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Run `:enew` to open a scratch buffer.
2. Paste the fixture exactly as shown below.
3. Put the cursor on the `d` in `delay` on line 1, column 1.
4. Confirm Normal mode is active and `:echo line('.') . ',' . col('.')` prints `1,1`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
delay=5
limit=12
window=3x8
retries=4
```

Start in Normal mode on the `d` in `delay` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use a replacement expression that begins with `\=`.
- Compute the new numbers from the matched text; do not type the results manually.
- Do not edit the buffer manually.
- Reset to the initial fixture before each drill unless the drill explicitly builds on the previous one.

## Tasks

### Drill A - Isolate the computed replacement

**Goal:** compute a new value for one match.

1. On line 1, multiply the matched number by `10` with one substitution expression.

**Verify:** line 1 changes from `delay=5` to `delay=50`.

### Drill B - Compute several replacements on one line

**Goal:** evaluate the expression for multiple matches in one command.

1. Reset the fixture.
2. Move to line 3.
3. Multiply both numbers on that line by `10`.

**Verify:** line 3 changes from `window=3x8` to `window=30x80`.

### Drill C - Apply the workflow

**Goal:** compute new values for every number in the whole buffer.

1. Reset the fixture.
2. Multiply every matched number in the buffer by `10`.

**Verify:** the buffer changes from:

```text
delay=5
limit=12
window=3x8
retries=4
```

to:

```text
delay=50
limit=120
window=30x80
retries=40
```

### Challenge - Recall without prompts

Reset the fixture. Multiply every number in the buffer by `10` using one expression-based substitution.

**Verify:** the final buffer text matches the Expected Final State exactly.

## Expected Final State

After the challenge, the buffer content must be:

```text
delay=50
limit=120
window=30x80
retries=40
```

## Hints

<details>
<summary>Hint 1</summary>

When the replacement starts with `\=`, the rest is evaluated as an expression instead of treated as plain replacement text.

</details>

<details>
<summary>Hint 2</summary>

`submatch(0)` returns the whole current match, so you can do arithmetic with it in the expression.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:s/\d\+/\=submatch(0) * 10/<CR>` - replace the matched number with the computed result.

### Drill B

1. `3G` - move to line 3.
2. `:s/\d\+/\=submatch(0) * 10/g<CR>` - compute a new value for each number on that line.

### Drill C

1. `:%s/\d\+/\=submatch(0) * 10/g<CR>` - compute a new value for every number in the buffer.

### Challenge

`:%s/\d\+/\=submatch(0) * 10/g<CR>`

`submatch(0)` supplies the current numeric match, and the expression multiplies it before Vim inserts the result.

</details>

## Reset and Cleanup

- Between drills: run `:enew`, paste the fixture again, and return to line 1, column 1.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: `\=` expressions in `:substitute` are standard in Vim and Neovim.
- Function detail: `submatch(0)` returns the whole current match; `submatch(1)` and higher return captured groups.
- Edge case: when the replacement starts with `\=`, normal replacement items such as `&` do not keep their special meaning inside the expression.
- LazyVim/LSP bridge: expression replacements are editor-side computations and do not require LSP. If a project-wide computed change starts from picker or diagnostics results, export to quickfix first, review the list, then apply a scoped `:cdo` or `:cfdo`.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `\=` | Replacement text | Treat the rest of the replacement as an expression. |
| `submatch(0)` | Substitute expression | Return the whole current match. |
| `:s/\d\+/\=submatch(0) * 10/` | Command-line | Multiply one numeric match on the current line by `10`. |
| `:%s/\d\+/\=submatch(0) * 10/g` | Command-line | Multiply every numeric match in the buffer by `10`. |

## References

- [`:help sub-replace-expression`](https://vimhelp.org/change.txt.html#sub-replace-expression) - expression replacements in `:substitute`.
- [`:help submatch()`](https://vimhelp.org/builtin.txt.html#submatch%28%29) - access matched text inside a substitute expression.
- [`:help :s\=`](https://vimhelp.org/change.txt.html#%3As%5C%3D) - `\=` replacement syntax.
- [Neovim help: `sub-replace-expression`](https://neovim.io/doc/user/change.html#sub-replace-expression) - expression replacement behavior.
