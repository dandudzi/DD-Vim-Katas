# Kata: Jump to a Local Definition and Back

## Task

Use `gd` to jump to a same-file TypeScript definition, then traverse the jump list back and forward. This requires an attached TypeScript LSP client that supports definition requests.

## Start

Open a scratch buffer and insert:

```text
practice_js_ts_filetypes.ts
```

Start in Normal mode on the `p` in `practice_js_ts_filetypes.ts`.

## End

Before closing the practice split, the cursor should be on `kata073Normalize` in
its function definition. The practice split should then be closed.

## Commands

Run these command steps:

```text
1. <leader>| (LazyVim: Split Window Right)
2. gf
3. /kata073Normalize(raw)<CR>
4. gd
5. <C-o>
6. <C-i>
7. <leader>wd (LazyVim: Delete Window)
```
