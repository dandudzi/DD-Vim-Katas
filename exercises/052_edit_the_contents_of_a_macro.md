# Kata: Edit a Macro as Text

## Task

Practice putting a macro register into the buffer, editing its literal keys, and yanking it back into the register.

## Start

Open a scratch buffer and insert:

```text
1. One
2. two
3. Three
4. four
```

Start in Normal mode on line 1, column 1.

## End

The buffer should become:

```text
1) One
2) Two
3) Three
4) Four
```

## Commands

Run these command steps:

```text
1. :let @a='0f.r)w~j'<CR>
2. G:put a<CR>
3. f~clvU<Esc>0"ay$dd
4. gg4@a
```
