# Kata: Diagnostic Float and Next Diagnostic

## Task

Practice opening a diagnostic float and jumping to the next diagnostic in a
prepared TypeScript file.

## Start

Use the prepared file `practice_093_diagnostics.ts`. Open a scratch buffer and
insert:

```text
practice_093_diagnostics.ts
```

Start in Normal mode on the `p` in line 1.

## End

The diagnostic float should have opened for both type errors. Before the
practice split closes, the cursor should reach the `l` in `label` at line 2,
column 7. After the practice split closes, the surviving scratch window should
show `practice_093_diagnostics.ts`, with the cursor on the `p` at line 1,
column 1. The practice file should remain unchanged.

## Commands

Run these command steps:

```text
1. <leader>| (LazyVim: Split Window Right)
2. gf
3. Wait for the TypeScript language server to report diagnostics.
4. 6l
5. <leader>cd (LazyVim: Line Diagnostics)
6. ]d (LazyVim: Next Diagnostic)
7. <leader>cd (LazyVim: Line Diagnostics)
8. <leader>wd (LazyVim: Delete Window)
```
