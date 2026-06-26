# Vim Kata Roadmap

This file is the execution roadmap for completing the kata backlog and resolving the current content issues in this directory. Future sessions should use it as the single source of truth for what batch to pick up next.

The roadmap is designed for independent batch execution. One session should normally claim one batch, complete it, update the shared artifacts, and then leave the next batch ready for another session.

Current exception:
- On 2026-06-24, the user explicitly requested parallel multi-agent execution to cover the remaining plan. This session may claim multiple batches at once, provided each worker owns a disjoint file set and the parent session performs the shared-doc reconciliation.

## Current Baseline

- Current indexed katas: **170**
- Coverage status from [`existing-katas-vs-200-ideas.md`](existing-katas-vs-200-ideas.md):
  - Covered: **162**
  - Partially covered: **22**
  - Uncovered: **16**
- Redundancy cleanup status:
  - **021** and **053** are now differentiated rather than redundant.
- Former broad bundles now narrowed:
  - **008**, **012**, **043**, **083**, **084**, **087**, **089**

## Stable Artifacts

Every future session must treat these files as the stable working set:

- [`future-kata-template.md`](future-kata-template.md): authoring contract for all new or heavily rewritten katas.
- [`existing-katas-index.md`](existing-katas-index.md): current inventory and summaries.
- [`existing-katas-vs-200-ideas.md`](existing-katas-vs-200-ideas.md): coverage map between the current corpus and the 200-idea backlog.
- `kata-roadmap.md`: this roadmap and batch ownership/status tracker.

## Operating Rules

1. Claim exactly one batch at a time unless an explicit roadmap exception is recorded above for a parallel multi-batch session.
2. Do not renumber existing katas.
3. New katas append sequentially from the current maximum kata number.
4. Every new or substantially rewritten kata must follow `future-kata-template.md`.
5. Every implementation batch must update:
   - `kata-roadmap.md`
   - `existing-katas-index.md`
   - `existing-katas-vs-200-ideas.md`
6. If a session must change a batch's intended scope, it must update this roadmap first.
7. Do not delete existing katas unless a later roadmap revision explicitly authorizes deletion.
8. Prefer built-in, deterministic setups. If a planned topic depends on tooling, plugins, or LSP state that cannot be made reproducible, mark the batch item blocked and substitute the approved fallback noted below.

## Batch Status Convention

Use these exact status values in the batch table:

- `planned`
- `in_progress`
- `done`
- `blocked`

Each batch row should also carry:

- `claimed_by`
- `last_updated`
- `notes`

## Batch Index

