# Kata: Use Counts with Changes and Numbers

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use counts with motions and `<C-x>`, then combine them in a small CSS edit.

## Fixture and Start
```css
.blog, .news { background-image: url(/sprite.png); }
.blog { background-position: 0px 0px; }
```
Start in Normal mode on the first character of line 2. Restore before each drill.

## Tasks
1. Duplicate line 2 once. **Verify:** the buffer has three lines and lines 2-3 match.
2. Reset; on line 2 replace the first WORD with `.news` using a counted change motion. **Verify:** only the selector changes.
3. Challenge: duplicate line 2, change the duplicate selector to `.news`, then decrement its first `0` by 180. **Verify:** line 3 is `.news { background-position: -180px 0px; }`.

## Hints
<details><summary>Hints</summary>A count can precede `<C-x>`; `cW` changes through one whitespace-delimited WORD.</details>

## Solution
<details><summary>Show keys</summary>

1. `yyp`
2. `cW.news<Esc>`
3. `yypcW.news<Esc>f0180<C-x>`
</details>

## Reset and Reference
Restore the fixture and close with `:bd!`. See `:help count`, `:help cW`, and `:help CTRL-X`.

| Keys | Effect |
|---|---|
| `yyp` | Duplicate current line below |
| `[count]<C-x>` | Subtract count from number |
