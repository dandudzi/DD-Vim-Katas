# Kata: Delete Search Matches with dgn

## Task

Practice deleting search matches with `dgn` and repeating the deletion with `.`.

## Start

Open a scratch buffer and insert:

```text
TODO one
TODO two
DONE three
TODO four
```

Start in Normal mode on the first `T` in `TODO`.

## End

The buffer should become:

```text
 one
 two
DONE three
 four
```

## Commands

Run these command steps:

```text
1. /TODO<CR>
2. dgn
3. .
4. n
5. .
```
