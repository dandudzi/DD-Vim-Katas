# Kata: Prefer Operator and Text Object

## Task

Practice using `gUit` as a repeatable Normal-mode operator command for tag
contents.

## Start

Open a scratch buffer and insert:

```text
<a href="#">one</a>
<a href="#">two</a>
<a href="#">three</a>
```

Start in Normal mode on the `o` inside `one`.

## End

The buffer should become:

```text
<a href="#">ONE</a>
<a href="#">TWO</a>
<a href="#">THREE</a>
```

## Commands

Run these command steps:

```text
1. gUit
2. j.
3. j.
```
