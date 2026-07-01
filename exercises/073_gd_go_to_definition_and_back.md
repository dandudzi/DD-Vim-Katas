# Kata: Jump to a Local Definition and Back

## Task

Practice `gd` for same-file TypeScript declarations, then return and move forward again through the jump list.

## Start

From any buffer, open the shared JS/TS practice file in a vertical split and
jump to this kata:

```text
:vsplit practice_js_ts_filetypes.ts<CR>
:/return kata073Cleaned;<CR>
fC
```

Start in Normal mode on the `C` in `kata073Cleaned` on the line `return kata073Cleaned;`.

## End

The Kata 073 section of `practice_js_ts_filetypes.ts` should remain unchanged:

```text
function kata073Normalize(value: number): number {
  return value < 0 ? -value : value;
}

function kata073Report(raw: number): number {
  const kata073Cleaned = kata073Normalize(raw);
  return kata073Cleaned;
}
```

The cursor should finish on `kata073Normalize` in the first line of the kata section.

## Commands

Run these command steps:

```text
1. :setlocal filetype=typescript<CR>
2. gd
3. <C-o>
4. ?kata073Normalize(raw)<CR>
5. gd
6. <C-o>
7. <C-i>
```
