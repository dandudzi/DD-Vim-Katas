# Kata: Open a Referenced File and Resume Insertion

> **Environment:** Vim or Neovim. **Dependencies:** None.

## Objective
Use `gf` with a local suffix, return with `<C-o>`, and resume the last insertion with `gi`.

## Setup
```vim
:let g:kata_096_dir=tempname() | call mkdir(g:kata_096_dir.'/utils', 'p')
:call writefile(['export const format = (x) => String(x);'], g:kata_096_dir.'/utils/format.js')
:call writefile(['import { format } from "./utils/format";', '', 'const output = format(42);'], g:kata_096_dir.'/main.js')
:execute 'lcd '.fnameescape(g:kata_096_dir) | edit main.js
:let g:kata_096_main=bufnr('%') | let g:kata_096_old_sua=&l:suffixesadd | setlocal suffixesadd+=.js
```

Start on `./utils/format` in line 1, Normal mode.

## Drills
1. Open the path under cursor and jump back. **Verify:** `gf` opens `format.js`; `<C-o>` returns to `main.js` line 1.
2. Append ` // checked` to line 3, leave Insert mode, move to line 1, then resume insertion. Type `!`. **Verify:** line 3 ends `// checked!`.
3. On `output` in line 3, use the global-declaration command. **Verify:** it lands on the same line's declaration; compare with `gd` only as an observation.

## Hints
<details><summary>Hints</summary>

`gf` consults `'path'` and `'suffixesadd'`. `gi` jumps to the last Insert position and enters Insert mode.
</details>

## Solution
<details><summary>Exact keys</summary>

1. On the path: `gf<C-o>`
2. `G A // checked<Esc>gggi!<Esc>` (keys are `G`, `A`, text, `<Esc>`, `gg`, `gi`, `!`, `<Esc>`).
3. `/output<CR>gD`
</details>

## Cleanup and Reference
Run `:execute 'buffer '.g:kata_096_main | let &l:suffixesadd=g:kata_096_old_sua | for g:kata_096_buf in getbufinfo() | if stridx(g:kata_096_buf.name,g:kata_096_dir)==0 | execute 'bwipeout! '.g:kata_096_buf.bufnr | endif | endfor | lcd - | call delete(g:kata_096_dir, 'rf') | unlet g:kata_096_buf g:kata_096_main g:kata_096_old_sua g:kata_096_dir`. Only the generated directory is removed. See `:help gf`, `:help suffixesadd`, `:help gi`, `:help gD`.

| Keys | Effect |
|---|---|
| `gf` | Edit file named under cursor |
| `gi` | Return to last insertion and enter Insert mode |
