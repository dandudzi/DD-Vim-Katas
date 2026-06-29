# Kata: Use Counts with Changes and Numbers

## Task

Practice duplicating a line, changing a counted WORD, and using a numeric count with `<C-x>`.

## Start

Open a scratch buffer and insert:

```text
.blog, .news { background-image: url(/sprite.png); }
.blog { background-position: 0px 0px; }
```

Start in Normal mode on the `.` at the beginning of line 2.

## End

The buffer should become:

```text
.blog, .news { background-image: url(/sprite.png); }
.blog { background-position: 0px 0px; }
.news { background-position: -180px 0px; }
```

## Commands

Run these command steps:

```text
1. yyp
2. cW.news<Esc>
3. f0180<C-x>
```
