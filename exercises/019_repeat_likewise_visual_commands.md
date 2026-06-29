# Kata: Indent a Line Range Once

## Task

Practice indenting an exact line range once with line shifts and a motion.

## Start

Open a scratch buffer and insert:

```text
def fib(n):
    a, b = 0, 1
    while a < n:
print(a)
a, b = b, a + b
fib(42)
```

Start in Normal mode on the `p` of `print(a)` on line 4.

## End

The buffer should become:

```text
def fib(n):
    a, b = 0, 1
    while a < n:
    print(a)
    a, b = b, a + b
fib(42)
```

## Commands

Run these command steps:

```text
1. :setlocal shiftwidth=4 expandtab<CR>
2. >>
3. u
4. Vj>
5. u
6. >j
```
