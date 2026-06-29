# Kata: Normalize Pipe Spacing with Visual Block Mode

## Task

Practice deleting shared padding columns and appending one space after a delimiter with Visual block mode.

## Start

Open a scratch buffer and insert:

```text
Service       |Port
api           |3000
worker        |8080
metrics       |9100
```

Start in Normal mode on the `S` in `Service` at line 1, column 1.

## End

The buffer should become:

```text
Service     | Port
api         | 3000
worker      | 8080
metrics     | 9100
```

## Commands

Run these command steps:

```text
1. 12l<C-v>3jld
2. gg12l<C-v>3jA<Space><Esc>
```
