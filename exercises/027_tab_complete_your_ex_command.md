# Kata: Complete Ex Commands

> **Environment:** Vim or Neovim; built-in command-line completion.

## Objective
Use `<C-d>` to list candidates and `<Tab>` to complete Ex command names before execution.

## Setup
Open a throwaway buffer. Record `:set wildmode?`, then run `:set wildmode=full`. Start in Normal mode.

## Tasks
1. Type `:col<C-d>` without pressing `<CR>`. **Verify:** candidates include `colder` and `colorscheme`; cancel with `<C-c>`.
2. Type `:colo<Tab>` and execute the completed command with no argument. **Verify:** `colorscheme` is completed and Vim reports the current scheme.
3. Challenge: use completion to expand `:setl` to `:setlocal`, add ` number`, and execute it. **Verify:** `:setlocal number?` reports `number`.

## Hints
<details><summary>Hints</summary>`<C-d>` lists matches; add characters until the desired command is unique, then use `<Tab>`.</details>

## Solution
<details><summary>Show keys</summary>

1. `:col<C-d><C-c>`
2. `:colo<Tab><CR>`
3. `:setl<Tab> number<CR>`
</details>

## Reset and Notes
Run `:setlocal nonumber`; restore the recorded `wildmode` value, then `:bd!`. Candidate display varies visually with `wildmenu`, but built-in command names are stable. See `:help c_CTRL-D`, `:help c_CTRL-I`, and `:help wildmode`.

| Keys | Effect on command line |
|---|---|
| `<C-d>` | List completion candidates |
| `<Tab>` | Complete or cycle candidates |
| `<C-c>` | Cancel command line |
