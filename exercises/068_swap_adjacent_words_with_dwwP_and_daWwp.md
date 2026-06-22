# Kata: Swap Adjacent Words Reliably

> **Environment:** Vim or Neovim. **Dependencies:** None.

## Objective
Swap adjacent plain words with a tested delete-motion-put sequence while preserving surrounding text.

## Fixture and Start
```text
We shipped broken build yesterday.
A quick fix is merged.
The parser reports fatal error now.
Please review fast today.
```

Use a new buffer and start on `broken` in line 1. Reset before each drill.

## Constraints
Use delete, word motions, and put; do not use Insert mode. This kata intentionally drops the former `daWwp` punctuation recipe: its result depended on punctuation and cursor placement and did not produce the documented output.

## Drills
1. Swap `broken build`. **Verify:** line 1 becomes `We shipped build broken yesterday.`
2. Swap `quick fix` and `fatal error`. **Verify:** lines 2-3 become `A fix quick is merged.` and `The parser reports error fatal now.`
3. Reset and correct all four lines. **Verify:**

```text
We shipped build broken yesterday.
A fix quick is merged.
The parser reports error fatal now.
Please fast review today.
```

## Hints
<details><summary>Hints</summary>

Start on the first word. Delete it plus the following space with `dw`, move one word right, then put before that position.
</details>

## Solution
<details><summary>Exact keys</summary>

For each pair, start on the first word and use `dwwP`. Example: `/broken build<CR>dwwP`. Repeat for `/quick fix`, `/fatal error`, and `/review fast`.

The old kata placed the cursor on the wrong word. From the corrected start on the first word, `dwwP` produces the documented swap.
</details>

## Cleanup and Reference
Reset with `u` or restore the fixture; `:bwipe!` afterward. See `:help dw`, `:help e`, `:help p`.

| Keys | Effect |
|---|---|
| `dwwP` | Delete first word+space, move past the second word, put first before the next word |
