# Kata: mini.ai Code Text Objects

## Task

Practice `mini.ai` function-call and argument text objects as operator targets.

## Start

From any buffer, open the shared JS/TS practice file in a vertical split and
jump to this kata:

```text
:vsplit practice_js_ts_filetypes.ts<CR>
:/sumPrices(cart.items, discount)<CR>
fd
```

Start in Normal mode on the `d` in `discount`.

## End

The Kata 173 section of `practice_js_ts_filetypes.ts` should have:

```text
discount replaced with 0
user.email replaced with "ops@example.com"
```

## Commands

Run these command steps:

```text
1. :setlocal filetype=typescript<CR>
2. :lua print(MiniAi ~= nil)<CR>
3. yif
4. :echo @0<CR>
5. cia0<Esc>
6. j0f.
7. cia"ops@example.com"<Esc>
```
