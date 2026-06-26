# Kata: Reorder Captured Groups

> **Environment:** Vim or Neovim; built-in `:substitute` only.
> **Dependencies:** None.
> **Portability:** Uses built-in capture groups `\(` `\)` and backreferences `\1`, `\2`, and `\3`.

## Objective

By the end of this kata, you will be able to capture parts of a match and reorder them in the replacement.

Success means: you can convert `YYYY-MM-DD` dates into `MM/DD/YYYY` without typing each date manually.

## Prerequisites

- Know: basic `:substitute` usage.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Run `:enew` to open a scratch buffer.
2. Paste the fixture exactly as shown below.
3. Put the cursor on the `r` in `release` on line 1, column 1.
4. Confirm Normal mode is active and `:echo line('.') . ',' . col('.')` prints `1,1`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
release 2026-07-14
freeze 2026-08-01
range 2026-09-10 to 2026-09-12
archive 2026-10-31
```

Start in Normal mode on the `r` in `release` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use capture groups and backreferences in the replacement.
- Do not rewrite dates by hand.
- Keep the separator change inside the substitution itself.
- Reset to the initial fixture before each drill unless the drill explicitly builds on the previous one.

## Tasks

### Drill A - Isolate the reordering

**Goal:** reorder one captured date.

1. On line 1, convert `2026-07-14` to `07/14/2026`.

**Verify:** line 1 changes from `release 2026-07-14` to `release 07/14/2026`.

### Drill B - Reorder multiple matches on one line

**Goal:** apply the same capture reordering to two dates on one line.

1. Reset the fixture.
2. Move to line 3.
3. Convert both dates on that line to `MM/DD/YYYY`.

**Verify:** line 3 changes from `range 2026-09-10 to 2026-09-12` to `range 09/10/2026 to 09/12/2026`.

### Drill C - Apply the workflow

**Goal:** convert every date in the buffer with one substitution.

1. Reset the fixture.
2. Convert every `YYYY-MM-DD` date in the buffer to `MM/DD/YYYY`.

**Verify:** the buffer changes from:

```text
release 2026-07-14
freeze 2026-08-01
range 2026-09-10 to 2026-09-12
archive 2026-10-31
```

to:

```text
release 07/14/2026
freeze 08/01/2026
range 09/10/2026 to 09/12/2026
archive 10/31/2026
```

### Challenge - Recall without prompts

Reset the fixture. Reformat every ISO date in the buffer to `MM/DD/YYYY` with one substitution that reorders the captured groups.

**Verify:** the final buffer text matches the Expected Final State exactly.

## Expected Final State

After the challenge, the buffer content must be:

```text
release 07/14/2026
freeze 08/01/2026
range 09/10/2026 to 09/12/2026
archive 10/31/2026
```

## Hints

<details>
<summary>Hint 1</summary>

Capture the year, month, and day as three separate groups, then emit them in a different order.

</details>

<details>
<summary>Hint 2</summary>

Using `#` as the substitute delimiter avoids extra escaping in the replacement because the new date format uses `/`.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:s#\(\d\{4}\)-\(\d\{2}\)-\(\d\{2}\)#\2/\3/\1#<CR>` - capture year, month, and day, then output month/day/year.

### Drill B

1. `3G` - move to line 3.
2. `:s#\(\d\{4}\)-\(\d\{2}\)-\(\d\{2}\)#\2/\3/\1#g<CR>` - reorder both date matches on that line.

### Drill C

1. `:%s#\(\d\{4}\)-\(\d\{2}\)-\(\d\{2}\)#\2/\3/\1#g<CR>` - reorder every date in the buffer.

### Challenge

`:%s#\(\d\{4}\)-\(\d\{2}\)-\(\d\{2}\)#\2/\3/\1#g<CR>`

`\1` holds the year, `\2` the month, and `\3` the day, so the replacement can emit them in a new order.

</details>

## Reset and Cleanup

- Between drills: run `:enew`, paste the fixture again, and return to line 1, column 1.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: capture groups and backreferences in `:substitute` are built into Vim and Neovim.
- Syntax detail: this kata uses the default escaped group syntax `\(` and `\)` for maximum portability.
- Alternative: `\v` can make the pattern shorter, but the underlying capture-group concept is the same.
- LazyVim/LSP bridge: code actions may offer language-specific rewrites, but capture groups are still the portable tool for deterministic text reshaping across arbitrary files.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `\(` `\)` | Pattern | Capture part of the match as a numbered group. |
| `\1` `\2` `\3` | Replacement text | Reuse the first, second, or third captured group. |
| `:s#\(\d\{4}\)-\(\d\{2}\)-\(\d\{2}\)#\2/\3/\1#` | Command-line | Reorder one ISO date on the current line. |
| `:%s#\(\d\{4}\)-\(\d\{2}\)-\(\d\{2}\)#\2/\3/\1#g` | Command-line | Reorder every ISO date in the buffer. |

## References

- [`:help s/\1`](https://vimhelp.org/change.txt.html#s%2F%5C1) - backreferences in replacement text.
- [`:help sub-replace-special`](https://vimhelp.org/change.txt.html#sub-replace-special) - replacement items, including `\1` through `\9`.
- [`:help /\(`](https://vimhelp.org/pattern.txt.html#%2F%5C%28) - capture groups in patterns.
- [Neovim help: `sub-replace-special`](https://neovim.io/doc/user/change.html#sub-replace-special) - replacement-string backreferences.
