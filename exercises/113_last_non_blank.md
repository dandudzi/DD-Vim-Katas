# Kata: Land on the Last Non-Blank Character

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode motion `g_`.

## Objective

By the end of this kata, you will be able to jump to the last non-blank character on a line with `g_`, even when trailing spaces exist.

Success means: you stop on the final visible character instead of moving into trailing whitespace.

## Prerequisites

- Know: `j`, `k`, and `$`.
- Required option/state: enable visible trailing spaces with `:setlocal list listchars=trail:~`.
- Required external tool/plugin: none.
- Readiness check: run `:setlocal list? listchars?` and confirm `list` is on and `trail:~` appears in `listchars`.

## Setup

1. Open a new scratch buffer.
2. Run `:setlocal list listchars=trail:~`.
3. Run `:call setline(1, ['alpha  ', '  beta!    ', 'gamma?'])`.
4. Put the cursor on the `b` in `beta!` on line 2.

## Initial Fixture

With `list` enabled, the buffer should display as:

```text
alpha~~
  beta!~~~~
gamma?
```

Start in Normal mode on the `b` in `beta!` on line 2. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `g_` for the final landing in each drill.
- Do not use `$` as the final landing motion in the challenge.
- Reset to the initial fixture before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** land on the final visible character of the current line.

1. Move from the `b` in `beta!` to the last non-blank character on line 2.

**Verify:** the cursor is on `!`, `:echo line('.') . ',' . col('.')` prints `2,7`, and four `~` markers remain to the right.

### Drill B - Add precision or repetition

**Goal:** repeat the motion on another line that also has trailing spaces.

1. Reset the cursor to the documented start.
2. Move to line 1 and land on its last non-blank character.

**Verify:** the cursor is on the final `a` in `alpha`, `:echo line('.') . ',' . col('.')` prints `1,5`, and two `~` markers remain to the right.

### Drill C - Apply the workflow

**Goal:** recover the last visible character after visiting the line end.

1. Reset the cursor to the documented start.
2. Move to the end of line 2.
3. Return to the last non-blank character of line 2.

**Verify:** the cursor ends back on `!`, not on any trailing `~` marker.

### Challenge - Recall without prompts

Reset the fixture. Starting on line 2, land on the last non-blank of line 1 and then finish on the last non-blank of line 3.

**Verify:** the final cursor position is on `?` at line 3, column 6, and the displayed list view still matches the original fixture.

## Expected Final State

After the challenge, the buffer should still display as:

```text
alpha~~
  beta!~~~~
gamma?
```

## Hints

<details>
<summary>Hint 1</summary>

`g_` stops before trailing spaces, while `$` goes all the way to the line end.

</details>

<details>
<summary>Hint 2</summary>

Enable `list` so the difference between the final visible character and the real line end stays obvious.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `g_` - jump to the last non-blank character of line 2.

### Drill B

1. `kg_` - move to line 1, then jump to its last non-blank.

### Drill C

1. `$g_` - visit the true line end, then return to the last visible character.

### Challenge

`kg_jjg_`

This sequence lands on the last non-blank of line 1, then the last non-blank of line 3. Because `list` is enabled, you can confirm `g_` stops before the trailing-space markers on lines 1 and 2.

</details>

## Reset and Cleanup

- Between drills: rerun `:call setline(1, ['alpha  ', '  beta!    ', 'gamma?'])` if needed and return to the documented start.
- After the kata: run `:setlocal nolist` if you do not want visible trailing spaces, then close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a scratch buffer.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `g_` | Normal | Jump to the last non-blank character of the current line. |

## References

- `:help g_`
- `:help 'list'`
