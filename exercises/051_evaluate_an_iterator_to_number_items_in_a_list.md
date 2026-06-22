# Kata: Number Lines with an Expression-Register Macro

> **Environment:** Vim or Neovim; built-in commands

## Objective
Evaluate a variable through the expression register and increment it inside a macro. Success means numbering five lines sequentially from 1 through 5.

## Initial Fixture
```text
partridge in a pear tree
turtle doves
French hens
calling birds
golden rings
```
Start line 1, column 1. Run `:let i=1 | let @a=''`.

## Tasks
### Drill A - Insert current value
Insert `i` followed by `) ` at line start through the expression register. **Verify:** line 1 begins `1) `.

### Drill B - Record valid increment
Reset. Record a macro that inserts the number, increments `i` with a valid Ex command, and moves down. **Verify:** after recording, line 1 is numbered, `i` is `2`, and `:reg a` contains a command-line colon before `let`.

### Drill C - Replay
Execute the macro four more times. **Verify:** prefixes are exactly `1) ` through `5) ` and `:echo i` prints `6`.

### Challenge
Reset both fixture and `i`; complete all five lines using the recording plus one counted replay.

## Hints
<details><summary>Hints</summary>
`<C-r>=i<CR>` evaluates `i` in Insert mode. An Ex command recorded in a macro must begin with `:` and end with `<CR>`.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `I<C-r>=i<CR>) <Esc>`
- B: `qaI<C-r>=i<CR>) <Esc>:let i += 1<CR>jq`
- C: `4@a`
- Challenge: same recording, then `4@a`
</details>

## Expected Final State
```text
1) partridge in a pear tree
2) turtle doves
3) French hens
4) calling birds
5) golden rings
```

## Reset and Cleanup
Restore fixture and run `:unlet! i | let @a=''`; close with `:bwipeout!`.

## References
- [`:help quote=`](https://vimhelp.org/change.txt.html#quote%3D)
- [`:help recording`](https://vimhelp.org/repeat.txt.html#recording)
