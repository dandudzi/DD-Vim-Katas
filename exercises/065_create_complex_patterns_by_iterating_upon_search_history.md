# Kata: Refine a Pattern Through Search History

> **Environment:** Vim or Neovim. **Dependencies:** None.

## Objective
Iteratively refine a quoted-string pattern with search history and `q/`, then consistently change double quotes to single quotes.

## Fixture and Start
```text
This string contains a "quoted" word.
This string contains "two" quoted "words".
This "string doesn't make things easy".
```

Use a new buffer and start at `gg0`. The apostrophe in `doesn't` must remain text, not become a delimiter.

## Drills
1. Search with a greedy pattern. Open another `/` prompt, recall it with `<Up>`, clear only that prompt, and enter a refined pattern that stops at the next quote. **Verify:** `gn` first selects `"quoted"`, not through later quotes.
2. Open search history with `q/`, duplicate the newest pattern, append `\C`, and execute the copy. **Verify:** `:echo @/` prints `\v"[^"]*"\C` and `:history search -1,` shows it as the newest search.
3. Capture only the contents of each double-quoted string and substitute single quotes around it. **Verify:**

```text
This string contains a 'quoted' word.
This string contains 'two' quoted 'words'.
This 'string doesn't make things easy'.
```

## Hints
<details><summary>Hints</summary>

`.*` is greedy; `[^\"]*` cannot cross a double quote. Lines in the `q/` window contain pattern text only: they do **not** begin with `/`. Replacement captures are `\1`, not `%1`.
</details>

## Solution
<details><summary>Exact commands</summary>

1. `/\v".*"<CR>`, then `/<Up><C-u>\v"[^\"]*"<CR>gn<Esc>`.
2. `q/kYpA\C<Esc><CR>`. `q/` places the cursor on an empty current-command line; `k` selects the newest history line, whose text is `\v"[^\"]*"` without a leading slash.
3. `:%s/\v"([^\"]*)"/'\1'/g`
</details>

## Cleanup and Reference
Restore with `u`; close with `:bwipe!`. Search history intentionally remains until normal history cleanup. See `:help q/`, `:help cmdline-history`, `:help sub-replace-special`.

| Item | Effect |
|---|---|
| `q/` | Edit search history in a window |
| `\1` | Insert capture group 1 in replacement |
