# Kata: `mini.ai` Code Text Objects

> **Environment:** Neovim with LazyVim or another config using `mini.ai`.
> **Dependencies:** `nvim-mini/mini.ai` with default-style `a`/`i` textobject mappings.
> **Portability:** These function-call and argument objects are plugin-provided. Verify mappings before use.

## Objective

Use `mini.ai` text objects to change function-call contents and individual arguments without manually selecting text.

Success means: you can apply function-call and argument text objects as operator targets after confirming your active `mini.ai` mappings.

## Prerequisites

- Know: built-in operator plus text-object grammar, such as `ci"` and `di(`.
- Required option/state: `filetype=typescript` for the fixture, though these particular `mini.ai` objects are pattern-based.
- Required external tool/plugin: `mini.ai`.
- Readiness check: run `:lua print(MiniAi ~= nil)` and confirm it prints `true`. Then run `:verbose omap a`, `:verbose omap i`, `:verbose xmap a`, and `:verbose xmap i`; continue only if the mappings come from `mini.ai` or your intended text-object provider.

## Setup

1. Open a scratch buffer with `:enew`.
2. Run `:setlocal filetype=typescript`.
3. Insert the fixture exactly as shown below.
4. Start on the `d` in `discount` on line 1.
5. Confirm `:echo line('.') . ',' . col('.')` prints `1,49`.

## Initial Fixture

```ts
const total = formatPrice(sumPrices(cart.items, discount), currency);
notify(user.email, total, { urgent: false });
```

Start in Normal mode on the `d` in `discount`.

## Constraints

- Use `mini.ai` text objects as the final operator target in each drill.
- Do not use Visual mode, manual comma deletion, or search to select the target range.
- Reset to the fixture before each drill unless the drill explicitly builds on the previous edit.

## Tasks

### Drill A - Inspect a function-call interior

**Goal:** yank the inside of the nearest function call.

1. From `discount`, yank the inside of the current function call.
2. Inspect register `0`.

**Verify:** `:echo @0` prints `cart.items, discount`.

### Drill B - Change one argument

**Goal:** replace only the `discount` argument with `0`.

1. Reset to the fixture and place the cursor on `discount`.
2. Change the inner argument to `0`.

**Verify:** line 1 becomes `const total = formatPrice(sumPrices(cart.items, 0), currency);`.

### Drill C - Change an outer function-call interior

**Goal:** replace the arguments passed to `notify`.

1. Reset to the fixture.
2. Put the cursor anywhere inside the `notify(...)` call.
3. Change the inside of that function call to `"ops@example.com", total, { urgent: true }`.

**Verify:** line 2 becomes `notify("ops@example.com", total, { urgent: true });`.

### Challenge - Recall without prompts

Reset the fixture. Change `discount` to `0`, then change only the first `notify` argument to `"ops@example.com"`.

**Verify:** the final buffer is exactly:

```ts
const total = formatPrice(sumPrices(cart.items, 0), currency);
notify("ops@example.com", total, { urgent: false });
```

## Hints

<details>
<summary>Hint 1</summary>

`f` is the function-call textobject identifier in the default `mini.ai` set.

</details>

<details>
<summary>Hint 2</summary>

`a` is the argument textobject identifier. The full command has two `a` characters when you want the around-argument object.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `yif` - yank inside the nearest function call.
2. `:echo @0<CR>` - inspect the yank register.

### Drill B

1. `cia0<Esc>` - change the inner argument under the cursor.

### Drill C

1. `j0f(` - move inside `notify(...)`.
2. `cif"ops@example.com", total, { urgent: true }<Esc>` - replace the call contents.

### Challenge

`cia0<Esc>j0fucia"ops@example.com"<Esc>`

The first change targets the inner argument at `discount`. The second moves to `user.email` and changes only that argument, preserving the following comma and spacing.

</details>

## Reset and Cleanup

- Between drills: use `u` until the fixture is restored, or recreate the scratch buffer.
- After the kata: close with `:bd!`.
- Preserve user data: do not run this kata in a real project file.

## Notes and Portability

- `mini.ai` default textobject identifiers include function call `f` and argument `a`, but users can customize or disable them.
- `:verbose omap a` and `:verbose omap i` show the mapping source for the textobject prefixes, not every possible identifier.
- Pattern-based function and argument detection can be fooled by unusual strings or comments. Use parser-backed text objects for language-specific precision when your config provides them.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `yif` | Normal | Yank inside the current function call. |
| `cif` | Normal | Change inside the current function call. |
| `cia` | Normal | Change inside the current argument. |
| `caa` | Normal | Change around the current argument, including separator handling. |
| `:verbose omap a` | Command-line | Show the active operator-pending `a` mapping source. |

## References

- [mini.ai README](https://github.com/nvim-mini/mini.ai) - `a`/`i` textobject extension and built-in function/argument objects.
- [`:help text-objects`](https://vimhelp.org/motion.txt.html#text-objects) - built-in operator/text-object grammar.
