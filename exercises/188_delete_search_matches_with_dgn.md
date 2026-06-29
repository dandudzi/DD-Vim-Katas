# Kata: Delete Search Matches with dgn

## Task

Practice deleting search matches with `dgn` and repeating the deletion with `.`.

## Start

Open a scratch buffer and insert:

```text
TODO: fix login
TODO: update tests
review the TODO list
TODO: deploy
check all TODO items
```

Start in Normal mode on the first `T` in `TODO`.

## End

The buffer should become:

```text
: fix login
: update tests
review the TODO list
: deploy
check all TODO items
```

## Commands

Run these command steps:

```text
1. :let @/ = 'TODO'<CR>
2. dgn
3. .
4. n
5. n
6. .
```
