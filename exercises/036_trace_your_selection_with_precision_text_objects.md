# Kata: Select Nested Text Objects Precisely

> **Environment:** Vim or Neovim; built-in text objects

## Objective
Select and change nested quote, tag, and bracket text objects. Success means editing only the intended nested content.

## Initial Fixture
```html
<section><a href="{url}">{title}</a></section>
```
Start in Normal mode on the `u` in `{url}`. Reset before each drill.

## Tasks

### Drill A - Inside delimiters
Visually select inside the braces. **Verify:** `y:echo @0<CR>` prints `url`.

### Drill B - Around quotes
Select the quoted attribute including quotes. **Verify:** yanking it makes `@0` equal `"{url}"`.

### Drill C - Inside tag
Move into `{title}` and change the contents of the anchor element to `click here`. **Verify:** tags and attribute are unchanged.

### Challenge
Reset and produce:
```html
<section><a href="#">click here</a></section>
```
using two text-object changes.

## Hints
<details><summary>Hints</summary>
`i` excludes delimiters; `a` includes them. The `t` text object targets an HTML/XML tag pair when the cursor is inside it.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `vi}y`
- B: `va"y`
- C: `f{citclick here<Esc>`
- Challenge: `ca}#<Esc>f{citclick here<Esc>`

`ca}` replaces the braces together with their contents; `ci}` would preserve `{}` and produce `href="{#}"`.
</details>

## Reset and Cleanup
Use `u` for selections that only yank and restore the fixture after changes. Close with `:bwipeout!`.

## Command Reference
| Text object | Range |
|---|---|
| `i}` / `a}` | Inside / around braces |
| `i"` / `a"` | Inside / around quotes |
| `it` / `at` | Inside / around tag pair |

## References
- [`:help text-objects`](https://vimhelp.org/motion.txt.html#text-objects)
- [`:help tag-blocks`](https://vimhelp.org/motion.txt.html#tag-blocks)
