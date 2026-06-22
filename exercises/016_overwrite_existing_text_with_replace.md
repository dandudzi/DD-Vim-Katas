# Kata: Overwrite Existing Text

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use `R` to overwrite a run of characters and leave surrounding text intact.

## Fixture and Start
```text
Typing extends the line. But replacing overwrites.
Status: draft
Code: 0000
```
Start in Normal mode at line 1, column 1. Restore before each drill.

## Tasks
1. Overwrite `. But` with `, but`. **Verify:** line 1 reads `Typing extends the line, but replacing overwrites.`
2. Reset; overwrite `draft` with `final`. **Verify:** line 2 is `Status: final` and has the same length.
3. Reset; replace the four zeroes with `2048` in one Replace-mode session. **Verify:** line 3 is `Code: 2048` and you finish in Normal mode.

## Hints
<details><summary>Hints</summary>Find the first character to overwrite, press `R`, type equal-length text, then `<Esc>`.</details>

## Solution
<details><summary>Show keys</summary>

1. `f.R, but<Esc>`
2. `j0fdRfinal<Esc>`
3. `jj0f0R2048<Esc>`
</details>

## Reset and Notes
Use `u` or restore the fixture; close with `:bd!`. `gR` is Virtual Replace mode and differs around tabs and other screen-width-sensitive characters. See `:help R` and `:help gR`.

| Keys | Effect |
|---|---|
| `R` | Enter Replace mode |
| `gR` | Enter Virtual Replace mode |
