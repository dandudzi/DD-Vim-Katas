# Consolidated LazyVim Kata Recommendations

Date: 2026-06-26

This file consolidates the LazyVim workflow digest and the three read-only batch audits. It is a planning artifact only; no kata files were modified during this exploration.

## Overall Direction

- Preserve stock Vim grammar as the main teaching path for operators, motions, text objects, counts, registers, macros, search, substitution, quickfix/location lists, folds, diff, terminal mode, and shell filters.
- Add LazyVim material as optional variants, readiness-checked notes, or separate plugin-specific katas.
- Prefer `:verbose nmap/xmap/imap {keys}`, `:LspInfo`, parser/tool checks, and disposable temp state before any plugin-dependent drill.
- Avoid hard-coding provider internals for pickers, completion, snippets, or Flash labels. Teach the workflow and verify local mappings.

## Existing Katas: Best Candidates for LazyVim-Compatible Notes

### Flash and Search-to-Edit

- `005_find_and_replace_by_hand.md`: Add optional Flash `s` note after the stock `/`, `n`, `.` workflow.
- `034_find_by_character.md`: Contrast same-line `f/t/F/T` with LazyVim Flash `s` for visible-target jumps.
- `035_operate_with_a_search_motion.md`: Add optional operator-pending Flash `r` variant where available.
- `058_stake_the_boundaries_of_a_word.md`: Compare exact Vim word-boundary search with Flash or picker word search, gated by readiness.
- `061_meet_the_search_command.md`: Add optional Flash `s` drill after `/`, `?`, `n`, `N`.
- `064_operate_on_complete_search_match.md`: Add optional Flash-assisted landing while keeping `gUgn` and dot repeat as the core skill.
- `070_flash_treesitter_motion_S.md`: Strengthen readiness checks for `S`, Treesitter parser availability, and dynamic labels.
- `126_section_start_motions.md`, `127_section_end_motions.md`, `128_method_boundaries.md`: Add optional Treesitter/Flash discovery notes while keeping stock structural motions.
- `130_previous_jump_origin.md`: Add optional jump-producer variant using Flash `s` or LSP `gd`, then return with built-in jump-origin commands.

### Text Objects and Editing Helpers

- `007_change_inside.md`: Add optional `mini.ai` note for function/call/code objects after built-in text objects.
- `020_prefer_operators_to_visual_commands.md`: Add optional `mini.ai` code-object variant while keeping built-in tag-object grammar.
- `036_trace_your_selection_with_precision_text_objects.md`: Add optional `mini.ai` function/class/block/call/buffer-object extension.
- `037_jump_between_matching_parentheses.md`: Add only a small `mini.ai` block-object comparison; keep `%` primary.
- `066_surrounding.md`: Clarify surrounding is plugin-provided and should be readiness-checked.
- `105_operators_with_percent_match.md`: Clearly separate built-in `%` motion from plugin-provided `i%`/`a%` text objects.
- `137_sentence_text_objects.md`: Keep vanilla; put `mini.ai` code text objects in a separate new kata.

### Comments

- `069_toggle_comments_with_gc_ranges.md`: Add optional LazyVim checks for `gcc`, `gco`, and `gcO`; keep `gc{motion}` central.

### Pickers, Buffers, Files, Windows, Tabs

- `030_buffer_operations.md`: Add optional `<leader>,`, `<S-h>/<S-l>` or `[b`/`]b`, and `<leader>bd` notes.
- `031_split_windows.md`: Add optional `<leader>-`, `<leader>|`, `<C-h/j/k/l>`, and `<leader>wd` notes.
- `032_organize_window_layout_with_tab_pages.md`: Add optional LazyVim tab keys.
- `050_act_upon_a_collection_of_files.md`: Note that pickers help select files, while `:args` and `:argdo` remain the batch-edit mechanism.
- `080_toggle_alternate_file.md`: Contrast `<C-^>` with LazyVim buffer picker/cycling.
- `102_picker_fuzzy_finding.md`: renamed from the earlier Telescope-specific filename; title now avoids naming one picker provider because LazyVim may use Snacks, Telescope, or fzf-lua.
- `107_close_and_manage_buffers.md`: Add optional `<leader>bd`, `<leader>,`, `[b`/`]b`.
- `134_tag_in_a_split.md`, `136_file_under_cursor_in_split.md`, `146_configure_every_window.md`, `147_select_buffers_by_partial_name.md`, `148_open_existing_buffer_in_split.md`: Add optional LazyVim split/window/buffer navigation notes without replacing the stock commands.

