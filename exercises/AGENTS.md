# Vim Kata Authoring Rules

Use this file as the local standard for new or rewritten kata files in this
directory.

## Goal

Katas should be short practice prompts, not long reference documents. Each kata
should teach one Vim action or one small workflow through a single command
chain.

## Required Format

Use only these sections unless the kata truly cannot work without one extra
short note:

````markdown
# Kata: {Short title}

## Task

{One or two sentences describing what to practice.}

## Start

Open a scratch buffer and insert:

```text
{starting text}
```

Start in Normal mode on {exact cursor position}.

## End

The buffer should become:

```text
{expected final text}
```

## Commands

Run this command chain:

```text
{keys or commands}
```
````

## Rules

- Keep the task description short and direct.
- Use one command chain per kata.
- If an older kata has multiple drills, alternate workflows, or challenges,
  merge them into one focused task when rewriting it.
- Put all practice text in the kata itself.
- Prefer an unnamed scratch buffer for practice.
- Do not require creating files unless the skill is specifically about file,
  buffer, argument-list, quickfix, diff, or shell behavior.
- Avoid external project files, repositories, language servers, plugins, and
  shell tools unless the skill cannot be practiced otherwise.
- Do not use HTML tags, including collapsible sections such as details or
  summary blocks.
- Do not include long reference, portability, dependency, hint, or solution
  sections.
- State the exact cursor position and starting mode.
- Show the expected final text or final observable state.
- Put the complete command sequence only in the `Commands` section.

## Defaults

- Default environment: Vim or Neovim with built-in behavior only.
- Default buffer: unnamed scratch buffer.
- Default mode: Normal mode.
- Default reset: restore the `Start` text.
- Default key notation: `<Esc>`, `<CR>`, `<C-r>`, `<Space>`, and similar Vim
  notation.
