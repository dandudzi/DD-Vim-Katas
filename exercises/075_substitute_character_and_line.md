# Kata: Substitute Characters and Lines

## Task

Practice `s` with and without a count, then use `S` to replace one whole line while keeping indentation.

## Start

Open a scratch buffer and insert:

```text
def calculate(x, y):
    result = x + y
    print("Sum:", result)
    return result

names = ["alice", "bob", "charlie"]
status = "pending"
```

Start in Normal mode on the `x` in `def calculate(x, y):`.

## End

The buffer should become:

```text
def calculate(a, y):
    result = x + y
    logger.info(f"Result: {result}")
    return result

names = ["Ada", "bob", "charlie"]
status = "complete"
```

## Commands

Run these command steps:

```text
1. sa<Esc>
2. /alice<CR>5sAda<Esc>
3. /print<CR>Slogger.info(f"Result: {result}")<Esc>
4. /pending<CR>7scomplete<Esc>
```
