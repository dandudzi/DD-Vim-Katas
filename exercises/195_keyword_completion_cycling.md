# Kata: Keyword Completion Cycling

## Task

Practice starting built-in keyword completion and cycling the menu forward and backward.

## Start

Open a scratch buffer and insert:

```text
process product profile

```

Start in Normal mode on the blank line 2.

## End

The buffer should become:

```text
process product profile

```

## Commands

Run these command steps:

```text
1. ipro<C-x><C-n>
2. <C-n>
3. <C-p>
4. <C-e>
5. <C-u><Esc>
6. :verbose imap <Tab><CR>
7. :verbose imap <S-Tab><CR>
```
