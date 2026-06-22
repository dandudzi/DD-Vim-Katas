# Kata: Compose Operators with Motions

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Compose operator counts with word and line motions instead of memorizing whole edits.

## Fixture and Start
```text
Alpha Beta Gamma Delta
mixed Case Words
indent this line
```
Start in Normal mode on `Alpha`. Restore before each drill. Set `:setlocal shiftwidth=2 expandtab`.

## Tasks
1. Delete the first two words with one counted motion. **Verify:** line 1 becomes `Gamma Delta`.
2. Reset; lowercase the first two words of line 2 with an operator and motion. **Verify:** it becomes `mixed case Words`.
3. Reset; uppercase the first two words on line 1, then shift line 3 right once. **Verify:** line 1 is `ALPHA BETA Gamma Delta`; line 3 begins with two spaces.

## Hints
<details><summary>Hints</summary>Operators such as `d`, `gu`, `gU`, and `>` accept motions or linewise forms.</details>

## Solution
<details><summary>Show keys</summary>

1. `d2w`
2. `j0gu2w`
3. `gU2wjj>>`
</details>

## Reset and Reference
Restore the fixture; `:setlocal shiftwidth< expandtab<` restores local options, then `:bd!`. See `:help operator`, `:help gu`, and `:help shift-left-right`.

| Keys | Effect |
|---|---|
| `d2w` | Delete over two word motions |
| `gu{motion}` / `gU{motion}` | Lowercase / uppercase motion |
| `>>` | Shift current line right |
