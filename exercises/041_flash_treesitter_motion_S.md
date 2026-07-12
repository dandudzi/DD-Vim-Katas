# Kata: Use Flash Treesitter as an Operator Target

## Task

Use Flash Treesitter `S` as the target of `gc` to comment a TypeScript function,
then undo the change so the fixture stays repeatable.
This requires LazyVim Flash and a TypeScript Tree-sitter parser.

## Start

Open a scratch buffer and insert:

```text
practice_js_ts_filetypes.ts
```

Start in Normal mode on the `p` in `practice_js_ts_filetypes.ts`.

## End

The `kata070Total` function should be restored:

```ts
function kata070Total(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0);
}
```

The practice split should be closed.

## Commands

Run these command steps:

```text
1. <leader>| (LazyVim: Split Window Right)
2. gf
3. /KATA 070 START<CR>j
4. gcS{label for the complete kata070Total function}
5. u
6. <leader>wd (LazyVim: Delete Window)
```
