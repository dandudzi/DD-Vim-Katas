# Kata: Match Complete Words

## Task

Practice using `\<` and `\>` word-boundary atoms to change only standalone `the`.

## Start

Open a scratch buffer and insert:

```text
the problem with these recruits is that
they keep the theater clean; the boots shine.
```

Start in Normal mode on the `t` in line 1, column 1.

## End

The buffer should become:

```text
THE problem with these recruits is that
they keep THE theater clean; THE boots shine.
```

## Commands

Run these command steps:

```text
1. :%s/the//gn<CR>
2. :%s/\<the\>//gn<CR>
3. :%s/\v<the>//gn<CR>
4. :%s/\<the\>/THE/g<CR>
```