### Terminal, Shell, Scratch, Sessions

- `029_running_commands_in_shell.md`: Distinguish Vim shell commands and filters from LazyVim terminal mappings like `<C-/>` or `<leader>ft`.
- `103_terminal_and_git_workflow.md`: Add optional LazyVim terminal mappings; keep any git hunk exercise disposable and explicitly scoped.
- `104_lazyvim_bracket_nav_yanky_sessions.md`: Keep readiness model; ensure session keys align with `<leader>qs` and `<leader>ql`, and avoid restoring/deleting real sessions.
- `140_generate_lines_with_expression_put.md`: Note this is a no-plugin fallback for generated scratch content.
- `164_execute_one_normal_command_from_terminal_mode.md`: Add LazyVim terminal-entry variant while keeping `<C-\><C-o>` as the skill.
- `165_read_shell_output_into_buffer.md`: Keep vanilla; LazyVim terminal features are adjacent.

### Search, Substitute, Project-Wide Replace

- `055_tune_the_case_sensitivity_of_search_patterns.md`, `056_use_the_v_pattern_switch_for_regex_search.md`, `057_use_the_backslash_v_literal_switch_for_verbatim_search.md`: Add caution that picker/project grep regex semantics may differ from Vim regex switches.
- `090_cgn_search_match_replace.md`: Contrast textual `cgn` with LSP rename `<leader>cr`.
- `091_substitute_with_confirmation.md`: Point to `109_grugfar_and_picker_exports.md` for project-wide LazyVim replacement.
- `100_cfdo_project_wide_refactor.md`: Add picker/Trouble quickfix export comparison; keep `:cfdo` core.
- `109_grugfar_and_picker_exports.md`: Already strong; only standardize references if desired.
- `141_repeat_substitutions_at_new_scopes.md`, `142_reuse_full_match_in_replacement.md`, `143_reorder_captured_groups.md`, `144_change_replacement_case.md`, `145_compute_replacement_text.md`: Add optional notes that project-wide replace tools exist after `:substitute` grammar is learned.

### LSP and Code Navigation

- `039_traverse_the_jump_list.md`: Note LSP jumps like `gd`/`gr` also affect navigation history in real code.
- `073_gd_go_to_definition_and_back.md`: Keep built-in `gd`; cover LSP definition separately or as a clearly marked note.
- `099_hover_lookup_and_go_to_references.md`: Add readiness checks for `K`, `gr`, `gd`, `gI`, `gy`, `gD`, `gK`, and `:LspInfo`; keep man-page fallback separate.
- `131_tag_definition_jump.md`: Compare ctags `<C-]>` with LazyVim `gd` only when an LSP server is attached.
- `132_tag_stack_return.md`: Contrast tag stack `<C-t>` with jumplist behavior after LSP/Flash jumps.
- `133_choose_among_matching_tags.md`: Note that `gr` references and picker-backed symbols solve related, but different, ambiguity.
- `135_open_file_at_line_number.md`: Note picker navigation is useful, but `gF` remains direct file-and-line jump.

### Quickfix, Location Lists, Diagnostics, Trouble

- `084_quickfix_list.md`: Add optional Trouble quickfix view with `<leader>xQ`, readiness-checked.
- `101_location_list.md`: Add optional Trouble location-list view `<leader>xl`.
- `110_lazyvim_ui_trouble_noice_mason.md`: Already strong; use as a model for safe plugin katas.
- `151_traverse_quickfix_history.md`, `152_jump_spatially_through_quickfix.md`, `153_jump_to_another_quickfix_file.md`, `154_filter_existing_quickfix_list.md`, `155_create_quickfix_from_shell_output.md`, `156_open_quickfix_only_when_useful.md`, `157_parse_current_buffer_as_errors.md`, `158_compile_and_navigate_errors.md`, `159_search_help_into_location_list.md`: Add optional Trouble/picker comparisons while keeping quickfix/location commands primary.
- `160_move_diagnostics_into_quickfix.md`: Add LazyVim diagnostic variants: `[d`/`]d`, `<leader>cd`, Trouble diagnostics, and Trouble quickfix after `setqflist()`.

### Formatting, Folds, Diff, Git

