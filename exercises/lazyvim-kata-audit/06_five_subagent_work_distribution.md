# Five-Subagent LazyVim Kata Work Distribution

Date: 2026-06-26

Purpose: implementation plan only. This distributes the LazyVim kata update/addition work across about five subagents with mostly disjoint write ownership. Existing kata files should keep stock Vim/Neovim skills primary; LazyVim material should be optional, readiness-checked, or placed in standalone LazyVim katas.

## Shared Rules

- Do not replace vanilla Vim grammar with LazyVim/plugin behavior.
- Use `:verbose nmap/xmap/imap {keys}` before any mapping-dependent drill.
- Use `:LspInfo` and capability checks for LSP drills.
- Use disposable temp directories, scratch buffers, owned tabs, saved/restored quickfix/location state, and explicit cleanup for mutating workflows.
- Avoid hard-coded picker, completion, snippet, Flash-label, or provider-internal keys.
- Exact answers belong in collapsed solutions; tasks should describe intent.
- If a file is not listed under a subagent's owned files, treat it as read-only.

## Numbering for New Katas

- `171_lazyvim_discovery_readiness.md`
- `094_flash_search_to_edit.md`
- `173_mini_ai_code_text_objects.md`
- `174_lazyvim_comment_workflow.md`
- `095_lazyvim_picker_project_workflow.md`
- `096_lazyvim_lsp_navigation_edit_loop.md`
- `097_lazyvim_diagnostics_trouble_loop.md`
- `098_lazyvim_formatting_linting.md`
- `099_gitsigns_hunk_workflow.md`
- `100_lazyvim_completion_snippets.md`
- `181_neotest_workflow.md`
- `182_lazyvim_dap_debugging.md`
- `183_snacks_workspace_workflows.md`

## Subagent 1: Search, Flash, Text Objects, Comments

Owned existing files:

- `005_find_and_replace_by_hand.md`
- `007_change_inside.md`
- `018_prefer_operators_to_visual_commands.md`
- `024_find_by_character.md`
- `025_operate_with_a_search_motion.md`
- `026_trace_your_selection_with_precision_text_objects.md`
- `027_jump_between_matching_parentheses.md`
- `055_tune_the_case_sensitivity_of_search_patterns.md`
- `056_use_the_v_pattern_switch_for_regex_search.md`
- `057_use_the_backslash_v_literal_switch_for_verbatim_search.md`
- `058_stake_the_boundaries_of_a_word.md`
- `061_meet_the_search_command.md`
- `064_operate_on_complete_search_match.md`
- `040_toggle_comments_with_gc_ranges.md`
- `041_flash_treesitter_motion_S.md`
- `079_clear_search_highlighting.md`
- `105_operators_with_percent_match.md`
- `069_section_start_motions.md`
- `127_section_end_motions.md`
- `070_method_boundaries.md`
- `071_previous_jump_origin.md`
- `074_sentence_text_objects.md`

Owned new files:

- `094_flash_search_to_edit.md`
- `173_mini_ai_code_text_objects.md`
- `174_lazyvim_comment_workflow.md`

Work groups:

1. Add Flash/search optional notes to `005`, `034`, `035`, `058`, `061`, `064`, `070`, `079`, `130`.
2. Add regex portability notes to `055`, `056`, `057`; avoid changing core Vim regex drills.
3. Add `mini.ai` boundary notes to `007`, `020`, `036`, `037`, `105`, `128`, `137`.
4. Extend `069` with readiness-checked `gcc`, `gco`, `gcO` notes while keeping `gc{motion}` central.
5. Create the three standalone LazyVim editing katas: Flash, `mini.ai`, and comments.

Risks/checks:

- Check `s`, `S`, operator-pending `r`/`R`, `gc`, `gcc`, `gco`, `gcO`, and `mini.ai` text objects with `:verbose`.
- Do not use fixed Flash labels in required solutions; labels are dynamic.
- Keep `050_cgn_search_match_replace.md` read-only; Subagent 3 owns LSP rename contrast there.

## Subagent 2: Pickers, Buffers, Windows, Terminal, Sessions

Owned existing files:

