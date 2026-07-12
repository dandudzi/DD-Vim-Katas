# Kata: Diagnostic Float and Next Diagnostic

## Task

Practice opening a diagnostic float and jumping to the next prepared diagnostic.

## Start

Open a buffer containing:

```text
ERROR alpha
WARN beta
ERROR gamma
```

Prepare diagnostics on lines 1 and 2, then start in Normal mode on line 1, column 1.

## End

The cursor should be on the diagnostic at `WARN beta`, and the buffer should remain unchanged.

## Commands

Run these command steps:

```text
1. <leader>cd
2. ]d
3. <leader>cd
```

