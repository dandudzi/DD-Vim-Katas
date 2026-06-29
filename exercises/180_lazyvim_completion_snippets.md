# Kata: LazyVim Completion and Snippet Readiness

## Task

Practice built-in keyword completion first, then use LazyVim completion and snippets only after inspecting the active Insert-mode mappings.

## Start

Open a scratch buffer and insert:

```text
const customerName = "Ada";
const customerEmail = "ada@example.test";
const customerStatus = "active";

cus

function renderCard() {
}
```

Start in Insert mode after `cus` on line 5.

## End

The observable final state should be:

```text
line 5 completed to a visible customer identifier
snippet expansion either performed with verified mappings or deliberately skipped
no unrelated buffer text changed
```

## Commands

Run these command steps:

```text
1. <C-n>{repeat until customerEmail is selected}
2. <C-y>
3. <Esc>
4. :verbose imap <Tab><CR>
5. :verbose imap <S-Tab><CR>
6. :verbose imap <C-y><CR>
7. 5Gccus<Esc>A
8. <C-Space>
9. <C-n>{repeat until a customerName, customerEmail, or customerStatus candidate is selected}
10. <C-y>
11. <Esc>Gko
12. for<C-Space>
13. If a snippet candidate is visible: <C-n>{repeat until the snippet candidate is selected}<C-y><Tab>; otherwise: <Esc>u
```
