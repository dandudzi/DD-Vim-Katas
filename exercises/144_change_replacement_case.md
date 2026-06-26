# Kata: Change Replacement Case

> **Environment:** Vim or Neovim; built-in `:substitute` only.
> **Dependencies:** None.
> **Portability:** Uses built-in replacement case transforms `\U` and `\E`.

## Objective

By the end of this kata, you will be able to change the case of replacement text during a substitution.

Success means: you can uppercase matched log-level words without typing the uppercase versions manually.

## Prerequisites

- Know: basic `:substitute` usage and whole-match reuse with `&`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Run `:enew` to open a scratch buffer.
2. Paste the fixture exactly as shown below.
3. Put the cursor on the `w` in `warn` on line 1, column 1.
4. Confirm Normal mode is active and `:echo line('.') . ',' . col('.')` prints `1,1`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
warn: disk low
info: cache warm
summary: warn info debug
debug: retry queued
```

Start in Normal mode on the `w` in `warn` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use a replacement case transform such as `\U`.
- Do not type `WARN`, `INFO`, or `DEBUG` directly into the replacement.
- Do not edit the buffer manually.
- Reset to the initial fixture before each drill unless the drill explicitly builds on the previous one.

## Tasks

### Drill A - Isolate the case change

**Goal:** uppercase one matched word in place.

1. On line 1, uppercase the matched `warn` with one substitution.

**Verify:** line 1 changes from `warn: disk low` to `WARN: disk low`.

### Drill B - Apply the case change repeatedly

**Goal:** uppercase several matched words on one line.

1. Reset the fixture.
2. Move to line 3.
3. Uppercase every log-level word on that line with one substitution.

**Verify:** line 3 changes from `summary: warn info debug` to `summary: WARN INFO DEBUG`.

### Drill C - Apply the workflow

**Goal:** uppercase all log-level words in the whole buffer.

1. Reset the fixture.
2. Uppercase every `warn`, `info`, and `debug` match in the buffer.

**Verify:** the buffer changes from:

```text
warn: disk low
info: cache warm
summary: warn info debug
debug: retry queued
```

to:

```text
WARN: disk low
INFO: cache warm
summary: WARN INFO DEBUG
DEBUG: retry queued
```

### Challenge - Recall without prompts

Reset the fixture. Uppercase every log-level word in the buffer using a replacement case transform instead of literal uppercase text.

**Verify:** the final buffer text matches the Expected Final State exactly.

## Expected Final State

After the challenge, the buffer content must be:

```text
WARN: disk low
INFO: cache warm
summary: WARN INFO DEBUG
DEBUG: retry queued
```

## Hints

<details>
<summary>Hint 1</summary>

`&` can still provide the matched text, and the case transform can modify how that text is emitted.

</details>

<details>
<summary>Hint 2</summary>

`\U` uppercases following replacement characters until `\E` or the end of the replacement.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:s/\<warn\>/\U&/<CR>` - reuse the match and emit it in uppercase.

### Drill B

1. `3G` - move to line 3.
2. `:s/\<warn\|info\|debug\>/\U&/g<CR>` - uppercase each matched log-level word on that line.

### Drill C

1. `:%s/\<warn\|info\|debug\>/\U&/g<CR>` - uppercase every matched log-level word in the buffer.

### Challenge

`:%s/\<warn\|info\|debug\>/\U&/g<CR>`

`\U` changes the case of the replacement text as it is emitted, so the original lowercase match can become uppercase in place.

</details>

## Reset and Cleanup

- Between drills: run `:enew`, paste the fixture again, and return to line 1, column 1.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: `\u`, `\U`, `\l`, `\L`, and `\E` are standard replacement case controls in Vim and Neovim.
- This kata uses `\U&` because it makes the case transform visible without adding extra capture groups.
- Edge case: when you need only the first character capitalized, `\u` is usually a better fit than `\U`.
- LazyVim/LSP bridge: use substitute case transforms for mechanical text casing; reserve LSP rename or code actions for semantic changes after `:LspInfo` and capability checks.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `\U` | Replacement text | Uppercase following replacement characters until `\E` or the replacement ends. |
| `\E` | Replacement text | End a `\U`, `\L`, `\u`, or `\l` case transform. |
| `\U&` | Replacement text | Reuse the whole match and emit it in uppercase. |
| `:%s/\<warn\|info\|debug\>/\U&/g` | Command-line | Uppercase each matched log-level word in the buffer. |

## References

- [`:help s/\U`](https://vimhelp.org/change.txt.html#s%2F%5CU) - uppercase replacement transform.
- [`:help s/\E`](https://vimhelp.org/change.txt.html#s%2F%5CE) - end a case transform in replacement text.
- [`:help sub-replace-special`](https://vimhelp.org/change.txt.html#sub-replace-special) - special replacement items and case controls.
- [Neovim help: `sub-replace-special`](https://neovim.io/doc/user/change.html#sub-replace-special) - replacement-string case transforms.
