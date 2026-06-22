# Kata: Add, Delete, and Replace Surroundings

> **Environment:** Neovim with `nvim-mini/mini.surround` mappings `gsa`, `gsd`, and `gsr`.
> **Portability:** These are not built-in Vim commands. Run `:verbose nmap gsa`, `:verbose nmap gsd`, and `:verbose nmap gsr`; continue only when they resolve to MiniSurround. Other surround plugins use different keys.

## Objective
Add, delete, and replace delimiters with MiniSurround while leaving inner text unchanged.

## Fixture and Start
```text
alpha beta
(gamma)
[delta value]
```

Use a new buffer, `:set filetype=text`, and start on `alpha` in Normal mode. Restore the fixture before each drill.

## Drills
1. Surround `alpha` with parentheses. **Verify:** line 1 is `(alpha) beta`.
2. Delete parentheses around `gamma`. **Verify:** line 2 is `gamma`.
3. Replace brackets around `delta value` with braces. **Verify:** line 3 is `{delta value}`.
4. Challenge: produce all three results in one pass. **Verify:** no inner words or spaces changed.

## Hints
<details><summary>Hints</summary>

Add takes a motion (`iw`) and a delimiter. Delete and replace ask which surrounding to find; replace then asks for the new delimiter. Prompts can differ slightly by plugin version.
</details>

## Solution
<details><summary>Exact default MiniSurround keys</summary>

1. On `alpha`: `gsaiw)`
2. On `gamma`: `gsd)`
3. On `delta`: `gsr]}`
4. Apply the three sequences above after moving to each line.
</details>

## Reset, Cleanup, and Reference
Use `u` or restore the fixture; `:bwipe!` afterward. No files are written. Canonical docs: https://github.com/nvim-mini/mini.surround

| Mapping | Effect |
|---|---|
| `gsa` | Add surrounding using a motion |
| `gsd` / `gsr` | Delete / replace a surrounding |
