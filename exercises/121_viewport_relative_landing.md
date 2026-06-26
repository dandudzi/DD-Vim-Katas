# Kata: Land on the Top, Middle, or Bottom Visible Line

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode motions `H`, `M`, and `L`.

## Objective

By the end of this kata, you will be able to land on the top, middle, or bottom visible line of the current window with `H`, `M`, and `L`.

Success means: you can target the visible window rather than the file as a whole, without changing the viewport first.

## Prerequisites

- Know: `G` and the difference between the file and the current window.
- Required option/state: `:set nowrap scrolloff=0`.
- Required external tool/plugin: none.
- Readiness check: run `:set wrap? scrolloff?` and confirm `nowrap` and `scrolloff=0`.

## Setup

1. Open a new scratch buffer.
2. Run `:set nowrap scrolloff=0` and `:resize 7`.
3. Insert the fixture exactly as shown below.
4. Run `5Gzt` so line 5 is at the top of the window.
5. Confirm `:echo line('w0') . ',' . line('w$')` prints `5,11`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
Line 01
Line 02
Line 03
Line 04
Line 05
Line 06
Line 07
Line 08
Line 09
Line 10
Line 11
Line 12
Line 13
Line 14
Line 15
```

Start in Normal mode on the `L` in `Line 05`. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `H`, `M`, and `L` for the final landing in each drill.
- Do not use `j`, `k`, `gg`, `G`, search, or the mouse after the drill begins.
- Reset to the documented start state before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** land on the top visible line.

1. Starting from the documented setup, move to the top visible line with one motion.

**Verify:** the cursor is on line 5, and `:echo line('.') . ',' . line('w0') . ',' . line('w$')` prints `5,5,11`.

### Drill B - Add precision or repetition

**Goal:** land on the middle visible line.

1. Reset to the documented start state.
2. Move to the middle visible line with one motion.

**Verify:** the cursor is on line 8, and `:echo line('.') . ',' . line('w0') . ',' . line('w$')` prints `8,5,11`.

### Drill C - Apply the workflow

**Goal:** land on the bottom visible line.

1. Reset to the documented start state.
2. Move to the bottom visible line with one motion.

**Verify:** the cursor is on line 11, and `:echo line('.') . ',' . line('w0') . ',' . line('w$')` prints `11,5,11`.

### Challenge - Recall without prompts

Reset the fixture and setup. Starting on line 5 at the top of the window, land on the bottom visible line, then the middle visible line, and finish on the top visible line using only `H`, `M`, and `L`.

**Verify:** the final cursor position is line 5, the window still spans lines 5-11, and the buffer text is unchanged.

## Expected Final State

After the challenge, the buffer content must still be:

```text
Line 01
Line 02
Line 03
Line 04
Line 05
Line 06
Line 07
Line 08
Line 09
Line 10
Line 11
Line 12
Line 13
Line 14
Line 15
```

## Hints

<details>
<summary>Hint 1</summary>

These motions care about what is visible in the window, not absolute file line numbers.

</details>

<details>
<summary>Hint 2</summary>

`H` means high, `M` means middle, and `L` means low within the current window.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `H` - jump to the top visible line.

### Drill B

1. `M` - jump to the middle visible line.

### Drill C

1. `L` - jump to the bottom visible line.

### Challenge

`LMH`

`L` lands on line 11, `M` returns to line 8, and `H` returns to line 5. The viewport itself does not change during these motions.

</details>

## Reset and Cleanup

- Between drills: rerun `5Gzt`.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `H` | Normal | Jump to the top visible line of the current window. |
| `M` | Normal | Jump to the middle visible line of the current window. |
| `L` | Normal | Jump to the bottom visible line of the current window. |

## References

- `:help H`
- `:help M`
- `:help L`
