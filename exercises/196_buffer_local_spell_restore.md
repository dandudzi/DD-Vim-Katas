# Kata: Buffer-Local Spell Restore

## Task

Practice enabling spell checking, jumping to a misspelling, and restoring the local option.

## Start

Open a scratch buffer and insert:

```text
The final line is fine.
Teh final line is misspelled.
```

Start in Normal mode on the `T` in `The` on line 1.

## End

The buffer should stay unchanged, with the cursor on `Teh` and local spell checking off.

## Commands

Run these command steps:

```text
1. :setlocal spell spelllang=en_us<CR>
2. gg
3. ]s
4. :setlocal nospell<CR>
```
