# Kata: Quick Save, Quit, and Revert

## Task

Practice `ZZ`, `ZQ`, and `:e!` on a disposable file so you can save, discard,
or reload changes quickly.

## Start

Open a scratch buffer and insert:

```text
def greet(name):
    return f"Hello, {name}!"

def farewell(name):
    return f"Goodbye, {name}!"
```

Start in Normal mode on line 1, column 1.

## End

The disposable file `kata-093.txt` should contain:

```text
def greet(name):
    return f"Hi, {name}!"

def farewell(name):
    return f"Goodbye, {name}!"
```

## Commands

Run these command steps:

```text
1. :file kata-093.txt<CR>:write<CR>
2. jwwwci"Hi, {name}!<Esc>
3. ZZ
4. :edit kata-093.txt<CR>
5. ggdG
6. ZQ
7. :edit kata-093.txt<CR>
8. Gdd
9. :edit!<CR>
10. jwwci"Hi, {name}!<Esc>
11. :write<CR>
```
