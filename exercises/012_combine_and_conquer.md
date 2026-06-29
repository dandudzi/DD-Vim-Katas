# Kata: Compose Case Operators with Word Motions

## Task

Practice combining `gu` and `gU` with word motions to change exact word spans
without Visual mode.

## Start

Open a scratch buffer and insert:

```text
API RESPONSE READY
mixed Case Tokens
leave this line
```

Start in Normal mode on the `A` of `API` on line 1.

## End

The buffer should become:

```text
api response READY
MIXED CASE Tokens
leave this line
```

## Commands

Run these command steps:

```text
1. guw
2. u
3. gu2w
4. jgU2w
```
