# Kata: Insert a Register in Insert Mode

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Yank text into register `0` and insert it with `<C-r>0` without leaving Insert mode.

## Fixture and Start
```text
Practical Vim, by Drew Neil
Read Drew Neil's
Title:
```
Start in Normal mode on the `P` of line 1. Restore before each drill and confirm `:set paste?` reports `nopaste`.

## Tasks
1. Yank the title before the comma. **Verify:** `:registers 0` shows `Practical Vim`.
2. Append a space and that register to line 2 while staying in Insert mode. **Verify:** line 2 ends `Neil's Practical Vim`.
3. Challenge: reset; yank once, complete line 2 with the title and a period, then put the same title after `Title: `. **Verify:** line 3 is `Title: Practical Vim`.

## Hints
<details><summary>Hints</summary>`yt,` yanks up to the comma; `<C-r>0` inserts yank register `0` in Insert mode.</details>

## Solution
<details><summary>Show keys</summary>

1. `yt,`
2. `jA <C-r>0<Esc>`
3. `yt,jA <C-r>0.<Esc>jA <C-r>0<Esc>`
</details>

## Reset and Reference
Restore the fixture and close the throwaway buffer with `:bd!`. Register `0` may retain the practice yank. See `:help quote0` and `:help i_CTRL-R`.

| Keys | Effect |
|---|---|
| `yt,` | Yank until comma into register `0` |
| `<C-r>0` | Insert register `0` in Insert mode |
