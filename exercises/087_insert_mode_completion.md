## Kata: Insert mode completion — `Ctrl-N`, `Ctrl-P`, `Ctrl-X` submodes

### 1) What insert mode completion does (short description)

Vim has built-in completion that works without any plugins or LSP. While in insert mode:

- `Ctrl-N` — complete with **next** matching word (searches forward)
- `Ctrl-P` — complete with **previous** matching word (searches backward)
- `Ctrl-X Ctrl-L` — complete a **whole line**
- `Ctrl-X Ctrl-F` — complete a **filename/path**
- `Ctrl-X Ctrl-]` — complete from **tags**

These scan all open buffers, included files, and tags for matches. Even with LSP/autocompletion plugins, knowing the built-in completion is valuable as a fallback.

---

### 2) Practice text (paste into a buffer)

```ts
interface ShoppingCart {
  customerId: string;
  customerName: string;
  customerEmail: string;
  items: CartItem[];
  totalPrice: number;
  discountCode: string;
}

function createCart(customerId: string, customerName: string): ShoppingCart {
  return {
    customerId: customerId,
    customerName: customerName,
    customerEmail: "",
    items: [],
    totalPrice: 0,
    discountCode: "",
  };
}

function addItemToCart(cart: ShoppingCart, item: CartItem): void {
  cart.items.push(item);
  cart.totalPrice += item.price * item.quantity;
}

function applyDiscount(cart: ShoppingCart, code: string): void {

}
```

---

### 3) Step-by-step drills

#### Drill A — Basic word completion with `Ctrl-N`

Goal: complete long variable names without typing them fully.

1. Put cursor at the end of the `applyDiscount` function body (the blank line)
2. Press `i` to enter insert mode
3. Type `cart.cus` — then press `Ctrl-N`
4. A popup menu appears with matches: `customerId`, `customerName`, `customerEmail`
5. Press `Ctrl-N` to cycle forward through options
6. Press `Ctrl-P` to cycle backward
7. Press `<Enter>` or just keep typing to accept the current match

#### Drill B — `Ctrl-P` (search backward)

1. At the end of the `applyDiscount` function, enter insert mode
2. Type `disc` — then press `Ctrl-P`
3. It finds `discountCode` (searching backward from cursor)
4. Accept it and continue typing

#### Drill C — Whole-line completion with `Ctrl-X Ctrl-L`

Goal: duplicate a similar line without retyping it.

1. Inside `applyDiscount`, enter insert mode on the blank line
2. Type `  cart.` — then press `Ctrl-X Ctrl-L`
3. A list of matching lines appears (lines starting with `  cart.` from the buffer)
4. Select the one you want with `Ctrl-N`/`Ctrl-P`
5. Press `<Enter>` to accept

#### Drill D — Filename completion with `Ctrl-X Ctrl-F`

Goal: type a file path using completion.

1. Anywhere in the file, enter insert mode
2. Type `// See exercises/` — then press `Ctrl-X Ctrl-F`
3. A list of files in the `exercises/` directory appears
4. Use `Ctrl-N`/`Ctrl-P` to select
5. Press `<Enter>` to accept

---

### Tip

If a popup appears and you want to dismiss it without accepting:

- `Ctrl-E` — close the popup and keep what you typed
- `<Esc>` — close the popup and exit insert mode

### Key reference

| Shortcut | Completes |
|---|---|
| `Ctrl-N` | Next keyword match |
| `Ctrl-P` | Previous keyword match |
| `Ctrl-X Ctrl-L` | Whole line |
| `Ctrl-X Ctrl-F` | Filename |
| `Ctrl-X Ctrl-]` | Tags |
| `Ctrl-X Ctrl-O` | Omni completion (if configured) |
