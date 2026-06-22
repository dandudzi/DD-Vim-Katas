# Kata: Count Matches Without Editing

> **Environment:** Vim or Neovim. **Dependencies:** None.

## Objective
Use the substitute `n` flag to count matches in a buffer or range without changing text.

## Fixture and Start
```text
time TIME timeout
time after time
no match here
timekeeper time
```

Use a new unsaved buffer, run `gg0:setlocal nomodified<CR>`, and confirm `:setlocal modified?` reports `nomodified`. This deliberately establishes a baseline after inserting the fixture.

## Drills
1. Count lowercase substring matches for `time` in the whole buffer. **Verify:** Vim reports `6 matches on 3 lines`.
2. Count exact lowercase words only. **Verify:** Vim reports `4 matches on 3 lines`.
3. Count exact `time` words only in lines 1-2. **Verify:** Vim reports `3 matches on 2 lines`; `:setlocal modified?` still reports `nomodified`.

## Hints
<details><summary>Hints</summary>

Use `g` to count every occurrence per line and `n` to suppress replacement. An empty replacement is safe only because `n` prevents changes.
</details>

## Solution
<details><summary>Exact commands</summary>

1. `:%s/time//gn`
2. `:%s/\<time\>//gn`
3. `:1,2s/\<time\>//gn`
</details>

## Cleanup and Reference
`:bwipe!`. Message wording can vary slightly by Vim/Neovim version; the numeric counts must match. See `:help :s_flags`, `:help s_flags`.

| Flag | Effect |
|---|---|
| `g` | Inspect every match on each addressed line |
| `n` | Report counts without substituting |
