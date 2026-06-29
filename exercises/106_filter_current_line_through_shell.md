# Kata: Filter Current Line Through Shell

## Task

Practice replacing the current line with the output of a shell command using `!!`.

## Start

Open a scratch buffer and insert:

```text
echo hello world
banana,apple,cherry,date
c two
a one
```

Start in Normal mode on the `e` in `echo` on line 1.

## End

The buffer should become:

```text
hello world
apple
banana
cherry
date
a one
c two
```

## Commands

Run these command steps:

```text
1. !!sh<CR>
2. j
3. !!tr ',' '\n' | sort<CR>
4. 6G
5. 2!!sort<CR>
```
