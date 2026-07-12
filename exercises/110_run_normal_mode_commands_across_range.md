# Kata: Replay a Macro Across Lines

## Task

Practice replacing ranged Normal Ex commands with a recorded macro and counted playback.

## Start

Open a scratch buffer and insert:

```text
var foo = 1
var bar = "a"
var baz = "z"
var foobar = foo + bar
var foobarbaz = foo + bar + baz
```

Start in Normal mode on the `v` in line 1.

## End

Every line should end with a semicolon.

## Commands

Run these command steps:

```text
1. qaq
2. qaA;<Esc>jq
3. 4@a
```

