# Kata: Method Boundaries

## Task

Practice jumping between Java-style method starts and ends with `]m`, `[m`, `]M`, and `[M`.

## Start

Use the prepared Java fixture, which already has its Java filetype configured:

```text
practice_128_method_boundaries.java
```

Start in Normal mode on the `p` in `practice_128_method_boundaries.java`.

## End

Before closing the split, the cursor should be on the `}` that closes `sum` at line 4, column 5. The fixture should remain unchanged and the split should be closed.

## Commands

Run these command steps:

```text
1. <leader>|
2. gf
3. 3G^
4. ]m
5. ]m
6. [m
7. ]M
8. [M
9. <leader>wd
```
