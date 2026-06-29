# Kata: Sentence Motion

## Task

Practice moving between sentence starts with `)` and `(`.

## Start

Open a scratch buffer and insert:

```text
Alpha starts here.  Beta continues here.
Gamma asks now?  Delta answers soon.
Epsilon ends well.  Zeta closes.
```

Start in Normal mode on the `A` in `Alpha` on line 1.

## End

The buffer should remain:

```text
Alpha starts here.  Beta continues here.
Gamma asks now?  Delta answers soon.
Epsilon ends well.  Zeta closes.
```

The final cursor position should be on the `B` in `Beta` on line 1, column 21.

## Commands

Run these command steps:

```text
1. )
2. )
3. (
```
