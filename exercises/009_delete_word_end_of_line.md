# Kata: Choose a Deletion Scope

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Distinguish `diw`, `daw`, `db`, and `D` by their exact deletion boundaries.

## Fixture and Start
```text
red green blue
red green blue
red green blue
red green blue
```
Start in Normal mode on the `r` of line 1. Restore before each drill.

## Tasks
1. Move onto `green` and delete only its letters. **Verify:** line 1 is `red  blue` (two spaces).
2. Reset; delete `green` together with adjacent whitespace. **Verify:** line 1 is `red blue`.
3. Reset; on line 3 move to `blue` and delete the preceding `green ` with a backward word motion, then on line 4 delete from `green` through end-of-line. **Verify:** lines 3-4 are `red blue` and `red ` respectively.

## Hints
<details><summary>Hints</summary>`iw` excludes surrounding whitespace; `aw` includes it. `D` is equivalent to `d$`.</details>

## Solution
<details><summary>Show keys</summary>

1. `wdiw`
2. `wdaw`
3. `jjwwdbj0wD`
</details>

## Reset and Reference
Use `u` per deletion or restore the fixture; close with `:bd!`. See `:help diw`, `:help daw`, `:help db`, and `:help D`.

| Keys | Effect |
|---|---|
| `diw` / `daw` | Delete inner / a word |
| `db` | Delete backward by word |
| `D` | Delete to line end |
