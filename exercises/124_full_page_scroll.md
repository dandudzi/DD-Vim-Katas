# Kata: Scroll by a Full Page

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode scrolling commands `<C-f>` and `<C-b>`.

## Objective

By the end of this kata, you will be able to move through a buffer one page at a time with `<C-f>` and `<C-b>`.

Success means: you can cover long distances quickly and understand that page scrolls move both the viewport and the cursor.

## Prerequisites

- Know: the difference between line scrolling, half-page scrolling, and full-page scrolling.
- Required option/state: `:set nowrap scrolloff=0 window=6`.
- Required external tool/plugin: none.
- Readiness check: run `:set wrap? scrolloff? window?` and confirm `nowrap`, `scrolloff=0`, and `window=6`.

## Setup

1. Open a new scratch buffer.
2. Run `:set nowrap scrolloff=0 window=6` and `:resize 10`.
3. Insert the fixture exactly as shown below.
4. For forward scroll drills, start with `8Gzt`.
5. For backward scroll drills, start with `18Gzt`.

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
Line 21
Line 22
Line 23
Line 24
Line 25
Line 26
Line 27
Line 28
Line 29
Line 30
```

Start in Normal mode on the `L` in the drill's documented start line. Do not modify the fixture before beginning the drills.

## Constraints

- Use `<C-f>` and `<C-b>` for the final movement in each drill.
- Do not use `zt`, `zz`, `zb`, search, `G`, or the mouse after the drill begins.
- Reset to the documented start state before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** move forward by one page.

1. Start on line 8 with `8Gzt`.
2. Scroll forward by one page.

**Verify:** `:echo line('.') . ',' . line('w0') . ',' . line('w$')` prints `12,12,21`.

### Drill B - Add precision or repetition

**Goal:** move backward by one page.

1. Reset and start on line 18 with `18Gzt`.
2. Scroll backward by one page.

**Verify:** `:echo line('.') . ',' . line('w0') . ',' . line('w$')` prints `23,14,23`.

### Drill C - Apply the workflow

**Goal:** cover more distance with a counted page scroll.

1. Reset and start on line 8 with `8Gzt`.
2. Scroll forward by two pages.

**Verify:** `:echo line('.') . ',' . line('w0') . ',' . line('w$')` prints `16,16,25`.

### Challenge - Recall without prompts

Reset the fixture and start on line 18 with `18Gzt`. Scroll backward by two pages using one counted command.

**Verify:** `:echo line('.') . ',' . line('w0') . ',' . line('w$')` prints `19,10,19`, and the buffer text is unchanged.

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
Line 21
Line 22
Line 23
Line 24
Line 25
Line 26
Line 27
Line 28
Line 29
Line 30
```

## Hints

<details>
<summary>Hint 1</summary>

These are page-sized scrolls, not line scrolls or half-page scrolls.

</details>

<details>
<summary>Hint 2</summary>

With one window, the `'window'` option can affect how many lines a page scroll covers, so this kata fixes it at `6`.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `<C-f>` - scroll forward one page.

### Drill B

1. `<C-b>` - scroll backward one page.

### Drill C

1. `2<C-f>` - scroll forward two pages.

### Challenge

`2<C-b>`

Page scrolling is larger than `<C-d>` and `<C-u>`, and the cursor relocates with the newly displayed page.

</details>

## Reset and Cleanup

- Between drills: rerun the documented start command for that drill.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- This kata fixes `'window'` at `6` to keep the page size deterministic in a single-window session.
- Without that setup, `<C-f>` and `<C-b>` can depend on the current window size.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `<C-f>` | Normal | Scroll forward by one page. |
| `<C-b>` | Normal | Scroll backward by one page. |
| `{count}<C-f>` | Normal | Scroll forward by `count` pages. |
| `{count}<C-b>` | Normal | Scroll backward by `count` pages. |

## References

- `:help CTRL-F`
- `:help CTRL-B`
- `:help 'window'`
