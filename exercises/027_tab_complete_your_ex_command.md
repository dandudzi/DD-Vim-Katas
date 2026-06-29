# Kata: Complete Ex Commands

## Task

Practice listing and completing Ex command names with `<C-d>` and `<Tab>`.

## Start

Open a scratch buffer and insert:

```text
completion practice
```

Start in Normal mode on the `c` of line 1.

## End

The buffer should still contain:

```text
completion practice
```

Line numbers should be enabled in the window.

## Commands

Run these command steps:

```text
1. :set wildmode=full<CR>
2. :col<C-d><C-c>
3. :colo<Tab><CR>
4. :setl<Tab> number<CR>
```
