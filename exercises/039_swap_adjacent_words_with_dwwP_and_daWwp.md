# Kata: Swap Adjacent Words with dwwP

## Task

Swap adjacent plain words with delete, word motion, and put.

## Start

Open a scratch buffer and insert:

```text
We shipped broken build yesterday.
A quick fix is merged.
The parser reports fatal error now.
Please review fast today.
```

Start in Normal mode on the `b` in `broken`.

## End

The buffer should become:

```text
We shipped build broken yesterday.
A fix quick is merged.
The parser reports error fatal now.
Please fast review today.
```

## Commands

Run these command steps:

```text
1. dwwP
2. /quick fix<CR>dwwP
3. /fatal error<CR>dwwP
4. /review fast<CR>dwwP
```
