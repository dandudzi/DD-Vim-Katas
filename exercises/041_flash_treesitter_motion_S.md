# Kata: Use Flash Treesitter as an Operator Target

## Task

Use a checked Flash Treesitter `S` mapping as the motion for comment, yank, and indent operators, then close the practice split.

## Start

From any buffer, open the shared JS/TS practice file in a vertical split and
jump to this kata:

```text
:vsplit practice_js_ts_filetypes.ts<CR>
:/KATA 070 START<CR>
j
```

Start in Normal mode on the `f` in the first `function`. This kata assumes `S` is mapped to Flash Treesitter in operator-pending mode and a TypeScript Treesitter parser is installed.

## End

The Kata 070 section of `practice_js_ts_filetypes.ts` should have:

```text
kata070Total function commented
original kata070FormatTotal function reindented
copied kata070FormatTotal function pasted at the end of the file and reindented
```

The practice split should be closed, returning focus to the original window.

## Commands

Run these command steps:

```text
1. :set filetype=typescript<CR>
2. gcS{label for the complete kata070Total function}
3. yS{label for the complete kata070FormatTotal function}
4. Gp
5. =S{label for the original complete kata070FormatTotal function}
6. =S{label for the pasted complete kata070FormatTotal function}
7. <leader>wd
```
