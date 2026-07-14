# Kata: Inspect Current-Buffer Diagnostics

## Task

Practice opening prepared diagnostics in Trouble and moving between them with LazyVim mappings.

## Start

Open a buffer containing:

```text
alpha()
beta()
gamma()
```

Prepare diagnostics on `alpha()` and `gamma()`, then start in Normal mode on line 1, column 1.

## End

Trouble should be visible for the current buffer, and the cursor should be on the diagnostic at `gamma()`.

## Commands

Run these command steps:

```text
1. <leader>xX
2. ]d
```

