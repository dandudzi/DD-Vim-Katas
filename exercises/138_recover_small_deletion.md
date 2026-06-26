# Kata: Recover the Latest Small Deletion

> **Environment:** Vim or Neovim; built-in registers only.
> **Dependencies:** None.
> **Portability:** Uses the built-in small-delete register `"-`. All setup and verification stay inside a throwaway buffer.

## Objective

By the end of this kata, you will be able to recover the latest deletion shorter than one line with `"-P` or `"-p`.

Success means: after a small deletion and a later line deletion, you can still restore the earlier small deletion from `"-` while register `0` and register `1` keep their own separate histories.

## Prerequisites

- Know: `dw`, `dd`, `yiw`, `p`, and `P`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Run `:enew`.
2. Insert the fixture exactly as shown below.
3. Put the cursor on the `b` in `beta` at line 1, column 6.
4. Confirm `:echo line('.') . ',' . col('.')` prints `1,6`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
keep beta gamma
drop this line
alpha seed
```

Start in Normal mode on the `b` in `beta`. Do not modify the fixture before beginning Drill A.

## Constraints

- Use the small-delete register `"-` for the recovery put in every drill.
- Do not use undo, named registers, or the unnamed register for the final recovery.
- Reset to the initial fixture before each drill unless the drill explicitly builds on the current buffer.

## Tasks

### Drill A - Isolate the skill

**Goal:** delete one word-sized span and restore it from the small-delete register.

1. Delete `beta ` with one word deletion.
2. Restore that deletion from `"-` so line 1 matches the original text again.

**Verify:** all of the following are true:

- The buffer is back to the original three lines.
- `:echo string(getreg('-'))` prints `'beta '`.
- `:echo getregtype('-')` prints `v`.

### Drill B - Add precision or repetition

**Goal:** prove that a yank still lives in register `0` while the small deletion goes to `"-`.

1. Reset to the initial fixture.
2. Yank `alpha` from line 3 with `yiw`.
3. Return to line 1 and delete `beta ` with one word deletion.

**Verify:** all of the following are true:

- Line 1 is `keep gamma`.
- `:echo string(getreg('0'))` prints `'alpha'`.
- `:echo string(getreg('-'))` prints `'beta '`.
- `:echo getregtype('-')` prints `v`.

### Drill C - Apply the workflow

**Goal:** recover a small deletion even after a later line deletion overwrites the unnamed and numbered delete registers.

1. Reset to the initial fixture.
2. Yank `alpha` from line 3.
3. Delete `beta ` from line 1.
4. Delete the whole second line with `dd`.
5. Restore only `beta ` into line 1 from `"-`.

**Verify:** all of the following are true:

- The buffer becomes exactly:

```text
keep beta gamma
alpha seed
```

- `:echo string(getreg('0'))` prints `'alpha'`.
- `:echo string(getreg('-'))` prints `'beta '`.
- `:echo split(getreg('1'), "\n")[0]` prints `drop this line`.
- `:echo getregtype('1')` prints `V`.

### Challenge - Recall without prompts

Reset the fixture. Finish with `keep beta gamma` on line 1 and `alpha seed` on line 2, while preserving the three distinct register facts from Drill C:

- register `0` still holds `alpha`
- register `"-` still holds `beta `
- register `1` holds the deleted whole line

**Verify:** the final text and all three register checks match Drill C exactly.

## Expected Final State

After the challenge, the buffer content must be:

```text
keep beta gamma
alpha seed
```

Verify all of the following:

- `:echo string(getreg('0'))` prints `'alpha'`.
- `:echo string(getreg('-'))` prints `'beta '`.
- `:echo getregtype('-')` prints `v`.
- `:echo split(getreg('1'), "\n")[0]` prints `drop this line`.
- `:echo getregtype('1')` prints `V`.

## Hints

<details>
<summary>Hint 1</summary>

`dw` is a small deletion, so it updates `"-`. `dd` is linewise, so it updates the numbered delete registers instead.

</details>

<details>
<summary>Hint 2</summary>

Use `P` if you want the deleted text to go back before the cursor at the original gap on line 1.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `dw` - delete `beta ` into the unnamed register and the small-delete register.
2. `"-P` - put the small deletion back before `gamma`.

### Drill B

1. `3G0yiw` - yank `alpha` into register `0`.
2. `gg0fbdw` - return to line 1 and delete `beta ` into `"-`.

### Drill C

1. `3G0yiw` - yank `alpha`.
2. `gg0fbdw` - delete `beta `.
3. `jdd` - delete the whole second line into register `1`.
4. `gg0fg"-P` - move to `gamma` and restore `beta ` from the small-delete register.

### Challenge

`3G0yiwgg0fbdwjddgg0fg"-P`

</details>

## Reset and Cleanup

- Between drills: run `:enew`, reinsert the fixture, and return the cursor to line 1, column 6.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: `"-` stores the most recent deletion that is less than one line.
- Register distinction: `0` keeps the most recent yank, while numbered registers such as `1` track linewise deletes.
- Edge case: characterwise deletes such as `x`, `dw`, and `diw` can update `"-`, but linewise deletes such as `dd` do not.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `"-P` | Normal | Put the latest small deletion before the cursor. |
| `dw` | Normal | Delete a word and usually its following space; this updates `"-`. |
| `dd` | Normal | Delete the current line; this updates the numbered delete registers. |
| `yiw` | Normal | Yank the inner word into the unnamed register and register `0`. |

## References

- [`:help quote_-`](https://vimhelp.org/change.txt.html#quote_-) - the small-delete register.
- [`:help quote0`](https://vimhelp.org/change.txt.html#quote0) - the yank register.
- [`:help quote1`](https://vimhelp.org/change.txt.html#quote1) - the most recent linewise delete register.
- [Neovim help: `quote_-`](https://neovim.io/doc/user/change.html#quote_-) - the same register behavior in Neovim.
