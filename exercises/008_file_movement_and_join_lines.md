# Kata: Jump to the File End and Join a Wrapped Entry

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses the built-in file-edge motions `gg` and `G`, plus Normal-mode join `J`.

## Objective

By the end of this kata, you will be able to jump straight to the end of a file with `G` and repair a wrapped entry with `J`.

Success means: from the top of the buffer, you can land on the final wrapped entry and turn its last two lines into one line without stepping down line by line.

## Prerequisites

- Know: basic Normal-mode movement and how to open a scratch buffer.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Run `:enew` to open a scratch buffer.
2. Paste the fixture exactly as shown below.
3. Put the cursor on the `R` in `Release notes` at line 1, column 1.
4. Confirm `:echo line('.') . ',' . col('.')` prints `1,1`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
Release notes

Feature A is complete.
Feature B is pending.

Summary:
final review
scheduled tomorrow
```

Start in Normal mode on the `R` in `Release notes` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `G` for long-distance travel toward the last entry.
- Use `J` for the join in every text-changing drill.
- Do not use `/`, `?`, counts with `j` or `k`, `:3`, `:7`, or the mouse.
- Reset to the initial fixture before each drill unless the drill explicitly builds on the previous state.

## Tasks

### Drill A - Isolate the file-end jump

**Goal:** jump directly from the top of the file to the last line.

1. Start from line 1, column 1 on `Release notes`.
2. Jump to the last line with one file-edge motion.

**Verify:** the cursor is on the `s` in `scheduled tomorrow` at line 7, column 1, and `:echo line('.') . ',' . col('.')` prints `7,1`.

### Drill B - Return to the file start

**Goal:** move from one file edge to the other without linewise stepping.

1. Reset to the initial fixture.
2. Jump to the last line.
3. Return to the first line with one file-edge motion.

**Verify:** the cursor is back on the `R` in `Release notes` at line 1, column 1, and `:echo line('.') . ',' . col('.')` prints `1,1`.

### Drill C - Apply the workflow

**Goal:** reach the wrapped entry at the end and join it into one line.

1. Reset to the initial fixture.
2. Jump to the last line.
3. Move to `final review` and join it with the following line.

**Verify:** line 6 becomes `final review scheduled tomorrow`, line 7 disappears, and `:echo line('$')` prints `6`.

### Challenge - Recall without prompts

Reset the fixture. Starting on `Release notes`, reach the wrapped entry at the end of the file and repair it so the summary occupies one line.

**Verify:** the final cursor position is on the `f` in `final review scheduled tomorrow` at line 6, column 1, and the buffer matches the Expected Final State exactly.

## Expected Final State

After the challenge, the buffer content must be:

```text
Release notes

Feature A is complete.
Feature B is pending.

Summary:
final review scheduled tomorrow
```

Verify all of the following:

- The cursor is on line 6, column 1.
- `:echo line('$')` prints `6`.
- The joined line contains one space between `review` and `scheduled`.

## Hints

<details>
<summary>Hint 1</summary>

`G` jumps to the last line of the current buffer. `gg` returns to the first line.

</details>

<details>
<summary>Hint 2</summary>

`J` joins the current line with the next line and normalizes the spacing between them.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `G` - jump from line 1 to the last line of the buffer.

### Drill B

1. `G` - jump to the last line.
2. `gg` - return to the first line.

### Drill C

1. `G` - jump to `scheduled tomorrow` on the last line.
2. `k` - move to `final review`.
3. `J` - join line 6 with line 7.

### Challenge

`GkJ`

`G` reaches the file end immediately, `k` backs up to the first half of the wrapped entry, and `J` joins it with the line below.

</details>

## Reset and Cleanup

- Between drills: run `:enew`, reinsert the fixture, and return to line 1, column 1.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: `gg`, `G`, and `J` are standard in both Vim and Neovim.
- Scope boundary: this kata does not cover paragraph motions such as `{` and `}`; it stays focused on file-edge movement plus one join workflow.
- Edge case: `J` inserts one space when joining ordinary text lines. Comments and some `'formatoptions'` settings can change join behavior in real files.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `gg` | Normal | Jump to the first line of the buffer. |
| `G` | Normal | Jump to the last line of the buffer. |
| `J` | Normal | Join the current line with the next line. |
| `:echo line('$')` | Command-line | Report the current number of lines in the buffer. |

## References

- [`:help gg`](https://vimhelp.org/motion.txt.html#gg) - first-line motion.
- [`:help G`](https://vimhelp.org/motion.txt.html#G) - last-line motion.
- [`:help J`](https://vimhelp.org/change.txt.html#J) - join lines in Normal mode.
- [Neovim help: `J`](https://neovim.io/doc/user/change.html#J) - Neovim reference for joining lines.
