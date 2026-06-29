# Kata: Overwrite Existing Text

## Task

Practice using Replace mode with `R` to overwrite existing characters while
leaving surrounding text intact.

## Start

Open a scratch buffer and insert:

```text
Typing extends the line. But replacing overwrites.
Status: draft
Code: 0000
```

Start in Normal mode on the `T` of line 1.

## End

The buffer should become:

```text
Typing extends the line, but replacing overwrites.
Status: final
Code: 2048
```

## Commands

Run these command steps:

```text
1. f.R, but<Esc>
2. j0fdRfinal<Esc>
3. j0f0R2048<Esc>
```
