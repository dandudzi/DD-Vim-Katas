# Kata: Use Flash Treesitter as an Operator Target

## Task

Use a checked Flash Treesitter `S` mapping as the motion for comment, yank, and indent operators.

## Start

Open a scratch buffer and insert:

```text
function total(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0);
}

function formatTotal(items: number[]): string {
    const value = total(items);
    return `Total: ${value}`;
}

const sample = [2, 4, 8];
console.log(formatTotal(sample));
```

Start in Normal mode on the `f` in the first `function`. This kata assumes `S` is mapped to Flash Treesitter in operator-pending mode and a TypeScript Treesitter parser is installed.

## End

The buffer should become:

```text
// function total(items: number[]): number {
//   return items.reduce((sum, item) => sum + item, 0);
// }

function formatTotal(items: number[]): string {
  const value = total(items);
  return `Total: ${value}`;
}

const sample = [2, 4, 8];
console.log(formatTotal(sample));

function formatTotal(items: number[]): string {
  const value = total(items);
  return `Total: ${value}`;
}
```

## Commands

Run these command steps:

```text
1. :set filetype=typescript<CR>
2. gcS{label for the complete total function}
3. yS{label for the complete formatTotal function}
4. Gp
5. =S{label for the original complete formatTotal function}
6. =S{label for the pasted complete formatTotal function}
```
