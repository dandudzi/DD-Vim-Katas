# Kata: Create, Navigate, and Adjust Folds

## Task

Practice creating nested manual folds, navigating between them, and adjusting
their visible depth.

## Start

Open a scratch buffer with manual folding active and insert:

```text
Root
  Alpha
    plan
    build
  Beta
    test
    ship
  Gamma
    review
    release
Tail
```

Start in Normal mode on the `R` in line 1.

## End

The text should remain unchanged, with all folds open and the cursor on line 4,
column 1 at the end of the previous fold.

## Commands

Run these command steps:

```text
1. /Alpha<CR>
2. zf2j
3. /Beta<CR>
4. zf2j
5. /Gamma<CR>
6. zf2j
7. ggzf9j
8. zM
9. zr
10. zj
11. zj
12. zk
13. zo
14. zc
15. za
16. za
17. zm
18. zr
19. zR
```
