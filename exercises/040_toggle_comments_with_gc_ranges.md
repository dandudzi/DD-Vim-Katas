# Kata: Toggle Comments with gc Ranges

## Task

Use `gc` with a motion and a Visual range to toggle Lua comments in a real code file.

## Start

Use the existing practice file `practice_069_gc_ranges.lua`.

Start in Normal mode in any buffer on line 1, column 1 before opening the practice split.

## End

The split should be closed, and `practice_069_gc_ranges.lua` should contain:

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
1. <leader>- (LazyVim: Split Window Below)
2. :edit practice_069_gc_ranges.lua<CR>
3. gg0gc4j
4. /print<CR>Vgc
5. :write<CR>
6. <leader>wd (LazyVim: Delete Window)
```
