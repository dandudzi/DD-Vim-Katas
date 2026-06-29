# Kata: Correct Text in Insert Mode

## Task

Practice deleting a character, a word, and the current inserted text while
staying in Insert mode.

## Start

Open a scratch buffer and insert:

```text

```

Start in Normal mode on line 1, column 1.

## End

The buffer should become:

```text
Vim works
Vim edits quickly well
This is final.
```

## Commands

Run these command steps:

```text
1. iVimm<C-h> works<Esc>
2. oVim edits quickly slow<C-w>well<Esc>
3. odiscard this<C-u>This is final.<Esc>
```
