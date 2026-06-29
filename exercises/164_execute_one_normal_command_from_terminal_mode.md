# Kata: Execute One Normal Command from Terminal Mode

## Task

Practice using `<C-\><C-o>` to run one Normal-mode command from a Neovim terminal and return immediately to Terminal mode.

## Start

Open a Neovim terminal buffer running `cat` with seeded output:

```text
alpha
beta
gamma
```

Start in Terminal mode at the live input line after `gamma`.

## End

The terminal output should include the new lines typed after one-shot Normal commands:

```text
delta
epsilon
zeta
```

## Commands

Run these command steps:

```text
1. :terminal sh -c "printf 'alpha\nbeta\ngamma\n'; exec cat"<CR>
2. <C-\><C-o>k
3. delta<CR>
4. <C-\><C-o>gg
5. epsilon<CR>
6. <C-\><C-n>
7. G
8. i
9. zeta<CR>
```
