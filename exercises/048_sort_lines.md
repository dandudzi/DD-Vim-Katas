# Kata: Sort Lines Through the Shell

## Task

Practice filtering a Visual selection through `sort -u` to alphabetize and deduplicate lines.

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

Start in Normal mode on the `b` in line 1.

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
1. ggV8j
2. !sort -u<CR>
```

