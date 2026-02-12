## Kata: `S` (Flash Treesitter motion) as an operator target

### 1) What `S` does (short description)

In LazyVim, `S` is commonly mapped to **Flash Treesitter selection**. It lets you pick a **Treesitter-aware target** (like a function, method, block, or parameter list) via **on-screen labels**, and it works as a **motion** for operators.

That means you can do things like:

- `gcS{label}` → comment out the labeled syntax node (example: a whole function)
- `dS{label}` → delete the labeled node
- `yS{label}` → yank the labeled node
- `=S{label}` → re-indent the labeled node

Example: `gcSh` comments out the function/block that has the `h` label after `S` shows labels.

---

### 2) Practice text (paste into a buffer)

Paste this into a new file (recommended: `practice.ts` so Treesitter understands it):

```ts
type Item = { name: string; price: number; qty: number };

function calculateTotal(items: Item[]): number {
  let total = 0;
  for (const it of items) {
    total += it.price * it.qty;
  }
  return total;
}

function formatInvoice(customer: string, items: Item[]): string {
  const total = calculateTotal(items);
  const lines = items.map((i) => `- ${i.name} x${i.qty}: ${i.price}`);
  return [`Customer: ${customer}`, "Items:", ...lines, `Total: ${total}`].join(
    "\n",
  );
}

function debugLog(message: string): void {
  // Intentionally noisy
  console.log("[debug]", message);
}

class CheckoutService {
  checkout(customer: string, items: Item[]): string {
    debugLog("starting checkout");
    const invoice = formatInvoice(customer, items);
    debugLog("invoice ready");
    return invoice;
  }

  private applyDiscount(total: number): number {
    if (total > 1000) {
      return total * 0.9;
    }
    return total;
  }
}

const items: Item[] = [
  { name: "Keyboard", price: 250, qty: 1 },
  { name: "Mouse", price: 120, qty: 2 },
];

console.log(new CheckoutService().checkout("Ada", items));
```

---

### 3) Step-by-step: how to practice `S`

#### Drill A — Comment out exactly one function using `gcS{label}`

Goal: comment out `formatInvoice(...)` (and only that function).

1. Put your cursor anywhere inside the file (it does not need to be on the function).
2. Type `gc` to start the comment operator.
3. Type `S` to invoke Flash Treesitter targeting.
4. When labels appear on possible targets, press the label that points to the **`formatInvoice` function node** (for example, `h`).
   - This is the exact pattern: `gcS` + `{label}` (e.g., `gcSh`).
5. Verify that only `formatInvoice` got commented.
6. Press `u` to undo and repeat until you can do it quickly without hesitation.

#### Drill B — Comment out a class method

Goal: comment out only `checkout(...)` inside `CheckoutService`.

1. Start again from an uncommented state (use `u` until it’s clean).
2. Type `gcS`
3. Press the label that selects the `checkout(...)` method.
4. Undo and repeat, but this time select `applyDiscount(...)`.

#### Drill C — Use a different operator with the same `S` motion

Goal: yank a function, then paste it elsewhere.

1. Type `yS`
2. Press the label for `debugLog(...)`.
3. Move to the bottom of the file and press `p` to paste.
4. Undo and repeat with `calculateTotal(...)`.

---

### Extra constraints (optional, but good for skill building)

- Try starting the operator from different cursor locations (top of file, inside a string, inside a class).
- Practice being precise: select the _smallest_ correct node (method vs whole class).
- If labels feel overwhelming, slow down and read the target text near each label before pressing it.