| Batch | Theme | Type | Target ideas / katas | Dependencies | Output | Completion criteria | Status | claimed_by | last_updated | notes |
|---|---|---|---|---|---:|---|---|---|---|---|
| A | Foundational line and column motions | new | 002, 003, 005, 006, 020 | none | 5 katas | 5 new katas plus synced index/report | done | Codex | 2026-06-23 | Completed katas 111-115 and synced the index plus coverage report. |
| B | Counted vertical and file landing motions | new | 021, 022, 023, 024, 025 | none | 5 katas | 5 new katas plus synced index/report | done | Codex | 2026-06-23 | Completed katas 116-120 and synced the index plus coverage report. |
| C | Screen and prose navigation | new | 026, 028, 029, 030, 031 | none | 5 katas | 5 new katas plus synced index/report | done | Codex | 2026-06-23 | Completed katas 121-125 and synced the index plus coverage report. |
| D | Structural navigation I | new | 033, 034, 037, 039, 052 | standard runtime `matchit` for 129 only | 5 katas | 5 new katas plus synced index/report | done | Codex | 2026-06-24 | Completed katas 126-130 and synced the index plus coverage report. Kata 129 documents reproducible `:packadd matchit` setup. |
| E | Tags and file-jump workflows | new | 059, 060, 061, 062, 064 | deterministic local tag setup | 5 katas | Reproducible tag workflow coverage | done | Codex | 2026-06-24 | Completed katas 131-135 with deterministic local `ctags` setup and synced shared docs. |
| F | Advanced text objects and register recovery | new | 065, 068, 075, 076, 079 | none | 5 katas | Explicit register/file-state verification | done | Codex | 2026-06-24 | Completed katas 136-140 and synced shared docs. |
| G | Substitute depth I | new | 090, 093, 094, 095, 096 | none | 5 katas | Exact before/after substitution verification | done | Codex | 2026-06-24 | Completed katas 141-145 and synced shared docs. |
| H | Workspace utilities | new | 108, 112, 113, 117, 120 | none | 5 katas | Explicit setup and cleanup of editor state | done | Codex | 2026-06-24 | Completed katas 146-150 and synced shared docs. |
| I | Quickfix and location depth I | new | 157, 158, 159, 161, 162 | quickfix foundation already exists | 5 katas | Deterministic quickfix workflows | done | Codex | 2026-06-24 | Completed katas 151-155 and synced shared docs. |
| J | Quickfix and location depth II | new | 160, 163, 164, 165, 200 | quickfix/location foundations | 5 katas | Local verification of list and diagnostics behavior | done | Codex | 2026-06-24 | Completed katas 156-160 and synced shared docs. |
| K | Diff and terminal depth | new | 172, 173, 174, 176, 179 | throwaway files/buffers only | 5 katas | Safe temp-state diff/terminal workflows | done | Codex | 2026-06-24 | Completed katas 161-165 and synced shared docs. |
| L | Fold depth plus deterministic fallbacks | new | 194, 195, 128, 130, 145 | built-in only after fallback substitution for blocked 180/198/199 | 5 katas | Deterministic advanced workflow coverage or documented fallback coverage | done | Codex | 2026-06-24 | Completed katas 166-170; substituted blocked 180/198/199 with built-in ideas 128/130/145 and synced shared docs. |
| M | Redundancy cleanup | cleanup | 021, 053 | none | 2 revised katas | No longer redundant in objective/scope | done | Codex | 2026-06-24 | Differentiated 021 and 053 into blockwise insertion versus rectangular cleanup. |
| N | Broad bundle cleanup I | cleanup | 008, 012, 043 | after B, C, F, G preferred | 3 revised katas | Narrower objective and clearer verification | done | Codex | 2026-06-24 | Narrowed the three former bundles and updated shared docs accordingly. |
| O | Broad bundle cleanup II | cleanup | 083, 084, 087, 089 | after I, J, K, L preferred | 4 revised katas | Clear boundary between foundation and advanced follow-ups | done | Codex | 2026-06-24 | Rewrote the four foundation katas so later advanced follow-ups own the deeper workflows. |
| P | Final docs and consistency sweep | docs | index, comparison report, template if needed | after all earlier batches | 3 docs refreshed | Counts, mappings, and backlog totals reconcile | done | Codex | 2026-06-24 | Refreshed roadmap, index, and comparison report to the 170-kata baseline. |

## Detailed Batch Specs

### Batch A — Foundational Line and Column Motions

- Type: `new`
- New kata numbers: **111-115**
- Target ideas:
  - `002` Physical line start
  - `003` First non-blank
  - `005` Last non-blank
  - `006` Exact screen column
  - `020` Adjacent line first non-blank
- Required outputs:
  - 5 new markdown kata files
  - updated `existing-katas-index.md`
  - updated `existing-katas-vs-200-ideas.md`
- Acceptance:
  - index total becomes **115**
  - all five ideas move to `covered`
  - each kata isolates one built-in foundational motion

### Batch B — Counted Vertical and File-Landing Motions

- Type: `new`
- New kata numbers: **116-120**
- Target ideas:
  - `021` Count-relative first non-blank
  - `022` Start or numbered line
  - `023` End or numbered line
  - `024` Percentage jump
  - `025` Byte-offset jump
- Acceptance:
  - 5 new katas
  - comparison report updated for all 5 ideas
  - drills clearly differentiate file-position motions from screen-position motions

