# Kata: Toggle Comments with gc Ranges

## Task

Use `gc` with a motion and a Visual range to toggle Lua comments in an existing practice file.

## Start

Open a scratch buffer and insert:

```text
practice_069_gc_ranges.lua
```

Start in Normal mode on the `p` in line 1.

## End

The practice split should be closed, and `practice_069_gc_ranges.lua` should contain:

```lua
-- local function total(items)
--   local sum = 0
--   sum = sum + items[1]
--   return sum
-- end

-- print(total({ 4 }))
```

## Commands

Run these command steps:

```text
1. <leader>|
2. gf
3. gg0gc4j
4. /print<CR>Vgc
5. <C-s>
6. <leader>wd
```

