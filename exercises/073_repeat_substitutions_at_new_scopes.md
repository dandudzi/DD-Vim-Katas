# Kata: Repeat Substitutions at New Scopes

## Task

Practice typing one substitution and repeating it across the whole buffer with `g&`.

## Start

Open a scratch buffer and insert:

```text
build draft draft
notes keep
release draft
archive draft draft
```

Start in Normal mode on the `b` in `build` at line 1, column 1.

## End

The buffer should become:

```text
build final final
notes keep
release final
archive final final
```

## Commands

Run these command steps:

```text
1. :s/draft/final/g<CR>
2. g&
```
