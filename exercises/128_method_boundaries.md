# Kata: Method Boundaries

## Task

Practice jumping between Java-style method starts and ends with `]m`, `[m`, `]M`, and `[M`.

## Start

Use the existing practice file `practice_128_method_boundaries.java`:

```java
class MethodBoundaries {
    int sum() {
        return 1;
    }

    int min() {
        return 2;
    }

    int max() {
        return 3;
    }
}
```

Start in Normal mode in any buffer at line 1, column 1.

## End

`practice_128_method_boundaries.java` should remain unchanged:

```java
class MethodBoundaries {
    int sum() {
        return 1;
    }

    int min() {
        return 2;
    }

    int max() {
        return 3;
    }
}
```

After step 8, the cursor should be on the `}` that closes `sum` at line 4, column 5. After step 9, the split containing `practice_128_method_boundaries.java` should be closed.

## Commands

Run these command steps:

```text
1. :split practice_128_method_boundaries.java<CR>
2. :setlocal filetype=java<CR>
3. 3G^
4. ]m
5. ]m
6. [m
7. ]M
8. [M
9. :close<CR>
```
