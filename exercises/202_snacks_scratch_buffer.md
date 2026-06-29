# Kata: Snacks Scratch Buffer

## Task

Practice verifying the LazyVim Snacks scratch mapping and opening a scratch buffer without modifying existing scratch content.

## Start

Open a scratch buffer and insert:

```text
scratch safety check
```

Start in Normal mode on the first line.

## End

The observable workspace state should be:

```text
The Snacks scratch mapping was verified or the kata was skipped.
Existing scratch content was not modified.
Any new scratch buffer opened for the kata was closed without saving.
```

## Commands

Run these command steps:

```text
1. :verbose nmap <leader>.<CR>
2. Stop here if the mapping is absent or does not identify the expected Snacks-backed scratch workflow.
3. <leader>.
4. Cancel if the provider opens existing scratch content.
5. If a new empty scratch opens, run ikata scratch only<Esc>
6. :bd!<CR>
```
