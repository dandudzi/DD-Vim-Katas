# Kata: Partial Word Search

## Task

Practice `g*` and `g#` to search for the word under the cursor without word
boundaries.

## Start

Open a scratch buffer and insert:

const count = 0;
const counter = new Counter();
const countItems = (list) => list.length;
const recount = () => counter.reset();
const accounting = getAccounting();
logEvent("count_updated", { count });

Start in Normal mode on line 1, column 7, on the `c` in `count`.

## End

The buffer should remain:

```text
const count = 0;
const counter = new Counter();
const countItems = (list) => list.length;
const recount = () => counter.reset();
const accounting = getAccounting();
logEvent("count_updated", { count });
```

## Commands

Run these command steps:

```text
1. *
2. n
3. gg0ww
4. g*
5. n
6. n
7. G$Fc
8. g#
```
