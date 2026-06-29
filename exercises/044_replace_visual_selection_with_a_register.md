# Kata: Replace a Visual Selection from a Register

## Task

Practice replacing selected text with a register and observe that Visual `p` stores the displaced text in the unnamed register.

## Start

Open a scratch buffer and insert:

```text
collection = getCollection();
process(wrongName, target);
```

Start in Normal mode on the `c` in `collection` on line 1.

## End

The buffer should become:

```text
collection = getCollection();
process(collection, target);
```

The final command should print:

```text
wrongName
```

## Commands

Run these command steps:

```text
1. yiw
2. j2wviw"0p
3. :echo getreg('"')<CR>
```
