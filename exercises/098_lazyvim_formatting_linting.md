# Kata: Format a Block with =

## Task

Practice deterministic built-in formatting with the `=` operator.

## Start

Open a scratch buffer and insert:

```text
if ready
echo "ship"
endif
```

Start in Normal mode on the `i` in `if`.

## End

The buffer should become:

```text
if ready
  echo "ship"
endif
```

## Commands

Run these command steps:

```text
1. :setlocal filetype=vim shiftwidth=2 tabstop=2 expandtab<CR>
2. =G
```
