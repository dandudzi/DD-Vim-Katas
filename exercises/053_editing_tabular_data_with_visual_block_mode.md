# Kata: Normalize Pipe Spacing with Visual Block Mode

> **Environment:** Vim or Neovim; built-in Visual block commands only.
> **Dependencies:** None.
> **Portability:** Uses built-in blockwise Visual mode with rectangular deletion and block append. No plugins or mappings are required.

## Objective

By the end of this kata, you will be able to tighten a pipe-delimited table by deleting the same padding columns and appending missing spacing after the delimiter.

Success means: you can shift a whole delimiter column left and add one post-delimiter space without editing the cell text row by row.

## Prerequisites

- Know: basic Normal-mode movement with `h`, `j`, `k`, and `l`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Run `:enew` to open a scratch buffer.
2. Paste the fixture exactly as shown below.
3. Put the cursor on the `S` in `Service` at line 1, column 1.
4. Confirm `:echo line('.') . ',' . col('.')` prints `1,1`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
Service       |Port
api           |3000
worker        |8080
metrics       |9100
```

Start in Normal mode on the `S` in `Service` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use blockwise deletion for the padding cleanup and blockwise `A` for the missing post-pipe space.
- Do not use `:s`, macros, alignment plugins, or four separate single-line edits.
- Reset to the initial fixture before each drill unless the drill explicitly builds on a previous result.

## Tasks

### Drill A - Isolate the rectangular delete

**Goal:** remove two shared padding columns from the first two rows.

1. From the documented start state, move to column 13.
2. Delete columns 13 and 14 on line 1 and line 2 as one rectangular block.

**Verify:** the first two lines are exactly:

```text
Service     |Port
api         |3000
```

### Drill B - Clean the whole delimiter column

**Goal:** shift the delimiter left on every row with one block delete.

1. Reset to the initial fixture.
2. Delete columns 13 and 14 across all four lines with one blockwise selection.

**Verify:** the buffer is exactly:

```text
Service     |Port
api         |3000
worker      |8080
metrics     |9100
```

### Drill C - Apply the workflow

**Goal:** normalize the spacing around the delimiter after shifting it left.

1. Reset to the initial fixture.
2. Perform the full four-line padding cleanup from Drill B.
3. Select the four `|` characters as a vertical block.
4. Append one space after every selected pipe with one block append.

**Verify:** each `|` is followed by a space, and line 3 is exactly `worker      | 8080`.

### Challenge - Recall without prompts

Reset the fixture. Produce the fully normalized table without consulting the hints or solution.

**Verify:** the final buffer content matches the Expected Final State exactly.

## Expected Final State

After the challenge, the buffer content must be:

```text
Service     | Port
api         | 3000
worker      | 8080
metrics     | 9100
```

## Hints

<details>
<summary>Hint 1</summary>

Start the block on the first unwanted padding column, then widen the selection by one more column before deleting it.

</details>

<details>
<summary>Hint 2</summary>

After the delete, the pipes line up in one vertical column. Blockwise `A` appends after each selected pipe when you press `<Esc>`.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `12l<C-v>jld` - move to column 13, select two rows and two columns, then delete that rectangular padding block.

### Drill B

1. `12l<C-v>3jld` - remove the same two padding columns across all four rows.

### Drill C

1. `12l<C-v>3jld` - shift the pipe column left on all rows.
2. `gg12l<C-v>3jA<Space><Esc>` - reselect the aligned pipes and append one space after each of them.

### Challenge

`12l<C-v>3jldgg12l<C-v>3jA<Space><Esc>`

The first block operation removes the same two padding columns from every row. The second block operation targets the aligned pipes and appends one shared trailing space.

</details>

## Reset and Cleanup

- Between drills: run `:enew`, paste the fixture again, and return the cursor to line 1, column 1.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: blockwise deletion and blockwise append are standard in Vim and Neovim.
- Mapping detail: if `<C-v>` is remapped in your config or terminal, verify the active Normal-mode mapping with `:verbose nmap <C-v>`.
- Edge case: this kata assumes spaces, not tabs. Mixed-width indentation or tabs would change the visible block columns and the final alignment.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `<C-v>` | Normal | Start blockwise Visual mode. |
| `d` | Visual block | Delete the selected rectangular block. |
| `A` | Visual block | Append text after the block on every selected line. |
| `<Space>` | Insert | Insert one literal space during the block append. |

## References

- [`:help visual-block`](https://vimhelp.org/visual.txt.html#visual-block) - blockwise Visual mode basics.
- [`:help v_b_d`](https://vimhelp.org/visual.txt.html#v_b_d) - deleting a rectangular block.
- [`:help v_b_A`](https://vimhelp.org/visual.txt.html#v_b_A) - blockwise append with `A`.
- [Neovim help: `visual-block`](https://neovim.io/doc/user/visual.html#visual-block) - blockwise Visual mode in Neovim.
