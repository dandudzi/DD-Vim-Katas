# Kata: Read Shell Output into the Buffer

> **Environment:** Vim or Neovim.
> **Dependencies:** a shell with `printf`.
> **Portability:** Uses built-in `:read !{cmd}`.

## Objective

By the end of this kata, you will be able to insert command output below a
chosen line with `:read !{cmd}`.

Success means: you can place generated lines exactly where you want them
without entering Insert mode or pasting manually.

## Prerequisites

- Know: how Ex addresses pick an insertion line.
- Required option/state: none.
- Required external tool/plugin: shell `printf`.
- Readiness check: run `:echo executable('sh')` and confirm it prints `1`.

## Setup

1. Open a scratch buffer with `:enew`.
2. Insert exactly:

```text
Title: Release Notes

Highlights:
- item one
```

3. Put the cursor on the blank line 2.
4. Confirm `:echo line('.') . ',' . col('.')` prints `2,1`.

## Initial Fixture

The starting buffer must be:

```text
Title: Release Notes

Highlights:
- item one
```

Start in Normal mode on line 2.

## Constraints

- Use `:read !printf ...` for every insertion.
- Do not paste shell output manually.
- Reset the scratch buffer to the initial fixture between drills.

## Tasks

### Drill A - Insert generated lines below the current line

**Goal:** add two metadata lines below line 2.

1. From line 2, run:

```vim
:read !printf 'build: 2026-06-24\nstatus: draft\n'
```

**Verify:** lines 3 and 4 are `build: 2026-06-24` and `status: draft`.

### Drill B - Use an explicit line address

**Goal:** insert a generated header immediately after line 1.

1. Reset the fixture.
2. Run:

```vim
:1read !printf 'generated-by: read-bang\n'
```

**Verify:** line 2 becomes `generated-by: read-bang`.

### Drill C - Insert at the end of the buffer

**Goal:** append a generated footer after the last existing line.

1. Reset the fixture.
2. Run:

```vim
:$read !printf 'owner: kata\n'
```

**Verify:** the final line in the buffer is `owner: kata`.

### Challenge - Populate the note skeleton

Reset the fixture. Insert `generated-by: read-bang` after the title, then
insert `build: 2026-06-24` and `status: draft` below the blank line, and
finally append `owner: kata` at the end.

**Verify:** the final buffer is:

```text
Title: Release Notes
generated-by: read-bang

build: 2026-06-24
status: draft
Highlights:
- item one
owner: kata
```

## Hints

<details>
<summary>Hint 1</summary>

`:read !cmd` inserts output below the addressed line, not above it.

</details>

<details>
<summary>Hint 2</summary>

Use `1read` or `$read` when the current cursor line is not the insertion line
you want.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:read !printf 'build: 2026-06-24\nstatus: draft\n'<CR>`

### Drill B

1. `:1read !printf 'generated-by: read-bang\n'<CR>`

### Drill C

1. `:$read !printf 'owner: kata\n'<CR>`

### Challenge

`:1read !printf 'generated-by: read-bang\n'<CR>:3read !printf 'build: 2026-06-24\nstatus: draft\n'<CR>:$read !printf 'owner: kata\n'<CR>`

</details>

## Reset and Cleanup

- Between drills: run `:enew` and restore the initial fixture.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: the exercise runs only in a throwaway scratch buffer.

## Notes and Portability

- The command in this kata uses `printf` for deterministic output instead of
  something time-dependent like `date`.
- `:read !{cmd}` is built in, but the shell command itself depends on your
  system shell.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:read !{cmd}` | Command-line | Insert command output below the current line. |
| `:1read !{cmd}` | Command-line | Insert command output below line 1. |
| `:$read !{cmd}` | Command-line | Insert command output below the last line. |

## References

- [`:help :read!`](https://vimhelp.org/various.txt.html#%3Aread%21) - insert shell output into the buffer.
- [`:help cmdline-ranges`](https://vimhelp.org/cmdline.txt.html#cmdline-ranges) - Ex line addresses such as `1` and `$`.
- [Neovim help: `:read!`](https://neovim.io/doc/user/various.html#%3Aread%21) - Neovim documentation for reading command output.
