# Kata: Operators With Percent Match

## Task

Practice using `%` as a match motion for delete, change, and Visual selections around brackets.

## Start

Open a scratch buffer and insert:

```text
function process(items) {
  if (item.active) {
    return transform(item.value, { uppercase: true, trim: true });
  }
}
```

Start in Normal mode on the `{` in `{ uppercase: true, trim: true }` on line 3.

## End

The buffer should become:

```text
function process(data, options) {
  if (item.active) {
    return transform(item.value, { uppercase: true, trim: true });
  }
}
```

## Commands

Run these command steps:

```text
1. :verbose omap i%<CR>
2. :verbose xmap i%<CR>
3. vi%<Esc>
4. di%
5. u
6. da%
7. u
8. 1Gf(
9. ci%data, options<Esc>
10. 2Gf{
11. d%
12. u
```
