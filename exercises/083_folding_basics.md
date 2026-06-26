# Kata: Folding Basics

> **Environment:** Vim or Neovim; built-in folding only.
> **Dependencies:** None.
> **Portability:** Uses manual folds with `zf`, `zo`, `zc`, `za`, `zR`, and `zM`.

## Objective

Use manual folds to collapse and reopen sections of a buffer for a quick
structural overview.

Success means: you can create two manual folds, peek into one with `zo`, close
it again with `zc`, toggle with `za`, and switch the whole file between fully
open and fully closed states with `zR` and `zM`.

## Setup

Open a scratch buffer and insert exactly:

```python
class OrderProcessor:
    def validate_order(self, order):
        if not order.items:
            raise ValueError("Empty order")
        return True

    def calculate_total(self, order):
        subtotal = sum(item.price for item in order.items)
        tax = subtotal * 0.08
        return subtotal + tax

    def process(self, order):
        self.validate_order(order)
        return self.calculate_total(order)
```

Run `:setlocal foldmethod=manual` and start on line 2.

## Drills

1. Create a fold for `validate_order` with `zf` and a motion. Verify that line
   2 becomes a closed fold header.
2. Create a second fold for `calculate_total`. Verify both methods can now be
   collapsed independently.
3. Use `zo`, `zc`, and `za` on one closed fold. Verify the fold opens, closes,
   and toggles without changing buffer text.
4. Use `zM` to close all folds, then `zR` to reopen them all. Verify the class
   body collapses to summaries and then returns fully visible.

## Challenge

Reset the fixture. Create folds for the first two methods, close them both,
peek into `calculate_total`, close it again, then reopen the whole file.

## Hints

<details>
<summary>Hints</summary>

`zfap` is a fast way to create a manual fold around one method-sized paragraph.
This kata stays on manual fold creation and visibility only.

</details>

## Solution

<details>
<summary>Exact keys</summary>

1. On line 2: `zfap`
2. On line 7: `zfap`
3. On a closed fold: `zo`, `zc`, `za`
4. `zM`, then `zR`

Challenge: `2Gzfap7GzfapzMggjzozczR`

</details>

## Cleanup and Scope

Close the scratch buffer with `:bd!`.

This is the foundation kata for creating and opening manual folds. Advanced
follow-ups now live elsewhere:

- [150_run_command_on_visible_fold_lines.md](150_run_command_on_visible_fold_lines.md) for `:folddoopen`
- [166_navigate_between_folds.md](166_navigate_between_folds.md) for `zj` and `zk`
- [167_adjust_fold_depth_incrementally.md](167_adjust_fold_depth_incrementally.md) for `zr` and `zm`

LazyVim note: some setups use Treesitter, LSP, or plugin-provided folds in
normal code buffers. This kata intentionally sets `foldmethod=manual` in a
scratch buffer so the fold commands behave like stock Vim; check
`:setlocal foldmethod? foldexpr?` before applying the same keys to a real file.

## Command Reference

| Keys | Effect |
|---|---|
| `zf{motion}` | Create a manual fold |
| `zo` | Open the fold under the cursor |
| `zc` | Close the fold under the cursor |
| `za` | Toggle the fold under the cursor |
| `zR` | Open all folds |
| `zM` | Close all folds |
