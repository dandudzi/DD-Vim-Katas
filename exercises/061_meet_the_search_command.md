# Kata: Search, Repeat, and Select Matches

## Task

Practice navigating search results with `/`, `?`, `n`, and `N`, then changing matches with `gn`.

## Start

Open a scratch buffer and insert:

```text
Going to Union Station takes time,
but this time can be an advantage.
Use it right, and travelling time
will pay off in time.
```

Start in Normal mode on the `G` in line 1, column 1.

## End

The buffer should become:

```text
Going to Union Station takes TIME,
but this TIME can be an advantage.
Use it right, and travelling time
will pay off in time.
```

## Commands

Run these command steps:

```text
1. /time<CR>nn
2. G$?time<CR>nN
3. gg/time<CR>gUgn.
```
