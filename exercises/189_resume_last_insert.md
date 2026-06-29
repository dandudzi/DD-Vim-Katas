# Kata: Resume Last Insert

## Task

Practice `gi` to return to the last insert position and continue typing there.

## Start

Open a scratch buffer and insert:

```text
const title = "Report";
const output = format(42);
```

Start in Normal mode on line 1, column 1.

## End

The buffer should become:

```text
const title = "Report";
const output = format(42); // checked!
```

## Commands

Run these command steps:

```text
1. G A // checked<Esc>
2. gg
3. gi!<Esc>
```
