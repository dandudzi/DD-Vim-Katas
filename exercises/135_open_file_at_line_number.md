# Kata: Open a File at a Line Number

> **Environment:** Vim or Neovim; built-in file-jump commands only.
> **Dependencies:** None.
> **Portability:** `gF` is built in. This kata uses relative paths inside a temporary directory so no external project layout is required.

## Objective

By the end of this kata, you will be able to open the file under the cursor and honor its trailing line number with `gF`.

Success means: from a reference such as `docs/todo.txt:3`, you can open the target file directly on the referenced line instead of opening the file first and then navigating manually.

## Prerequisites

- Know: basic Normal-mode movement and how to edit a file.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Reset the practice directory with `:call delete('/tmp/vim-kata-135', 'rf')`.
2. Create it and its subdirectory with `:call mkdir('/tmp/vim-kata-135/docs', 'p')`.
3. Create `/tmp/vim-kata-135/refs.txt`:
   `:call writefile(['First target docs/todo.txt:3', 'Second target docs/todo.txt (5)', 'Third target docs/todo.txt line 2'], '/tmp/vim-kata-135/refs.txt')`
4. Create `/tmp/vim-kata-135/docs/todo.txt`:
   `:call writefile(['line one', 'line two', 'line three', 'line four', 'line five'], '/tmp/vim-kata-135/docs/todo.txt')`
5. Open the reference file with `:edit /tmp/vim-kata-135/refs.txt`.
6. Put the cursor on the `d` in `docs/todo.txt:3` on line 1, column 14.
7. Confirm `:echo expand('%:t') line('.') col('.')` prints `refs.txt 1 14`.

## Initial Fixture

The setup creates exactly these files:

`/tmp/vim-kata-135/refs.txt`

```text
First target docs/todo.txt:3
Second target docs/todo.txt (5)
Third target docs/todo.txt line 2
```

`/tmp/vim-kata-135/docs/todo.txt`

```text
line one
line two
line three
line four
line five
```

Start in Normal mode in `refs.txt` on the `d` in `docs/todo.txt:3` at line 1, column 14. Do not edit either file before beginning Drill A.

## Constraints

- Use `gF` for the final landing in every drill.
- Do not use `gf`, `:edit`, `G`, `{count}G`, search, or the mouse.
- Reset to the documented start state before each drill unless the drill tells you to move to another exact reference.

## Tasks

### Drill A - Isolate the skill

**Goal:** follow a `file:line` reference directly to its target line.

1. From `refs.txt`, open `docs/todo.txt:3` with one command.

**Verify:** the current buffer is `todo.txt`, the cursor is on line 3, column 1, and `:echo expand('%:t') line('.') col('.') getline('.')` prints `todo.txt 3 1 line three`.

### Drill B - Add precision or repetition

**Goal:** use a different line-number separator that `gF` also recognizes.

1. Reset to the documented start state.
2. Put the cursor on the `d` in `docs/todo.txt (5)` on line 2, column 15.
3. Open that reference directly.

**Verify:** the current buffer is `todo.txt`, the cursor is on line 5, column 1, and `:echo expand('%:t') line('.') col('.') getline('.')` prints `todo.txt 5 1 line five`.

### Drill C - Apply the workflow

**Goal:** follow a reference that uses the `line` word form instead of punctuation.

1. Reset to the documented start state.
2. Put the cursor on the `d` in `docs/todo.txt line 2` on line 3, column 14.
3. Open that reference directly.

**Verify:** the current buffer is `todo.txt`, the cursor is on line 2, column 1, and `:echo expand('%:t') line('.') col('.') getline('.')` prints `todo.txt 2 1 line two`.

### Challenge - Recall without prompts

Reset the fixture. Starting in `refs.txt`, follow the second reference and land directly on `line five`.

**Verify:** you finish in `todo.txt` on line 5, column 1, and `:echo expand('%:t') line('.') col('.')` prints `todo.txt 5 1`.

## Expected Final State

After the challenge, verify all of the following:

- The current buffer is `/tmp/vim-kata-135/docs/todo.txt`.
- The cursor is on the `l` in `line five` at line 5, column 1.
- `:echo expand('%:t') line('.') col('.')` prints `todo.txt 5 1`.
- Neither practice file was edited.

## Hints

<details>
<summary>Hint 1</summary>

This command is `gf` plus one extra feature: it notices a line number after the file name.

</details>

<details>
<summary>Hint 2</summary>

The cursor should be on the file path itself, not somewhere earlier in the sentence.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `gF` - open `docs/todo.txt` and land on line 3.

### Drill B

1. `2G15|` - place the cursor on the file path in the second reference.
2. `gF` - open `docs/todo.txt` and land on line 5.

### Drill C

1. `3G14|` - place the cursor on the file path in the third reference.
2. `gF` - open `docs/todo.txt` and land on line 2.

### Challenge

`2G15|gF`

`gF` reads the file name under the cursor and the line number that follows it, so the jump opens the target file already positioned on line 5.

</details>

## Reset and Cleanup

- Between drills: rerun the Setup steps so the files are rebuilt from scratch and `refs.txt` is reopened at line 1, column 14.
- After the kata: close practice buffers with `:bd!` and remove the temporary directory with `:call delete('/tmp/vim-kata-135', 'rf')`.
- Preserve user data: all files live under `/tmp/vim-kata-135`.

## Notes and Portability

- Built-in behavior: `gF` is standard in Vim and Neovim.
- Separator detail: this kata demonstrates three documented forms that `gF` recognizes after a file name: `:3`, `(5)`, and `line 2`.
- Path detail: the references are relative paths, so Vim resolves them from the directory of the current file in this setup.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `gF` | Normal | Open the file under the cursor and, if present, jump to the following line number. |
| `gf` | Normal | Open the file under the cursor without honoring a trailing line number. |
| `{line}G` | Normal | Move to an exact line before using `gF` on another reference. |

## References

- [`:help gF`](https://vimhelp.org/editing.txt.html#gF) - open file under cursor and honor the trailing line number.
- [`:help gf`](https://vimhelp.org/editing.txt.html#gf) - base file-under-cursor jump that `gF` extends.
- [Neovim help: `gF`](https://neovim.io/doc/user/editing.html#gF) - Neovim's file-and-line jump documentation.
