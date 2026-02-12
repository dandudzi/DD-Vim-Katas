## Kata: `K` and `gr` — Hover lookup and go to references

### 1) What these commands do (short description)

- `K` — show documentation for the word under the cursor
  - In vanilla Vim: runs `man` on the word (useful for C standard library, shell commands)
  - With LSP configured: shows hover documentation (type info, docstrings, signatures)
- `gr` — go to references (LSP): find all locations where the symbol under the cursor is used

Together, `K` tells you **what** a function does, and `gr` tells you **where** it's used. This is the "understand then trace" workflow.

---

### 2) Practice text (paste into a buffer)

For `K` without LSP (man pages):

```sh
#!/bin/bash
echo "Current directory: $(pwd)"
ls -la /tmp
grep -r "pattern" /var/log
chmod 755 script.sh
```

For `K` and `gr` with LSP (save as a `.ts` file with TypeScript LSP running):

```ts
/** Calculate the total price including tax. */
function calculateTotal(price: number, taxRate: number): number {
  return price * (1 + taxRate);
}

const subtotal = 99.99;
const tax = 0.08;
const total = calculateTotal(subtotal, tax);
const discountedTotal = calculateTotal(subtotal * 0.9, tax);
console.log(`Total: ${total}, Discounted: ${discountedTotal}`);
```

---

### 3) Step-by-step drills

#### Drill A — `K` with man pages (no LSP needed)

1. Open the shell script in a buffer
2. Place cursor on `chmod` (line 5)
3. Press `K` — Vim opens the man page for `chmod`
4. Read the documentation, press `q` to close
5. Place cursor on `grep`, press `K` — opens the `grep` man page

#### Drill B — `K` with LSP hover

(Requires an LSP server running, e.g., TypeScript with `tsserver`)

1. Open the TypeScript file in a buffer
2. Place cursor on `calculateTotal` on line 8
3. Press `K` — a floating window shows the function signature and docstring:
   ```
   function calculateTotal(price: number, taxRate: number): number
   Calculate the total price including tax.
   ```
4. Press `K` again (or move cursor) to dismiss
5. Place cursor on `subtotal`, press `K` — shows `const subtotal: number`

#### Drill C — `gr` to find all references

(Requires LSP)

1. Place cursor on `calculateTotal` on line 2 (the declaration)
2. Press `gr` — a list appears showing all locations where `calculateTotal` is used:
   - Line 8: `const total = calculateTotal(subtotal, tax);`
   - Line 9: `const discountedTotal = calculateTotal(subtotal * 0.9, tax);`
3. Select an entry to jump to that usage

#### Drill D — "Understand then trace" workflow

1. You see `calculateTotal` being called on line 9 and want to understand it
2. Press `K` on `calculateTotal` — read the docstring and signature
3. Now press `gr` — see all call sites to understand how it's used across the codebase
4. Press `gd` — jump to the function definition to read the implementation

This three-step pattern (`K` → `gr` → `gd`) is a complete code comprehension workflow.

#### Drill E — Configure `keywordprg` for different file types

By default, `K` runs the program set in `keywordprg` (default: `man`). You can customize it:

1. For Python files: `:setlocal keywordprg=pydoc`
2. For Ruby files: `:setlocal keywordprg=ri`
3. With LSP: the LSP handler overrides `K` automatically — no configuration needed

---

### Command reference

| Command | Effect |
|---|---|
| `K` | Show docs for word under cursor (man page or LSP hover) |
| `gr` | Go to references (LSP) |
| `gd` | Go to definition (local) |
| `gD` | Go to definition (global/file-level) |
| `:setlocal keywordprg=pydoc` | Use pydoc for `K` in current buffer |
