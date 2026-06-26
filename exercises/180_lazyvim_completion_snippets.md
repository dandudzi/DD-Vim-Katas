# Kata: LazyVim Completion and Snippet Readiness

> **Environment:** Neovim with LazyVim.
> **Dependencies:** Optional completion and snippet providers from the active LazyVim configuration.
> **Portability:** Completion engines, snippet engines, source labels, and Insert-mode keys are configuration-dependent. Verify mappings with `:verbose imap {keys}`.

## Objective

By the end of this kata, you will be able to separate built-in completion keys
from LazyVim's configured completion and snippet workflow, then use snippet
behavior only when the active engine exposes it.

Success means: built-in keyword completion works deterministically, plugin menu
keys are used only after mapping verification, and snippet expansion is skipped
unless the current setup clearly provides it.

## Prerequisites

- Know: built-in Insert-mode completion with `<C-n>`, `<C-p>`, `<C-y>`, and `<C-e>`.
- Required option/state: none.
- Required external tool/plugin: optional completion and snippet providers.
- Readiness check: run `:echo has('nvim')` and confirm it prints `1`.

## Setup

1. Create a scratch buffer:

```vim
:enew
:setlocal buftype=nofile bufhidden=hide noswapfile filetype=javascript
```

2. Insert exactly:

```javascript
const customerName = "Ada";
const customerEmail = "ada@example.test";
const customerStatus = "active";

cus

function renderCard() {
}
```

3. Start in Insert mode after `cus` on line 5.

## Initial Fixture

```javascript
const customerName = "Ada";
const customerEmail = "ada@example.test";
const customerStatus = "active";

cus

function renderCard() {
}
```

Start at the end of `cus`.

## Constraints

- Use built-in `<C-n>` / `<C-p>` for the deterministic completion drill.
- Do not assume `<Tab>` accepts completion, expands snippets, or jumps between placeholders until `:verbose imap <Tab>` proves what it does.
- Do not name one completion or snippet engine as universal.
- Reset the fixture before each drill unless the drill explicitly builds on the previous one.

## Tasks

### Drill A - Complete with built-in keys

**Goal:** complete a buffer word without any plugin behavior.

1. From the end of `cus`, invoke built-in keyword completion.
2. Cycle until `customerEmail` is selected.
3. Accept the completion.

**Verify:** line 5 becomes exactly `customerEmail`.

### Drill B - Inspect plugin completion keys

**Goal:** discover what your LazyVim setup does in Insert mode.

1. Run `:verbose imap <Tab>`.
2. Run `:verbose imap <S-Tab>`.
3. Run `:verbose imap <C-y>`.
4. If your config documents another accept key, inspect that key too.

**Verify:** for each key, you can say whether it is unmapped, built in,
completion-menu navigation, snippet expansion or jump, or another action.

### Drill C - Use the plugin menu only after verification

**Goal:** practice provider-agnostic menu control.

1. Reset line 5 to `cus` and return to Insert mode after it.
2. Trigger completion using the key or command your inspected config provides.
3. Select a visible `customer...` candidate using only keys verified in Drill B.
4. Accept it using a verified accept key.

**Verify:** line 5 becomes one of the visible `customer...` candidates, and the
key sequence you used matches the mappings reported by `:verbose imap`.

### Drill D - Gate snippet behavior

**Goal:** expand or skip a snippet based on visible provider evidence.

1. Move inside the empty `renderCard` block.
2. Trigger completion or snippets using only verified mappings.
3. If the menu shows an item explicitly marked as a snippet, expand it and try one verified placeholder-jump key.
4. If no snippet item or snippet mapping is visible, skip expansion.

**Verify:** either placeholder movement is observable in the buffer, or you can
state exactly which readiness check caused the snippet drill to be skipped.

### Challenge - Complete safely, then decide on snippets

Reset the fixture. Complete `cus` to a customer identifier using either built-in
keys or verified plugin keys. Then inspect snippet readiness inside
`renderCard` and expand only when the provider makes a snippet candidate and
jump mapping visible.

**Verify:** completion changed only line 5, and snippet behavior was either
performed with verified mappings or deliberately skipped.

## Hints

<details>
<summary>Hint 1</summary>

`<C-n>` and `<C-p>` are the portable baseline. Treat plugin keys as local
configuration until `:verbose imap` proves otherwise.

</details>

<details>
<summary>Hint 2</summary>

Snippet expansion often shares keys with completion navigation. If a key reports
snippet behavior, do not use it as a generic "next menu item" key.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. From Insert mode after `cus`: `<C-n>` or `<C-p>` until `customerEmail` is selected.
2. `<C-y>`

### Drill B

1. `:verbose imap <Tab><CR>`
2. `:verbose imap <S-Tab><CR>`
3. `:verbose imap <C-y><CR>`

### Drill C

Use the trigger, selection, and accept keys reported by Drill B. If none are
available, repeat Drill A with built-in keys.

### Drill D

Use only a snippet item and placeholder key that are visible in your current
completion menu and confirmed by `:verbose imap`. Otherwise skip.

### Challenge

Complete line 5 with Drill A or verified plugin keys, then run Drill D's
readiness decision inside `renderCard`.

</details>

## Reset and Cleanup

- Between drills: restore the initial fixture, set `filetype=javascript`, and return to the documented cursor position.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: the exercise uses only a nofile scratch buffer.

## Notes and Portability

- Built-in completion is always available for words already present in the buffer.
- LazyVim completion and snippet behavior depends on the installed engine, enabled extras, filetype, LSP, and user mappings.
- Snippet source names and placeholder keys are not portable. Trust the visible menu and `:verbose imap`, not a hard-coded engine assumption.
- For a deterministic baseline, fall back to `<C-n>`, `<C-p>`, `<C-y>`, and `<C-e>`.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `<C-n>` / `<C-p>` | Insert | Built-in next / previous completion match. |
| `<C-y>` | Insert | Built-in accept current completion. |
| `<C-e>` | Insert | Built-in cancel completion menu. |
| `:verbose imap <Tab>` | Command-line | Show the active Insert-mode mapping source for `<Tab>`. |
| `:verbose imap <S-Tab>` | Command-line | Show the active Insert-mode mapping source for `<S-Tab>`. |

## References

- [`:help i_CTRL-N`](https://vimhelp.org/insert.txt.html#i_CTRL-N) - built-in Insert-mode completion.
- [`:help i_CTRL-Y`](https://vimhelp.org/insert.txt.html#i_CTRL-Y) - accept completion.
- [LazyVim keymaps](https://lazyvim.github.io/keymaps) - distribution mappings, subject to local config.
