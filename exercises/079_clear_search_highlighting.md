## Kata: `:nohlsearch` — Clear search highlighting

### 1) What `:nohlsearch` does (short description)

After searching with `/`, `?`, `*`, or `#`, Vim highlights all matches on screen (if `:set hlsearch` is on). The highlights remain until you:

- `:nohlsearch` (or `:noh` for short) — clears the highlights until the next search

This does **not** disable `hlsearch` permanently — it only clears the current highlights. The next time you search, highlights will appear again.

Common mappings to make this faster:

- `<leader>h` or `<leader>nh` → `:nohlsearch<CR>`
- In LazyVim: `<Esc><Esc>` or `<leader>ur` clears highlights by default

---

### 2) Practice text (paste into a buffer)

```rb
class UserService
  def find_user(id)
    user = User.find(id)
    log("Found user: #{user.name}")
    user
  end

  def update_user(id, attrs)
    user = find_user(id)
    user.update(attrs)
    log("Updated user: #{user.name}")
    user
  end

  def delete_user(id)
    user = find_user(id)
    user.destroy
    log("Deleted user: #{user.name}")
  end
end
```

---

### 3) Step-by-step drills

#### Drill A — Search, observe highlights, then clear

1. Make sure highlighting is on: `:set hlsearch`
2. Search for `user` with `/user<Enter>`
3. Notice every occurrence of `user` is highlighted throughout the file
4. Type `:noh<Enter>` — all highlights disappear
5. Your cursor stays where it is; only the highlights are removed
6. Search again with `/log<Enter>` — highlights come back for `log`
7. Clear again with `:noh<Enter>`

#### Drill B — Use `*` then clear

1. Put cursor on the word `find_user`
2. Press `*` — highlights appear on all `find_user` occurrences
3. Press `n` a few times to navigate through matches
4. Type `:noh<Enter>` to clear when done

#### Drill C — Practice the muscle memory

Goal: make clearing highlights automatic after every search-and-jump session.

1. Search for `attrs` with `/attrs<Enter>`
2. Press `n` to confirm you've found what you need
3. Immediately type `:noh<Enter>` — get used to doing this right after finishing a search
4. Repeat: search for `destroy`, jump with `n`, clear with `:noh`
5. Repeat: search with `*` on `update`, jump, clear

---

### Tip

If you find yourself typing `:noh` constantly, add a mapping to your config:

```lua
vim.keymap.set("n", "<leader>h", "<cmd>nohlsearch<CR>", { desc = "Clear search highlights" })
```

Or if you use LazyVim, `<Esc><Esc>` in normal mode already does this.
