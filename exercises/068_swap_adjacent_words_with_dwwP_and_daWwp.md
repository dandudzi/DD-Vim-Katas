## Commands

- `dwwP`: deletes the current `word`, moves to the next `word`, then puts the deleted word **before** it — net effect: **swap the current word with the next word** (for plain space-separated words).
- `daWwp`: deletes a `WORD` (big word, includes punctuation like `key=value`) plus trailing space, moves to the next _small-word_ chunk (often punctuation like `,`), then puts after it — useful for **reordering a `key=value` token across punctuation**.

## Practice text

Fix the text using only the specified command for each section.

```text
SECTION A (use dwwP only)

We shipped the build broken yesterday.
A login fix quick is already merged.
The parser throws an error fatal on empty input.
Please keep the changes small and review fast.

SECTION B (use daWwp only)

env=prod api,cache
timeout=30 fast,slow
path=/tmp downloads,uploads
url=https://example.com docs,build
```

## Steps

### A) Practice `dwwP` (swap two plain words)

1. Search for a swapped pair (pick one to start):
   1. `/build broken`
   2. or `/fix quick`
   3. or `/error fatal`
   4. or `/review fast`
2. Put the cursor on the **first** word of the pair (e.g. on `broken` in `build broken`).
3. Press `dwwP`.
4. Jump to the next occurrence with `n`.

### B) Practice `daWwp` (move `key=value` across the comma)

Goal per line: move the `key=value` token **after** the word before the comma (e.g. `env=prod api,cache` → `api,env=prod cache`).

1. Search for the next `key=value` token:
   - `/=`
2. Put the cursor anywhere inside the `key=value` token at the start of the line (e.g. on `env=prod`).
3. Press `daWwp`.
4. Press `n` to go to the next line with `=`.
5. Repeat until SECTION B becomes:
   - `api,env=prod cache`
   - `fast,timeout=30 slow`
   - `downloads,path=/tmp uploads`
   - `docs,url=https://example.com build`
