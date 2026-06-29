# Kata: LazyVim Comment Workflow

## Task

Practice toggling a Lua range with `gc{motion}` and adding a new comment line with the checked comment helper.

## Start

Open a scratch buffer and insert:

```text
local function build_total(items)
  local total = 0
  total = total + items[1]
  return total
end

print(build_total({ 10 }))
```

Start in Normal mode on the `l` in `local`.

## End

The buffer should become:

```text
-- local function build_total(items)
--   local total = 0
--   total = total + items[1]
--   return total
-- end

print(build_total({ 10 }))
-- manual smoke test
```

## Commands

Run these command steps:

```text
1. :setlocal filetype=lua<CR>
2. :verbose nmap gc<CR>
3. :verbose nmap gco<CR>
4. gggc4j
5. G
6. gcomanual smoke test<Esc>
```
