## Kata: `[i`/`]i` — Indentation jumping, and menu cycling with Shift-Tab

> **Note**: Indentation jumping (`[i`/`]i`) requires LazyVim with mini.indentscope or a similar plugin. Menu cycling with `Shift-Tab` works in most Neovim completion setups.

### 1) What these do (short description)

**Indentation jumping:**
- `[i` — jump to the **top** of the current indentation scope (previous line at a lower indent level)
- `]i` — jump to the **bottom** of the current indentation scope (next line at a lower indent level)

This lets you quickly navigate to the enclosing block without searching for brackets.

**Menu cycling:**
- `Shift-Tab` — cycle **backward** through completion menu entries (opposite of `Tab`)
- `Tab` — cycle **forward** through entries
- Works in completion menus, command-line menus, and picker UIs

**Multilanguage spell:**
- `:set spelllang=en,es` — check spelling in multiple languages simultaneously

---

### 2) Practice text (paste into a buffer)

```py
class OrderProcessor:
    def __init__(self, db, cache):
        self.db = db
        self.cache = cache
        self.logger = Logger("OrderProcessor")

    def process_order(self, order_id):
        order = self.db.get_order(order_id)
        if order is None:
            self.logger.error(f"Order {order_id} not found")
            return None

        if order.status == "cancelled":
            self.logger.warn(f"Order {order_id} is cancelled")
            return None

        items = order.get_items()
        for item in items:
            if not item.in_stock():
                self.logger.error(f"Item {item.id} out of stock")
                raise OutOfStockError(item)
            self.cache.invalidate(item.id)

        total = sum(item.price for item in items)
        self.db.update_order(order_id, status="processed", total=total)
        return total

    def cancel_order(self, order_id):
        order = self.db.get_order(order_id)
        self.db.update_order(order_id, status="cancelled")
        return True
```

---

### 3) Step-by-step drills

#### Drill A — `]i` to jump to end of indentation scope

1. Place cursor on `order = self.db.get_order(order_id)` (line 8, inside `process_order`)
2. Press `]i` — cursor jumps to the bottom of the current indent scope (the `return total` line)
3. You've navigated to the end of the function body without counting lines

#### Drill B — `[i` to jump to start of indentation scope

1. Place cursor on `self.cache.invalidate(item.id)` (line 22)
2. Press `[i` — cursor jumps up to the start of the current indent scope
3. Keep pressing `[i` to jump further up through enclosing scopes

#### Drill C — Navigate nested scopes

1. Place cursor on `raise OutOfStockError(item)` (line 21, deeply nested)
2. Press `[i` — jumps to the `if not item.in_stock()` level
3. Press `[i` again — jumps to the `for item in items` level
4. Press `[i` again — jumps to the `def process_order` level
5. This is like `[{` but works for indentation-based languages (Python) where there are no braces

#### Drill D — Shift-Tab to cycle completion backward

1. Open a Python file and enter insert mode
2. Start typing `self.` — a completion menu appears
3. Press `Tab` — selects the next entry
4. Press `Shift-Tab` — goes back to the previous entry
5. Press `Shift-Tab` again — keeps cycling backward
6. Press `<Enter>` or `Ctrl-Y` to accept the selected entry

This also works in command-line completion:
1. Type `:e ex<Tab>` — autocompletes forward
2. Press `Shift-Tab` — cycles backward through matches

#### Drill E — Multilanguage spell checking

1. Enable spell checking: `:set spell<Enter>`
2. Set multiple languages: `:set spelllang=en,es<Enter>` (English and Spanish)
3. Words valid in **either** language won't be marked as misspelled
4. Navigate misspellings with `]s` (next) and `[s` (previous)
5. Press `z=` on a misspelled word to see suggestions from all configured languages

---

### Command reference

| Command | Effect |
|---|---|
| `[i` | Jump to top of current indentation scope |
| `]i` | Jump to bottom of current indentation scope |
| `Tab` | Next completion/menu entry |
| `Shift-Tab` | Previous completion/menu entry |
| `:set spelllang=en,es` | Spell check in English and Spanish |
| `]s` / `[s` | Next / previous misspelling |
