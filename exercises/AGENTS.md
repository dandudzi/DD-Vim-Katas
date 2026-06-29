# Vim Kata Authoring Rules

Use this file as the local standard for new or rewritten kata files in this
directory.

## Goal

Katas should be short practice prompts, not long reference documents. Each kata
should teach one Vim action or one small workflow through one focused command
progression.

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

Run these command steps:

```text
1. {keys or commands}
2. {keys or commands}
```
````

## Rules

- Keep the task description short and direct.
- Use one focused command progression per kata.
- A command progression may have several numbered steps when they use the same
  setup and practice the same concept.
- If an older kata has multiple drills, alternate workflows, or challenges,
  keep the related ones as next steps in the same `Commands` list.
- Move a removed task into a separate new kata only when it practices a
  different concept, needs a different setup, or would make the current kata
  hard to read.
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
- Put the complete command steps only in the `Commands` section.

## Defaults

- Default environment: Vim or Neovim with built-in behavior only.
- Default buffer: unnamed scratch buffer.
- Default mode: Normal mode.
- Default reset: restore the `Start` text.
- Default key notation: `<Esc>`, `<CR>`, `<C-r>`, `<Space>`, and similar Vim
  notation.
