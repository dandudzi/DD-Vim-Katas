# Kata: Compute Replacement Text

## Task

Practice using a `\=` replacement expression during substitution. Multiply
matched numbers by `10` without typing the new values manually.

## Start

Open a scratch buffer and insert:

```text
delay=5
limit=12
window=3x8
retries=4
```

Start in Normal mode on the `d` in `delay` on line 1, column 1.

## End

The buffer should become:

```text
delay=50
limit=120
window=30x80
retries=40
```

## Commands

Run these command steps:

```text
1. :s/\d\+/\=submatch(0) * 10/<CR>
2. u
3. 3G:s/\d\+/\=submatch(0) * 10/g<CR>
4. u
5. :%s/\d\+/\=submatch(0) * 10/g<CR>
```
