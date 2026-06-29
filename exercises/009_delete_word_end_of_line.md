# Kata: Choose a Deletion Scope

## Task

Practice choosing exact deletion scopes with word text objects, backward word deletion, and end-of-line deletion.

## Start

Open a scratch buffer and insert:

```text
red green blue
red green blue
red green blue
red green blue
```

Start in Normal mode on the `r` in the first line.

## End

The buffer should become:

```text
red  blue
red blue
red blue
red 
```

## Commands

Run these command steps:

```text
1. wdiw
2. j0wdaw
3. j0wwdb
4. j0wD
```
