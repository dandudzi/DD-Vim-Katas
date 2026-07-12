# Kata: Reuse the Full Match in a Replacement

## Task

Practice using `&` in replacement text to reuse each full match. Wrap status
words without typing the matched words again.

## Start

Open a scratch buffer and insert:

```text
deploy ready
rollback blocked
summary ready blocked pending
archive pending
```

Start in Normal mode on the `d` in `deploy` on line 1, column 1.

## End

The buffer should become:

```text
deploy [ready]
rollback [blocked]
summary [ready] [blocked] [pending]
archive [pending]
```

## Commands

Run these command steps:

```text
1. :s/\<ready\>/[&]/<CR>
2. u
3. 3G:s/\<ready\|blocked\|pending\>/[&]/g<CR>
4. u
5. :%s/\<ready\|blocked\|pending\>/[&]/g<CR>
```
