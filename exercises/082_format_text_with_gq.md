# Kata: Format Text with gq

## Task

Practice using `gq` to wrap a long line and reflow a short-line paragraph.

## Start

Open a scratch buffer and insert:

```text
This paragraph starts as one very long line that should wrap into shorter lines when Vim formats it with the gq operator.

This paragraph
has lines
that are too short
and should be joined
into flowing text.
```

Start in Normal mode on the `T` in the first line.

## End

The buffer should become:

```text
This paragraph starts as one very long
line that should wrap into shorter
lines when Vim formats it with the gq
operator.

This paragraph has lines that are too
short and should be joined into
flowing text.
```

## Commands

Run these command steps:

```text
1. :setlocal textwidth=38<CR>
2. gqq
3. }j
4. gqap
```
