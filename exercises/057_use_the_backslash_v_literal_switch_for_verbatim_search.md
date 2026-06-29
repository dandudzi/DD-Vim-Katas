# Kata: Search Verbatim Text with Very Nomagic

## Task

Practice using `\V` to search punctuation-heavy literal text with minimal escaping.

## Start

Open a scratch buffer and insert:

```text
a.k.a. means also known as
axkya! is not the abbreviation
path /tmp/a+b[1]
path /tmp/ab1
```

Start in Normal mode on the `a` in line 1, column 1.

## End

The buffer should remain:

```text
a.k.a. means also known as
axkya! is not the abbreviation
path /tmp/a+b[1]
path /tmp/ab1
```

The final cursor position should be line 1, column 1.

## Commands

Run these command steps:

```text
1. :%s/a.k.a.//gn<CR>
2. :%s/\Va.k.a.//gn<CR>
3. /\V\/tmp\/a+b[1]<CR>
4. G?\Va.k.a.<CR>
```
