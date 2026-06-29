# Kata: Put a Register in Insert Mode

## Task

Practice inserting the latest yank from register `0` while staying in Insert mode.

## Start

Open a scratch buffer and insert:

```text
collection = getCollection();
process(wrongName, target);
```

Start in Normal mode on the `c` in `collection` on line 1.

## End

The buffer should become:

```text
collection = getCollection();
process(collection, target);
```

## Commands

Run these command steps:

```text
1. yiw
2. j2wciw<C-r>0<Esc>
```
