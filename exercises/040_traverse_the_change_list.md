# Kata: Traverse the Change List

## Task

Practice moving through change-list entries with `g;` and `g,`, then resuming Insert mode at the last insertion point.

## Start

Open a scratch buffer and insert:

```text
alpha
beta
gamma
delta
```

Start in Normal mode on the `a` in `alpha`.

## End

The buffer should become:

```text
alpha!
beta
gamma!
delta!?
```

The cursor should finish after the `?` on line 4.

## Commands

Run these command steps:

```text
1. A!<Esc>
2. 2j
3. A!<Esc>
4. j
5. A!<Esc>
6. g;
7. g;
8. g,
9. g,
10. 2G
11. `.
12. gi?<Esc>
```
