# Kata: Add a Delimiter Column with Visual Block Mode

## Task

Practice inserting the same delimiter in several table rows with Visual block
mode and block insertion.

## Start

Open a scratch buffer and insert:

```text
Task          Owner
Refactor      Sam
Docs          Priya
Release       Omar
```

Start in Normal mode on the `T` of `Task` on line 1.

## End

The buffer should become:

```text
Task          | Owner
---------------------
Refactor      | Sam
Docs          | Priya
Release       | Omar
```

## Commands

Run these command steps:

```text
1. 14l<C-v>jI| <Esc>
2. u
3. gg014l<C-v>3jI| <Esc>
4. ggyypVr-
```