- `029_running_commands_in_shell.md`
- `030_buffer_operations.md`
- `022_split_windows.md`
- `032_organize_window_layout_with_tab_pages.md`
- `050_act_upon_a_collection_of_files.md`
- `080_toggle_alternate_file.md`
- `102_picker_fuzzy_finding.md`
- `103_terminal_and_git_workflow.md`
- `104_lazyvim_bracket_nav_yanky_sessions.md`
- `107_close_and_manage_buffers.md`
- `134_tag_in_a_split.md`
- `072_open_file_at_line_number.md`
- `073_file_under_cursor_in_split.md`
- `140_generate_lines_with_expression_put.md`
- `146_configure_every_window.md`
- `147_select_buffers_by_partial_name.md`
- `148_open_existing_buffer_in_split.md`
- `164_execute_one_normal_command_from_terminal_mode.md`
- `165_read_shell_output_into_buffer.md`

Owned new files:

- `095_lazyvim_picker_project_workflow.md`
- `183_snacks_workspace_workflows.md`

Work groups:

1. Add short optional LazyVim notes to buffer/window/tab/file katas while preserving `:buffer`, `:bnext`, `<C-w>`, tabs, `gF`, and file-under-cursor commands.
2. Rename/provider-neutralize the earlier Telescope-specific picker kata to `102_picker_fuzzy_finding.md`; update audit references and any stale references.
3. Modernize `080` and `107` with deterministic setup, verification, cleanup, and safer buffer examples.
4. Add terminal/session safety notes to `103`, `104`, `164`, `165`.
5. Create picker workflow and Snacks workflow katas.

Risks/checks:

- Verify picker/buffer/window mappings with `:verbose`; use `<leader>` in prose.
- `<C-/>` can be terminal-dependent; mention `<C-_>` only as a portability note if needed.
- Do not add Git hunk staging/reset to `103`; Subagent 4 owns the standalone Gitsigns workflow.
- Session restore/delete must remain non-mutating except owned session files.

## Subagent 3: LSP, Diagnostics, Quickfix, Trouble, Refactor

Owned existing files:

- `043_gd_go_to_definition_and_back.md`
- `046_quickfix_list.md`
- `050_cgn_search_match_replace.md`
- `051_substitute_with_confirmation.md`
- `099_hover_lookup_and_go_to_references.md`
- `100_cfdo_project_wide_refactor.md`
- `101_location_list.md`
- `109_grugfar_and_picker_exports.md`
- `131_tag_definition_jump.md`
- `132_tag_stack_return.md`
- `133_choose_among_matching_tags.md`
- `077_repeat_substitutions_at_new_scopes.md`
- `078_reuse_full_match_in_replacement.md`
- `143_reorder_captured_groups.md`
- `079_change_replacement_case.md`
- `145_compute_replacement_text.md`
- `080_traverse_quickfix_history.md`
- `081_jump_spatially_through_quickfix.md`
- `082_jump_to_another_quickfix_file.md`
- `083_filter_existing_quickfix_list.md`
- `084_create_quickfix_from_shell_output.md`
- `085_open_quickfix_only_when_useful.md`
- `086_parse_current_buffer_as_errors.md`
- `087_compile_and_navigate_errors.md`
- `088_search_help_into_location_list.md`
- `089_move_diagnostics_into_quickfix.md`

Owned new files:

- `096_lazyvim_lsp_navigation_edit_loop.md`
- `097_lazyvim_diagnostics_trouble_loop.md`

Work groups:

1. Create the LSP navigation/edit kata covering `gd`, `gr`, `gI`, `gy`, `gD`, `K`, `gK`, rename, code action, organize imports.
2. Modernize `099` to separate man-page `K` from LSP hover and require `:LspInfo`.
3. Create diagnostics/Trouble kata using deterministic `vim.diagnostic.set()` where possible.
4. Update `160` and add optional Trouble notes to `084`, `101`, and `151`-`159`.
5. Add LSP/tag comparison notes to `073`, `131`, `132`, `133`; Subagent 2 owns `135`.
6. Add project replace/refactor bridge notes to `090`, `091`, `100`, `109`, `141`-`145`.

Risks/checks:

- Do not hard-code a specific LSP server.
- Verify Trouble mappings/views and use Trouble `g?` for local actions.
- Quickfix is session-global; location lists are window-local. Save/restore when drills mutate them.
- Picker export keys vary; never assume `<C-q>`.

## Subagent 4: Formatting, Folds, Diff, Git Hunks, Completion

Owned existing files:

