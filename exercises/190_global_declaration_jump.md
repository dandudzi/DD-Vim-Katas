# Kata: Global Declaration Jump

## Task

Practice `gD` to jump from a TypeScript symbol use to its file-level declaration.

## Start

From any buffer, open the shared JS/TS practice file in a vertical split and
jump to this kata:

```text
:vsplit practice_js_ts_filetypes.ts<CR>
:/return kata190Output;<CR>
```

Start in Normal mode on the `k` in `kata190Output`.

## End

The Kata 190 section of `practice_js_ts_filetypes.ts` should remain unchanged:

```text
let kata190Output = "";

function kata190Render() {
  const kata190Local = String(42);
  return kata190Output;
}
```

The cursor should be on the global `kata190Output` declaration.

## Commands

Run these command steps:

```text
1. :setlocal filetype=typescript<CR>
2. gD
```
