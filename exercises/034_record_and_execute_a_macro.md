# Kata: Record and Execute a Macro

## Task

Practice recording one complete line transformation and replaying it with `@a` and `@@`.

## Start

Open a scratch buffer and insert:

```text
foo = 1
bar = 'a'
foobar = foo + bar
```

Start in Normal mode on the `f` in line 1.

## End

The buffer should become:

```text
var foo = 1;
var bar = 'a';
var foobar = foo + bar;
```

## Commands

Run these command steps:

```text
1. qaq
2. qaIvar <Esc>A;<Esc>jq
3. @a
4. @@
```

