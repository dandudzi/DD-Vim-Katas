# Kata: Method Boundaries

## Task

Practice jumping between Java-style method starts and ends with `]m`, `[m`, `]M`, and `[M`.

## Start

Open a scratch buffer and insert:

```java
class Sample {
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

Start in Normal mode on the `r` in `return 1;` on line 3.

## End

The buffer should remain:

```java
class Sample {
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

The final cursor position should be on the `}` that closes `sum` at line 4, column 5.

## Commands

Run these command steps:

```text
1. :setlocal filetype=java<CR>
2. ]m
3. ]m
4. [m
5. ]M
6. [M
```