### Batch C — Screen and Prose Navigation

- Type: `new`
- New kata numbers: **121-125**
- Target ideas:
  - `026` Viewport-relative landing
  - `028` Fine viewport scroll
  - `029` Half-page scroll
  - `030` Full-page scroll
  - `031` Sentence motion
- Acceptance:
  - 5 new katas
  - fixtures make screen-relative movement obvious
  - similar scroll commands are contrasted explicitly

### Batch D — Structural Navigation I

- Type: `new`
- New kata numbers: **126-130**
- Target ideas:
  - `033` Section starts
  - `034` Section ends
  - `037` Method boundaries
  - `039` Reverse match cycle
  - `052` Previous jump origin
- Notes:
  - `129` depends on the standard runtime `matchit` plugin and documents exact activation with `:packadd matchit`.
- Acceptance:
  - 5 new katas
  - structure fixtures make boundaries deterministic
  - each kata has one primary navigation concept

### Batch E — Tags and File-Jump Workflows

- Type: `new`
- Target ideas:
  - `059` Tag definition jump
  - `060` Tag-stack return
  - `061` Choose among matching tags
  - `062` Tag in a split
  - `064` Open file at line number
- Dependencies:
  - must use deterministic local fixtures
  - must document exact tag-generation/setup commands
- Acceptance:
  - all setup steps work from scratch
  - no assumption of an external project or prebuilt tags file

### Batch F — Advanced Text Objects and Register Recovery

- Type: `new`
- Target ideas:
  - `065` File under cursor in a split
  - `068` Sentence text objects
  - `075` Recover a small deletion
  - `076` Walk deletion history
  - `079` Generate lines with expression put
- Acceptance:
  - register side effects are verified explicitly
  - file/split state is documented precisely where relevant

### Batch G — Substitute Depth I

- Type: `new`
- Target ideas:
  - `090` Repeat substitutions at new scopes
  - `093` Reuse the full match in replacement
  - `094` Reorder captured groups
  - `095` Change replacement case
  - `096` Compute replacement text
- Acceptance:
  - each kata isolates one substitution transform
  - each kata includes exact textual before/after verification

### Batch H — Workspace Utilities

- Type: `new`
- Target ideas:
  - `108` Configure every window
  - `112` Select buffers by partial name
  - `113` Open an existing buffer in a split
  - `117` Restore an entire changed line
  - `120` Run a command only on visible fold lines
- Acceptance:
  - window/buffer/fold state is explicitly set up and cleaned up
  - no hidden editor-session assumptions

### Batch I — Quickfix and Location Depth I

- Type: `new`
- Target ideas:
  - `157`
  - `158`
  - `159`
  - `161`
  - `162`
- Dependencies:
  - may rely on current quickfix foundations already present in the corpus
- Exclusions:
  - do not cover `163`, `164`, or `165` in this batch
- Acceptance:
  - fixtures avoid external repos and non-deterministic shell output
  - quickfix history/filter/import behavior is verifiable locally

### Batch J — Quickfix and Location Depth II

- Type: `new`
- Target ideas:
  - `160`
  - `163`
  - `164`
  - `165`
  - `200`
- Dependencies:
  - may assume existing quickfix/location foundations from 084, 100, and 101
- Acceptance:
  - diagnostics and list behavior are verifiable locally
  - no stale overlap notes remain in the comparison report for these ideas

### Batch K — Diff and Terminal Depth

- Type: `new`
- Target ideas:
  - `172`
  - `173`
  - `174`
  - `176`
  - `179`
- Dependencies:
  - use throwaway files/buffers only
- Acceptance:
  - cleanup restores windows, buffers, and temp artifacts safely
  - each kata isolates one advanced diff or terminal workflow

### Batch L — Fold Depth and Deterministic Fallbacks

- Type: `new`
- Target ideas:
  - `194`
  - `195`
  - `128`
  - `130`
  - `145`
- Dependencies:
  - built-in only
