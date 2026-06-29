# Kata: Reindent with the Equal Operator

## Task

Practice reindenting a C-style block with the `=` operator and a motion.

## Start

Open a scratch buffer and insert:

```text
if (ready) {
printf("ok");
if (nested) {
puts("done");
}
}
```

Start in Normal mode on the `i` in `if (ready)`.

## End

The buffer should become:

```text
if (ready) {
    printf("ok");
    if (nested) {
        puts("done");
    }
}
```

## Commands

Run these command steps:

```text
1. :setlocal cindent shiftwidth=4 expandtab<CR>
2. =G
```
