# Kata: Change Delimited Text

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use `ci{object}`, `ct{char}`, and `cf{char}` to change bounded text precisely.

## Fixture and Start
```text
call(alpha, beta)
label = "draft title"
status: pending; owner: sam
```
Start in Normal mode on the `l` of `alpha`. Restore the fixture before each drill.

## Tasks
1. Change everything inside the parentheses to `ready`. **Verify:** line 1 is `call(ready)` and parentheses remain.
2. Reset; on line 2 change only the quoted contents to `final title`. **Verify:** quotes remain.
3. Reset; on line 3 change `pending` through and including `;` to `done;`. Then reset and change only up to, not including, `;` to `done`. **Verify:** both variants yield `status: done; owner: sam`.

## Hints
<details><summary>Hints</summary>`i(` and `i"` are text objects. `f` includes its target; `t` stops before it.</details>

## Solution
<details><summary>Show keys</summary>

1. `ci(ready<Esc>`
2. `j0f"ci"final title<Esc>`
3. `/pending<CR>cf;done;<Esc>`; alternative after reset: `/pending<CR>ct;done<Esc>`.
</details>

## Reset and Reference
Use `u` or restore the fixture; close with `:bd!`. See `:help text-objects`, `:help f`, and `:help t`.

LazyVim note: LazyVim commonly enables `mini.ai`, which adds more text objects for function calls, arguments, and other syntax-shaped regions. Before using any extra object in this kata, confirm it with `:verbose omap i` or `:verbose xmap i`; the built-in `i(`/`i"` objects and `ct`/`cf` motions are the portable baseline.

| Keys | Effect |
|---|---|
| `ci(`/`ci"` | Change inside delimiters |
| `cf{char}` | Change through character |
| `ct{char}` | Change until character |
