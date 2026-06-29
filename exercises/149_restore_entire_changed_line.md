# Kata: Restore the Entire Changed Line

## Task

Practice using `U` to restore the most recently changed line as a whole line,
even after moving the cursor away.

## Start

Open a scratch buffer and insert:

```text
draft subtotal = 10
draft tax = 2
draft total = 12
audit status = ok
```

Start in Normal mode on the `d` in `draft tax = 2` on line 2, column 1.

## End

The buffer should become:

```text
draft subtotal = 10
draft tax = 2
draft total = 12
audit status = ok
```

The cursor should be on line 2, column 1.

## Commands

Run these command steps:

```text
1. :s/tax = 2/fee = 5/<CR>
2. 4G
3. U
4. 2G
```
