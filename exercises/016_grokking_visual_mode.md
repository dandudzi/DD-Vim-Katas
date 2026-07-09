# Kata: Change a Visual Text Object

## Task

Practice selecting an inner word in Visual mode, switching the active endpoint,
and changing the same word again with dot.

## Start

Open a scratch buffer and insert:

```text
I like March better than anything.
March has thirty-one days.
```

Start in Normal mode on the `M` of `March` on line 1.

## End

The buffer should become:

```text
I like April better than anything.
April has thirty-one days.
```

## Commands

Run these command steps:

```text
1. viw<Esc>
2. viwoo<Esc>
3. viwcApril<Esc>
4. j0.
```
