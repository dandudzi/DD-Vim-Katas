# Kata: Control Search Case Sensitivity

> **Environment:** Vim or Neovim; built-in search atoms/options

## Objective
Predict and control case-sensitive match sets using `ignorecase`, `smartcase`, `\c`, and `\C`. Success means obtaining exact match counts and restoring prior options.

## Initial Fixture
```text
foo
foo & foo
foo & Foo
FOO & foo
```
Start in Normal mode on line 1. Save settings with `:let g:kata_ic=&ignorecase | let g:kata_sc=&smartcase`, then run `:set noignorecase nosmartcase`.

## Tasks
### Drill A - Explicit atoms
Count `/foo\C` and `/foo\c` without changing text. **Verify:** `:%s/foo\C//gn` reports exactly 5 lowercase matches (1 + 2 + 1 + 1 by line); `:%s/foo\c//gn` reports 7.

### Drill B - Ignorecase
Enable `ignorecase`, search for lowercase `foo`, and count. **Verify:** 7 matches.

### Drill C - Smartcase
Enable both options. Count lowercase `foo`, then mixed-case `Foo`. **Verify:** counts are 7 and 1.

### Challenge
With both options enabled, write one pattern that still matches only the five lowercase occurrences. Verify without modifying text.

## Hints
<details><summary>Hints</summary>
`\c` and `\C` override options for that pattern. `smartcase` matters only when `ignorecase` is on.
</details>

## Solution
<details><summary>Show exact commands</summary>
- A: `:%s/foo\C//gn<CR>` then `:%s/foo\c//gn<CR>`
- B: `:set ignorecase<CR>:%s/foo//gn<CR>`
- C: `:set ignorecase smartcase<CR>:%s/foo//gn<CR>:%s/Foo//gn<CR>`
- Challenge: `:%s/foo\C//gn<CR>`
</details>

## Reset and Cleanup
Restore settings with `:let &ignorecase=g:kata_ic | let &smartcase=g:kata_sc | unlet g:kata_ic g:kata_sc`; `:nohlsearch`; close scratch buffer.

## References
- [`:help /ignorecase`](https://vimhelp.org/options.txt.html#%2Fignorecase)
- [`:help /\c`](https://vimhelp.org/pattern.txt.html#%2F%5Cc)
