# Kata: Correct Text While Staying in Insert Mode

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use `<C-h>`, `<C-w>`, and `<C-u>` to correct different amounts of text in Insert mode.

## Setup
Open an empty buffer and enter Insert mode at line 1, column 1 before each drill.

## Tasks
1. Type `Vimm`, delete the extra character without leaving Insert mode, then type ` works`. **Verify after `<Esc>`:** `Vim works`.
2. Reset to empty; type `Vim edits quickly slow`, delete the last word in Insert mode, and type `well`. **Verify:** `Vim edits quickly well`.
3. Reset to empty; type `discard this`, erase back to the insertion start, then type `This is final.` **Verify:** the buffer contains exactly that sentence.

## Hints
<details><summary>Hints</summary>The three commands erase a character, a word, or back to the start of the inserted line respectively.</details>

## Solution
<details><summary>Show keys</summary>

1. `iVimm<C-h> works<Esc>`
2. `iVim edits quickly slow<C-w>well<Esc>`
3. `idiscard this<C-u>This is final.<Esc>`
</details>

## Reset and Notes
Use `ggdG` in Normal mode to empty the throwaway buffer; close with `:bd!`. Terminal/backspace settings may change how `<C-h>` is encoded, but Vim treats it as Insert-mode backspace. See `:help i_CTRL-H`, `:help i_CTRL-W`, and `:help i_CTRL-U`.

| Keys | Effect in Insert mode |
|---|---|
| `<C-h>` | Delete previous character |
| `<C-w>` | Delete previous word |
| `<C-u>` | Delete to insertion-start column |
