# Kata: Match Complete Words

> **Environment:** Vim or Neovim; built-in regular expressions

## Objective
Use `\<` and `\>` word-boundary atoms to distinguish complete words from embedded text. Success means counting and changing only standalone `the`.

## Initial Fixture
```text
the problem with these recruits is that
they keep the theater clean; the boots shine.
```
Start in Normal mode on line 1.

## Tasks
### Drill A - Unbounded search
Count lowercase `the` anywhere. **Verify:** 6 matches: three standalone occurrences, plus `these`, `they`, and `theater`.

### Drill B - Complete-word search
Count only standalone `the` using default-magic boundary atoms. **Verify:** 3 matches on 2 lines.

### Drill C - Very-magic boundaries
Write the equivalent very-magic pattern. **Verify:** it finds the same 3 matches.

### Challenge
Uppercase only complete `the` occurrences. **Verify:** buffer becomes:
```text
THE problem with these recruits is that
they keep THE theater clean; THE boots shine.
```

## Hints
<details><summary>Hints</summary>
In default magic, `\<` and `\>` are zero-width word-boundary atoms; they do not match literal angle brackets. Under `\v`, use `<` and `>`.
</details>

## Solution
<details><summary>Show exact commands</summary>
- A: `:%s/the//gn<CR>`
- B: `:%s/\<the\>//gn<CR>`
- C: `:%s/\v<the>//gn<CR>`
- Challenge: `:%s/\<the\>/THE/g<CR>`
</details>

## Reset and Cleanup
Use `u` after the challenge or restore fixture; `:nohlsearch`; close with `:bwipeout!`.

## LazyVim Note
Flash can jump to visible word occurrences, but word-boundary correctness still belongs to the Vim pattern. Check Flash mappings with `:verbose nmap s` before optional practice, and keep `\<the\>` or `\v<the>` for exact complete-word matching.

## Command Reference
| Pattern | Meaning |
|---|---|
| `\<the\>` | Complete word in default magic |
| `\v<the>` | Complete word in very magic |

## References
- [`:help /\<`](https://vimhelp.org/pattern.txt.html#%2F%5C%3C)
- [`:help /\>`](https://vimhelp.org/pattern.txt.html#%2F%5C%3E)
