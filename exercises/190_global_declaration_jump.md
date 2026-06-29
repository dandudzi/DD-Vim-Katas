# Kata: Global Declaration Jump

## Task

Practice `gD` to jump from a use of a name to its file-level declaration.

## Start

Open a scratch buffer and insert:

```text
let output = "";

function render() {
  let output = format(42);
  return output;
}
```

Start in Normal mode on line 5, column 10, on the `o` in `output`.

## End

The buffer should remain:

```text
let output = "";

function render() {
  let output = format(42);
  return output;
}
```

The cursor should be on line 1, column 5, on the global `output` declaration.

## Commands

Run these command steps:

```text
1. gD
```
