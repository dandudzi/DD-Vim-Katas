# Existing Katas Index

Inventory of the numbered kata files present in this directory. Titles come from each file's first heading; summaries describe the principal skill being drilled.

| No. | Kata | Topic / skills |
|---:|---|---|
| 001 | [Indent all lines below](001_indent_all_lines_below.md) | Operator + motion with `>G`; indenting to end of file. |
| 002 | [Insert at the end of line](002_insert_at_end_of_line.md) | Append with `A`; add line-ending punctuation. |
| 003 | [Insert at the beginning of line](003_insert_at_beginning_of_line.md) | Insert with `I`; repeat edits using `j.`. |
| 004 | [One step back, two forward](004_one_step_back_two_forward.md) | Character find `f`, repeat find `;`, change, and dot-repeat. |
| 005 | [Find and replace by hand](005_find_and_replace_by_hand.md) | `/` search, `n`, `cw`, and selective dot-repeat. |
| 006 | [Undo and redo](006_undo_redo.md) | Undo with `u` and redo with `<C-r>`. |
| 007 | [Change inside](007_change_inside.md) | `ci` text objects plus `cf` and `ct` character motions. |
| 008 | [File movement and join lines](008_file_movement_and_join_lines.md) | File-edge jumps with `gg`/`G` plus repairing wrapped text with `J`. |
| 009 | [Delete word and end of line](009_delete_word_end_of_line.md) | `daw`, `diw`, `db`, and `D` deletion scopes. |
| 010 | [Use count](010_use_counts.md) | Counts, line duplication, word change, and numeric decrement. |
| 011 | [Replace](011_replace.md) | Character replacement with `[n]r` and Replace mode `R`. |
| 012 | [Combine and conquer](012_combine_and_conquer.md) | Counted word motions composed with `gu` and `gU` for case normalization. |
| 013 | [Delete in insert mode](013_delete_in_insert_mode.md) | Insert-mode deletion using `<C-h>`, `<C-w>`, and `<C-u>`. |
| 014 | [Paste from register in insert mode](014_paste_from_register_in_insert_mode.md) | Yank to register `0` and insert it with `<C-r>0`. |
| 015 | [Back of envelope calculations in place](015_back_of_envelope_calculations_in_place.md) | Expression register `<C-r>=` for inline arithmetic. |
| 016 | [Overwrite existing text](016_overwrite_existing_text_with_replace.md) | Replace mode `R`, Virtual Replace `gR`, and character finding. |
| 017 | [Grokking visual mode](017_grokking_visual_mode.md) | Select a word with `viw` and replace it with `c`. |
| 018 | [Defining visual selection](018_defining_visual_selection.md) | Character, line, and block Visual modes; `gv` and selection endpoint `o`. |
| 019 | [Repeat likewise visual commands](019_repeat_likewise_visual_commands.md) | Visual line indentation and repeating `>` with dot. |
| 020 | [Prefer operators to visual commands](020_prefer_operators_to_visual_commands.md) | Operator/text-object composition with `gUit` and dot-repeat. |
| 021 | [Editing tabular data with visual block mode](021_editing_tabular_data_with_visual_block_mode.md) | Blockwise `I` insertion to add a shared delimiter column and separator row. |
| 022 | [Append after a ragged visual block](022_append_after_a_ragged_visual_block.md) | Blockwise `$` selection and `A` across unequal line lengths. |
| 023 | [Exec commands on one or more consecutive lines](023_exec_commands_on_one_or_more_consecutive_lines.md) | Ex addresses, ranges, search addresses, `:print`, and `:delete`. |
| 024 | [Duplicate or move lines](024_duplicate_or_move_lines.md) | Ex `:copy`/`:t` and `:move` with line and visual ranges. |
| 025 | [Run normal mode commands across range](025_run_normal_mode_commands_across_range.md) | `:normal` over visual ranges and the entire buffer. |
| 026 | [Repeat last ex command](026_repeat_last_ex_command.md) | Repeat Ex commands with `@:` and macro invocations with `@@`. |
| 027 | [Tab complete your ex command](027_tab_complete_your_ex_command.md) | Command-line discovery and completion using `<C-d>`/Tab. |
| 028 | [Insert current word at the command prompt](028_insert_current_word_at_command_prompt.md) | `<C-r><C-w>`, substitution, and command/search history windows. |
| 029 | [Running commands in shell](029_running_commands_in_shell.md) | Terminal, `:write !`, range filters, shell sorting, and history. |
| 030 | [Buffer operations](030_buffer_operations.md) | List, delete, and execute commands across buffers. |
| 031 | [Split windows](031_split_windows.md) | Create, navigate, close, equalize, and resize split windows. |
| 032 | [Organize window layout with tab pages](032_organize_window_layout_with_tab_pages.md) | Tab-page and window creation, navigation, relocation, and sizing. |
| 033 | [Move word-wise](033_move_word_wise.md) | Word motions `w`, `b`, `e`, and `ge`. |
| 034 | [Find by character](034_find_by_character.md) | `f`/`F`/`t`/`T`, `;`, display-line movement, and word endpoints. |
| 035 | [Operate with a search motion](035_operate_with_a_search_motion.md) | Use `/pattern` directly as an operator motion. |
| 036 | [Trace your selection with precision text objects](036_trace_your_selection_with_precision_text_objects.md) | Inner/around delimiter and tag text objects with visual/change operators. |
| 037 | [Jump between matching parentheses](037_jump_between_matching_parentheses.md) | `%` matching-pair jumps and editing paired delimiters. |
| 038 | [Mark Your Place and Snap Back to It](038_mark_your_place_and_snap_back_to_it.md) | Set/jump local marks and use built-in change/insert/selection marks. |
| 039 | [Traverse the jump list](039_traverse_the_jump_list.md) | `<C-o>`, `<C-i>`, `:jumps`, and jump-producing navigation. |
| 040 | [Traverse the change list](040_traverse_the_change_list.md) | `g;`, `g,`, `:changes`, last-change marks, and `gi`. |
| 041 | [Snap between files using global marks](041_snap_between_files_using_global_marks.md) | Uppercase global marks and cross-file vimgrep navigation. |
| 042 | [Delete yank and put with unnamed register](042_delete_yank_and_put_with_unnamed_register.md) | Unnamed register, `x`/`d`/`y`/`p`, transposition, and duplication. |
| 043 | [Grok Vim registers](043_grok_vim_registers.md) | Preserve yanked text in register `0` and discard deletes with the black-hole register `_`. |
| 044 | [Replace visual selection with a register](044_replace_visual_selection_with_a_register.md) | Replace a visual selection with put and manage overwritten register text. |
| 045 | [Pasting from a register](045_pasting_from_a_register.md) | Put before/after, linewise versus characterwise registers, and `gp`/`gP`. |
| 046 | [Record and Execute a Macro](046_record_and_execute_a_macro.md) | Record with `q{register}` and execute with `@{register}`. |
| 047 | [Play Back with a Count](047_play_back_with_a_count.md) | Counted macro execution and repeat with `@@`. |
| 048 | [Repeat a Change on Contiguous Lines](048_repeat_a_change_on_contiguous_lines.md) | Linewise macro replay and repeated changes over adjacent lines. |
| 049 | [Append Command to Macro](049_append_commands_to_macro.md) | Append recordings using uppercase register names. |
| 050 | [Act Upon a Collection of Files](050_act_upon_a_collection_of_files.md) | Argument-list workflows with `:args`, `:next`, and `:argdo`. |
| 051 | [Evaluate an iterator to number items in a list](051_evaluate_an_iterator_to_number_items_in_a_list.md) | Expression register and iterator-driven list numbering. |
| 052 | [Edit the contents of a macro](052_edit_the_contents_of_a_macro.md) | Paste, edit, and write macro register contents. |
| 053 | [Editing tabular data with visual block mode](053_editing_tabular_data_with_visual_block_mode.md) | Rectangular cleanup with block delete plus blockwise `A` to normalize pipe spacing. |
| 054 | [Changing column of text](054_changing_column_of_text.md) | Blockwise column selection, insertion, replacement, and deletion. |
| 055 | [Tune the case sensitivity of search patterns](055_tune_the_case_sensitivity_of_search_patterns.md) | `ignorecase`, `smartcase`, and inline `\c`/`\C` switches. |
| 056 | [Use the `\v` pattern switch for regex search](056_use_the_v_pattern_switch_for_regex_search.md) | Very-magic Vim regex patterns. |
| 057 | [Use the `\V` literal switch for verbatim search](057_use_the_backslash_v_literal_switch_for_verbatim_search.md) | Very-nomagic literal searching. |
| 058 | [Stake the boundaries of a word](058_stake_the_boundaries_of_a_word.md) | Word-boundary atoms `\<` and `\>` in patterns. |
| 059 | [Stake the boundaries of a match](059_stake_the_boundaries_of_a_match.md) | Control reported match boundaries with `\zs` and `\ze`. |
| 060 | [Escape Problem Characters](060_escape_problem_characters.md) | Escape delimiters/metacharacters and choose alternate substitute separators. |
| 061 | [Meet the Search Command](061_meet_the_search_command.md) | Search/substitute fundamentals, flags, and repeat behavior. |
| 062 | [Count the matches for current pattern](062_count_the_matches_for_current_pattern.md) | Count substitutions non-destructively with `:s///gn`. |
| 063 | [Offset cursor to the end of a search match](063_offset_cursor_to_the_end_of_a_search_match.md) | Search offsets such as `/e` for cursor placement. |
| 064 | [Operate on complete search match](064_operate_on_complete_search_match.md) | `gn`/`gN` search-match text objects with operators. |
| 065 | [Create complex patterns by iterating upon search history](065_create_complex_patterns_by_iterating_upon_search_history.md) | Search history editing and incremental pattern construction. |
| 066 | [Surrounding](066_surrounding.md) | Add, change, and delete surroundings with surround mappings. |
| 067 | [`xp` - Swap adjacent characters](067_xp_swap_adjacent_characters.md) | Transpose neighboring characters using delete and put. |
| 068 | [Swap adjacent words with `dwwP` and `daWwp`](068_swap_adjacent_words_with_dwwP_and_daWwp.md) | Transpose neighboring words while handling whitespace. |
| 069 | [Toggle comments with `gc` ranges](069_toggle_comments_with_gc_ranges.md) | Comment operator with motions, text objects, counts, and linewise `gcc`. |
| 070 | [`S` Flash Treesitter motion as an operator target](070_flash_treesitter_motion_S.md) | Plugin-assisted syntax-node targeting composed with operators. |
| 071 | [Filter a visual selection through a shell command](071_filter_selection_through_shell.md) | `:'<,'>!` filters for sorting, formatting, and transformation. |
| 072 | [Spell check toggle and error navigation](072_spellcheck_toggle_and_jump.md) | Toggle spelling and move between misspellings with `[s`/`]s`. |
| 073 | [`gd` go to definition and jump back](073_gd_go_to_definition_and_back.md) | Definition navigation plus jump-list back/forward. |
| 074 | [`o` / `O` - Open a new line below or above](074_open_line_above_and_below.md) | Create and enter insert mode on adjacent lines. |
| 075 | [`s` / `S` - Substitute character or entire line](075_substitute_character_and_line.md) | Characterwise and linewise substitution. |
| 076 | [`Ctrl-A` / `Ctrl-X` - Increment and decrement numbers](076_increment_and_decrement_numbers.md) | Numeric editing with counts and formats. |
| 077 | [`zt` / `zz` / `zb` - Position the screen around the cursor](077_position_screen_with_zt_zz_zb.md) | Recenter viewport at top, middle, or bottom. |
| 078 | [`#` - Search backward for word under cursor](078_search_backward_with_hash.md) | Backward whole-word search and result traversal. |
| 079 | [`:nohlsearch` - Clear search highlighting](079_clear_search_highlighting.md) | Remove search highlights without clearing the pattern. |
| 080 | [`Ctrl-^` - Toggle the alternate file](080_toggle_alternate_file.md) | Fast switching between current and alternate buffers. |
| 081 | [`:g` / `:v` - The global command](081_global_command.md) | Execute Ex commands on matching or nonmatching lines. |
| 082 | [`gq` - Format text](082_format_text_with_gq.md) | Wrap/format text with motions, selections, and `textwidth`. |
| 083 | [Folding basics](083_folding_basics.md) | Manual fold creation plus `zo`, `zc`, `za`, `zR`, and `zM` for fold visibility control. |
| 084 | [Quickfix list](084_quickfix_list.md) | Build a quickfix list with `:vimgrep`, open it, and navigate entries with `:cnext`/`:cprev`. |
| 085 | [Undo tree and time travel](085_undo_tree_and_time_travel.md) | Undo branches via `g-`/`g+`, `:earlier`, and `:later`. |
| 086 | [`Ctrl-O` - One normal command from insert mode](086_one_normal_command_from_insert_mode.md) | Temporarily execute one Normal command while inserting. |
| 087 | [Insert mode completion](087_insert_mode_completion.md) | Buffer keyword completion, whole-line completion, and popup accept/cancel controls. |
| 088 | [`:sort` - Sort lines](088_sort_lines.md) | Sort ranges with numeric, reverse, unique, and pattern options. |
| 089 | [Diff mode](089_diff_mode.md) | Two-way diff basics with hunk navigation, `do`/`dp`, and `:diffoff!`. |
| 090 | [`cgn` - Search, match, and replace with dot-repeat](090_cgn_search_match_replace.md) | Change the next match and repeat replacements selectively. |
| 091 | [Substitute with confirmation](091_substitute_with_confirmation.md) | Confirm each `:%s///gc` replacement interactively. |
| 092 | [The command-line window](092_command_line_window.md) | Edit and replay command/search history using `q:` and `q/`. |
| 093 | [Quick save, quit, and revert](093_quick_save_quit_and_revert.md) | `ZZ`, `ZQ`, and `:e!` file lifecycle shortcuts. |
| 094 | [Insert-mode editing shortcuts](094_insert_mode_editing_shortcuts.md) | Delete, indent, and dedent without leaving Insert mode. |
| 095 | [Count + insert](095_count_with_insert.md) | Repeat inserted text, blank lines, and characters with counts. |
| 096 | [`gf`, `gi`, and `gD`](096_go_to_file_and_last_insert.md) | Open file under cursor, resume last insert, and find declaration. |
| 097 | [`g*` and `g#` - Partial word search](097_partial_word_search.md) | Forward/backward searches without word boundaries. |
| 098 | [Jump to enclosing block boundaries](098_jump_to_unmatched_brackets.md) | `[(`/`])` and `[{`/`]}` unmatched-delimiter navigation. |
| 099 | [`K` and `gr` - Hover lookup and references](099_hover_lookup_and_go_to_references.md) | Documentation/hover lookup and LSP reference navigation. |
| 100 | [`:cfdo` and `:cdo` project-wide refactoring](100_cfdo_project_wide_refactor.md) | Apply commands per quickfix file or entry and save changes. |
| 101 | [Location list](101_location_list.md) | Per-window search results, navigation, and quickfix comparison. |
| 102 | [Telescope fuzzy finding](102_telescope_fuzzy_finding.md) | LazyVim file, symbol, grep, buffer, and resumed pickers. |
| 103 | [Terminal mode and git workflow](103_terminal_and_git_workflow.md) | Terminal escape/toggle, Lazygit, and gitsigns hunk operations. |
| 104 | [LazyVim extras](104_lazyvim_bracket_nav_yanky_sessions.md) | Bracket navigation, Yanky history, scratch buffers, and sessions. |
| 105 | [Operators with the `%` match motion](105_operators_with_percent_match.md) | `d%`, `di%`, `da%`, `ci%`, and `vi%` over matched pairs. |
| 106 | [`!!` - Filter the current line through a shell command](106_filter_current_line_through_shell.md) | Replace one or counted lines with shell-filter output. |
| 107 | [`:bd` - Close and manage buffers](107_close_and_manage_buffers.md) | List, delete, force-delete, and wipe buffers. |
| 108 | [Indentation jumping and menu cycling](108_indentation_jumping_and_menu_cycling.md) | Plugin indentation-scope jumps, completion cycling, and spell languages. |
| 109 | [Grug-far and picker exports](109_grugfar_and_picker_exports.md) | Project replacement UI and export picker results to quickfix/Trouble. |
| 110 | [Trouble, Noice, Mason, and Neo-tree](110_lazyvim_ui_trouble_noice_mason.md) | LazyVim diagnostics, message history, tooling, and file-tree workflows. |
| 111 | [Return to Physical Line Start](111_physical_line_start.md) | Line-start motion `0`; land on column 1 without skipping indentation. |
| 112 | [Land on the First Non-Blank Character](112_first_non_blank.md) | First-non-blank motion `^`; skip indentation precisely. |
| 113 | [Land on the Last Non-Blank Character](113_last_non_blank.md) | Last-non-blank motion `g_`; stop before trailing whitespace. |
| 114 | [Jump to an Exact Screen Column](114_exact_screen_column.md) | Exact-column motion `{count}|`; precise landing and short-line clamping. |
| 115 | [Move to the Adjacent Line's First Non-Blank](115_adjacent_line_first_non_blank.md) | Vertical first-non-blank motions `+` and `-`, including counts. |
| 116 | [Jump Count-Relative to a Line's First Non-Blank](116_count_relative_first_non_blank.md) | Count-relative first-non-blank motion `_`; current-line and counted downward landing. |
| 117 | [Go to Line 1 or an Exact Line Number](117_start_or_numbered_line.md) | File-start and exact-line jumps with `gg` and `{count}gg`. |
| 118 | [Go to File End or an Exact Line Number](118_end_or_numbered_line.md) | File-end and exact-line jumps with `G` and `{count}G`. |
| 119 | [Jump to a Percentage Through the Buffer](119_percentage_jump.md) | Percentage-based buffer jumps with counted `%`. |
| 120 | [Jump to an Exact Byte Offset](120_byte_offset_jump.md) | Byte-position landing with counted `go` on an ASCII fixture. |
| 121 | [Land on the Top, Middle, or Bottom Visible Line](121_viewport_relative_landing.md) | Viewport-relative landings with `H`, `M`, and `L`. |
| 122 | [Fine-Scroll the Viewport by Line](122_fine_viewport_scroll.md) | Line-by-line viewport scrolling with `<C-e>` and `<C-y>`. |
| 123 | [Scroll by Half a Page](123_half_page_scroll.md) | Half-page scrolling with `<C-d>` and `<C-u>` using a fixed `'scroll'` value. |
| 124 | [Scroll by a Full Page](124_full_page_scroll.md) | Full-page scrolling with `<C-f>` and `<C-b>` using a deterministic page size. |
| 125 | [Move Sentence by Sentence](125_sentence_motion.md) | Sentence-boundary navigation with `(` and `)`. |
| 126 | [Jump to Section Starts](126_section_start_motions.md) | Section-start motions `[[` and `]]`; jump among first-column function-opening braces. |
| 127 | [Jump to Section Ends](127_section_end_motions.md) | Section-end motions `[]` and `][`; jump among first-column function-closing braces. |
| 128 | [Jump to Method Starts and Ends](128_method_boundaries.md) | Method-boundary motions `[m`, `]m`, `[M`, and `]M`; navigate Java-like brace-delimited methods. |
| 129 | [Reverse a Match Cycle with `g%`](129_reverse_match_cycle.md) | Reverse match cycling with `g%` across `#if`/`#else`/`#endif`, using reproducible `matchit` setup. |
| 130 | [Return to the Previous Jump Origin](130_previous_jump_origin.md) | Previous-context motions ```` and `''`; exact versus linewise return to the latest jump origin. |
| 131 | [Jump to a Tag Definition](131_tag_definition_jump.md) | Tag jump with `<C-]>`; follow a local definition through a generated tags file. |
| 132 | [Return Through the Tag Stack](132_tag_stack_return.md) | Tag-stack return with `<C-t>` after nested tag jumps. |
| 133 | [Choose Among Matching Tags](133_choose_among_matching_tags.md) | Disambiguate duplicate tags with `g]` and an indexed choice. |
| 134 | [Open a Tag Definition in a Split](134_tag_in_a_split.md) | Split-opening tag jump with `<C-w>]` while keeping the caller visible. |
| 135 | [Open a File at a Line Number](135_open_file_at_line_number.md) | Open `file:line` references directly at the target with `gF`. |
| 136 | [Open the File Under Cursor in a Split](136_file_under_cursor_in_split.md) | Split-opening file-under-cursor jump with `<C-w>f`. |
| 137 | [Operate on Inner and Outer Sentences](137_sentence_text_objects.md) | Sentence text objects `is` and `as`, including their whitespace boundary difference. |
| 138 | [Recover the Latest Small Deletion](138_recover_small_deletion.md) | Recover the small-delete register `\"-`. |
| 139 | [Walk Line Deletion History with Numbered Registers](139_walk_deletion_history.md) | Restore earlier line deletions from numbered registers `\"1` through `\"3`. |
| 140 | [Generate Lines with Expression Put](140_generate_lines_with_expression_put.md) | Generate text with `:put =...` and addressed expression inserts. |
| 141 | [Repeat One Substitution at New Scopes](141_repeat_substitutions_at_new_scopes.md) | Repeat substitutions with `:&&` and `g&`. |
| 142 | [Reuse the Full Match in a Replacement](142_reuse_full_match_in_replacement.md) | Reuse the matched text in a replacement with `&`. |
| 143 | [Reorder Captured Groups](143_reorder_captured_groups.md) | Reorder captured groups in substitutions with backreferences. |
| 144 | [Change Replacement Case](144_change_replacement_case.md) | Change replacement letter case with transforms such as `\U` and `\u`. |
| 145 | [Compute Replacement Text](145_compute_replacement_text.md) | Compute replacement text with `\=` expressions. |
| 146 | [Configure Every Window with `:windo`](146_configure_every_window.md) | Apply one window-local setting across every window in the current tab. |
| 147 | [Select Buffers by Partial Name](147_select_buffers_by_partial_name.md) | Switch buffers with a unique partial-name fragment via `:buffer {partial}`. |
| 148 | [Open an Existing Buffer in a Split](148_open_existing_buffer_in_split.md) | Reopen an already loaded buffer in a split with `:sbuffer`. |
| 149 | [Restore the Most Recently Changed Line with `U`](149_restore_entire_changed_line.md) | Restore the latest changed line with `U`, even from another cursor line. |
| 150 | [Run a Command on Visible Fold Lines](150_run_command_on_visible_fold_lines.md) | Execute commands on visible fold lines only with `:folddoopen`. |
| 151 | [Traverse Quickfix History](151_traverse_quickfix_history.md) | Traverse older and newer quickfix lists with `:colder` and `:cnewer`. |
| 152 | [Jump Spatially Through Quickfix](152_jump_spatially_through_quickfix.md) | Spatial quickfix jumps within the current buffer with `:cabove` and `:cbelow`. |
| 153 | [Jump to Another Quickfix File](153_jump_to_another_quickfix_file.md) | Skip between quickfix files with `:cnfile` and `:cpfile`. |
| 154 | [Filter an Existing Quickfix List](154_filter_existing_quickfix_list.md) | Filter quickfix entries with `:Cfilter` after loading `cfilter`. |
| 155 | [Create Quickfix from Shell Output](155_create_quickfix_from_shell_output.md) | Build quickfix entries from shell output with `:cexpr systemlist(...)`. |
| 156 | [Open Quickfix Only When Useful](156_open_quickfix_only_when_useful.md) | Conditionally open or close quickfix with `:cwindow`. |
| 157 | [Parse the Current Buffer as Errors](157_parse_current_buffer_as_errors.md) | Parse compiler-style lines in the current buffer with `:cgetbuffer`. |
| 158 | [Compile and Navigate Errors](158_compile_and_navigate_errors.md) | Use `:make` with `:cnext` and `:cprevious` for a deterministic build-fix loop. |
| 159 | [Search Help into a Location List](159_search_help_into_location_list.md) | Search help with `:lhelpgrep` and inspect results via `:lopen`. |
| 160 | [Move Diagnostics into Quickfix](160_move_diagnostics_into_quickfix.md) | Turn diagnostics into a quickfix workflow with `vim.diagnostic.setqflist()`. |
| 161 | [Choose a Source in a Three-Way Diff](161_choose_source_in_three_way_diff.md) | Select an explicit diff source buffer with `:diffget {bufspec}`. |
| 162 | [Refresh Diff Calculations](162_refresh_diff_calculations.md) | Refresh stale diff highlighting with `:diffupdate`. |
| 163 | [Compare with a Patch Result](163_compare_with_patch_result.md) | Preview a patch result side by side with `:diffpatch`. |
| 164 | [Execute One Normal Command from Terminal Mode](164_execute_one_normal_command_from_terminal_mode.md) | Run one Normal-mode command from Terminal mode with `<C-\\><C-o>`. |
| 165 | [Read Shell Output into the Buffer](165_read_shell_output_into_buffer.md) | Insert shell output below a chosen line with `:read !{cmd}`. |
| 166 | [Navigate Between Folds](166_navigate_between_folds.md) | Move among fold boundaries with `zj` and `zk`. |
| 167 | [Adjust Fold Depth Incrementally](167_adjust_fold_depth_incrementally.md) | Adjust visible fold depth step by step with `zr` and `zm`. |
| 168 | [Reindent with the Equal Operator](168_reindent_with_equal_operator.md) | Reindent motions and ranges with the `=` operator. |
| 169 | [Format Without Moving the Cursor](169_format_without_moving_cursor.md) | Preserve cursor position while formatting with `gw`. |
| 170 | [Generate an Incrementing Sequence](170_generate_incrementing_sequence.md) | Generate a numbered run with Visual `g<C-a>`. |

## Inventory Audit

- Total indexed katas: **170**.
- Numeric range: **001-170**.
- Missing numbers: **none**.
- Duplicate numeric prefixes: **none**.
- Excluded from the kata inventory: `vim-neovim-200-kata-ideas.md`, this index, and files created by the concurrent template/review tasks.