- `042_spellcheck_toggle_and_jump.md`
- `045_folding_basics.md`
- `087_insert_mode_completion.md`
- `049_diff_mode.md`
- `108_indentation_jumping_and_menu_cycling.md`
- `150_run_command_on_visible_fold_lines.md`
- `161_choose_source_in_three_way_diff.md`
- `162_refresh_diff_calculations.md`
- `163_compare_with_patch_result.md`
- `090_navigate_between_folds.md`
- `091_adjust_fold_depth_incrementally.md`
- `092_reindent_with_equal_operator.md`
- `169_format_without_moving_cursor.md`

Owned new files:

- `098_lazyvim_formatting_linting.md`
- `099_gitsigns_hunk_workflow.md`
- `100_lazyvim_completion_snippets.md`

Work groups:

1. Add formatting notes to `168` and `169`; distinguish `=`, `gw`, `gq` from LazyVim/Conform formatting.
2. Add fold compatibility notes to `083`, `150`, `166`, `167`.
3. Add diff/Git-adjacent notes to `089`, `161`, `162`, `163`.
4. Add provider-agnostic completion/snippet notes to `087` and `108`.
5. Ensure `072` uses readiness-gated LazyVim spell toggle wording.
6. Create formatting/linting, Gitsigns hunk, and completion/snippet katas.

Risks/checks:

- Formatting depends on installed formatters; provide readiness gates or skip paths.
- Gitsigns must operate only in a generated temp repo.
- Completion/snippet behavior is engine-dependent; do not claim Blink or nvim-cmp defaults as universal.
- `079_clear_search_highlighting.md` is owned by Subagent 1, not Subagent 4.
- `103_terminal_and_git_workflow.md` is owned by Subagent 2; Subagent 4 should only create the standalone Gitsigns kata.

## Subagent 5: Discovery, Optional Extras, Cross-Agent Review

Owned existing files:

- `future-kata-template.md` only if implementation reveals a reusable LazyVim authoring rule worth adding.
- `lazyvim-kata-audit/06_five_subagent_work_distribution.md` for keeping this plan current during coordination.

Owned new files:

- `171_lazyvim_discovery_readiness.md`
- `181_neotest_workflow.md`
- `182_lazyvim_dap_debugging.md`

Review responsibility:

- Review all new katas `171`-`183` for template compliance, readiness checks, cleanup, references, and provider-neutral language.
- Review existing-kata updates for overreach: optional notes should not dilute the vanilla lesson.
- Run final grep checks for stale names after the `102` rename.

Work groups:

1. Create discovery/readiness kata first; it becomes the prerequisite model for later plugin katas.
2. Create Neotest and DAP katas after core LazyVim editing/navigation katas exist.
3. Maintain a cross-agent checklist and do final editorial consistency pass.

Implementation status, 2026-06-26: Worker 5 created `171_lazyvim_discovery_readiness.md`, `181_neotest_workflow.md`, and `182_lazyvim_dap_debugging.md`. The Neotest and DAP katas are intentionally readiness-gated and skippable when optional extras, adapters, or safe disposable projects are unavailable.

Implementation status, 2026-06-26: Workers 1-4 completed their assigned existing-kata notes and created `172`-`180` plus `183`. The earlier Telescope-specific picker kata was renamed to `102_picker_fuzzy_finding.md` and provider-neutralized.

Risks/checks:

- Neotest and DAP are opt-in extras; every drill must be gated and skippable when unavailable.
- Do not edit `001`-`170` unless coordinating a review-only wording fix with the file owner.
- Avoid duplicating `109`, `110`, and `104`; reference them as models instead.

## Suggested Execution Phases

1. **Phase 1: Low-risk optional notes.** Subagents 1-4 update existing katas with small readiness-gated notes only.
2. **Phase 2: Risky existing-file modernization.** Subagent 2 handles `080`, `102`, `107`; Subagent 3 handles `099` and `160`.
3. **Phase 3: Core new LazyVim katas.** Create `171`-`180` in topic order.
4. **Phase 4: Optional extras.** Create `181`-`183`.
5. **Phase 5: Review.** Subagent 5 performs cross-agent review; owners fix their own files.

## Final Verification Checklist

- Search for the old picker-specific filename after the picker rename; provider references such as Telescope are allowed only when listed as one possible picker backend.
- `rg -n "<Space>|<leader>|<C-/|<C-_>|\\[h|\\]h|<Space>c|<Space>x" *.md` for key notation consistency.
- Check every new kata has objective, readiness, setup, drills, verification, solution, cleanup, references.
- Check every plugin-dependent mapping has a readiness command.
- Check every destructive workflow is confined to generated temp state.
- Check no unrelated pre-existing deleted roadmap/index files are touched.
