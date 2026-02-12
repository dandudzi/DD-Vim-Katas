## Kata: Folding — `zo`, `zc`, `za`, `zR`, `zM`, `zf`

### 1) What folding does (short description)

Folding collapses sections of text into a single line, letting you hide detail and focus on structure. Key commands:

- `zf{motion}` — **create** a fold (manual foldmethod)
- `zo` — **open** the fold under the cursor
- `zc` — **close** the fold under the cursor
- `za` — **toggle** the fold (open if closed, close if open)
- `zR` — **open all** folds in the file
- `zM` — **close all** folds in the file
- `zd` — **delete** the fold under the cursor (manual foldmethod)

Fold methods (`:set foldmethod=`):
- `manual` — create folds by hand with `zf`
- `indent` — folds based on indentation level
- `syntax` — folds based on language syntax (requires syntax highlighting)
- `marker` — folds between `{{{` and `}}}` markers

---

### 2) Practice text (paste into a buffer)

```py
class OrderProcessor:
    def validate_order(self, order):
        if not order.items:
            raise ValueError("Empty order")
        if not order.customer:
            raise ValueError("No customer")
        for item in order.items:
            if item.quantity <= 0:
                raise ValueError(f"Invalid quantity: {item.quantity}")
        return True

    def calculate_total(self, order):
        subtotal = sum(item.price * item.quantity for item in order.items)
        tax = subtotal * 0.08
        shipping = 5.99 if subtotal < 50 else 0
        return subtotal + tax + shipping

    def process_payment(self, order, total):
        gateway = PaymentGateway()
        result = gateway.charge(order.customer.card, total)
        if not result.success:
            raise PaymentError(result.message)
        return result.transaction_id

    def send_confirmation(self, order, transaction_id):
        email = EmailService()
        email.send(
            to=order.customer.email,
            subject="Order Confirmed",
            body=f"Your order {order.id} is confirmed. Transaction: {transaction_id}"
        )

    def process(self, order):
        self.validate_order(order)
        total = self.calculate_total(order)
        txn_id = self.process_payment(order, total)
        self.send_confirmation(order, txn_id)
        return txn_id
```

---

### 3) Step-by-step drills

#### Drill A — Create and use manual folds

1. Run `:set foldmethod=manual`
2. Put cursor on the line `def validate_order(self, order):`
3. Press `V` to start visual line mode
4. Select down to the `return True` line
5. Press `zf` — the selected lines collapse into a fold
6. You should see something like: `+-- 9 lines: def validate_order...`
7. Press `zo` to open it
8. Press `zc` to close it again
9. Press `za` to toggle it

#### Drill B — Fold all methods

1. Repeat drill A for each method: `calculate_total`, `process_payment`, `send_confirmation`, and `process`
2. When all are folded, the file shows just the class line and fold summaries — a high-level overview
3. Press `zo` on `calculate_total` to peek at just that method
4. Press `zc` to close it again

#### Drill C — `zR` and `zM` for global control

1. With all methods folded, press `zR` — every fold in the file opens
2. Press `zM` — every fold closes
3. Press `zR` again — all open
4. Practice toggling between the zoomed-out and zoomed-in view

#### Drill D — Use `zf` with motions

1. Press `zR` to open all folds, then `:set foldmethod=manual`
2. Put cursor on the `def calculate_total` line
3. Press `zfap` — creates a fold around the paragraph (the method block)
4. Press `za` to toggle it

#### Drill E — Delete a fold

1. Put cursor on a closed fold
2. Press `zd` — the fold is removed (the text is still there, just not foldable anymore)

---

### Tip: indent-based folding

For a quick way to get folds without manual creation:

```
:set foldmethod=indent
```

Then use `zo`, `zc`, `za`, `zR`, `zM` to navigate. Each indentation level becomes a fold level.
