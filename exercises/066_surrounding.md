# Kata: Add, Delete, and Replace Surroundings

## Task

Use MiniSurround mappings to add, delete, and replace delimiters while leaving the inner text unchanged.

## Start

Open a scratch buffer and insert:

```text
alpha beta
(gamma)
[delta value]
```

Start in Normal mode on the `a` in `alpha`. This kata assumes `gsa`, `gsd`, and `gsr` are mapped to MiniSurround.

## End

The buffer should become:

```text
(alpha) beta
gamma
{delta value}
```

## Commands

Run these command steps:

```text
1. gsaiw)
2. jgsd)
3. jgsr]}
```
