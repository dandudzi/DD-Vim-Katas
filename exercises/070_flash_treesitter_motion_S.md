# Kata: Use Flash Treesitter as an Operator Target

## Task

Use a checked Flash Treesitter `S` mapping as the motion for comment, yank, and indent operators.

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
first total function commented
original formatTotal function reindented
copied formatTotal function pasted at the end of the file and reindented
```

## Commands

Run these command steps:

```text
1. :set filetype=typescript<CR>
2. gcS{label for the complete total function}
3. yS{label for the complete formatTotal function}
4. Gp
5. =S{label for the original complete formatTotal function}
6. =S{label for the pasted complete formatTotal function}
```
