# Kata: Play Back a Macro with a Count

## Task

Practice recording a repeatable change and replaying it with an exact count.

## Start

Open a scratch buffer and insert:

```text
var x = "("+a+","+b+","+c+","+d+","+e+")";
```

Start in Normal mode on the `v` in line 1.

## End

The buffer should become:

```text
var x = "(" + a + "," + b + "," + c + "," + d + "," + e + ")";
```

## Commands

Run these command steps:

```text
1. qqq
2. f+cl + <Esc>
3. qq;.q
4. 8@q
```

