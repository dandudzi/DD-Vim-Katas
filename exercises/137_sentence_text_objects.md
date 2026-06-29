# Kata: Sentence Text Objects

## Task

Practice using `is` and `as` to target the current sentence with or without its separator space.

## Start

Open a scratch buffer and insert:

```text
Alpha begins here. Beta stays centered. Gamma ends now.
```

Start in Normal mode on the `B` in `Beta` at line 1, column 20.

## End

The buffer should become:

```text
Alpha begins here. Gamma ends now.
```

## Commands

Run these command steps:

```text
1. :set cpoptions-=J<CR>
2. 1G20|
3. yis
4. 1G20|
5. yas
6. 1G20|
7. das
```
