# Kata: Play Back a Macro with a Count

## Task

Practice making one change, recording a macro that repeats it at the next match, and replaying that macro with an exact count.

## Start

Open a scratch buffer and insert:

```text
var x = "("+a+","+b+","+c+","+d+","+e+")";
```

Start in Normal mode on the `v` in `var` on line 1.

## End

The buffer should become:

```text
var x = "(" + a + "," + b + "," + c + "," + d + "," + e + ")";
```

## Commands

Run these command steps:

```text
1. :let @q=''<CR>
2. f+cl + <Esc>
3. qq;.q
4. 8@q
```
