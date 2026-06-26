# Kata: Generate Lines with Expression Put

> **Environment:** Vim or Neovim; built-in Ex commands only.
> **Dependencies:** None.
> **Portability:** Uses built-in `:put =...` with the built-in `range()` function. The expression language here is Vimscript, not Lua.

## Objective

By the end of this kata, you will be able to generate multiple buffer lines from an expression with `:put =...`.

Success means: you can insert a numeric sequence exactly where you want it without entering Insert mode or typing the lines manually.

## Prerequisites

- Know: basic Ex commands and line addresses.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo exists('*range')` and confirm it prints `1`.

## Setup

1. Run `:enew`.
2. Insert the fixture exactly as shown below.
3. Put the cursor on the `H` in `HEADER` at line 1, column 1.
4. Confirm `:echo line('.') . ',' . col('.')` prints `1,1`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
HEADER
ANCHOR
FOOTER
```

Start in Normal mode on `HEADER`. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `:put =...` for every generated insertion.
- Do not use Insert mode, macros, `o`/`O`, or manual typing of the generated lines.
- Reset to the initial fixture before each drill unless the drill explicitly builds on the current buffer.

## Tasks

### Drill A - Isolate the skill

**Goal:** generate a short consecutive sequence below the current line.

1. From `HEADER`, insert the numbers `1` through `3` as separate lines below the cursor line with one expression put.

**Verify:** the buffer becomes exactly:

```text
HEADER
1
2
3
ANCHOR
FOOTER
```

### Drill B - Add precision or repetition

**Goal:** generate a stepped numeric sequence.

1. Reset to the initial fixture.
2. From `HEADER`, insert the even numbers from `2` through `8` below the current line with one expression put.

**Verify:** the buffer becomes exactly:

```text
HEADER
2
4
6
8
ANCHOR
FOOTER
```

### Drill C - Apply the workflow

**Goal:** place generated lines below a different line without moving the cursor there first.

1. Reset to the initial fixture.
2. Keep the cursor on `HEADER`.
3. Insert the numbers `10` through `12` below `ANCHOR` by using an explicit line address with the put command.

**Verify:** the buffer becomes exactly:

```text
HEADER
ANCHOR
10
11
12
FOOTER
```

### Challenge - Recall without prompts

Reset the fixture. Without moving off `HEADER`, generate the lines `100`, `110`, `120`, `130`, and `140` directly below `ANCHOR`.

**Verify:** the final buffer is exactly:

```text
HEADER
ANCHOR
100
110
120
130
140
FOOTER
```

## Expected Final State

After the challenge, the buffer content must be:

```text
HEADER
ANCHOR
100
110
120
130
140
FOOTER
```

Verify all of the following:

- There are exactly eight lines in the buffer.
- Line 2 is still `ANCHOR`.
- The generated lines appear below `ANCHOR` and above `FOOTER`.

## Hints

<details>
<summary>Hint 1</summary>

`range(start, end)` returns a list of numbers, and `:put =...` inserts each list item on its own line.

</details>

<details>
<summary>Hint 2</summary>

Use `range(start, end, step)` when you want spaced-out values, and prefix the command with a line address when you want to insert below another line.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:put =range(1, 3)<CR>` - insert `1`, `2`, and `3` below the current line.

### Drill B

1. `:put =range(2, 8, 2)<CR>` - insert `2`, `4`, `6`, and `8`.

### Drill C

1. `:2put =range(10, 12)<CR>` - insert `10`, `11`, and `12` below line 2 while the cursor stays on line 1 before the command runs.

### Challenge

`:2put =range(100, 140, 10)<CR>`

</details>

## Reset and Cleanup

- Between drills: run `:enew`, reinsert the fixture, and return to line 1, column 1.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: `:put =...` works in both Vim and Neovim.
- Expression detail: this uses Vimscript expression evaluation, not Lua.
- Edge case: a scalar expression inserts one line, while a List inserts one line per list item.
- LazyVim note: snippet or AI helpers may generate text, but this kata focuses on deterministic built-in expression output. Verify any generator mapping with `:verbose imap {keys}` or `:verbose nmap {keys}` before comparing workflows.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:put =range(1, 3)` | Command-line | Insert the values `1` through `3` below the current line. |
| `:put =range(2, 8, 2)` | Command-line | Insert a stepped numeric sequence below the current line. |
| `:2put =range(10, 12)` | Command-line | Insert generated lines below line 2 without moving there first. |
| `range({start}, {end}, {step})` | Vimscript | Build a numeric list for expression put. |

## References

- [`:help :put`](https://vimhelp.org/change.txt.html#%3Aput) - inserting text with the put command.
- [`:help expr-register`](https://vimhelp.org/change.txt.html#expr-register) - expression evaluation for put and insert workflows.
- [`:help range()`](https://vimhelp.org/builtin.txt.html#range()) - the built-in function used to generate sequences.
- [Neovim help: `:put`](https://neovim.io/doc/user/change.html#:put) - the same built-in command in Neovim.
