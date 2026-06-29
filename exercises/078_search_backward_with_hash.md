# Kata: Search Backward for the Word Under the Cursor

## Task

Practice `#` to search backward for the word under the cursor, then use `n` and `N` to move with and against that search direction.

## Start

Open a scratch buffer and insert:

```text
function validate(input) {
  if (!input) {
    return { valid: false, error: "missing input" };
  }

  const result = process(input);

  if (result.error) {
    log("validation failed for input:", input);
    return { valid: false, error: result.error };
  }

  log("validation passed for input:", input);
  return { valid: true, data: result.data };
}

function process(input) {
  return { data: input.trim(), error: null };
}
```

Start in Normal mode on `input` in `input.trim()` near the end of the buffer.

## End

The buffer should remain:

```text
function validate(input) {
  if (!input) {
    return { valid: false, error: "missing input" };
  }

  const result = process(input);

  if (result.error) {
    log("validation failed for input:", input);
    return { valid: false, error: result.error };
  }

  log("validation passed for input:", input);
  return { valid: true, data: result.data };
}

function process(input) {
  return { data: input.trim(), error: null };
}
```

The cursor should finish on the `input` in `function process(input)`.

## Commands

Run these command steps:

```text
1. #
2. n
3. N
```
