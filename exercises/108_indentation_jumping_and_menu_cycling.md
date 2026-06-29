# Kata: Indentation Mapping Readiness

## Task

Practice verifying LazyVim indentation-scope mappings before using `[i` and `]i`.

## Start

Open a scratch buffer and insert:

```text
def run(items):
    for item in items:
        if item.ready:
            print(item.name)
    return len(items)
```

Start in Normal mode on the `p` in `print` on line 4.

## End

The buffer should become:

```text
def run(items):
    for item in items:
        if item.ready:
            print(item.name)
    return len(items)
```

## Commands

Run these command steps:

```text
1. :verbose nmap [i<CR>
2. :verbose nmap ]i<CR>
3. [i
4. :echo line('.')<CR>
5. ]i
6. :echo line('.')<CR>
```
