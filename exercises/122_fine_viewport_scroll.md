# Kata: Fine-Scroll the Viewport by Line

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode scrolling commands `<C-e>` and `<C-y>`.

## Objective

By the end of this kata, you will be able to scroll the current window a line at a time with `<C-e>` and `<C-y>`.

Success means: you can reveal nearby context without switching to larger half-page or full-page scrolls.

## Prerequisites

- Know: how to enter Normal mode and read `line('w0')`.
- Required option/state: `:set nowrap scrolloff=0`.
- Required external tool/plugin: none.
- Readiness check: run `:set wrap? scrolloff?` and confirm `nowrap` and `scrolloff=0`.

## Setup

1. Open a new scratch buffer.
2. Run `:set nowrap scrolloff=0` and `:resize 7`.
3. Insert the fixture exactly as shown below.
4. Run `8Gzt` and then move to line 13 with `13G`.
5. Confirm `:echo line('.') . ',' . line('w0') . ',' . line('w$')` prints `13,8,14`.

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

Start in Normal mode on the `L` in `Line 13`, with line 8 at the top of the window. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `<C-e>` and `<C-y>` for the final scroll in each drill.
- Do not use `zt`, `zz`, `zb`, half-page scrolls, page scrolls, or the mouse after the drill begins.
- Reset to the documented start state before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** scroll the window down by one line.

1. From the documented start state, reveal one more line below the window with a single fine-scroll command.

**Verify:** `:echo line('.') . ',' . line('w0') . ',' . line('w$')` prints `13,9,15`.

### Drill B - Add precision or repetition

**Goal:** scroll the window down by several lines with a count.

1. Reset to the documented start state.
2. Scroll the window down three lines with one counted fine-scroll command.

**Verify:** `:echo line('.') . ',' . line('w0') . ',' . line('w$')` prints `13,11,17`.

### Drill C - Apply the workflow

**Goal:** scroll back upward to recover earlier context.

1. Reset to the documented start state.
2. Scroll down three lines.
3. Scroll back up two lines.

**Verify:** `:echo line('.') . ',' . line('w0') . ',' . line('w$')` prints `13,9,15`.

### Challenge - Recall without prompts

Reset the fixture and setup. Starting from the documented state, scroll down three lines and then back up three lines using only fine-scroll commands.

**Verify:** `:echo line('.') . ',' . line('w0') . ',' . line('w$')` prints `13,8,14`, and the buffer text is unchanged.

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

These commands scroll the window itself one line at a time.

</details>

<details>
<summary>Hint 2</summary>

`<C-e>` reveals later lines in the buffer; `<C-y>` reveals earlier lines.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `<C-e>` - scroll the window down one line.

### Drill B

1. `3<C-e>` - scroll the window down three lines.

### Drill C

1. `3<C-e>2<C-y>` - scroll down three lines, then back up two.

### Challenge

`3<C-e>3<C-y>`

The cursor stays on line 13 throughout because it never leaves the visible window.

</details>

## Reset and Cleanup

- Between drills: rerun `8Gzt` and then `13G`.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `<C-e>` | Normal | Scroll the window down one line in the buffer. |
| `{count}<C-e>` | Normal | Scroll the window down by `count` lines. |
| `<C-y>` | Normal | Scroll the window up one line in the buffer. |
| `{count}<C-y>` | Normal | Scroll the window up by `count` lines. |

## References

- `:help CTRL-E`
- `:help CTRL-Y`