- `083_folding_basics.md`, `150_run_command_on_visible_fold_lines.md`, `166_navigate_between_folds.md`, `167_adjust_fold_depth_incrementally.md`: Keep deterministic manual/marker folds; mention Treesitter folds as real-project context.
- `089_diff_mode.md`: Keep built-in diff; put gitsigns in a separate hunk kata.
- `161_choose_source_in_three_way_diff.md`: Note gitsigns covers Git hunks, not three-way `diffget`.
- `162_refresh_diff_calculations.md`: Note plugin signs may lag differently; `:diffupdate` remains built-in.
- `163_compare_with_patch_result.md`: Add optional Git/LazyGit note for repository patches.
- `168_reindent_with_equal_operator.md`: Compare `=` with LazyVim format `<leader>cf` when Conform is configured.
- `169_format_without_moving_cursor.md`: Distinguish prose reflow `gw` from Conform code formatting.

### Completion, Spell, Insert Mode

- `072_spellcheck_toggle_and_jump.md`: Add optional LazyVim `<leader>us` toggle only after readiness check.
- `079_clear_search_highlighting.md`: Gate LazyVim clear/redraw mappings before mentioning them.
- `087_insert_mode_completion.md`: Keep built-in completion; add provider-agnostic LazyVim completion/snippet note.
- `108_indentation_jumping_and_menu_cycling.md`: Add note that `<Tab>` behavior is engine-dependent under Blink/nvim-cmp.

## Existing Katas That Should Stay Mostly Vanilla

Keep these focused on stock Vim/Neovim with, at most, short optional notes: early movement/editing fundamentals (`001`-`004`, `006`, `008`-`019`, `021`-`028`, `033`, `038`, `040`-`049`, `051`-`054`), regex/search grammar (`058`-`065`, `078`, `090`, `091`, `097`), shell filters (`071`, `106`), quickfix/location fundamentals (`084`, `100`, `101`), diff basics (`089`), viewport and line motion (`111`-`124`), prose sentence objects (`125`, `137`), registers/deletion history (`138`, `139`), historical `U` behavior (`149`), fold mechanics (`166`, `167`), and visual incrementing (`170`).

## Prioritized New LazyVim Katas to Add

1. **LazyVim discovery/readiness:** which-key, leader groups, `:verbose nmap`, `:LspInfo`, provider checks.
2. **Flash search-to-edit:** `s`, `S`, operator-pending `r`, `R`, then operators and dot repeat; include `/` fallback.
3. **`mini.ai` code text objects:** function, class, call, block, buffer, and digit objects with stock fallbacks where possible.
4. **Comment workflow:** `gc`, `gcc`, `gco`, `gcO` on deterministic code fixtures.
5. **Picker project workflow:** find file, recent files, grep, buffers, search word/selection, quickfix export where provider supports it.
6. **LSP navigation/edit loop:** `gd`, `gr`, `gI`, `gy`, `gD`, `K`, `gK`, rename, code action, organize imports.
7. **Diagnostics and Trouble:** create deterministic diagnostics, jump severities, line diagnostic, Trouble diagnostics, quickfix fallback.
8. **Formatting/linting:** `<leader>cf`, `<leader>cF`, global/buffer autoformat toggles, Conform/nvim-lint readiness.
9. **Git hunk workflow:** disposable repo, `[h`/`]h`, preview, stage/reset, blame, and `ih` hunk text object.
10. **Completion/snippets:** engine-neutral trigger/select/accept/cancel/expand/jump flow, with Blink and nvim-cmp notes only after readiness.
11. **Testing:** Neotest nearest/file/last/output/summary with CLI fallback and explicit extra requirements.
12. **Debugging:** DAP breakpoint/continue/step/UI workflow, gated behind installed extras.
13. **Snacks workflows:** scratch, terminal, notifier/messages, explorer, words, when the local LazyVim setup provides them.

## Suggested Implementation Order

1. Make small optional-note updates to existing katas that already touch the right concept and need only readiness or portability wording.
2. Rename/provider-neutralize the earlier Telescope-specific picker kata to `102_picker_fuzzy_finding.md`.
3. Add standalone katas for the major missing LazyVim flows instead of overloading vanilla fundamentals.
4. Use `110_lazyvim_ui_trouble_noice_mason.md` and `109_grugfar_and_picker_exports.md` as safety/readiness models for new plugin katas.
