# Kata: Change a Text Column with Visual Block Mode

## Task

Practice replacing the same text column on several lines with one Visual block change.

## Start

Open a scratch buffer and insert:

```text
li.one   a{ background-image: url('/images/sprite.png'); }
li.two   a{ background-image: url('/images/sprite.png'); }
li.three a{ background-image: url('/images/sprite.png'); }
```

Start in Normal mode on the `i` of the first `/images` at line 1, column 37.

## End

The buffer should become:

```text
li.one   a{ background-image: url('/components/sprite.png'); }
li.two   a{ background-image: url('/components/sprite.png'); }
li.three a{ background-image: url('/components/sprite.png'); }
```

## Commands

Run these command steps:

```text
1. <C-v>2j5l
2. ccomponents<Esc>
```
