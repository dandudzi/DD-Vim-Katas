# Kata: Address Lines with Ex Ranges

> **Environment:** Vim or Neovim; built-in Ex commands only.

## Objective
Use absolute, relative, search, and whole-buffer Ex addresses to print or delete exact ranges.

## Fixture and Start
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Practical Vim</title>
  </head>
  <body></body>
</html>
```
Start in Normal mode on line 1. Restore before each drill.

## Tasks
1. Print line 4 without moving there first. **Verify:** the message shows `<title>Practical Vim</title>`.
2. Print from `<html>` through `</html>` using search addresses. **Verify:** six lines, lines 2-7, are printed.
3. Challenge: print only the contents inside the outer `html` tags, then delete the empty body line using its valid absolute address. **Verify:** the print spans lines 3-6; afterward `:$=` reports 6 and `/<body>` finds no match.

## Hints
<details><summary>Hints</summary>A range is `address,address`; `+1` and `-1` offset search addresses.</details>

## Solution
<details><summary>Show commands</summary>

1. `:4print`
2. `:/<html>/,/<\/html>/print`
3. `:/<html>/+1,/<\/html>/-1print` followed by `:6delete`
</details>

## Reset and Safety
Use `u` after deletion or restore the fixture; close with `:bd!`. All edits stay in a throwaway buffer. See `:help :range`, `:help :print`, and `:help :delete`.

| Command | Effect |
|---|---|
| `:{n}p` | Print absolute line |
| `:/a/,/b/p` | Print between search addresses |
| `:%p` | Print whole buffer |
