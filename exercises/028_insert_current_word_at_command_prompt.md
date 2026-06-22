# Kata: Insert the Current Word on the Command Line

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use `<C-r><C-w>` on the command line to build a substitution from the word under the cursor.

## Fixture and Start
```javascript
let country;
for (country = 1; country <= 10; country++) {
  console.log(country);
}
```
Start in Normal mode on the `c` of `country` on line 1. Run `:set wrapscan`; restore before each drill.

## Tasks
1. Use the word-under-cursor search. **Verify:** `:echo @/` shows a boundary-qualified pattern such as `\<country\>`, and the cursor moves to the occurrence on line 2; `*` searches, it does not select all matches.
2. With the cursor on any `country`, open `:` and insert that word after `:echo `. **Verify:** the command line visibly contains `:echo country`; cancel it without execution.
3. Challenge: reset; search with `*`, change that occurrence to `counter`, then substitute every remaining match of the prior search pattern with the current word. **Verify:** `:%s/\<country\>//gn` reports `Pattern not found` and all five occurrences read `counter`.

## Hints
<details><summary>Hints</summary>An empty substitute pattern reuses the last search. After changing one match, `<C-r><C-w>` inserts the new word as the replacement.</details>

## Solution
<details><summary>Show keys</summary>

1. `*`
2. `:echo <C-r><C-w><C-c>` (inspect the command line, then cancel)
3. `*ciwcounter<Esc>:%s//<C-r><C-w>/g<CR>`
</details>

## Reset and Notes
Restore the fixture; search and command histories may retain entries. Close with `:bd!`. Replacement text containing `&` or backslashes needs escaping; this fixture avoids those characters. See `:help c_CTRL-R_CTRL-W`, `:help star`, and `:help :substitute`.

| Keys | Effect |
|---|---|
| `*` | Search forward for word under cursor |
| `<C-r><C-w>` | Insert word under cursor on command line |
| `:%s//new/g` | Replace last search pattern globally |
