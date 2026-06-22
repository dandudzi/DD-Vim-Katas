# Kata: Apply an Operator to Search Matches

> **Environment:** Vim or Neovim. **Dependencies:** None.

## Objective
Use `gn` as an operator target and `.` to transform every complete search match without skipping one.

## Fixture and Start
```ruby
class XhtmlDocument < XmlDocument; end
class XhtmlTag < XmlTag; end
```

Create a new buffer, run `gg0`, and start in Normal mode.

## Drills
1. Search case-sensitively for `Xml` and its optional `ht` segment. **Verify:** `gn` selects `Xhtml`, then `n` reaches `Xml` on line 1.
2. Reset and uppercase the first complete match with an operator plus `gn`. **Verify:** only `Xhtml` on line 1 becomes `XHTML`.
3. Repeat across the remaining three matches. **Verify:**

```ruby
class XHTMLDocument < XMLDocument; end
class XHTMLTag < XMLTag; end
```

## Hints
<details><summary>Hints</summary>

After establishing the pattern, `gUgn` is one repeatable change. Dot advances to and changes the next match; an extra `n` would skip it.
</details>

## Solution
<details><summary>Exact keys</summary>

1. `/\vX(ht)?ml\C<CR>gn<Esc>n`
2. `gg0/\vX(ht)?ml\C<CR>gUgn`
3. `...`
</details>

## Cleanup and Reference
Reset with `u` or restore the fixture; `:bwipe!` afterward. See `:help gn`, `:help gU`, `:help .`.

| Keys | Effect |
|---|---|
| `gUgn` | Uppercase the next search match |
| `.` | Repeat that change on the following match |
