# Kata: Write Very-Magic Search Patterns

## Task

Practice using `\v` to write a compact grouped search pattern for CSS hex colors.

## Start

Open a scratch buffer and insert:

```text
body { color: #3c3c3c; }
a { color: #0000ee; }
strong { color: #000; }
bad { color: #12; }
```

Start in Normal mode on the `b` in line 1, column 1.

## End

The buffer should remain:

```text
body { color: #3c3c3c; }
a { color: #0000ee; }
strong { color: #000; }
bad { color: #12; }
```

The final search should visit lines 1, 2, and 3, then wrap to line 1.

## Commands

Run these command steps:

```text
1. :%s/#\([0-9A-Fa-f]\{6}\|[0-9A-Fa-f]\{3}\)//gn<CR>
2. :%s/\v#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})//gn<CR>
3. :%s/\v#(\x{6}|\x{3})//gn<CR>
4. gg/\v#(\x{6}|\x{3})<CR>nnn
```
