# Future Vim Kata Template

This document standardizes future kata files and defines the rubric used to audit existing ones. Replace every `{PLACEHOLDER}` before publishing a kata. Remove optional sections only when they genuinely do not apply.

## Observed Conventions

The existing 110 katas use two broad formats:

- Earlier katas are compact: a title, a short fixture or instruction, and inline command explanations. This keeps them approachable, but many do not define the cursor position, prerequisites, a measurable result, or a way to reset.
- Later katas commonly use `## Kata: ...`, a short command overview, a fenced practice fixture, drills labeled A-E, and a command-reference table. This is the strongest existing pattern and is the basis for the template below.
- Transformational exercises often show before/after text. Stateful workflows such as diff, quickfix, LSP, shell filters, or plugin features instead provide procedural setup.
- Plugin-oriented katas usually identify LazyVim or a plugin and warn that mappings may differ. Some still assume a particular plugin version, configuration, parser, language server, executable, or project without an exact readiness check.
- Later drills generally progress from an isolated command to a combined workflow. Earlier files often expose the complete keystroke sequence immediately, making them references rather than exercises.
- Command-reference tables are useful for review, but they should follow the drills and should not replace goals, fixtures, verification, or solutions.

Recurring weaknesses corrected by this template are ambiguous starting state, solutions mixed into tasks, non-reproducible external dependencies, missing expected outcomes, missing cleanup, overly broad multi-topic katas, and no authoritative references for configuration-dependent claims.

## Copy-Ready Template

````markdown
# Kata: {CONCISE SKILL OR WORKFLOW TITLE}

> **Environment:** {Vim/Neovim/both, minimum version if relevant}
> **Dependencies:** {None, or exact plugin/tool/parser/LSP and tested version/configuration}
> **Portability:** {State whether commands are built in. For mappings, name the distribution/plugin and show how to verify the active mapping.}

## Objective

By the end of this kata, you will be able to {ONE OBSERVABLE SKILL} using `{PRIMARY KEYS OR COMMAND}` without following a solution.

Success means: {SHORT, MEASURABLE COMPLETION CONDITION}.

## Prerequisites

- Know: {PRIOR SKILL, or "None"}.
- Required option/state: `{OPTION OR COMMAND}`, if any.
- Required external tool/plugin: `{DEPENDENCY}`, if any.
- Readiness check: run `{CHECK COMMAND}` and confirm `{EXPECTED OUTPUT/STATE}`.

<!-- Optional: include only when the kata changes files, opens several buffers/windows,
uses a plugin, depends on filetype detection, or needs external commands. -->
## Setup

1. {CREATE OR OPEN THE REQUIRED FILE/BUFFER/PROJECT.}
2. {SET FILETYPE/OPTIONS OR OPEN WINDOWS IN AN EXACT ORDER.}
3. Put the cursor on `{UNAMBIGUOUS TOKEN}`, at {LINE/COLUMN OR CHARACTER}.
4. Confirm {INITIAL MODE, ACTIVE WINDOW/BUFFER, SEARCH/REGISTER/LIST STATE}.

## Initial Fixture

Create a new buffer and insert exactly:

```{FILETYPE OR text}
{MINIMAL, DETERMINISTIC PRACTICE CONTENT}
```

Start with the cursor {EXACT POSITION AND MODE}. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `{TARGET COMMAND, MOTION, OPERATOR, OR WORKFLOW}`.
- Do not use {DISALLOWED SHORTCUT THAT BYPASSES THE LEARNING OBJECTIVE}.
- {COUNT/REGISTER/NUMBER-OF-CHANGES/TIME CONSTRAINT, if useful}.
- Reset to the initial fixture before each drill unless the drill explicitly builds on the previous one.

## Tasks

### Drill A - Isolate the skill

**Goal:** {ONE SMALL, DIRECT ACTION}.

1. {INSTRUCTION THAT DESCRIBES THE INTENT, NOT THE ANSWER KEYS.}
2. {SECOND ACTION, IF NEEDED.}

**Verify:** {EXACT TEXT, CURSOR LOCATION, MESSAGE, WINDOW/LIST CONTENT, OR OTHER OBSERVABLE RESULT}.

### Drill B - Add precision or repetition

**Goal:** {VARIATION USING A COUNT, REVERSE DIRECTION, TEXT OBJECT, REGISTER, RANGE, OR REPEAT}.

1. {TASK.}
2. {TASK.}

**Verify:** {EXACT OBSERVABLE RESULT}.

### Drill C - Apply the workflow

