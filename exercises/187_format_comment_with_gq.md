# Kata: Format a Comment with gq

## Task

Practice formatting a long comment line with `gqq` while preserving the comment prefix.

## Start

Open a scratch buffer and insert:

```text
# This function takes a very long list of parameters and processes them according to the business rules that were defined in the requirements document.
def process(data):
    pass
```

Start in Normal mode on the `#` in the first line.

## End

The buffer should become:

```text
# This function takes a very long list of
# parameters and processes them according to the
# business rules that were defined in the
# requirements document.
def process(data):
    pass
```

## Commands

Run these command steps:

```text
1. :setlocal textwidth=48<CR>
2. gqq
```
