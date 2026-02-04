## Kata: `gd` (go to definition/declaration) + jump back (`<C-o>`, `<C-i>`)

### 1) What `gd` does (short description)

`gd` jumps to the **definition** (or **declaration**, depending on your setup/LSP) of the symbol under your cursor (function, variable, type, method, etc.).

After jumping, you can return to where you were using:

- `<C-o>` — jump **back** in jump history
- `<C-i>` — jump **forward** in jump history

This is the “read it, then instantly go back” workflow.

---

### 3) Step-by-step: how to practice

#### Drill A — Jump to a function definition and back

Goal: use `gd` + `<C-o>` as a single “round trip”.

1. Put your cursor on `makeUser` in: `const u1 = makeUser(...)`
2. Press `gd`  
   You should land on `function makeUser(...)`.
3. Read 1–2 lines to confirm what it does.
4. Press `<C-o>` to jump back to the usage line.
5. Repeat 5 times until it feels automatic.

#### Drill B — Chain jumps, then walk back/forward in history

Goal: build a small jump stack.

1. From the usage section, put cursor on `makeUser` → `gd`
2. Inside `makeUser`, put cursor on `normalizeName` → `gd`
3. Now press `<C-o>` twice to go back step-by-step:
   - back to `makeUser`
   - back to the original usage
4. Press `<C-i>` twice to move forward again:
   - forward to `makeUser`
   - forward to `normalizeName`

#### Drill C — Jump to type definitions

Goal: practice `gd` on types, not only functions.

1. Put cursor on `User` in `function printReport(user: User): string`
2. Press `gd` to jump to the `type User = { ... }` definition.
3. Press `<C-o>` to return.
4. Do the same for `UserId`.

---

### Constraints (optional, for stronger muscle memory)

- Don’t use search (`/`) to locate definitions—only `gd`.
- After every `gd`, always return with `<C-o>` (unless you intentionally continue chaining with another `gd`).
