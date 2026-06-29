# Kata: Change Bounded Text

## Task

Practice changing text inside delimiters, through a delimiter, and up to a delimiter.

## Start

Open a scratch buffer and insert:

```text
call(alpha, beta)
label = "draft title"
status: pending; owner: sam
status: pending; owner: lea
```

Start in Normal mode on the `a` in `alpha`.

## End

The buffer should become:

```text
call(ready)
label = "final title"
status: done; owner: sam
status: done; owner: lea
```

## Commands

Run these command steps:

```text
1. ci(ready<Esc>
2. j0f"ci"final title<Esc>
3. j0fpcf;done;<Esc>
4. j0fpct;done<Esc>
```
