## Command: `gc` (plus ranges like `gc5j`, `gcap`)

- `gc{motion}`: **toggle comment** for the text covered by `{motion}`.
- `gc5j`: toggle comment from the current line **down to the line you land on** after `5j`.
- `gcap`: toggle comment for a whole **paragraph** (`ap` text object).

## Practice text

Tip: put this into a buffer with Lua filetype (`:set ft=lua`) so comment leader is `--`.

```lua
local M = {}

-- BLOCK A (use gc5j)
local function compute_total(items)
    local total = 0
    for _, item in ipairs(items) do
        total = total + item.price
    end
    return total
end

-- PARAGRAPH B (use gcap)
-- Disable this whole note while debugging.
-- It should come back once the bug is fixed.
-- Keep it as a single paragraph (no blank lines).

-- BLOCK C (use gc + a motion you choose)
local function log_event(name, meta)
    print("event:", name)
    print("meta:", vim.inspect(meta))
    print("done")
end

return M
```

## Steps

### A) `gc5j` (comment a fixed-size block)

1. Jump to BLOCK A:
   - `/BLOCK A`
2. Move to the first code line under it (`local function compute_total...`).
3. Run `gc5j` to toggle-comment that chunk.
4. Run `gc5j` again to uncomment (same keystrokes, toggles back).

### B) `gcap` (comment a whole paragraph)

1. Jump to PARAGRAPH B:
   - `/PARAGRAPH B`
2. Put the cursor anywhere inside the 3-line note.
3. Run `gcap` to toggle-comment the whole paragraph.
4. Run `gcap` again to toggle it back.

### C) `gc` + motion (pick one and do it on BLOCK C)

1. Jump to BLOCK C:
   - `/BLOCK C`
2. Put cursor on `local function log_event...`
3. Choose **one** motion and run it:
   - `gc}` — toggle until end of paragraph/block (up to the blank line)
   - `gc/end` then Enter — toggle from here through the match of `/end`
     - (cursor stays in operator-pending; type `/end` and press Enter)
4. Repeat the same command to uncomment.
