# Kata: Snacks Terminal

## Task

Practice verifying the LazyVim Snacks terminal mapping, running one harmless command, and closing the terminal after the job exits.

## Start

Open a scratch buffer and insert:

```text
snacks terminal check
```

Start in Normal mode on the first line.

## End

The observable terminal state should be:

```text
The Snacks terminal mapping was verified or the kata was skipped.
The terminal output included snacks-terminal-ready.
The terminal job exited.
The terminal buffer was closed.
```

## Commands

Run these command steps:

```text
1. :verbose nmap <leader>ft<CR>
2. Stop here if the mapping is absent or does not identify the expected Snacks-backed terminal workflow.
3. <leader>ft
4. printf 'snacks-terminal-ready\n'<CR>
5. exit<CR>
6. <C-\><C-n>
7. :bd!<CR>
```