**Goal:** {REALISTIC COMBINATION WITH A PREVIOUSLY LEARNED SKILL}.

1. {TASK.}
2. {TASK.}

**Verify:** {EXACT OBSERVABLE RESULT}.

<!-- Optional: add Drill D/E only when each adds a distinct capability rather than volume. -->
### Challenge - Recall without prompts

Reset the fixture. Complete {END-TO-END OUTCOME} without consulting the hints, solution, or command reference.

**Verify:** {FINAL EXPECTED STATE OR REPEATABLE CHECK}.

## Expected Final State

After the challenge, the relevant content/state must be:

```{FILETYPE OR text}
{EXACT EXPECTED CONTENT, WHEN TEXTUAL}
```

For non-text workflows, verify all of the following:

- {CURSOR/BUFFER/WINDOW/LIST/REGISTER/PLUGIN STATE}.
- `{VERIFICATION COMMAND}` reports `{EXPECTED RESULT}`.
- {NO UNINTENDED FILES, LINES, MATCHES, WINDOWS, OR STATE CHANGED}.

## Hints

<details>
<summary>Hint 1</summary>

{CONCEPTUAL NUDGE; DO NOT REVEAL THE COMPLETE KEY SEQUENCE.}

</details>

<details>
<summary>Hint 2</summary>

{MORE DIRECT NUDGE, STILL SHORT OF THE FULL SOLUTION.}

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `{EXACT KEYS}` - {WHAT THIS STEP DOES}.
2. `{EXACT KEYS}` - {WHAT THIS STEP DOES}.

### Drill B

1. `{EXACT KEYS}` - {WHAT THIS STEP DOES}.

### Drill C

1. `{EXACT COMMAND}` - {WHAT THIS STEP DOES}.

### Challenge

`{COMPLETE MINIMAL KEY/COMMAND SEQUENCE}`

{EXPLAIN MODE TRANSITIONS, SPECIAL-KEY NOTATION, RANGE/REGISTER EFFECTS, OR WHY THE SEQUENCE WORKS.}

</details>

## Reset and Cleanup

- Between drills: `{UNDO/RELOAD/RESET COMMAND}`, or restore the Initial Fixture.
- After the kata: `{CLOSE TEMPORARY WINDOWS/BUFFERS, DELETE TEMP FILES, RESTORE OPTIONS, STOP JOBS, OR REMOVE CREATED STATE}`.
- Preserve user data: {STATE HOW DESTRUCTIVE OPERATIONS ARE CONFINED TO THROWAWAY FILES/BUFFERS}.

<!-- Optional for a single, stable built-in command; required for plugins, mappings,
version-sensitive behavior, surprising edge cases, or external tools. -->
## Notes and Portability

