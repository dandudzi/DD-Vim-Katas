# Kata: Find Characters on a Line

## Task

Practice `f`, `t`, `T`, `;`, and `,` for precise same-line character movement.

## Start

Open a scratch buffer and insert:

```text
alpha: beta: gamma: delta
```

Start in Normal mode on the `a` in `alpha`.

## End

The buffer should become:

```text
alpha: beta: gamma: delta
```

The cursor should finish on the space immediately after the second colon.

## Commands

Run these command steps:

```text
1. f:
2. ;
3. ;
4. ,
5. 0
6. t:
7. ;
8. $
9. T:
10. ;
```
