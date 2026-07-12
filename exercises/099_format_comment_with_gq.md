# Kata: Format a Comment with gq

## Task

Practice formatting a long comment with `gqq` while preserving its comment prefix.

## Start

Open a scratch buffer with `textwidth=44` and hash-comment formatting active, then insert:

```text
# This function takes a very long list of parameters and processes them according to the rules.
def process(data):
    pass
```

Start in Normal mode on the `#` in line 1.

## End

The buffer should become:

```text
# This function takes a very long list of
# parameters and processes them according to
# the rules.
def process(data):
    pass
```

## Commands

Run these command steps:

```text
1. gqq
```

