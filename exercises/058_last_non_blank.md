# Kata: Last Non-Blank Character

## Task

Practice using `g_` to land on the last non-blank character of a line, even when trailing spaces follow it.

## Start

Open a scratch buffer and insert:

```text
alpha  
  beta!    
gamma?
```

Start in Normal mode on the `b` in `beta!` on line 2.

## End

The buffer should remain:

```text
alpha  
  beta!    
gamma?
```

The final cursor position should be on the `?` in `gamma?` on line 3.

## Commands

Run these command steps:

```text
1. g_
2. kg_
3. j$g_
4. kg_jjg_
```
