# Kata: Replace Characters in Place

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use `r` with a count for fixed replacement and `R` for continuous overwrite.

## Fixture and Start
```text
cat XXXXX
draft title
version 1234
```
Start in Normal mode on the `c` of line 1. Restore before each drill.

## Tasks
1. Replace `c` with `b` without entering Insert mode. **Verify:** line 1 begins `bat`.
2. Reset; replace all five `X` characters with `-` using one counted command. **Verify:** line 1 is `cat -----`.
3. Reset; overwrite `draft` with `final` in Replace mode, then leave that mode. **Verify:** line 2 is `final title`, line length unchanged, and you are in Normal mode.

## Hints
<details><summary>Hints</summary>`r` replaces a count of characters with one character; `R` overwrites until `<Esc>`.</details>

## Solution
<details><summary>Show keys</summary>

1. `rb`
2. `w5r-`
3. `j0Rfinal<Esc>`
</details>

## Reset and Reference
Use `u` or restore the fixture; close with `:bd!`. See `:help r` and `:help R`.

| Keys | Effect |
|---|---|
| `[count]r{char}` | Replace count characters |
| `R` | Enter Replace mode |
