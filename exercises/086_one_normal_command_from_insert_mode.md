# Kata: Run One Normal Command from Insert Mode

## Task

Practice using Insert-mode `<C-o>` to run one Normal-mode command and return to Insert mode.

## Start

Open a scratch buffer and insert:

```text
let message = "draft trailing";
```

Start in Normal mode on the `l` in `let`.

## End

The buffer should become:

```text
// let message = "draft trailing";!
```

## Commands

Run these command steps:

```text
1. I// 
2. <C-o>$
3. !
4. <Esc>
```
