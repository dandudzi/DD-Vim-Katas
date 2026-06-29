# Kata: Swap Adjacent Characters with xp

## Task

Fix transposition typos with `xp`, using search to reach each bad word.

## Start

Open a scratch buffer and insert:

```text
teh adn form thier
clean text stays clean
teh form has adn
```

Start in Normal mode on the `t` in the first `teh`.

## End

The buffer should become:

```text
the and from their
clean text stays clean
the from has and
```

## Commands

Run these command steps:

```text
1. /teh<CR>lxp
2. /adn<CR>lxp
3. /form<CR>lxp
4. /thier<CR>2lxp
5. /teh<CR>lxp
6. /form<CR>lxp
7. /adn<CR>lxp
```
