# Kata: Scroll by Half a Page

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode scrolling commands `<C-d>` and `<C-u>`.

## Objective

By the end of this kata, you will be able to move through a buffer in half-page steps with `<C-d>` and `<C-u>`.

Success means: you can move the viewport and cursor together in larger chunks than line-by-line scrolling, with a deterministic `scroll` amount.

## Prerequisites

- Know: the difference between fine scrolling and larger viewport jumps.
- Required option/state: `:set nowrap scrolloff=0 scroll=4`.
- Required external tool/plugin: none.
- Readiness check: run `:set wrap? scrolloff? scroll?` and confirm `nowrap`, `scrolloff=0`, and `scroll=4`.

## Setup

1. Open a new scratch buffer.
2. Run `:set nowrap scrolloff=0 scroll=4` and `:resize 10`.
3. Insert the fixture exactly as shown below.
4. For Drill A, start with `9Gzt`.
5. For Drill B, start with `13Gzt`.

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
Line 16
Line 17
Line 18
Line 19
Line 20
```

Start in Normal mode on the `L` in the drill's documented start line. Do not modify the fixture before beginning the drills.

## Constraints

- Use `<C-d>` and `<C-u>` for the final movement in each drill.
- Do not use `j`, `k`, `zt`, `zz`, `zb`, page scrolls, or the mouse after the drill begins.
- Reset to the documented start state before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** move forward by one half-page step.

1. Start on line 9 with `9Gzt`.
2. Scroll downward by one half-page step.

**Verify:** `:echo line('.') . ',' . line('w0') . ',' . line('w$')` prints `14,11,20`.

### Drill B - Add precision or repetition

**Goal:** move backward by one half-page step.

1. Reset and start on line 13 with `13Gzt`.
2. Scroll upward by one half-page step.

**Verify:** `:echo line('.') . ',' . line('w0') . ',' . line('w$')` prints `8,8,17`.

### Drill C - Apply the workflow

**Goal:** move down and then recover most of the earlier context.

1. Reset and start on line 9 with `9Gzt`.
2. Scroll downward by one half-page step.
3. Scroll upward by one half-page step.

**Verify:** `:echo line('.') . ',' . line('w0') . ',' . line('w$')` prints `9,6,15`.

### Challenge - Recall without prompts

Reset the fixture and start on line 9 with `9Gzt`. Scroll down one half-page and then back up one half-page without using any other motion.

**Verify:** the cursor returns to line 9, the top visible line becomes line 6, and the buffer text is unchanged.

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
Line 16
Line 17
Line 18
Line 19
Line 20
```

## Hints

<details>
<summary>Hint 1</summary>

These commands use the `'scroll'` option, which this kata fixes at `4`.

</details>

<details>
<summary>Hint 2</summary>

`<C-d>` moves deeper into the file; `<C-u>` moves back toward the top.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `<C-d>` - scroll down by the configured half-page amount.

### Drill B

1. `<C-u>` - scroll up by the configured half-page amount.

### Drill C

1. `<C-d><C-u>` - scroll down once, then back up once.

### Challenge

`<C-d><C-u>`

With `scroll=4`, these are larger jumps than `<C-e>` and `<C-y>`, and they move the cursor with the viewport.

</details>

## Reset and Cleanup

- Between drills: rerun the documented start command for that drill.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- This kata fixes `'scroll'` at `4` so the verification stays deterministic.
- Without that setup, `<C-d>` and `<C-u>` usually use half the current window height.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `<C-d>` | Normal | Scroll down by the `'scroll'` amount and move the cursor accordingly. |
| `<C-u>` | Normal | Scroll up by the `'scroll'` amount and move the cursor accordingly. |

## References

- `:help CTRL-D`
- `:help CTRL-U`
- `:help 'scroll'`
