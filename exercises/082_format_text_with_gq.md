## Kata: `gq` — Format (wrap) text

### 1) What `gq` does (short description)

`gq` is an operator that reformats text to fit within the `textwidth` setting. It wraps long lines and joins short ones.

- `gqq` — format the current line
- `gqap` — format the current paragraph (around paragraph)
- `gqip` — format inside the current paragraph
- `gq}` — format from cursor to end of paragraph
- `{Visual}gq` — format the selected lines

Before using `gq`, set your desired line width:

```
:set textwidth=80
```

---

### 2) Practice text (paste into a buffer)

First, run `:set textwidth=40` (using 40 so the effect is easy to see in these exercises).

```txt
This is a very long line that should definitely be wrapped because it far exceeds any reasonable line width limit that we might set in our editor configuration.

This paragraph
has lines
that are
too short
and should be
joined together into
a proper flowing
paragraph of text.

# Section Header

Another paragraph that is way too long for our textwidth setting. It contains multiple sentences that should be reflowed. Each sentence adds more content that pushes past the limit.

A short paragraph that is fine.
```

---

### 3) Step-by-step drills

#### Drill A — Format a single long line with `gqq`

Goal: wrap the first long line to fit within textwidth.

1. Run `:set textwidth=40`
2. Put cursor on the first long line ("This is a very long line...")
3. Press `gqq`
4. The line is split into multiple lines, each no longer than 40 characters

**Before:**
```
This is a very long line that should definitely be wrapped because it far exceeds any reasonable line width limit that we might set in our editor configuration.
```

**After:**
```
This is a very long line that should
definitely be wrapped because it far
exceeds any reasonable line width
limit that we might set in our editor
configuration.
```

#### Drill B — Join short lines into a paragraph with `gqap`

Goal: reflow the paragraph of short lines into proper text.

1. Put cursor anywhere inside the short-line paragraph
2. Press `gqap` (format around paragraph)
3. The short lines are joined and re-wrapped to textwidth

**Before:**
```
This paragraph
has lines
that are
too short
and should be
joined together into
a proper flowing
paragraph of text.
```

**After:**
```
This paragraph has lines that are
too short and should be joined
together into a proper flowing
paragraph of text.
```

#### Drill C — Format a visual selection

1. Visually select the third paragraph with `V` and extend down
2. Press `gq`
3. Only the selected lines are reformatted

#### Drill D — Format a code comment

Paste this into a buffer:

```py
# This function takes a very long list of parameters and processes them according to the business rules that were defined in the requirements document from last quarter.
def process(data):
    pass
```

1. Put cursor on the comment line
2. Run `:set textwidth=60`
3. Press `gqq`
4. The comment wraps, preserving the `#` prefix on each line

---

### Constraints (optional)

- Always check `:set textwidth?` before formatting to avoid unexpected results.
- Use `gqap` as your go-to — it handles the paragraph boundaries for you.
