# Kata: mini.ai Code Text Objects

## Task

Practice `mini.ai` function-call and argument text objects as operator targets.

## Start

Open a scratch buffer and insert:

```text
const total = formatPrice(sumPrices(cart.items, discount), currency);
notify(user.email, total, { urgent: false });
```

Start in Normal mode on the `d` in `discount`.

## End

The buffer should become:

```text
const total = formatPrice(sumPrices(cart.items, 0), currency);
notify("ops@example.com", total, { urgent: false });
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
