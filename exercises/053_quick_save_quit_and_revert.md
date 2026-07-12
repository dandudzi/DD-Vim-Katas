# Kata: Quick Save, Quit, and Revert

## Task

Use `ZZ` to save and close a practice split, then use `ZQ` to discard a later
change and close that split.

## Start

In an unnamed scratch buffer, insert:

```text
practice_053_quick_save.py
```

`practice_053_quick_save.py` contains:

```python
def greet(name):
    return f"daj"

def farewell(name):
    return f"Goodbye, {name}!"
```

Start in Normal mode on the `p` in `practice_053_quick_save.py` at line 1,
column 1.

## End

`practice_053_quick_save.py` should contain:

```text
def greet(name):
    return f"Hi, {name}!"

def farewell(name):
    return f"Goodbye, {name}!"
```

Both practice splits should be closed while Neovim remains open.

## Commands

Run these command steps:

```text
1. <leader>| (LazyVim: Split Window Right)
2. gf
3. /daj<CR>ciwHi, {name}!<Esc>
4. ZZ
5. <leader>| (LazyVim: Split Window Right)
6. gf
7. /Hi<CR>ciwBye<Esc>
8. ZQ
```
