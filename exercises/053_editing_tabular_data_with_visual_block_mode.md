# Kata: Align a Table with Visual Block Mode

> **Environment:** Vim or Neovim; built-in Visual block mode

## Objective
Use exact rectangular selections to remove padding and insert text across rows. Success means producing the target table without changing cell values.

## Initial Fixture
```text
Chapter        |Page
Normal Mode    |15
Insert Mode    |31
Visual Mode    |44
```
Start line 1, column 1 in Normal mode. Save `virtualedit` with `:let g:kata_virtualedit=&virtualedit`, then run `:set virtualedit=`.

## Tasks
### Drill A - Remove two padding columns
Delete columns 14-15 from all four lines as one block. **Verify:** each `|` is at column 14.

### Drill B - Insert one space after separators
Select the four pipe characters and append one space to every selected row. **Verify:** data begins at column 16.

### Drill C - Add a separator row
Duplicate the header, then replace every character of the duplicate with `-`. **Verify:** a 19-character separator appears on line 2.

### Challenge
Reset and produce:
```text
Chapter      | Page
-------------------
Normal Mode  | 15
Insert Mode  | 31
Visual Mode  | 44
```

## Hints
<details><summary>Hints</summary>
Use `13l` to reach column 14 and `<C-v>3jl` to select two columns. Visual-block `A` applies appended text to every selected line after `<Esc>`.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `gg013l<C-v>3jld`
- B: `gg013l<C-v>3jA<Space><Esc>`
- C: `ggYpVr-`
- Challenge: perform A, then B, then C
</details>

## Reset and Cleanup
Restore fixture between drills; restore `:let &virtualedit=g:kata_virtualedit | unlet g:kata_virtualedit`; close scratch buffer.

## References
- [`:help visual-block`](https://vimhelp.org/visual.txt.html#visual-block)
- [`:help v_b_A`](https://vimhelp.org/visual.txt.html#v_b_A)
