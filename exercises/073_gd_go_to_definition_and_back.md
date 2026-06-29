# Kata: Jump to a Local Definition and Back

## Task

Practice built-in `gd` for same-file local declarations, then return and move forward again through the jump list.

## Start

Open a scratch buffer and insert:

```text
int normalize(int value) {
  return value < 0 ? -value : value;
}

int report(int raw) {
  int cleaned = normalize(raw);
  return cleaned;
}
```

Start in Normal mode on the `c` in `cleaned` on the line `return cleaned;`.

## End

The buffer should remain:

```text
int normalize(int value) {
  return value < 0 ? -value : value;
}

int report(int raw) {
  int cleaned = normalize(raw);
  return cleaned;
}
```

The cursor should finish on `normalize` in the first line.

## Commands

Run these command steps:

```text
1. gd
2. <C-o>
3. ?normalize(raw)<CR>
4. gd
5. <C-o>
6. <C-i>
```
