# Kata: Operate on Complete Search Matches

## Task

Use `gn` as an operator target so one uppercase change can be repeated across each complete search match.

## Start

Open a scratch buffer and insert:

```text
class XhtmlDocument < XmlDocument; end
class XhtmlTag < XmlTag; end
```

Start in Normal mode on the `c` in `class` on line 1.

## End

The buffer should become:

```text
class XHTMLDocument < XMLDocument; end
class XHTMLTag < XMLTag; end
```

## Commands

Run these command steps:

```text
1. /\vX(ht)?ml\C<CR>
2. gUgn
3. .
4. .
5. .
```
