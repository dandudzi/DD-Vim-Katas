# Kata: Repeat the Last Ex Command

> **Environment:** Vim or Neovim; built-in commands only. Start from a clean session with no unsaved buffer.

## Objective
Use `@:` to replay the latest Ex command and `@@` to repeat that replay.

## Setup
Create three empty named buffers:

1. `:enew` then `:file kata-one`
2. `:enew` then `:file kata-two`
3. `:enew` then `:file kata-three`
4. Run `:buffer kata-one` and confirm `%` marks `kata-one` in `:buffers`.

## Tasks
1. Run `:bnext`, then replay it without typing another Ex command. **Verify:** active buffer is `kata-three`.
2. Reset to `kata-one`; run `:bnext`, replay with `@:`, then repeat the register execution with `@@`. **Verify:** buffer cycling wraps to `kata-one`.
3. Challenge: from `kata-one`, visit `kata-two`, `kata-three`, and `kata-one` using one typed Ex command plus two Normal-mode repetitions. **Verify:** `:echo bufname()` prints `kata-one` (run this only after completing the replay sequence).

## Hints
<details><summary>Hints</summary>The `:` register stores the most recently executed Ex command. After `@:`, `@@` repeats that register execution.</details>

## Solution
<details><summary>Show commands</summary>

1. `:bnext<CR>@:`
2. `:bnext<CR>@:@@`
3. `:bnext<CR>@:@@`
</details>

## Reset and Cleanup
Return with `:buffer kata-one`. Delete only the three throwaway buffers with `:bwipeout! kata-one`, `:bwipeout! kata-two`, and `:bwipeout! kata-three`. See `:help @:`, `:help @@`, and `:help :bnext`.

| Keys | Effect |
|---|---|
| `@:` | Execute last Ex command |
| `@@` | Repeat last executed register |
