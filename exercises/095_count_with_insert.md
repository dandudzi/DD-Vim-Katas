# Kata: Count with Insert

## Task

Practice prefixing insert commands with counts to repeat text and blank lines.

## Start

Open a scratch buffer and insert:

```text
# Section One
Some content here.
# Section Two
More content here.
```

Start in Normal mode on line 1, column 1.

## End

The buffer should become:

```text
# Section One
----------------------------------------
Some content here.



# Section Two
test test test test test 
More content here.
```

## Commands

Run these command steps:

```text
1. o<Esc>
2. 40i-<Esc>
3. jj3O<Esc>
4. /# Section Two<CR>
5. o<Esc>
6. 5itest <Esc>
```
