# Kata: Organize Windows with Tab Pages

## Task

Practice creating tab pages, navigating them, moving a window into a new tab, and closing a tab page.

## Start

Open a scratch buffer and insert:

```text
one
```

Start in Normal mode on the `o` in `one` in the only window and tab.

## End

There should be exactly two tab pages. The active tab should show:

```text
one
```

## Commands

Run these command steps:

```text
1. :file layout-one<CR>
2. :tabnew<CR>
3. :file layout-two<CR>
4. itwo<Esc>
5. gT
6. gt
7. <C-w>s
8. :enew<CR>
9. :file layout-three<CR>
10. ithree<Esc>
11. <C-w>T
12. :tabclose!<CR>
13. 1gt
```
