# Kata: Address Lines with Ex Ranges

## Task

Practice using absolute and search-based Ex ranges to print and delete exact
lines.

## Start

Open a scratch buffer and insert:

```text
Document
BEGIN chapter
  title: Practical Vim
  status: draft
  remove-me
END chapter
```

Start in Normal mode on the `D` of line 1.

## End

The buffer should become:

```text
Document
BEGIN chapter
  title: Practical Vim
  status: draft
END chapter
```

## Commands

Run these command steps:

```text
1. :3print<CR>
2. :/BEGIN/,/END/print<CR>
3. :/BEGIN/+1,/END/-1print<CR>
4. :5delete<CR>
```