- Scope revision for 2026-06-24:
  - `180`, `198`, and `199` were blocked for this session because reproducible termdebug and LSP rename/code-action setup could not be documented cleanly from scratch in the current environment.
  - Per the roadmap fallback rule, the batch substitutes built-in uncovered ideas `128`, `130`, and `145`.
- Acceptance:
  - configuration-sensitive behavior is explicitly verified
  - portability notes explain the exact environment assumptions

### Batch M — Redundancy Cleanup

- Type: `cleanup`
- Existing katas:
  - `021`
  - `053`
- Goal:
  - differentiate them so they no longer teach the same topic at the same abstraction level
- Acceptance:
  - comparison report no longer flags them as clear redundancy
  - summaries in the index clearly distinguish the two katas

### Batch N — Broad Bundle Cleanup I

- Type: `cleanup`
- Existing katas:
  - `008`
  - `012`
  - `043`
- Preferred dependency timing:
  - after B, C, F, and G reduce overlap pressure
- Goal:
  - narrow objectives
  - improve setup and verification
  - reduce reference-sheet behavior
- Acceptance:
  - each kata has one coherent primary skill
  - broad adjacent ideas are deferred to dedicated katas rather than bundled implicitly

### Batch O — Broad Bundle Cleanup II

- Type: `cleanup`
- Existing katas:
  - `083`
  - `084`
  - `087`
  - `089`
- Preferred dependency timing:
  - after I, J, K, and L establish advanced follow-up katas
- Goal:
  - keep them as foundation katas
  - remove ambiguity
  - clearly separate foundation from advanced follow-up coverage
- Acceptance:
  - each foundation kata states what it covers and what later katas cover instead

### Batch P — Final Docs and Consistency Sweep

- Type: `docs`
- Scope:
  - full refresh of `existing-katas-index.md`
  - full refresh of `existing-katas-vs-200-ideas.md`
  - optional `future-kata-template.md` adjustment only if repeated authoring problems were discovered
- Dependencies:
  - after all earlier batches
- Acceptance:
  - counts, mappings, and backlog totals reconcile
  - no stale redundancy notes remain
  - no already covered ideas remain marked `uncovered`

## Cross-Batch Rules

### Naming and Numbering

- Use three-digit numeric prefixes for all kata files.
- New katas are append-only.
- Do not reuse or renumber existing prefixes.

### Kata Authoring Rules

- Use `future-kata-template.md` for every new kata.
- Each kata must teach one coherent skill or workflow.
- Each kata must include exact setup, starting state, verification, solution, cleanup, and references.
- Prefer built-in behavior unless the batch explicitly permits configuration-sensitive work.

### Doc Update Rules

After each completed batch:

1. Update `kata-roadmap.md` batch row and notes.
2. Update `existing-katas-index.md` with new or revised summaries.
3. Update `existing-katas-vs-200-ideas.md`:
   - coverage totals
   - affected idea rows
   - affected reverse mappings
   - affected redundancy/gap notes

### Review Checklist

Each implementation batch must verify:

- sequential numbering with no collisions
- template compliance for every new or heavily rewritten kata
- deterministic fixtures and exact verification text/state
- safe cleanup instructions for files, windows, buffers, options, jobs, lists, and sessions
- synchronized updates to index and coverage report
- no duplicated primary objective within the same batch

### Handoff Protocol

At the end of a batch:

1. mark the batch `done` or `blocked`
2. record `claimed_by`, `last_updated`, and concise notes
3. note any substitutions or blocked items explicitly
4. leave the next planned batch unchanged unless the roadmap itself required a deliberate revision

## Completion Definition

The roadmap is complete only when all of the following are true:

- every planned new or cleanup batch from A through O is either `done` or explicitly replaced by a documented roadmap revision
- the final docs sweep in P is `done`
- the index and comparison report agree on counts and coverage state
- no clear redundancy note remains unresolved
- no idea already implemented by the corpus remains marked `uncovered`
