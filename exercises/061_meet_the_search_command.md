# Kata: Search, Repeat, and Select Matches

> **Environment:** Vim or Neovim. **Dependencies:** None.

## Objective
Navigate search results with `/`, `?`, `n`, and `N`, then select a match with `gn`.

## Fixture and Start
```text
Going to Union Station takes time,
but this time can be an advantage.
Use it right, and travelling time
will pay off in time.
```

Create this in a new buffer and run `gg0:nohlsearch<CR>`. Start every drill there.

## Drills
1. Search forward for `time`, then repeat twice. **Verify:** the cursor visits lines 1, 2, then 3.
2. From `G$`, search backward for `time`; repeat once, then reverse once. **Verify:** visits line 4, line 3, then line 4.
3. Reset, search for `time`, select the next match, and uppercase it. Repeat on one later match. **Verify:** only line 1 and line 2 contain `TIME`.

## Hints
<details><summary>Hints</summary>

`n` follows the current search direction; `N` reverses it. `gn` is a text object for the next match, not `gn/N`.
</details>

## Solution
<details><summary>Exact keys</summary>

1. `/time<CR>nn`
2. `G$?time<CR>nN`
3. `gg0/time<CR>gUgn.`
</details>

## Cleanup and Reference
`:bwipe!`. See `:help /`, `:help n`, `:help N`, `:help gn`, `:help star`.

LazyVim note: Flash may offer a visible-target jump for search-like navigation. Verify the relevant mapping with `:verbose nmap s` and avoid memorizing labels; they are generated from the current screen. The portable search history, `n`/`N`, and `gn` behavior in this kata is unchanged.

| Keys | Effect |
|---|---|
| `/` / `?` | Search forward/backward |
| `n` / `N` | Repeat in same/opposite direction |
| `gn` | Select the next match |
