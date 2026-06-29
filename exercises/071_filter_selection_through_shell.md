# Kata: Filter a Selection Through Shell Commands

## Task

Use `:'<,'>!` to replace a Visual selection with the output of a shell pipeline.

## Start

Open a scratch buffer and insert:

```text
# Orders (raw dump)
2026-02-01 | Item: Apple | Qty: 2
2026-02-01 | Item: banana | Qty: 1
2026-02-02 | Item: APPLE | Qty: 4
2026-02-02 | Item: pear | Qty: 1
2026-02-03 | Item: Banana | Qty: 2
2026-02-03 | Item: apple | Qty: 3
2026-02-04 | Item: orange | Qty: 1
2026-02-04 | Item: ORANGE | Qty: 2
2026-02-04 | Item: pear | Qty: 5

# Notes
Keep only item names for reporting.
Normalize to lowercase.
Then sort.
Then count duplicates.
```

Start in Normal mode on the `#` in `# Orders (raw dump)`.

## End

The buffer should become:

```text
# Orders (raw dump)
      3 apple
      2 banana
      2 orange
      2 pear

# Notes
Keep only item names for reporting.
Normalize to lowercase.
Then sort.
Then count duplicates.
```

## Commands

Run these command steps:

```text
1. jV8j
2. :'<,'>!awk -F'Item: | \\| Qty' '{print $2}' | tr '[:upper:]' '[:lower:]' | sort | uniq -c<CR>
```
