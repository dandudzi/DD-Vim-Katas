# Kata: Compose Case Operators with Word Motions

> **Environment:** Vim or Neovim; built-in operators only.
> **Dependencies:** None.
> **Portability:** Uses built-in case operators `gu` and `gU` with Normal-mode word motions.

## Objective

By the end of this kata, you will be able to change the case of an exact word span by combining `gu` or `gU` with counted `w` motions.

Success means: you can lowercase or uppercase the first two words of a line without entering Visual mode or changing the rest of the line.

## Prerequisites

- Know: basic Normal-mode movement and the `w` word motion.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Run `:enew` to open a scratch buffer.
2. Paste the fixture exactly as shown below.
3. Put the cursor on the `A` in `API` at line 1, column 1.
4. Confirm `:echo line('.') . ',' . col('.')` prints `1,1`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
API RESPONSE READY
mixed Case Tokens
leave this line
```

Start in Normal mode on the `A` in `API` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `gu{motion}` or `gU{motion}` for every text change.
- Use `w` motions for the changed span in every drill.
- Do not use Visual mode, `~`, `U`, `u`, substitute commands, or the mouse.
- Reset to the initial fixture before each drill unless the drill explicitly builds on the previous result.

## Tasks

### Drill A - Isolate one operator-motion edit

**Goal:** lowercase the first word on line 1.

1. Start from line 1, column 1 on `API`.
2. Lowercase only the first word with one operator-motion command.

**Verify:** line 1 becomes `api RESPONSE READY`, the cursor remains on line 1, and `:echo getline(1)` prints `api RESPONSE READY`.

### Drill B - Add a counted motion

**Goal:** lowercase the first two words on line 1 with one command.

1. Reset to the initial fixture.
2. Lowercase exactly the first two words of line 1.

**Verify:** line 1 becomes `api response READY`, and the word `READY` remains uppercase.

### Drill C - Apply the workflow

**Goal:** use the same pattern with both case operators across two lines.

1. Reset to the initial fixture.
2. Lowercase the first two words on line 1.
3. Move to line 2 and uppercase its first two words.

**Verify:** line 1 is `api response READY`, line 2 is `MIXED CASE Tokens`, and line 3 is unchanged.

### Challenge - Recall without prompts

Reset the fixture. Starting on `API`, normalize the first two words of line 1 to lowercase and the first two words of line 2 to uppercase using only case operators with word motions.

**Verify:** the final cursor position is on line 2, the buffer matches the Expected Final State exactly, and `:echo getline(1) . '|' . getline(2)` prints `api response READY|MIXED CASE Tokens`.

## Expected Final State

After the challenge, the buffer content must be:

```text
api response READY
MIXED CASE Tokens
leave this line
```

Verify all of the following:

- Line 1 changed only in its first two words.
- Line 2 changed only in its first two words.
- Line 3 remains `leave this line`.

## Hints

<details>
<summary>Hint 1</summary>

`gu` lowercases and `gU` uppercases, but neither does anything until you supply a motion.

</details>

<details>
<summary>Hint 2</summary>

A count can belong to the motion, so `2w` expands the changed span to two words.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `guw` - lowercase the current word using a one-word motion.

### Drill B

1. `gu2w` - lowercase across two `w` motions, affecting the first two words.

### Drill C

1. `gu2w` - lowercase `API RESPONSE`.
2. `jgU2w` - move to line 2 and uppercase `mixed Case`.

### Challenge

`gu2wjgU2w`

The first operator-motion lowercases the two-word span on line 1, and the second reuses the same structure with `gU` on line 2.

</details>

## Reset and Cleanup

- Between drills: run `:enew`, reinsert the fixture, and return to line 1, column 1.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: `gu` and `gU` are standard operators in Vim and Neovim.
- Scope boundary: this kata stays on one operator pattern and does not cover delete, change, indent, or Visual-mode case changes.
- Edge case: `w` follows Vim's notion of a word. Punctuation-heavy text can produce different spans than plain alphabetic text.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `guw` | Normal | Lowercase the current word. |
| `gu2w` | Normal | Lowercase across two word motions. |
| `gU2w` | Normal | Uppercase across two word motions. |
| `:echo getline(1)` | Command-line | Print line 1 for verification. |

## References

- [`:help operator`](https://vimhelp.org/motion.txt.html#operator) - operator-pending behavior.
- [`:help gu`](https://vimhelp.org/change.txt.html#gu) - lowercase operator.
- [`:help gU`](https://vimhelp.org/change.txt.html#gU) - uppercase operator.
- [Neovim help: `operator`](https://neovim.io/doc/user/motion.html#operator) - Neovim operator overview.
