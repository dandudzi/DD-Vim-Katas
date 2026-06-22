# Kata: Edit a Table with Visual Block Mode

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use blockwise insertion to add a separator at the same column on several lines, then create a rule line.

## Fixture and Start
```text
Chapter      Page
Normal Mode  15
Insert Mode  31
Visual Mode  44
```
Start in Normal mode at line 1, column 1. Keep the spaces exactly as shown; restore before each drill.

## Tasks
1. Insert `| ` immediately before `Page` on line 1. **Verify:** line 1 is `Chapter      | Page`.
2. Reset; use one block insertion to add `| ` in the aligned column on all four lines. **Verify:** data lines read like `Normal Mode  | 15`.
3. Challenge: perform Drill 2, duplicate the heading below itself, and turn the duplicate entirely into `-`. **Verify:** a 19-character rule separates the heading from the data.

## Hints
<details><summary>Hints</summary>Column 14 is reached with `13l`. In block mode, `Itext<Esc>` applies the insertion to every selected line.</details>

## Solution
<details><summary>Show keys</summary>

1. `13li| <Esc>`
2. `13l<C-v>3jI| <Esc>`
3. `13l<C-v>3jI| <Esc>ggyypVr-`.
</details>

## Expected Final State
```text
Chapter      | Page
-------------------
Normal Mode  | 15
Insert Mode  | 31
Visual Mode  | 44
```

## Reset and Reference
Restore the fixture; close with `:bd!`. See `:help blockwise-visual`, `:help v_b_I`, and `:help v_r`.

| Keys | Effect |
|---|---|
| `<C-v>` | Begin block selection |
| `I...<Esc>` | Insert on every block line |
| `Vr-` | Replace every character on a line with `-` |
