# Kata: Sort Lines

## Task

Practice sorting a range alphabetically and removing duplicate lines with `:sort u`.

## Start

Open a scratch buffer and insert:

```text
banana
cherry
apple
date
elderberry
banana
cherry
fig
apple
```

Start in Normal mode on the `b` in the first line.

## End

The buffer should become:

```text
apple
banana
cherry
date
elderberry
fig
```

## Commands

Run these command steps:

```text
1. gg
2. V8j
3. :sort u<CR>
```
