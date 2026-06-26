# Kata: Replace Selected Search Matches by Hand

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use search, `n`, a word change, and dot repeat to edit selected occurrences while skipping another.

## Fixture and Start
```text
We need content before launch.
She is content with the plan.
Publish the content tomorrow.
```
Start in Normal mode at line 1, column 1, with search wrapping enabled (`:set wrapscan`). Restore the fixture before each drill.

## Tasks
1. Search forward for `content`. **Verify:** cursor rests on line 1's match.
2. Change that whole word to `copy`. **Verify:** line 2 still contains `content`.
3. Challenge: reset, replace only the first and third occurrences with `copy`, using dot for the second edit. **Verify:** line 2 is unchanged and `:%s/\<content\>//gn` reports one match.

## Hints
<details><summary>Hints</summary>After the first edit, use `n` twice to skip the adjective occurrence.</details>

## Solution
<details><summary>Show keys</summary>

1. `/content<CR>`
2. `ciwcopy<Esc>`
3. `/content<CR>ciwcopy<Esc>nn.`
</details>

## Reset and Reference
Restore the fixture (search history may remain) and close with `:bd!`. See `:help /`, `:help n`, and `:help .`.

LazyVim note: if Flash is enabled, you may use it as a faster jump to a visible match before applying the same `ciw` and `.` workflow. Check the active mappings first with `:verbose nmap s` and do not rely on any particular on-screen label; plain `/`, `n`, and `.` remain the portable skill here.

| Keys | Effect |
|---|---|
| `/pattern` | Search forward |
| `n` | Next match |
| `ciw` | Change inner word |
| `.` | Repeat last change |
