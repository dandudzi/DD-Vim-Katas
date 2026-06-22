# Kata: Land at the End of a Search Match

> **Environment:** Vim or Neovim. **Dependencies:** None.

## Objective
Use the `/e` search offset to land on the final character of a match and extend repeated matches with dot.

## Fixture and Start
```text
Aim to learn a new programming lang each year.
Which lang did you pick up last year?
Which langs would you like to learn?
```

Use a new buffer and start at `gg0` in Normal mode.

## Drills
1. Search for `lang` with an end offset. **Verify:** `:echo getline('.')[col('.')-1]` prints `g` on line 1.
2. Append `uage` to that match. **Verify:** line 1 contains `language`.
3. Repeat the search and change on the remaining matches. **Verify:** the final text is:

```text
Aim to learn a new programming language each year.
Which language did you pick up last year?
Which languages would you like to learn?
```

## Hints
<details><summary>Hints</summary>

The offset remains part of the last search, so `n` lands on each match's `g`. Make one append change and use `.`.
</details>

## Solution
<details><summary>Exact keys</summary>

1. `/lang/e<CR>`
2. `auage<Esc>`
3. `n.n.`
</details>

## Reset, Cleanup, and Reference
Use `u` three times or restore the fixture; finish with `:bwipe!`. See `:help search-offset`, `:help .`.

| Command | Effect |
|---|---|
| `/pattern/e` | Place cursor at match end |
| `.` | Repeat the last change |
