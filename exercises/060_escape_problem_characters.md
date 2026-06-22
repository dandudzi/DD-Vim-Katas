# Kata: Search Literal Text Safely

> **Environment:** Vim or Neovim. **Dependencies:** None.

## Objective
Search strings containing regex metacharacters and search delimiters using `\V` plus the minimum required delimiter escaping.

## Fixture and Start
Use a new unsaved buffer:

```text
Search: http://vimdoc.net/search?q=/\\
Other:  http://vimdoc.net/searchXq=/\\
Literal: price[0].value* + tax?
```

Start with `gg0` in Normal mode. Do not edit the fixture.

## Drills
1. Search forward for the exact URL on line 1. **Verify:** `:echo getline('.')[col('.')-1:]` begins `http://vimdoc.net/search?q=/\\`.
2. Search backward for the same URL from `G$`. **Verify:** the cursor returns to line 1, not line 2.
3. Search for the entire literal expression on line 3. **Verify:** `gn` selects `price[0].value* + tax?` exactly.

## Hints
<details><summary>Hints</summary>

After `\V`, regex punctuation is literal, but the active delimiter (`/` or `?`) must still be escaped. Insert literal text on the command line with `<C-r><C-l>` or a register.
</details>

## Solution
<details><summary>Exact commands</summary>

1. `/\Vhttp:\/\/vimdoc.net\/search?q=\/\\\\<CR>`
2. `G$?\Vhttp://vimdoc.net/search\?q=/\\\\<CR>`
3. `/\Vprice[0].value* + tax?<CR>gn`

The original kata's unescaped `?` in a `?pattern` ended the pattern early; `\?` is required there.
</details>

## Cleanup and Reference
`:bwipe!`. See `:help /\V`, `:help /`, and `:help ?`.

| Pattern item | Effect |
|---|---|
| `\V` | Treat following pattern characters as very nomagic |
| `\/`, `\?` | Include the active search delimiter literally |
