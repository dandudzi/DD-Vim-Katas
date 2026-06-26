## Kata: `K` and `gr` — Hover lookup and go to references

### 1) What these commands do (short description)

- `K` — show documentation for the word under the cursor
  - In vanilla Vim: runs the program in `'keywordprg'` for the word under the cursor
  - In LazyVim/Neovim with an attached LSP client: usually calls LSP hover documentation
- `gr` — go to references when a client supports LSP references

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

For `K` and `gr` with LSP, use any filetype in your own setup where `:LspInfo` shows an attached client. The example below is only a shape for a definition with two call sites; translate it to a language your configured LSP already supports.

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

(Requires an attached LSP client with hover support.)

1. Open a file where `:LspInfo` shows an attached client.
2. Run `:lua for _, c in ipairs(vim.lsp.get_clients({bufnr=0})) do print(c.name, c:supports_method('textDocument/hover', 0)) end` and continue only if at least one client prints `true`.
3. Place the cursor on a call site for your chosen symbol.
4. Press `K` and verify the hover describes that symbol.
5. Move to another typed identifier and press `K` again. Verify the hover changes to that identifier.

#### Drill C — `gr` to find all references

(Requires LSP)

1. Run `:verbose nmap gr` and confirm the active mapping, then check `textDocument/references` with the same `client:supports_method(...)` pattern.
2. Place the cursor on the declaration of your chosen symbol.
3. Press `gr` and verify the references UI lists at least two uses of that same symbol.
4. Select one entry to jump to that usage.

#### Drill D — "Understand then trace" workflow

1. You see a symbol call and want to understand it.
2. Press `K` on the symbol and read the hover.
3. Now press `gr` to see all call sites.
4. Press `gd` only after `:verbose nmap gd` and `textDocument/definition` confirm the active LSP definition mapping.

This three-step pattern (`K` → `gr` → `gd`) is a complete code comprehension workflow.

#### Drill E — Configure `keywordprg` for different file types

By default, `K` runs the program set in `keywordprg` (default: `man`). You can customize it:

1. For Python files: `:setlocal keywordprg=pydoc`
2. For Ruby files: `:setlocal keywordprg=ri`
3. With LazyVim/LSP: inspect `:verbose nmap K` to see whether `K` is mapped to hover in the current buffer

---

### Command reference

| Command | Effect |
|---|---|
| `K` | Show docs for word under cursor (man page or LSP hover) |
| `gr` | Go to references (LSP) |
| `gd` | Go to definition (local) |
| `gD` | Go to definition (global/file-level) |
| `:setlocal keywordprg=pydoc` | Use pydoc for `K` in current buffer |
