# Kata: Global Declaration Jump

## Task

Practice `gD` to jump from a symbol use to its global declaration in the same buffer.

## Start

Open a scratch buffer and insert:

```text
let output = "";

function render() {
  const output = "local";
  return output;
}

print(output);
```

Start in Normal mode on the `o` in `output` in `print(output);`.

## End

The cursor should be on the `o` in the global `output` declaration on line 1.

## Commands

Run these command steps:

```text
1. :setlocal filetype=javascript<CR>
2. gD
```
