# Kata: Use Flash Treesitter as an Operator Target

> **Environment:** Neovim with LazyVim or another config that maps Flash Treesitter.
> **Dependencies:** `folke/flash.nvim`, an installed Treesitter parser for TypeScript, and a comment operator such as Neovim 0.10+ `gc`.
> **Portability:** `S` is not a Vim command here. Verify your active mapping before starting.

## Objective

Use a readiness-checked Flash Treesitter mapping as a motion for an operator, without depending on fixed labels.

Success means: you can comment, yank, or indent the syntax node selected by the label shown in your own editor.

## Prerequisites

- Know: operator-pending mode, `gc{motion}`, `y{motion}`, and `={motion}`.
- Required option/state: `filetype=typescript`.
- Required external tool/plugin: Flash Treesitter and a TypeScript parser.
- Readiness check: run `:verbose nmap S`, `:verbose omap S`, and `:verbose xmap S`. Continue only if they report a Flash Treesitter mapping. Run `:checkhealth nvim-treesitter` or your parser manager's equivalent and confirm TypeScript is available.

## Setup

1. Open a scratch buffer with `:enew`.
2. Run `:setlocal filetype=typescript`.
3. Insert the fixture below.
4. Start in Normal mode on line 1, column 1.
5. Run `:verbose nmap S` again if labels do not appear when expected; mappings are configuration-dependent.

## Initial Fixture

```ts
function total(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0);
}

function formatTotal(items: number[]): string {
  const value = total(items);
  return `Total: ${value}`;
}

const sample = [2, 4, 8];
console.log(formatTotal(sample));
```

Start in Normal mode at the top of the buffer. Restore the fixture before each drill.

## Constraints

- Use `S` only after confirming it is mapped to Flash Treesitter in the relevant mode.
- Do not copy labels from this file; Flash labels are generated from the current screen.
- Choose the smallest node that satisfies the drill goal.
- Reset to the fixture before each drill unless the drill says otherwise.

## Tasks

### Drill A - Comment a syntax node

**Goal:** comment exactly the `formatTotal` function.

1. Start the comment operator.
2. Invoke the checked Flash Treesitter mapping.
3. Press the label displayed for the smallest node covering the complete `formatTotal` function.

**Verify:** only the `formatTotal` function is commented; `total`, `sample`, and `console.log` are unchanged.

### Drill B - Yank a syntax node

**Goal:** yank exactly the `total` function without moving there first.

1. Reset the fixture.
2. Start a yank operator, invoke Flash Treesitter, and choose the label for the complete `total` function.
3. Paste at the bottom of the buffer.

**Verify:** a second copy of `total` appears below `console.log(formatTotal(sample));`, and no other code changed.

### Drill C - Reindent a syntax node

**Goal:** reindent the `formatTotal` function as one syntax target.

1. Reset the fixture.
2. Deliberately indent the two inner lines of `formatTotal` one extra level.
3. Start the indent operator, invoke Flash Treesitter, and choose the label for the complete `formatTotal` function.

**Verify:** the two inner lines return to two-space indentation.

### Challenge - Recall without prompts

Reset the fixture. Comment `total`, yank `formatTotal` into the unnamed register, and leave the buffer with only `total` commented.

**Verify:** `formatTotal` is not commented, `:echo getline(1, 3)` shows comment leaders on the first function only, and `:echo @0 =~# 'formatTotal'` prints `1`.

## Expected Final State

After the challenge, the visible buffer should have only the first function commented. The exact comment leader depends on your comment provider, but the uncommented text should otherwise remain:

```ts
// function total(items: number[]): number {
//   return items.reduce((sum, item) => sum + item, 0);
// }

function formatTotal(items: number[]): string {
  const value = total(items);
  return `Total: ${value}`;
}

const sample = [2, 4, 8];
console.log(formatTotal(sample));
```

## Hints

<details>
<summary>Hint 1</summary>

`S` is the motion part. The operator comes first: comment, yank, or indent.

</details>

<details>
<summary>Hint 2</summary>

If several labels appear near a function, pick the one whose highlighted range covers the whole function, not only its parameter list or body.

</details>

## Solution

<details>
<summary>Show command shapes</summary>

### Drill A

1. `gcS` - start the comment operator, then invoke Flash Treesitter.
2. Press the displayed label for the complete `formatTotal` function.

### Drill B

1. `yS` - start yank, then invoke Flash Treesitter.
2. Press the displayed label for the complete `total` function.
3. `Gp` - paste the yanked text at the bottom.

### Drill C

1. Make the indentation mistake manually.
2. `=S` - start the indent operator, then invoke Flash Treesitter.
3. Press the displayed label for the complete `formatTotal` function.

### Challenge

Use `gcS` and choose the displayed label for `total`, then use `yS` and choose the displayed label for `formatTotal`.

Labels are intentionally omitted because they depend on screen position, window size, Flash configuration, and current highlights.

</details>

## Reset and Cleanup

- Between drills: restore the Initial Fixture with undo or `:enew` and paste it again.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- `S` is a LazyVim/Flash mapping, not a Vim primitive; confirm it with `:verbose nmap S`, `:verbose omap S`, and `:verbose xmap S`.
- Flash Treesitter requires parser support for the buffer's filetype.
- If the comment operator is unavailable, run `:verbose nmap gc` and use the provider reported there or skip the comment drill.
- Do not hard-code labels. They are part of the current UI state.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `gcS` | Normal/operator-pending | Toggle comment over the labeled Treesitter target when both mappings exist. |
| `yS` | Normal/operator-pending | Yank the labeled Treesitter target. |
| `=S` | Normal/operator-pending | Reindent the labeled Treesitter target. |
| `:verbose omap S` | Command-line | Show the active operator-pending `S` mapping source. |

## References

- [LazyVim keymaps](https://www.lazyvim.org/keymaps) - current default Flash and comment mappings.
- [flash.nvim README](https://github.com/folke/flash.nvim) - Flash Treesitter and operator-pending mappings.
- [`:help operator`](https://vimhelp.org/motion.txt.html#operator) - built-in operator plus motion model.
