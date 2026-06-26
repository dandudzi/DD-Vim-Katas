# Kata: Insert-Mode Completion Basics

> **Environment:** Vim or Neovim; built-in completion only.
> **Dependencies:** None.
> **Portability:** Uses built-in insert-mode completion with `<C-n>`, `<C-p>`,
> `<C-y>`, `<C-e>`, and `<C-x><C-l>`.

## Objective

Complete repeated text from the current buffer without plugins or LSP.

Success means: you can use `<C-n>` and `<C-p>` to cycle keyword matches,
accept one candidate with `<C-y>`, cancel another with `<C-e>`, and reuse a
whole line with `<C-x><C-l>`.

## Setup

Open a scratch buffer and insert exactly:

```text
customerId
customerName
customerEmail
discountCode

cus
disc

```

Start in Insert mode at the end of `cus` on line 6.

## Drills

1. On line 6, use `<C-n>` and `<C-p>` to cycle through the `customer...`
   matches. Verify you can land on `customerName`.
2. Accept the selected candidate with `<C-y>`. Verify line 6 becomes exactly
   `customerName`.
3. Move to line 7 after `disc`, trigger completion, and cancel it with
   `<C-e>`. Verify line 7 stays exactly `disc`.
4. Open a new line below, type `cust`, and use `<C-x><C-l>` only after first
   creating a full line elsewhere that begins with `customerEmail`. Verify you
   can reuse that entire line as one completion unit.

## Challenge

Reset the fixture. Turn line 6 into `customerEmail`, leave line 7 unchanged as
`disc`, and insert one reused whole line below them.

## Hints

<details>
<summary>Hints</summary>

`<C-n>` and `<C-p>` move through candidates. `<C-y>` accepts the current one.
`<C-e>` closes the popup and keeps only what you typed. `<C-x><C-l>` completes
a whole line instead of one word.

</details>

## Solution

<details>
<summary>Exact keys</summary>

1. On `cus`: `<C-n>` or `<C-p>` until the right `customer...` entry is
   selected
2. `<C-y>`
3. On `disc`: `<C-n><C-e>`
4. `o cust<C-x><C-l><C-y><Esc>` after a matching full line exists

</details>

## Cleanup and Scope

Close the scratch buffer with `:bd!`.

This foundation kata stays on core buffer-local completion and popup control.
It no longer tries to survey every completion source. Advanced or specialized
follow-ups belong in separate drills.

## Command Reference

| Keys | Effect |
|---|---|
| `<C-n>` | Select the next completion match |
| `<C-p>` | Select the previous completion match |
| `<C-y>` | Accept the current completion |
| `<C-e>` | Cancel completion and keep typed text |
| `<C-x><C-l>` | Complete a whole line |