- Built-in behavior: `{VIM HELP TAG OR COMMAND}` works in {Vim/Neovim/version}.
- Configuration-dependent behavior: `{MAPPING}` comes from {PLUGIN/DISTRIBUTION AND VERSION}.
- Verify mappings with `:verbose {nmap/xmap/imap} {KEYS}`.
- Alternative: {VANILLA OR OTHER-CONFIG EQUIVALENT, when practical}.
- Edge case: {RELEVANT LIMITATION WITHOUT EXPANDING THE KATA'S SCOPE}.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `{KEYS}` | {Normal/Insert/Visual/Command-line/Terminal} | {PRECISE EFFECT} |

## References

- [`:{help {TAG}}`](https://vimhelp.org/{RELEVANT_PAGE}.html#{ANCHOR}) - {WHAT CLAIM IT SUPPORTS}.
- [Neovim help: `{TAG}`](https://neovim.io/doc/user/{PAGE}.html#{ANCHOR}) - {WHAT CLAIM IT SUPPORTS}.
- [{PLUGIN NAME} documentation]({CANONICAL REPOSITORY OR DOC URL}) - {MAPPING/BEHAVIOR AND VERSION TESTED}.
````

## Authoring Rules

1. Teach one coherent skill or workflow. Split a kata when its parts cannot share one fixture, objective, and final challenge.
2. Make the exercise reproducible from a clean Vim/Neovim session. Specify file contents, cursor position, mode, active window, options, and relevant mutable state.
3. Keep fixtures minimal but realistic. Every line should support a task or verification; avoid repository-specific filenames unless setup creates them.
4. State intent in tasks, not answer keys. Put exact keystrokes and commands only in the collapsed solution; hints should reveal concepts progressively.
5. Include at least three meaningful levels: isolated use, a precision/repetition variation, and a combined recall workflow. More drills are not automatically better.
6. Give every drill an observable verification. Prefer exact resulting text or a concrete Vim command that inspects state over phrases such as "it should work."
7. Protect user data. Use scratch buffers or named temporary files for destructive commands, and document reset/cleanup for options, files, jobs, registers, windows, lists, or sessions.
8. Use standard key notation consistently: `<C-r>`, `<Esc>`, `<CR>`, `<Space>`, `g<C-a>`. State the mode when the same keys behave differently.
9. Distinguish built-in commands from user mappings. For mappings, identify the plugin/distribution, give `:verbose {mode}map` verification, and note that versions/configurations can differ.
10. Test every solution from the documented initial state in the declared environment. Verify counts, ranges, cursor placement, register side effects, and special cases.
11. Link authoritative Vim/Neovim help for subtle built-in behavior and canonical plugin/tool documentation for external behavior. References support the kata; they do not substitute for instructions.
12. Keep the command reference after the challenge so learners attempt recall before reviewing the answer vocabulary.
13. For optional LazyVim extras or plugin-provider workflows, define an explicit skip path. A missing mapping, module, adapter, executable, or safe disposable project should be a documented readiness result, not an invitation to guess keys, install tools, or mutate the user's real project.

## Quality Rubric

Score only evidence present in the kata. Give partial credit within a line when some, but not all, requirements are met. The maximum is **100 points**.

### 1. Objective and Scope - 8 points

- 4: Names one observable skill and the primary command/motion/workflow.
- 2: Defines measurable success rather than only describing a feature.
- 2: Scope is coherent enough for one fixture and final challenge.

### 2. Prerequisites and Setup - 12 points

- 4: Declares editor/environment, prerequisite knowledge, options, and dependencies, or explicitly says none.
- 4: Provides reproducible setup and dependency/readiness checks where needed.
- 4: Defines exact starting cursor position, mode, active buffer/window, and relevant mutable state.

### 3. Initial Fixture - 10 points

- 5: Includes complete, copyable, deterministic practice content or an equally exact non-text state.
- 3: Fixture is minimal, realistic, and sufficient for every drill.
- 2: Uses an appropriate fenced language and unambiguous filenames/filetypes where relevant.

### 4. Progressive Tasks and Constraints - 20 points

- 6: Has at least three actionable drills or equivalent stages.
- 6: Progresses from isolated use through precision/repetition to a combined recall workflow.
- 4: Goals and constraints reinforce the target skill without leaking full answer sequences.
- 4: Steps are unambiguous and each drill starts from a defined state.

### 5. Expected Results and Verification - 12 points

- 6: Every drill has an observable, specific verification.
- 4: Provides exact final content/state or a deterministic verification command.
- 2: Checks that unrelated content/state remains unchanged where mistakes could have side effects.

### 6. Hints and Solutions - 15 points

- 4: Hints are separate from tasks and reveal progressively without immediately giving the answer.
- 7: A collapsed solution gives exact, executable keys/commands for all drills.
- 4: Solution explains mode transitions and non-obvious effects sufficiently to learn from errors.

### 7. Technical Accuracy and Portability - 12 points

- 6: Commands, mappings, claimed results, counts, and modes are technically accurate.
- 3: Clearly distinguishes built-ins from plugin/distribution/configuration-dependent mappings and gives verification or alternatives.
- 3: Cites relevant authoritative help or canonical external documentation for behavior that is subtle, version-sensitive, or external.

### 8. Reset, Cleanup, and Safety - 5 points

- 3: Gives a reliable reset between drills or makes independent starting states explicit.
- 2: Cleans temporary resources/restores state and avoids risking user data; full credit is allowed when cleanup is explicitly not applicable.

### 9. Clarity and Reference Value - 6 points

- 3: Uses consistent key notation, correct Markdown, concise prose, and a navigable heading hierarchy.
- 3: Ends with an accurate command-reference table or equally scannable recap.

### Rating Bands

- **90-100: Excellent.** Publishable and independently repeatable.
- **75-89: Good.** Useful kata with limited omissions.
- **60-74: Needs improvement.** Teachable, but missing important structure or verification.
- **0-59: Poor quality.** Not reliably usable as a self-contained kata; include it in the poor-quality audit list.

### Accuracy Safeguard

Regardless of the numeric score, flag a kata for manual correction when its primary solution is unsafe, cannot produce the stated result from the documented starting state, or attributes a configuration-specific mapping to built-in Vim/Neovim. Record both the score and this separate accuracy flag; do not silently alter the score.
