# Kata: Traverse the Jump List

## Task

Practice creating line jumps and traversing them with `<C-o>` and `<C-i>`.

## Start

Open a scratch buffer containing the numbers 1 through 40, one number per line.

Start in Normal mode on line 1, column 1.

## End

The text should remain unchanged, and the cursor should finish on line 10.

## Commands

Run these command steps:

```text
1. 10G
2. 25G
3. 40G
4. <C-o>
5. <C-o>
6. <C-o>
7. <C-i>
8. <C-i>
9. <C-i>
10. 2<C-o>
```

