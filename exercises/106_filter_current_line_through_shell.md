## Kata: `!!` — Filter the current line through a shell command

### 1) What `!!` does (short description)

- `!!{cmd}` — replace the current line with the output of `{cmd}`, feeding the current line as stdin
- `{count}!!{cmd}` — filter `count` lines through `{cmd}`

This is the normal-mode shorthand for `:.!{cmd}`. Katas 029 and 071 cover `:!` and visual-range filtering; this kata focuses on the `!!` shorthand and practical one-liners.

---

### 2) Practice text (paste into a buffer)

```txt
echo hello world

5 + 3 * 2

the quick brown fox jumps over the lazy dog

{"name":"Alice","age":30,"city":"Wonderland"}

banana,apple,cherry,date

2024-01-15T10:30:00Z
```

---

### 3) Step-by-step drills

#### Drill A — Execute a line as a shell command

Goal: replace a shell command with its output.

1. Place cursor on the `echo hello world` line
2. Type `!!sh<Enter>` — the line is executed by `sh` and replaced with its output

**Before:**
```
echo hello world
```

**After:**
```
hello world
```

#### Drill B — Use `bc` as a calculator

1. Place cursor on the `5 + 3 * 2` line
2. Type `!!bc<Enter>` — the math expression is evaluated

**Before:**
```
5 + 3 * 2
```

**After:**
```
11
```

#### Drill C — Pretty-print JSON with `jq`

(Requires `jq` installed: `brew install jq` or `apt install jq`)

1. Place cursor on the JSON line (`{"name":"Alice",...}`)
2. Type `!!jq .<Enter>` — the compact JSON is replaced with pretty-printed output

**Before:**
```
{"name":"Alice","age":30,"city":"Wonderland"}
```

**After:**
```json
{
  "name": "Alice",
  "age": 30,
  "city": "Wonderland"
}
```

#### Drill D — Transform text with `tr` and `sort`

1. Place cursor on the `banana,apple,cherry,date` line
2. Type `!!tr ',' '\n' | sort<Enter>` — splits by comma, sorts alphabetically

**Before:**
```
banana,apple,cherry,date
```

**After:**
```
apple
banana
cherry
date
```

#### Drill E — Use `date` to expand a timestamp

1. Place cursor on the `2024-01-15T10:30:00Z` line
2. Type `!!xargs -I{} date -d {} "+%A, %B %d, %Y"<Enter>` (Linux) or `!!xargs -I{} date -jf "%Y-%m-%dT%H:%M:%SZ" {} "+%A, %B %d, %Y"<Enter>` (macOS)
3. The ISO timestamp is replaced with a human-readable date

#### Drill F — Filter multiple lines with a count

1. Place cursor on `the quick brown fox` line
2. Type `2!!sort -t' ' -k3<Enter>` — sorts 2 lines by the 3rd word
3. Use `u` to undo

---

### Command reference

| Command | Effect |
|---|---|
| `!!{cmd}` | Filter current line through `{cmd}` |
| `3!!{cmd}` | Filter 3 lines through `{cmd}` |
| `:.!{cmd}` | Same as `!!` (Ex command form) |
| `!!sh` | Execute current line as shell command |
| `!!bc` | Evaluate current line as math |
| `!!jq .` | Pretty-print JSON |
| `!!sort` | Sort current line (useful with multi-line count) |
| `!!tr 'a-z' 'A-Z'` | Uppercase current line |
