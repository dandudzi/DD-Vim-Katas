# Kata: Add a Delimiter Column with Visual Block Mode

> **Environment:** Vim or Neovim; built-in Visual block commands only.
> **Dependencies:** None.
> **Portability:** Uses built-in blockwise Visual mode with `<C-v>` and block insertion with `I`. No plugins or mappings are required.

## Objective

By the end of this kata, you will be able to insert the same delimiter text into several table rows at once using blockwise insertion.

Success means: from a whitespace-aligned table, you can place `| ` at one shared column across every row with a single Visual block insertion.

## Prerequisites

- Know: basic Normal-mode movement with `h`, `j`, `k`, and `l`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Run `:enew` to open a scratch buffer.
2. Paste the fixture exactly as shown below.
3. Put the cursor on the `T` in `Task` at line 1, column 1.
4. Confirm `:echo line('.') . ',' . col('.')` prints `1,1`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
Task          Owner
Refactor      Sam
Docs          Priya
Release       Omar
```

Start in Normal mode on the `T` in `Task` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `<C-v>` and blockwise `I` for the delimiter insertion in every drill.
- Do not use `:s`, macros, multiple cursors, or four separate single-line insertions.
- Reset to the initial fixture before each drill unless the drill explicitly builds on a previous result.

## Tasks

### Drill A - Isolate the insertion

**Goal:** add the delimiter to two rows with one block insertion.

1. From the documented start state, move to the shared column where `Owner` and `Sam` begin.
2. Insert `| ` on line 1 and line 2 with one blockwise command.

**Verify:** the first two lines are exactly:

```text
Task          | Owner
Refactor      | Sam
```

### Drill B - Extend the same insertion to the whole table

**Goal:** add the delimiter to every row with one larger block selection.

1. Reset to the initial fixture.
2. Insert `| ` at the same shared column on all four lines with one blockwise insertion.

**Verify:** the buffer is exactly:

```text
Task          | Owner
Refactor      | Sam
Docs          | Priya
Release       | Omar
```

### Drill C - Apply the workflow

**Goal:** turn the formatted header into a table header plus rule line.

1. Reset to the initial fixture.
2. Perform the full-column delimiter insertion from Drill B.
3. Duplicate the header below itself.
4. Replace every character of the duplicated line with `-`.

**Verify:** line 1 is `Task          | Owner`, line 2 is `---------------------`, and line 3 begins `Refactor`.

### Challenge - Recall without prompts

Reset the fixture. Produce the final formatted table with its rule line without consulting the hints or solution.

**Verify:** the final buffer content matches the Expected Final State exactly.

## Expected Final State

After the challenge, the buffer content must be:

```text
Task          | Owner
---------------------
Refactor      | Sam
Docs          | Priya
Release       | Omar
```

## Hints

<details>
<summary>Hint 1</summary>

The shared insertion point is the first character of `Owner`, `Sam`, `Priya`, and `Omar`.

</details>

<details>
<summary>Hint 2</summary>

In blockwise Visual mode, `I` starts one insertion that is replayed on every selected line when you press `<Esc>`.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `14l<C-v>jI| <Esc>` - move to column 15, select two rows, and insert `| ` before both values.

### Drill B

1. `14l<C-v>3jI| <Esc>` - extend the same insertion across all four rows.

### Drill C

1. `14l<C-v>3jI| <Esc>` - insert the delimiter column on every row.
2. `ggyypVr-` - duplicate the header, then replace every character of the copy with `-`.

### Challenge

`14l<C-v>3jI| <Esc>ggyypVr-`

The block insertion creates the delimiter column in one step. `yy` copies the formatted header, `p` places it on the next line, and `Vr-` turns the copied line into a full-width rule.

</details>

## Reset and Cleanup

- Between drills: run `:enew`, paste the fixture again, and return the cursor to line 1, column 1.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: blockwise Visual mode and block insertion are standard in Vim and Neovim.
- Mapping detail: if `<C-v>` starts a literal insert in your terminal or config, use `:verbose nmap <C-v>` to confirm whether it is remapped.
- Edge case: block insertion uses screen columns, so tabs or mixed indentation would change the shared insertion column. This fixture uses spaces only.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `<C-v>` | Normal | Start blockwise Visual mode. |
| `I` | Visual block | Begin one insertion before the block on every selected line. |
| `yy` | Normal | Yank the current line. |
| `p` | Normal | Put the yanked line below the current line. |
| `Vr-` | Normal -> Visual | Replace every character on the current line with `-`. |

## References

- [`:help visual-block`](https://vimhelp.org/visual.txt.html#visual-block) - blockwise Visual mode basics.
- [`:help v_b_I`](https://vimhelp.org/visual.txt.html#v_b_I) - blockwise insertion with `I`.
- [`:help v_r`](https://vimhelp.org/visual.txt.html#v_r) - replacing a Visual selection with one character.
- [Neovim help: `visual-block`](https://neovim.io/doc/user/visual.html#visual-block) - blockwise Visual mode in Neovim.
