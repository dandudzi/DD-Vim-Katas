# Kata: Reorder Captured Groups

## Task

Practice capturing parts of a match and reordering them in the replacement.
Convert ISO dates from `YYYY-MM-DD` to `MM/DD/YYYY`.

## Start

Open a scratch buffer and insert:

```text
release 2026-07-14
freeze 2026-08-01
range 2026-09-10 to 2026-09-12
archive 2026-10-31
```

Start in Normal mode on the `r` in `release` on line 1, column 1.

## End

The buffer should become:

```text
release 07/14/2026
freeze 08/01/2026
range 09/10/2026 to 09/12/2026
archive 10/31/2026
```

## Commands

Run these command steps:

```text
1. :s#\(\d\{4}\)-\(\d\{2}\)-\(\d\{2}\)#\2/\3/\1#<CR>
2. u
3. 3G:s#\(\d\{4}\)-\(\d\{2}\)-\(\d\{2}\)#\2/\3/\1#g<CR>
4. u
5. :%s#\(\d\{4}\)-\(\d\{2}\)-\(\d\{2}\)#\2/\3/\1#g<CR>
```
