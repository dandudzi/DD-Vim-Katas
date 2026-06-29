# Kata: Define Visual Selections

## Task

Practice characterwise, linewise, and blockwise Visual selections, then recover
the last selection with `gv`.

## Start

Open a scratch buffer and insert:

```text
alpha one
bravo two
charlie three
```

Start in Normal mode on the `a` of `alpha`.

## End

The buffer should become:

```text
XXXha one
XXXvo two
XXXrlie three
```

## Commands

Run these command steps:

```text
1. ve<Esc>gv<Esc>
2. ggVj<Esc>
3. gg0<C-v>jjllrX
```
