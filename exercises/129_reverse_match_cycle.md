# Kata: Reverse Match Cycle

## Task

Practice using `g%` from the standard `matchit` plugin to move backward through a `#if`, `#else`, and `#endif` match cycle.

## Start

Open a scratch buffer and insert:

```c
#if OUTER
int start = 1;
#else
#if INNER
int middle = 2;
#else
int finish = 3;
#endif
#endif
```

Start in Normal mode on the `#` in `#if OUTER` on line 1.

## End

The buffer should remain:

```c
#if OUTER
int start = 1;
#else
#if INNER
int middle = 2;
#else
int finish = 3;
#endif
#endif
```

The final cursor position should be on the `#` in the outer `#else` at line 3, column 1.

## Commands

Run these command steps:

```text
1. :setlocal filetype=c<CR>
2. :packadd matchit<CR>
3. g%
4. g%
```
