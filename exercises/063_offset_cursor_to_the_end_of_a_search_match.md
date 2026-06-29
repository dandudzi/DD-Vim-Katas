# Kata: Land at the End of a Search Match

## Task

Use the `/e` search offset to land on the final character of each match, then repeat an append with dot.

## Start

Open a scratch buffer and insert:

```text
Aim to learn a new programming lang each year.
Which lang did you pick up last year?
Which langs would you like to learn?
```

Start in Normal mode on the `A` in `Aim`.

## End

The buffer should become:

```text
Aim to learn a new programming language each year.
Which language did you pick up last year?
Which languages would you like to learn?
```

## Commands

Run these command steps:

```text
1. /lang/e<CR>
2. auage<Esc>
3. n.
4. n.
```
