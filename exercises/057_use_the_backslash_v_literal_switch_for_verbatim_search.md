# Kata: Search Verbatim Text with Very Nomagic

> **Environment:** Vim or Neovim; built-in regular expressions

## Objective
Use `\V` to search punctuation-heavy literal text with minimal escaping. Success means matching only literal `a.k.a.` and path strings.

## Initial Fixture
```text
a.k.a. means also known as
axkya! is not the abbreviation
path /tmp/a+b[1]
path /tmp/ab1
```
Start in Normal mode on line 1.

## Tasks
### Drill A - Observe regex behavior
Count matches for `a.k.a.` without `\V`. **Verify:** it matches both lines 1 and 2 because `.` matches any character.

### Drill B - Literal abbreviation
Use very nomagic mode to count literal `a.k.a.`. **Verify:** 1 match on line 1.

### Drill C - Literal punctuation
Search literally for `/tmp/a+b[1]`. **Verify:** cursor lands on line 3 and the plain path on line 4 does not match.

### Challenge
From line 4, search backward for the literal abbreviation using `?` and `\V`. **Verify:** cursor lands at line 1 column 1.

## Hints
<details><summary>Hints</summary>
After `\V`, only backslash remains special. The `/` delimiter still must be escaped in a forward search pattern.
</details>

## Solution
<details><summary>Show exact commands</summary>
- A: `:%s/a.k.a.//gn<CR>`
- B: `:%s/\Va.k.a.//gn<CR>`
- C: `/\V\/tmp\/a+b[1]<CR>`
- Challenge: `G?\Va.k.a.<CR>`
</details>

## Reset and Cleanup
The `n` flag only counts. Run `:nohlsearch`; close scratch buffer.

## Notes and Portability
Very-nomagic `\V` is specific to Vim's regex engine. In LazyVim, external search tools and picker prompts may interpret punctuation with a different engine, so verify the provider before reusing the pattern outside `/`, `?`, or `:substitute`.

## References
- [`:help /\V`](https://vimhelp.org/pattern.txt.html#%2F%5CV)
