# Kata: Toggle Comments with gc Ranges

## Task

Use `gc` with a motion, a paragraph, and a Visual range to toggle Lua comments.

## Start

Open a scratch buffer and insert:

```text
local function total(items)
  local sum = 0
  sum = sum + items[1]
  return sum
end

This note is temporarily disabled.
It must return unchanged.

print(total({ 4 }))
```

Start in Normal mode on the `l` in `local` on line 1.

## End

The buffer should become:

```text
-- local function total(items)
--   local sum = 0
--   sum = sum + items[1]
--   return sum
-- end

This note is temporarily disabled.
It must return unchanged.

-- print(total({ 4 }))
```

## Commands

Run these command steps:

```text
1. :set filetype=lua<CR>
2. gc4j
3. /This note<CR>gcap
4. gcap
5. /print<CR>Vgc
```
