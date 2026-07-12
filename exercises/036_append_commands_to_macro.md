# Kata: Append Commands to a Macro

## Task

Practice repairing a macro by appending commands through the uppercase form of its register.

## Start

Open a scratch buffer and insert:

```text
1. one
2. two
3. three
4. four
```

Start in Normal mode on the `1` in line 1.

## End

The buffer should become:

```text
1) One
2) Two
3) Three
4) Four
```

## Commands

Run these command steps:

```text
1. qaq
2. qa0f.r)w~q
3. qAjq
4. 3@a
```

