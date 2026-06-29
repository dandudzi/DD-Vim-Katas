# Kata: Replace Selected Search Matches by Hand

## Task

Practice using search, `n`, `ciw`, and `.` to replace selected matches while skipping one occurrence.

## Start

Open a scratch buffer and insert:

```text
We need content before launch.
She is content with the plan.
Publish the content tomorrow.
```

Start in Normal mode on the `W` in `We need content before launch.`.

## End

The buffer should become:

```text
We need copy before launch.
She is content with the plan.
Publish the copy tomorrow.
```

## Commands

Run these command steps:

```text
1. /content<CR>
2. ciwcopy<Esc>
3. nn.
```
