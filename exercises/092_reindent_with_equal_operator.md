# Kata: Reindent with the Equal Operator

## Task

Practice reindenting a C-style block with the `=` operator and a motion.

## Start

Use the existing practice file `practice_168_reindent.c`:

```c
if (ready) {
printf("ok");
if (nested) {
puts("done");
}
}
```

Start in Normal mode in any buffer at line 1, column 1.

## End

Before closing the split, `practice_168_reindent.c` should display:

```c
if (ready) {
    printf("ok");
    if (nested) {
        puts("done");
    }
}
```

After closing the split, one window should remain showing the original buffer.

## Commands

Run these command steps:

```text
1. :split practice_168_reindent.c<CR>
2. :setlocal cindent shiftwidth=4 expandtab<CR>
3. =G
4. :close!<CR>
```
