# Kata: Run Normal Commands Across a Range

## Task

Practice applying the same Normal-mode edit to each line in an Ex range with
`:normal`.

## Start

Open a scratch buffer and insert:

```text
let foo = 1
let bar = "a"
let ready = true;
let total = foo + bar
```

Start in Normal mode on the `l` of line 1.

## End

The buffer should become:

```text
let foo = 1;
let bar = "a";
let ready = true;
let total = foo + bar;
```

## Commands

Run these command steps:

```text
1. :1,2normal A;<CR>
2. :4normal A;<CR>
```
