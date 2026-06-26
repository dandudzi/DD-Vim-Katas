# Kata: Preserve a Yank While Deleting Nearby Text

> **Environment:** Vim or Neovim; built-in registers only.
> **Dependencies:** None.
> **Portability:** Uses the built-in yank register `0` and black-hole register `_`.

## Objective

By the end of this kata, you will be able to preserve a yanked word while deleting nearby text by choosing the right register.

Success means: you can yank once, remove an unwanted line, and still paste the original word without re-yanking it.

## Prerequisites

- Know: `yiw`, `dd`, `p`, and how to open a scratch buffer.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Run `:enew` to open a scratch buffer.
2. Paste the fixture exactly as shown below.
3. Put the cursor on the `a` in `alpha` at line 1, column 1.
4. Confirm `:echo line('.') . ',' . col('.')` prints `1,1`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
alpha source
discard this line
result:
```

Start in Normal mode on the `a` in `alpha` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `yiw` to capture `alpha` at the start of each drill.
- Use register `0` explicitly when a drill asks you to prove the yank survived another delete.
- Use the black-hole register `_` when a drill asks you to delete without clobbering the unnamed register.
- Do not use named registers, clipboard registers, expression registers, Visual mode, or the mouse.
- Reset to the initial fixture before each drill unless the drill explicitly builds on the previous result.

## Tasks

### Drill A - Isolate the yank register

**Goal:** paste the latest yank by addressing register `0` directly.

1. Yank `alpha` from line 1.
2. Move to `result:` and append a space.
3. Paste the yanked word from register `0`.

**Verify:** line 3 becomes `result: alpha`, and `:echo getreg('0')` prints `alpha`.

### Drill B - Prove the yank survives a delete

**Goal:** keep using the latest yank even after deleting another line.

1. Reset to the initial fixture.
2. Yank `alpha`.
3. Delete `discard this line` with a normal line delete.
4. Append the original yank after `result:` by using register `0`.

**Verify:** the buffer has two lines, line 2 is `result: alpha`, and `:echo getreg('0')` still prints `alpha`.

### Drill C - Apply the workflow with the black-hole register

**Goal:** delete the unwanted line without overwriting the unnamed register.

1. Reset to the initial fixture.
2. Yank `alpha`.
3. Delete `discard this line` into the black-hole register.
4. Append a space after `result:` and paste with plain `p`.

**Verify:** the buffer has two lines, line 2 is `result: alpha`, and you did not need to name a register during the put.

### Challenge - Recall without prompts

Reset the fixture. Starting on `alpha`, copy that word, remove the unwanted middle line, and append the copied word after `result:` without re-yanking.

**Verify:** the final cursor position is on line 2, the buffer matches the Expected Final State exactly, and `:echo getreg('0')` prints `alpha`.

## Expected Final State

After the challenge, the buffer content must be:

```text
alpha source
result: alpha
```

Verify all of the following:

- `:echo line('$')` prints `2`.
- Line 1 remains `alpha source`.
- Line 2 is exactly `result: alpha`.

## Hints

<details>
<summary>Hint 1</summary>

Register `0` stores the most recent yank, not the most recent delete.

</details>

<details>
<summary>Hint 2</summary>

The black-hole register discards deleted text, so the unnamed register can keep the value from your earlier yank.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `yiw` - yank `alpha`.
2. `jjA <Space><Esc>` - move to `result:` and append a space at the end of the line.
3. `"0p` - put the contents of register `0`.

### Drill B

1. `yiw` - yank `alpha`.
2. `jdd` - delete `discard this line`.
3. `A <Space><Esc>` - append a space at the end of `result:`.
4. `"0p` - put the original yank from register `0`.

### Drill C

1. `yiw` - yank `alpha`.
2. `j"_dd` - delete the middle line into the black-hole register.
3. `A <Space><Esc>` - append a space at the end of `result:`.
4. `p` - put from the unchanged unnamed register.

### Challenge

`yiwj"_ddA <Space><Esc>p`

`yiw` stores `alpha` in both the unnamed register and register `0`. `"_dd` removes the middle line without changing the unnamed register, so plain `p` still pastes `alpha`.

</details>

## Reset and Cleanup

- Between drills: run `:enew`, reinsert the fixture, and return to line 1, column 1.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: register `0` and register `_` work the same way in Vim and Neovim.
- Scope boundary: this kata deliberately excludes named, clipboard, expression, and read-only registers so the workflow stays focused on preserving one yank.
- Edge case: line deletes update the unnamed register, but they do not replace register `0` unless the text was yanked.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `yiw` | Normal | Yank the current word into the unnamed register and register `0`. |
| `"0p` | Normal | Put the contents of register `0` after the cursor. |
| `"_dd` | Normal | Delete the current line into the black-hole register. |
| `:echo getreg('0')` | Command-line | Print the contents of yank register `0`. |

## References

- [`:help registers`](https://vimhelp.org/change.txt.html#registers) - register overview.
- [`:help quote0`](https://vimhelp.org/change.txt.html#quote0) - yank register `0`.
- [`:help quote_`](https://vimhelp.org/change.txt.html#quote_) - black-hole register.
- [Neovim help: `registers`](https://neovim.io/doc/user/change.html#registers) - Neovim register reference.
