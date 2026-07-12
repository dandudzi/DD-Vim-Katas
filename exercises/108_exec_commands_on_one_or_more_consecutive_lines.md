# Kata: Operate on Addressed Lines with Native Keys

## Task

Practice replacing numeric Ex addresses and line deletion with native line jumps and operators.

## Start

Open a scratch buffer and insert:

```text
one
two
three
four
five
six
seven
eight
nine
ten
```

Start in Normal mode on line 1, column 1.

## End

The buffer should become:

```text
one
two
three
four
five
six
seven
eight
nine
```

The cursor should finish on line 7.

## Commands

Run these command steps:

```text
1. 7G
2. 10Gdd
3. 7G
```

