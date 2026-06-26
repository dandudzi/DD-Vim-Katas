# Kata: Reuse the Full Match in a Replacement

> **Environment:** Vim or Neovim; built-in `:substitute` only.
> **Dependencies:** None.
> **Portability:** Uses built-in replacement item `&` to insert the whole matched text.

## Objective

By the end of this kata, you will be able to reuse the full matched text inside a replacement with `&`.

Success means: you can wrap each matched status word in brackets without typing the status names again in the replacement.

## Prerequisites

- Know: basic `:substitute` usage on one line and across a range.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Run `:enew` to open a scratch buffer.
2. Paste the fixture exactly as shown below.
3. Put the cursor on the `d` in `deploy` on line 1, column 1.
4. Confirm Normal mode is active and `:echo line('.') . ',' . col('.')` prints `1,1`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
deploy ready
rollback blocked
summary ready blocked pending
archive pending
```

Start in Normal mode on the `d` in `deploy` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `&` in the replacement text.
- Do not type `ready`, `blocked`, or `pending` in the replacement.
- Do not edit the buffer manually.
- Reset to the initial fixture before each drill unless the drill explicitly builds on the previous one.

## Tasks

### Drill A - Isolate the full match

**Goal:** wrap one matched status with brackets.

1. On line 1, wrap the matched status word in brackets with one substitution.

**Verify:** line 1 changes from `deploy ready` to `deploy [ready]`.

### Drill B - Reuse the full match repeatedly

**Goal:** wrap several different matched words on one line with a single substitution.

1. Reset the fixture.
2. Move to line 3.
3. Wrap every status word on that line in brackets.

**Verify:** line 3 changes from `summary ready blocked pending` to `summary [ready] [blocked] [pending]`.

### Drill C - Apply the workflow

**Goal:** wrap all status words in the whole buffer.

1. Reset the fixture.
2. Use one whole-buffer substitution to bracket every `ready`, `blocked`, and `pending` match.

**Verify:** the buffer changes from:

```text
deploy ready
rollback blocked
summary ready blocked pending
archive pending
```

to:

```text
deploy [ready]
rollback [blocked]
summary [ready] [blocked] [pending]
archive [pending]
```

### Challenge - Recall without prompts

Reset the fixture. Wrap every status word in brackets across the whole buffer, using `&` so the replacement reuses each exact match.

**Verify:** the final buffer text matches the Expected Final State exactly.

## Expected Final State

After the challenge, the buffer content must be:

```text
deploy [ready]
rollback [blocked]
summary [ready] [blocked] [pending]
archive [pending]
```

## Hints

<details>
<summary>Hint 1</summary>

In a replacement, `&` means "insert the whole text that matched the pattern."

</details>

<details>
<summary>Hint 2</summary>

The replacement can add punctuation around `&`, so you do not need separate replacements for `ready`, `blocked`, and `pending`.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:s/\<ready\>/[&]/<CR>` - replace the matched `ready` with `[ready]`.

### Drill B

1. `3G` - move to line 3.
2. `:s/\<ready\|blocked\|pending\>/[&]/g<CR>` - wrap each matched status word on that line.

### Drill C

1. `:%s/\<ready\|blocked\|pending\>/[&]/g<CR>` - wrap every matched status word in the buffer.

### Challenge

`:%s/\<ready\|blocked\|pending\>/[&]/g<CR>`

`&` inserts the current match, so one replacement works for every listed status word.

</details>

## Reset and Cleanup

- Between drills: run `:enew`, paste the fixture again, and return to line 1, column 1.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: `&` in a replacement string is built into Vim and Neovim.
- Contrast: `\0` can also reuse the whole match, but this kata focuses on `&`.
- Edge case: a literal `&` in the replacement must be written as `\&`.
- LazyVim/LSP bridge: LSP rename will not help with structural text decoration like wrapping each match; use substitute replacement items when the desired change is textual formatting rather than a symbol rename.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `&` | Replacement text | Insert the whole matched text. |
| `\&` | Replacement text | Insert a literal `&`. |
| `:s/\<ready\|blocked\|pending\>/[&]/g` | Command-line | Wrap every matched status on the current line. |
| `:%s/\<ready\|blocked\|pending\>/[&]/g` | Command-line | Wrap every matched status in the whole buffer. |

## References

- [`:help sub-replace-special`](https://vimhelp.org/change.txt.html#sub-replace-special) - special replacement items for `:substitute`.
- [`:help s/\&`](https://vimhelp.org/change.txt.html#s%2F%5C%26) - literal `&` in replacement text.
- [`:help :substitute`](https://vimhelp.org/change.txt.html#%3Asubstitute) - substitute command overview.
- [Neovim help: `sub-replace-special`](https://neovim.io/doc/user/change.html#sub-replace-special) - replacement-string special items.
