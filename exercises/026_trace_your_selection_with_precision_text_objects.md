# Kata: Trace Your Selection With Precision Text Objects

## Task

Practice changing nested delimiter text objects without disturbing the surrounding text.

## Start

Open a scratch buffer and insert:

```text
config = call("{url}", {title})
```

Start in Normal mode on the `u` in `{url}`.

## End

The buffer should become:

```text
config = call("#", click here)
```

## Commands

Run these command steps:

```text
1. ca}#<Esc>
2. f{
3. ca}click here<Esc>
```
