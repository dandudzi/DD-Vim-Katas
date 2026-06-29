# Kata: Keyword Lookup with K

## Task

Practice using `K` to look up documentation for the word under the cursor.

## Start

Open a scratch buffer and insert:

```text
write
quit
edit
```

Start in Normal mode on line 1, column 1, on the `w` in `write`.

## End

The buffer should remain:

```text
write
quit
edit
```

## Commands

Run these command steps:

```text
1. :setlocal keywordprg=:help<CR>
2. K
3. :quit<CR>
4. jj
5. K
6. :quit<CR>
```
