# Kata: Walk Line Deletion History with Numbered Registers

> **Environment:** Vim or Neovim; built-in registers only.
> **Dependencies:** None.
> **Portability:** Uses the built-in numbered delete registers `"1`, `"2`, and `"3`.

## Objective

By the end of this kata, you will be able to restore older line deletions from the numbered registers with `"1P`, `"2P`, and `"3P`.

Success means: after deleting several whole lines in sequence, you can predict which deleted line sits in each numbered register and restore them in the original order.

## Prerequisites

- Know: `dd`, `P`, and basic line movement.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Run `:enew`.
2. Insert the fixture exactly as shown below.
3. Put the cursor on the `r` in `red` at line 1, column 1.
4. Confirm `:echo line('.') . ',' . col('.')` prints `1,1`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
red
blue
green
yellow
```

Start in Normal mode on line 1, column 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use whole-line deletions with `dd`.
- Use numbered registers `"1`, `"2`, and `"3` for restoration.
- Do not use undo, unnamed-register puts, or manual retyping.
- Reset to the initial fixture before each drill unless the drill explicitly builds on the current buffer.

## Tasks

### Drill A - Isolate the skill

**Goal:** restore the most recent line deletion from register `1`.

1. Delete `red`.
2. Restore it above `blue` from register `1`.

**Verify:** all of the following are true:

- The buffer returns to the original four lines.
- `:echo split(getreg('1'), "\n")[0]` prints `red`.
- `:echo getregtype('1')` prints `V`.

### Drill B - Add precision or repetition

**Goal:** reach one step deeper into deletion history.

1. Reset to the initial fixture.
2. Delete `red`.
3. Move to `green`, which is now line 2, and delete it.
4. Restore the older deletion above `blue` from register `2`.

**Verify:** all of the following are true:

- The buffer becomes exactly:

```text
red
blue
yellow
```

- `:echo split(getreg('1'), "\n")[0] . ',' . split(getreg('2'), "\n")[0]` prints `green,red`.
- `:echo getregtype('1') . getregtype('2')` prints `VV`.

### Drill C - Apply the workflow

**Goal:** delete three whole lines and rebuild the original order from deletion history alone.

1. Reset to the initial fixture.
2. Delete `red`.
3. Move to `green` and delete it.
4. Delete `yellow`, leaving only `blue`.
5. Restore `red`, `green`, and `yellow` in the original order using only `"3P`, `"2P`, and `"1P`.

**Verify:** all of the following are true:

- The buffer returns to the original four lines.
- `:echo split(getreg('1'), "\n")[0] . ',' . split(getreg('2'), "\n")[0] . ',' . split(getreg('3'), "\n")[0]` prints `yellow,green,red`.
- `:echo getregtype('1') . getregtype('2') . getregtype('3')` prints `VVV`.

### Challenge - Recall without prompts

Reset the fixture. Reduce the buffer to just `blue`, then rebuild the original four-line order using only the numbered delete registers.

**Verify:** the final buffer matches the initial fixture exactly, and the `1,2,3` register check from Drill C still prints `yellow,green,red`.

## Expected Final State

After the challenge, the buffer content must be:

```text
red
blue
green
yellow
```

Verify all of the following:

- `:echo split(getreg('1'), "\n")[0] . ',' . split(getreg('2'), "\n")[0] . ',' . split(getreg('3'), "\n")[0]` prints `yellow,green,red`.
- `:echo getregtype('1') . getregtype('2') . getregtype('3')` prints `VVV`.
- No additional lines were created.

## Hints

<details>
<summary>Hint 1</summary>

Each new linewise delete shifts the previous history down one numbered register.

</details>

<details>
<summary>Hint 2</summary>

After all three deletions, only `blue` remains. Restore the oldest deletion first so the original order can be rebuilt from top to bottom.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `dd` - delete `red` into register `1`.
2. `"1P` - put that deleted line back before `blue`.

### Drill B

1. `dd` - delete `red`.
2. `jdd` - move to `green` and delete it.
3. `gg"2P` - go to `blue` and restore the older deletion from register `2`.

### Drill C

1. `ggdd` - delete `red`.
2. `jdd` - delete `green`.
3. `dd` - delete `yellow`.
4. `gg"3Pj"2P2j"1P` - restore `red`, then `green`, then `yellow` in order.

### Challenge

`ggddjddddgg"3Pj"2P2j"1P`

</details>

## Reset and Cleanup

- Between drills: run `:enew`, reinsert the fixture, and return the cursor to line 1, column 1.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: numbered registers shift older line deletions downward as new linewise deletions happen.
- Scope boundary: this kata uses only linewise deletion history, not the small-delete register `"-`.
- Edge case: deleting text shorter than a line does not participate in this same numbered-register rotation.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `dd` | Normal | Delete the current line into the numbered delete registers. |
| `"1P` | Normal | Put the newest deleted line before the current line. |
| `"2P` | Normal | Put the second-newest deleted line before the current line. |
| `"3P` | Normal | Put the third-newest deleted line before the current line. |

## References

- [`:help quote_number`](https://vimhelp.org/change.txt.html#quote_number) - overview of the numbered registers.
- [`:help quote1`](https://vimhelp.org/change.txt.html#quote1) - newest linewise deletion register.
- [`:help quote2`](https://vimhelp.org/change.txt.html#quote2) - second deletion-history register.
- [Neovim help: `quote_number`](https://neovim.io/doc/user/change.html#quote_number) - the same built-in register history in Neovim.
