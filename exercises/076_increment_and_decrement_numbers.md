# Kata: Increment and Decrement Numbers

## Task

Practice `<C-a>` and `<C-x>` with repeated presses, counts, and visual sequential numbering.

## Start

Open a scratch buffer and insert:

```text
.container {
  margin: 10px;
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
}

0. First item
0. Second item
0. Third item
0. Fourth item
0. Fifth item
```

Start in Normal mode on the `m` in `margin`.

## End

The buffer should become:

```text
.container {
  margin: 12px;
  padding: 3px;
  font-size: 18px;
  border-radius: 0px;
}

1. First item
2. Second item
3. Third item
4. Fourth item
5. Fifth item
```

## Commands

Run these command steps:

```text
1. <C-a><C-a>
2. /padding<CR><C-x><C-x>
3. /font-size<CR>4<C-a>
4. /border-radius<CR>3<C-x>
5. /0\. First<CR>V4jg<C-a>
```
