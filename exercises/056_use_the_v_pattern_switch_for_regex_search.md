# Kata: Write Very-Magic Search Patterns

> **Environment:** Vim or Neovim; built-in regular expressions

## Objective
Use `\v` to reduce escaping in a grouped regular expression. Success means matching exactly the three valid CSS hex colors with equivalent default-magic and very-magic patterns.

## Initial Fixture
```css
body { color: #3c3c3c; }
a { color: #0000ee; }
strong { color: #000; }
bad { color: #12; }
```
Start in Normal mode on line 1.

## Tasks
### Drill A - Default magic
Count 3- or 6-digit hex values with default Vim regex escaping. **Verify:** 3 matches on 3 lines.

### Drill B - Very magic
Write the equivalent pattern starting with `\v`. **Verify:** the same 3 matches.

### Drill C - Character class shorthand
Replace the explicit hexadecimal class with Vim's `\x` class while retaining `\v`. **Verify:** still 3 matches.

### Challenge
Search through all matches with `n`; verify the cursor visits lines 1, 2, 3, then wraps to 1, never line 4.

## Hints
<details><summary>Hints</summary>
Under `\v`, parentheses, braces, and `|` are special without backslashes. `\x` means a hexadecimal digit. `\V` is the opposite mode: very nomagic.
</details>

## Solution
<details><summary>Show exact commands</summary>
- A: `:%s/#\([0-9A-Fa-f]\{6}\|[0-9A-Fa-f]\{3\}\)//gn<CR>`
- B: `:%s/\v#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})//gn<CR>`
- C: `:%s/\v#(\x{6}|\x{3})//gn<CR>`
- Challenge: `/\v#(\x{6}|\x{3})<CR>nnn`
</details>

## Reset and Cleanup
Counting with substitution flag `n` does not modify text. Run `:nohlsearch` and close with `:bwipeout!`.

## Notes and Portability
Very-magic `\v` is Vim regex syntax, not PCRE. LazyVim search UIs or picker prompts may use different engines depending on the provider, so use these exact patterns in Vim search, substitute, and `gn` workflows unless a tool documents Vim-regex compatibility.

## References
- [`:help /\v`](https://vimhelp.org/pattern.txt.html#%2F%5Cv)
- [`:help /\x`](https://vimhelp.org/pattern.txt.html#%2F%5Cx)
