# Existing Katas vs 200 Kata Ideas

This compares the current kata inventory in `existing-katas-index.md` against the 200-item backlog in `vim-neovim-200-kata-ideas.md`.

Method:
- Coverage was judged from the index title and summary only.
- `covered` means the current index clearly drills the same primary technique.
- `partially covered` means the technique appears inside a broader kata, but is not isolated cleanly enough to count as a direct drill.
- `uncovered` means no current index entry names the motion, workflow, or editing goal directly enough.

## Totals

- Covered ideas: **162**
- Partially covered ideas: **22**
- Uncovered ideas: **16**
- Redundancy cleanup: **021** and **053** now have distinct visual-block goals rather than overlapping at the same level.
- Light-overlap clusters worth watching: **042/045** (put/register workflows) and **073/099** (definition and reference navigation).

## Idea Coverage

| Idea | Status | Current kata(s) | Rationale |
|---:|---|---|---|
| 001 Counted basic motion | partially covered | 010 | Counts are taught, but not as a pure `hjkl` landing drill. |
| 002 Physical line start | covered | 111 | `0` is now isolated as the kata's primary motion. |
| 003 First non-blank | covered | 112 | `^` is now isolated as the kata's primary motion. |
| 004 Line end | partially covered | 002, 022 | Line-end work appears through `A` and ragged block append, not as a direct `$` motion kata. |
| 005 Last non-blank | covered | 113 | `g_` is now isolated directly, including trailing-space behavior. |
| 006 Exact screen column | covered | 114 | `{count}|` is now drilled directly, including short-line clamping. |
| 007 Find forward on a line | covered | 004, 034 | Both katas directly drill `f{char}`. |
| 008 Till forward on a line | covered | 007, 034 | `ct:` and `t{char}` are drilled directly. |
| 009 Backward character hunt | covered | 034 | `F` and `T` are named directly. |
| 010 Repeat a character hunt | covered | 004, 034 | `;` is drilled directly, with broader find-repeat coverage in 034. |
| 011 Next word start | covered | 033 | `w` is a core part of the kata. |
| 012 Next WORD start | partially covered | 068 | WORD-wise handling appears around `daW`, but not as a direct `W` motion drill. |
| 013 Word end | covered | 033 | `e` is drilled directly. |
| 014 WORD end | partially covered | 068 | WORD-wise navigation is adjacent, but `E` is not isolated. |
| 015 Previous word start | covered | 033 | `b` is drilled directly. |
| 016 Previous WORD start | partially covered | 068 | WORD-aware editing appears, but not as a direct `B` motion drill. |
| 017 Previous word end | covered | 033 | `ge` is drilled directly. |
| 018 Previous WORD end | uncovered | - | No current index summary drills `gE`. |
| 019 Display-line movement | covered | 034 | Display-line movement is named directly in the summary. |
| 020 Adjacent line first non-blank | covered | 115 | `+` and `-` are now isolated directly, including counted movement. |
| 021 Count-relative first non-blank | covered | 116 | `_` is now isolated directly, including its counted downward landing. |
| 022 Start or numbered line | covered | 117 | `gg` and `{count}gg` are now drilled directly as file-position jumps. |
| 023 End or numbered line | covered | 118 | `G` and `{count}G` are now drilled directly as file-position jumps. |
| 024 Percentage jump | covered | 119 | Counted `%` is now isolated as a percentage-through-buffer motion. |
| 025 Byte-offset jump | covered | 120 | `{count}go` is now drilled directly with deterministic ASCII byte offsets. |
| 026 Viewport-relative landing | covered | 121 | `H`, `M`, and `L` are now isolated directly as viewport-relative landings. |
| 027 Reposition the cursor line | covered | 077 | `zt`, `zz`, and `zb` are the whole kata. |
| 028 Fine viewport scroll | covered | 122 | `<C-e>` and `<C-y>` are now isolated directly as line-by-line viewport scrolling. |
| 029 Half-page scroll | covered | 123 | `<C-d>` and `<C-u>` are now isolated directly with a fixed `'scroll'` setting. |
| 030 Full-page scroll | covered | 124 | `<C-f>` and `<C-b>` are now isolated directly with a deterministic page size. |
| 031 Sentence motion | covered | 125 | `(` and `)` are now isolated directly as sentence-boundary motions. |
| 032 Paragraph motion | uncovered | - | The old broad bundle was narrowed, and no current index summary now isolates `{` or `}` paragraph motion. |
| 033 Section starts | covered | 126 | `[[` and `]]` are now isolated directly around first-column section starts. |
| 034 Section ends | covered | 127 | `[]` and `][` are now isolated directly around first-column section ends. |
| 035 Unmatched braces | covered | 098 | The kata drills unmatched-brace navigation directly. |
| 036 Unmatched parentheses | covered | 098 | The kata drills unmatched-parenthesis navigation directly. |
| 037 Method boundaries | covered | 128 | `[m`, `]m`, `[M`, and `]M` are now isolated directly with a deterministic class fixture. |
| 038 Matching pair | covered | 037, 105 | `%` and operator composition around `%` are both drilled directly. |
| 039 Reverse match cycle | covered | 129 | `g%` is now isolated directly, with explicit reproducible `matchit` setup for reverse cycling through a preprocessor match group. |
| 040 Pattern search | covered | 005, 061 | `/` search is central to both katas. |
| 041 Repeat search directionally | covered | 005, 061 | `n` is explicit and repeat behavior is part of the broader search kata. |
| 042 Whole-word cursor search | partially covered | 078 | Exact-word backward search with `#` is covered, but the full `*` and `#` pair is not isolated. |
| 043 Substring cursor search | covered | 097 | `g*` and `g#` are the whole kata. |
| 044 Select next or previous match | covered | 064, 090 | `gn`, `gN`, and `cgn` are drilled directly. |
| 045 Search offsets | covered | 063 | `/e` style offsets are the whole kata. |
| 046 Search command-line history | covered | 065, 092 | Search-history editing and the command-line window are both drilled directly. |
| 047 Jumplist traversal | covered | 039 | The jumplist is the whole kata. |
| 048 Changelist traversal | covered | 040 | The changelist is the whole kata. |
| 049 Exact local mark | covered | 038 | Local marks are a core part of the kata. |
| 050 Cross-file mark | covered | 041 | Global marks across files are the whole kata. |
| 051 Linewise mark jump | partially covered | 038 | Marks are covered broadly, but apostrophe linewise jumps are not isolated. |
| 052 Previous jump origin | covered | 130 | Double-backtick and `''` are now isolated directly, including exact-versus-linewise return and bounce-back verification. |
| 053 Last change mark | covered | 040 | Last-change marks are named directly. |
| 054 Last insertion mark | covered | 038, 040 | Built-in insert marks and `gi` are both present. |
| 055 Last operated range | partially covered | 038 | Built-in marks are mentioned, but `` `[ `` and `` `] `` are not isolated. |
| 056 Last Visual selection marks | partially covered | 018 | Visual state is covered, but `'<` and `'>` are not a named drill. |
| 057 Return to insert site | covered | 040, 096 | `gi` is drilled directly. |
| 058 Local or global declaration jump | covered | 073, 096 | `gd` and `gD` are covered directly. |
| 059 Tag definition jump | covered | 131 | `<C-]>` tag-definition jumps are now isolated directly with a generated local tags file. |
| 060 Tag-stack return | covered | 132 | `<C-t>` tag-stack unwinding is now isolated directly after nested tag jumps. |
| 061 Choose among matching tags | covered | 133 | `g]` tag disambiguation is now isolated directly, including duplicate-tag selection. |
| 062 Tag in a split | covered | 134 | `<C-w>]` is now isolated directly as a split-opening tag jump. |
| 063 Open filename under cursor | covered | 096 | `gf` is drilled directly. |
| 064 Open file at line number | covered | 135 | `gF` is now isolated directly on deterministic `file:line` references. |
| 065 File under cursor in a split | covered | 136 | `<C-w>f` is now isolated directly with a deterministic local file fixture. |
| 066 Word text objects | covered | 009, 017 | `iw`, `aw`, and their operator use are drilled directly. |
| 067 WORD text objects | partially covered | 068 | `aW` appears inside a word-swap kata, but not as a standalone text-object drill. |
| 068 Sentence text objects | covered | 137 | `is` and `as` are now isolated directly, including their whitespace-boundary difference. |
| 069 Paragraph text objects | partially covered | 082 | Paragraph formatting is present, but `ip` and `ap` are not isolated directly. |
| 070 Quoted, delimited, and tag text objects | covered | 036 | Delimiter and tag text objects are the whole kata. |
| 071 Named-register yank and put | partially covered | 045 | Register putting is still present, but no current kata now isolates named-register yank-plus-put as the primary drill. |
| 072 Append to a named register | uncovered | - | The old register survey was narrowed, and no current index summary now names uppercase register append. |
| 073 Delete into the black-hole register | covered | 043 | The black-hole register is named directly. |
| 074 Recover the last yank | covered | 014, 043 | Register `0` is drilled directly. |
| 075 Recover a small deletion | covered | 138 | The small-delete register `"-` is now isolated directly. |
| 076 Walk deletion history | covered | 139 | Numbered delete-register recovery is now isolated directly after successive line deletions. |
| 077 Paste an evaluated expression | partially covered | 015, 051 | Expression-register work is covered, but not direct expression put. |
| 078 Insert a register in Insert mode | covered | 014 | `<C-r>` register insertion is the whole kata. |
| 079 Generate lines with expression put | covered | 140 | `:put =...` is now isolated directly, including addressed insertion. |
| 080 Record and replay a macro | covered | 046 | Macro recording and playback are the whole kata. |
| 081 Count and repeat macro playback | covered | 047 | Counted playback and `@@` are drilled directly. |
| 082 Edit a macro as text | covered | 052 | Editing a macro register as text is the whole kata. |
| 083 Inspect jump and change lists | covered | 039, 040 | `:jumps` and `:changes` are both covered directly. |
| 084 Restrict a match with `\zs` and `\ze` | covered | 059 | This is the whole kata. |
| 085 Search literal text with very nomagic | covered | 057 | `\V` literal search is the whole kata. |
| 086 Override search case per pattern | covered | 055 | `\c` and `\C` are part of the core drill. |
| 087 Use concise very-magic regexes | covered | 056 | `\v` is the whole kata. |
| 088 Confirm substitutions interactively | covered | 091 | Interactive substitute confirmation is the whole kata. |
| 089 Reuse the last search in substitution | partially covered | 061 | Search and substitute repeat behavior is present, but `:s//` reuse is not isolated. |
| 090 Repeat substitutions at new scopes | covered | 141 | `:&&` and `g&` are now isolated directly as repeat-at-new-scope workflows. |
| 091 Operate on successive matches | covered | 090 | `cgn` with dot-repeat is the whole kata. |
| 092 Count matches without editing | covered | 062 | `:s///gn` is the whole kata. |
| 093 Reuse the full match in replacement | covered | 142 | Replacement `&` is now isolated directly. |
| 094 Reorder captured groups | covered | 143 | Capture-group reordering is now isolated directly with backreferences. |
| 095 Change replacement case | covered | 144 | Replacement case transforms are now isolated directly. |
| 096 Compute replacement text | covered | 145 | `\=` replacement expressions are now isolated directly. |
| 097 Delete every matching line | covered | 081 | `:g` is drilled directly. |
| 098 Act on nonmatching lines | covered | 081 | `:v` is drilled directly. |
| 099 Run Normal commands on matching lines | covered | 081, 025 | Global-command and `:normal` workflows are both present. |
| 100 Inspect separate command histories | partially covered | 028, 092 | Command and search history windows are covered, but `:history` inspection is not isolated. |
| 101 Insert cursor word on the command line | covered | 028 | `<C-r><C-w>` is drilled directly. |
| 102 Use relative Ex ranges | covered | 023 | Ex ranges and addresses are the whole kata. |
| 103 Reuse a Visual range | covered | 023, 071 | Visual-range Ex work is drilled directly. |
| 104 Run commands between marks | partially covered | 023, 038 | Marks and Ex ranges are both present, but not combined into this exact drill. |
| 105 Execute Normal commands over a range | covered | 025 | `:normal` over a range is the whole kata. |
| 106 Batch-edit an argument list | covered | 050 | Argument-list batch editing is the whole kata. |
| 107 Batch-edit listed buffers | covered | 030 | Buffer-wide command execution is covered directly. |
| 108 Configure every window | covered | 146 | `:windo` is now isolated directly with explicit window-local verification. |
| 109 Create horizontal and vertical views | covered | 031 | Split creation is the whole kata. |
| 110 Move and rearrange windows | covered | 031, 032 | Window navigation and relocation are covered directly. |
| 111 Toggle the alternate file | covered | 080 | `<C-^>` is the whole kata. |
| 112 Select buffers by partial name | covered | 147 | `:buffer {partial}` is now isolated directly with unique-fragment selection. |
| 113 Open an existing buffer in a split | covered | 148 | `:sbuffer` is now isolated directly as a split-opening existing-buffer workflow. |
| 114 Use a temporary tab-page workspace | covered | 032 | Tab pages as an alternate workspace are the whole kata. |
| 115 Traverse undo-tree branches chronologically | covered | 085 | `g-` and `g+` are covered directly. |
| 116 Jump through undo history by time | covered | 085 | `:earlier` and `:later` are covered directly. |
| 117 Restore an entire changed line | covered | 149 | `U` is now isolated directly as whole-line restoration. |
| 118 Target undo sequence numbers | partially covered | 085 | Undo-tree time travel is covered, but sequence targeting is not isolated. |
| 119 Create and toggle a manual fold | covered | 083 | Manual folds and toggling are covered directly. |
| 120 Run a command only on visible fold lines | covered | 150 | `:folddoopen` is now isolated directly with explicit fold-state setup. |
| 121 Delete with any motion | covered | 009, 105 | Operator-motion deletion is drilled directly. |
| 122 Change with any motion | covered | 007, 035, 105 | Operator-motion change composition is drilled directly. |
| 123 Yank with any motion | covered | 012, 042 | Yank composition is covered directly. |
| 124 Uppercase a motion | covered | 020 | `gU` with text objects is the whole kata. |
| 125 Lowercase a motion | covered | 012 | Case operators are part of the core bundle. |
| 126 Toggle case over a motion | uncovered | - | The old broad operator bundle was narrowed, and no current index summary now names `g~`. |
| 127 Shift indentation by motion | covered | 001, 012, 019 | Motion-based indent and dedent are drilled directly. |
| 128 Reindent with the equal operator | covered | 168 | `=` is now isolated directly as a reindent operator. |
| 129 Format text with `gq` | covered | 082 | `gq` is the whole kata. |
| 130 Format without moving the cursor | covered | 169 | `gw` is now isolated directly as cursor-preserving formatting. |
| 131 Repeat the last change | covered | 003, 004, 005, 020, 090 | Dot-repeat is a recurring direct drill. |
| 132 Delete characters in either direction | partially covered | 042 | `x` appears directly, but `X` is not isolated. |
| 133 Replace one or many characters | covered | 011 | `r{char}` is the whole kata. |
| 134 Substitute characters or whole lines | covered | 075 | `s` and `S` are the whole kata. |
| 135 Join lines with or without spaces | partially covered | 008 | `J` is covered directly, but `gJ` is not isolated. |
| 136 Increment and decrement numbers | covered | 076 | `<C-a>` and `<C-x>` are the whole kata. |
| 137 Insert at structural line positions | covered | 002, 003 | `A` and `I` are both drilled directly. |
| 138 Open lines above or below | covered | 074 | `o` and `O` are the whole kata. |
| 139 Put before or after | covered | 042, 045 | `p` and `P` are core to both katas. |
| 140 Put and move after inserted text | covered | 045 | `gp` and `gP` are drilled directly. |
| 141 Insert a prefix down a column | covered | 021, 053, 054 | Blockwise column insertion is covered directly. |
| 142 Append at uneven line ends | covered | 022 | Ragged block append is the whole kata. |
| 143 Replace a rectangular field | covered | 021, 053, 054 | Blockwise rectangular replacement is covered directly. |
| 144 Replace a block with one character | covered | 054 | Blockwise replacement is covered directly. |
| 145 Generate an incrementing sequence | covered | 170 | Visual `g<C-a>` sequence generation is now isolated directly. |
| 146 Move the active selection end | covered | 018 | Visual `o` and blockwise endpoint correction are covered directly. |
| 147 Restore the previous Visual area | covered | 018 | `gv` is named directly. |
| 148 Paste without losing the source register | covered | 044 | Replacing a Visual selection from a register is the whole kata. |
| 149 Run Normal commands on selected lines | covered | 025 | Range `:normal` work covers this directly. |
| 150 Run a macro over selected lines | partially covered | 046, 047 | Macro replay is covered, but not the Neovim Visual-line-per-line form. |
| 151 Reuse Visual boundaries as an Ex range | covered | 023, 071 | Visual-range Ex addressing is covered directly. |
| 152 Move a rectangular column | partially covered | 021, 053, 054 | Column editing is covered, but blockwise move and paste are not isolated directly. |
| 153 Search a project into quickfix | covered | 041, 084 | Cross-file vimgrep and quickfix workflows cover this directly. |
| 154 Search into a window-local list | covered | 101 | The location-list kata covers this directly. |
| 155 Edit every quickfix match | covered | 100 | `:cdo` is the whole kata. |
| 156 Edit each quickfix file once | covered | 100 | `:cfdo` is the whole kata. |
| 157 Traverse quickfix history | covered | 151 | `:colder` and `:cnewer` are now isolated directly. |
| 158 Jump spatially through quickfix | covered | 152 | `:cabove` and `:cbelow` are now isolated directly. |
| 159 Jump to another quickfix file | covered | 153 | `:cnfile` and `:cpfile` are now isolated directly. |
| 160 Open quickfix only when useful | covered | 156 | `:cwindow` is now isolated directly. |
| 161 Filter an existing quickfix list | covered | 154 | `:Cfilter` is now isolated directly with explicit `cfilter` activation. |
| 162 Create quickfix from shell output | covered | 155 | `:cexpr systemlist(...)` is now isolated directly with deterministic parsing. |
| 163 Parse the current buffer as errors | covered | 157 | `:cgetbuffer` is now isolated directly. |
| 164 Compile and navigate errors | covered | 158 | `:make` with `:cnext` and `:cprevious` is now isolated directly. |
| 165 Search help into a location list | covered | 159 | `:lhelpgrep` is now isolated directly. |
| 166 Open a file comparison | covered | 089 | Diff mode is the whole kata. |
| 167 Enable diff across existing windows | uncovered | - | The diff foundation was narrowed to two-way basics, and no current index summary now names `:windo diffthis`. |
| 168 Leave diff mode everywhere | covered | 089 | `:diffoff!` is now an explicit part of the diff foundation kata. |
| 169 Move among diff hunks | covered | 089 | Hunk navigation is covered directly. |
| 170 Obtain a diff hunk | covered | 089 | `do` or `:diffget` is covered directly. |
| 171 Put a diff hunk | covered | 089 | `dp` or `:diffput` is covered directly. |
| 172 Choose a source in a three-way diff | covered | 161 | `:diffget {bufspec}` is now isolated directly in a three-way diff. |
| 173 Refresh diff calculations | covered | 162 | `:diffupdate` is now isolated directly. |
| 174 Compare with a patch result | covered | 163 | `:diffpatch` is now isolated directly as a patch-preview workflow. |
| 175 Leave terminal input for Normal mode | covered | 103 | Terminal escape and mode switching are covered directly. |
| 176 Execute one Normal command from Terminal mode | covered | 164 | `<C-\><C-o>` is now isolated directly. |
| 177 Open an embedded terminal split | covered | 029, 103 | Terminal-in-window workflows are covered directly. |
| 178 Filter a range through a shell command | covered | 029, 071, 106 | Shell filtering is covered directly at range, selection, and current-line levels. |
| 179 Read shell output into the buffer | covered | 165 | `:read !{cmd}` is now isolated directly. |
| 180 Debug inside Neovim | uncovered | - | No current index summary drills `termdebug`. |
| 181 Complete from configured keyword sources | covered | 087 | Generic insert completion is the whole kata. |
| 182 Complete a whole line | covered | 087 | `<C-x><C-l>` sits inside the insert-completion kata. |
| 183 Complete from the current file | uncovered | - | The completion foundation was narrowed, and no current index summary now names `<C-x><C-n>`. |
| 184 Complete a file path | uncovered | - | The completion foundation was narrowed, and no current index summary now names `<C-x><C-f>`. |
| 185 Complete from tags | uncovered | - | The completion foundation was narrowed, and no current index summary now names `<C-x><C-]>`. |
| 186 Complete from included files | uncovered | - | No current index summary now names `<C-x><C-i>`. |
| 187 Complete definitions and macros | uncovered | - | No current index summary now names `<C-x><C-d>`. |
| 188 Use filetype-aware omni completion | uncovered | - | No current index summary now names `<C-x><C-o>`. |
| 189 Complete Vim commands in text | uncovered | - | No current index summary now names `<C-x><C-v>`. |
| 190 Complete spelling corrections | partially covered | 072 | Spell navigation remains adjacent, but spelling completion itself is not isolated. |
| 191 Accept or cancel popup completion | covered | 087, 108 | `<C-y>` and `<C-e>` are now explicit in the insert-completion foundation kata. |
| 192 Edit Ex history in the command-line window | covered | 092 | The command-line window is the whole kata. |
| 193 Reveal only folds enclosing the cursor | uncovered | - | The fold foundation was narrowed, and no current index summary now names `zv`. |
| 194 Navigate between folds | covered | 166 | `zj` and `zk` are now isolated directly. |
| 195 Adjust fold depth incrementally | covered | 167 | `zr` and `zm` are now isolated directly. |
| 196 Open or close all folds | covered | 083 | Global fold open and close are part of the core drill. |
| 197 Navigate semantic references | covered | 099 | Reference navigation is drilled directly. |
| 198 Rename a symbol semantically | uncovered | - | No current index summary drills LSP rename. |
| 199 Apply an LSP code action to a range | uncovered | - | No current index summary drills range code actions. |
| 200 Move diagnostics into quickfix | covered | 160 | `vim.diagnostic.setqflist()` is now isolated directly. |

## Reverse Mapping for Current Katas

| Kata | Matched idea numbers | Note |
|---:|---|---|
| 001 Indent all lines below | 127 | Focused and unique. |
| 002 Insert at the end of line | 004, 137 | Focused and foundational. |
| 003 Insert at the beginning of line | 131, 137 | Focused and foundational. |
| 004 One step back, two forward | 007, 010, 131 | Strong direct motion-plus-repeat drill. |
| 005 Find and replace by hand | 040, 041, 122, 131 | Broad but still coherent. |
| 006 Undo and redo | - | Foundational, but basic `u` and `<C-r>` are outside this 200-item catalog. |
| 007 Change inside | 008, 066, 122 | Focused and strong. |
| 008 File movement and join lines | 022, 023, 135 | Narrowed foundation around file-edge movement and `J`. |
| 009 Delete word and end of line | 066, 121 | Focused and strong. |
| 010 Use count | 001, 136 | Broad count drill rather than a pure motion kata. |
| 011 Replace | 133 | Focused and strong. |
| 012 Combine and conquer | 123, 125 | Narrowed foundation around counted word motions plus `gu` and `gU`. |
| 013 Delete in insert mode | - | Useful extra topic outside this 200-item catalog. |
| 014 Paste from register in insert mode | 074, 078 | Focused and strong. |
| 015 Back of envelope calculations in place | 077 | Adjacent to expression replacement ideas, but not a direct substitute-transform kata. |
| 016 Overwrite existing text | 133 | Partly adjacent to replace-char work; Replace mode itself is outside the catalog. |
| 017 Grokking visual mode | 066, 122 | Focused entry-level text-object kata. |
| 018 Defining visual selection | 146, 147 | Focused and strong. |
| 019 Repeat likewise visual commands | 127, 147 | Narrow and useful. |
| 020 Prefer operators to visual commands | 124, 131 | Focused and strong. |
| 021 Editing tabular data with visual block mode | 141 | Differentiated from 053 by focusing on blockwise insertion and delimiter creation. |
| 022 Append after a ragged visual block | 004, 142 | Focused and strong. |
| 023 Exec commands on one or more consecutive lines | 102, 103 | Focused Ex-range kata. |
| 024 Duplicate or move lines | - | Useful Ex editing topic outside this 200-item catalog. |
| 025 Run normal mode commands across range | 105, 149 | Focused and strong. |
| 026 Repeat last ex command | - | Useful Ex-repeat topic outside this 200-item catalog. |
| 027 Tab complete your ex command | - | Useful command-line topic outside this 200-item catalog. |
| 028 Insert current word at the command prompt | 046, 100, 101 | Broad command-line workflow kata. |
| 029 Running commands in shell | 177, 178 | Broad but still coherent. |
| 030 Buffer operations | 107 | Useful core workspace kata. |
| 031 Split windows | 109, 110 | Focused and strong. |
| 032 Organize window layout with tab pages | 110, 114 | Focused and strong. |
| 033 Move word-wise | 011, 013, 015, 017 | Focused and foundational. |
| 034 Find by character | 007, 008, 009, 010, 019 | Strong direct motion kata. |
| 035 Operate with a search motion | 040, 121, 122 | Focused and strong. |
| 036 Trace your selection with precision text objects | 070 | Focused and strong. |
| 037 Jump between matching parentheses | 038 | Focused and foundational. |
| 038 Mark Your Place and Snap Back to It | 049, 051, 054, 055, 056 | Broad but coherent mark workflow kata. |
| 039 Traverse the jump list | 047, 083 | Focused and strong. |
| 040 Traverse the change list | 048, 053, 057, 083 | Focused and strong. |
| 041 Snap between files using global marks | 050, 153 | Strong cross-file navigation kata. |
| 042 Delete yank and put with unnamed register | 123, 132, 139 | Broad but coherent register foundation. |
| 043 Grok Vim registers | 073, 074 | Narrowed to register `0` preservation and the black-hole register `_`. |
| 044 Replace visual selection with a register | 148 | Focused and strong. |
| 045 Pasting from a register | 071, 139, 140 | Focused and strong. |
| 046 Record and Execute a Macro | 080 | Focused and strong. |
| 047 Play Back with a Count | 081 | Focused and strong. |
| 048 Repeat a Change on Contiguous Lines | 080, 081, 131 | Broad but coherent. |
| 049 Append Command to Macro | - | Useful macro-specific extra outside this 200-item catalog. |
| 050 Act Upon a Collection of Files | 106 | Focused and strong. |
| 051 Evaluate an iterator to number items in a list | 077, 079 | Useful expression workflow, broader than the catalog item. |
| 052 Edit the contents of a macro | 082 | Focused and strong. |
| 053 Editing tabular data with visual block mode | 143, 152 | Differentiated from 021 by focusing on rectangular cleanup and spacing normalization. |
| 054 Changing column of text | 141, 143, 144 | Focused and strong. |
| 055 Tune the case sensitivity of search patterns | 086 | Focused and strong. |
| 056 Use the `\v` pattern switch for regex search | 087 | Focused and strong. |
| 057 Use the `\V` literal switch for verbatim search | 085 | Focused and strong. |
| 058 Stake the boundaries of a word | - | Useful regex-boundary topic outside this 200-item catalog. |
| 059 Stake the boundaries of a match | 084 | Focused and strong. |
| 060 Escape Problem Characters | - | Useful substitute-escaping topic outside this 200-item catalog. |
| 061 Meet the Search Command | 040, 041, 089 | Broad foundation kata. |
| 062 Count the matches for current pattern | 092 | Focused and strong. |
| 063 Offset cursor to the end of a search match | 045 | Focused and strong. |
| 064 Operate on complete search match | 044, 091 | Focused and strong. |
| 065 Create complex patterns by iterating upon search history | 046 | Focused and strong. |
| 066 Surrounding | - | Plugin-specific extra outside this 200-item catalog. |
| 067 `xp` - Swap adjacent characters | - | Useful transpose kata outside this 200-item catalog. |
| 068 Swap adjacent words with `dwwP` and `daWwp` | 067 | Focused and useful. |
| 069 Toggle comments with `gc` ranges | - | Plugin-specific extra outside this 200-item catalog. |
| 070 `S` Flash Treesitter motion as an operator target | - | Plugin-specific extra outside this 200-item catalog. |
| 071 Filter a visual selection through a shell command | 103, 151, 178 | Focused and strong. |
| 072 Spell check toggle and error navigation | 190 | Adjacent to spelling completion, but not a direct match. |
| 073 `gd` go to definition and jump back | 058 | Focused definition-navigation kata. |
| 074 `o` / `O` - Open a new line below or above | 138 | Focused and strong. |
| 075 `s` / `S` - Substitute character or entire line | 134 | Focused and strong. |
| 076 `Ctrl-A` / `Ctrl-X` - Increment and decrement numbers | 136 | Focused and strong. |
| 077 `zt` / `zz` / `zb` - Position the screen around the cursor | 027 | Focused and strong. |
| 078 `#` - Search backward for word under cursor | 042 | Narrow but useful. |
| 079 `:nohlsearch` - Clear search highlighting | - | Useful search extra outside this 200-item catalog. |
| 080 `Ctrl-^` - Toggle the alternate file | 111 | Focused and strong. |
| 081 `:g` / `:v` - The global command | 097, 098, 099 | Focused and strong. |
| 082 `gq` - Format text | 129 | Focused and strong. |
| 083 Folding basics | 119, 196 | Narrow manual-fold foundation; advanced fold navigation now lives in later katas. |
| 084 Quickfix list | 153 | Narrow quickfix foundation centered on list creation and entry navigation. |
| 085 Undo tree and time travel | 115, 116, 118 | Strong advanced undo kata. |
| 086 `Ctrl-O` - One normal command from insert mode | - | Useful insert-mode extra outside this 200-item catalog. |
| 087 Insert mode completion | 181, 182, 191 | Narrow completion foundation around keyword completion, whole-line completion, and popup accept/cancel. |
| 088 `:sort` - Sort lines | - | Useful Ex utility outside this 200-item catalog. |
| 089 Diff mode | 166, 168, 169, 170, 171 | Narrow two-way diff foundation; advanced diff variants now live in later katas. |
| 090 `cgn` - Search, match, and replace with dot-repeat | 091 | Focused and strong. |
| 091 Substitute with confirmation | 088 | Focused and strong. |
| 092 The command-line window | 046, 192 | Focused and strong. |
| 093 Quick save, quit, and revert | - | Useful file-lifecycle extra outside this 200-item catalog. |
| 094 Insert-mode editing shortcuts | - | Useful insert-mode extra outside this 200-item catalog. |
| 095 Count + insert | - | Useful insert-repeat extra outside this 200-item catalog. |
| 096 `gf`, `gi`, and `gD` | 057, 058, 063 | Broad but coherent. |
| 097 `g*` and `g#` - Partial word search | 043 | Focused and strong. |
| 098 Jump to enclosing block boundaries | 035, 036 | Focused and strong. |
| 099 `K` and `gr` - Hover lookup and references | 197 | Focused references/navigation kata with a separate hover component. |
| 100 `:cfdo` and `:cdo` project-wide refactoring | 155, 156 | Focused and strong. |
| 101 Location list | 154, 165 | Focused and strong. |
| 102 Telescope fuzzy finding | - | Plugin-specific extra outside this 200-item catalog. |
| 103 Terminal mode and git workflow | 175, 177 | Broad terminal workflow kata. |
| 104 LazyVim extras | - | Plugin-specific extra outside this 200-item catalog. |
| 105 Operators with the `%` match motion | 038, 121, 122 | Focused and strong. |
| 106 `!!` - Filter the current line through a shell command | 178 | Focused and useful. |
| 107 `:bd` - Close and manage buffers | - | Useful buffer-lifecycle topic outside this 200-item catalog. |
| 108 Indentation jumping and menu cycling | 191 | Plugin-heavy and only adjacent to completion acceptance. |
| 109 Grug-far and picker exports | - | Plugin-specific extra outside this 200-item catalog. |
| 110 Trouble, Noice, Mason, and Neo-tree | - | Plugin-heavy UI workflow outside this 200-item catalog. |
| 111 Return to Physical Line Start | 002 | Focused and foundational. |
| 112 Land on the First Non-Blank Character | 003 | Focused and foundational. |
| 113 Land on the Last Non-Blank Character | 005 | Focused and foundational. |
| 114 Jump to an Exact Screen Column | 006 | Focused and foundational. |
| 115 Move to the Adjacent Line's First Non-Blank | 020 | Focused and foundational. |
| 116 Jump Count-Relative to a Line's First Non-Blank | 021 | Focused and foundational counted first-non-blank landing. |
| 117 Go to Line 1 or an Exact Line Number | 022 | Focused and foundational file-start and exact-line jump. |
| 118 Go to File End or an Exact Line Number | 023 | Focused and foundational file-end and exact-line jump. |
| 119 Jump to a Percentage Through the Buffer | 024 | Focused percentage-based whole-file navigation. |
| 120 Jump to an Exact Byte Offset | 025 | Focused byte-offset navigation with deterministic ASCII fixtures. |
| 121 Land on the Top, Middle, or Bottom Visible Line | 026 | Focused viewport-relative window landing. |
| 122 Fine-Scroll the Viewport by Line | 028 | Focused line-by-line viewport scrolling. |
| 123 Scroll by Half a Page | 029 | Focused half-page scrolling with a deterministic `'scroll'` value. |
| 124 Scroll by a Full Page | 030 | Focused full-page scrolling with a deterministic `'window'` value. |
| 125 Move Sentence by Sentence | 031 | Focused sentence-boundary navigation. |
| 126 Jump to Section Starts | 033 | First-column brace-driven `[[` and `]]` motion is now isolated directly. |
| 127 Jump to Section Ends | 034 | First-column brace-driven `[]` and `][` motion is now isolated directly. |
| 128 Jump to Method Starts and Ends | 037 | Method-boundary motions `[m`, `]m`, `[M`, and `]M` are isolated with a Java-like class fixture. |
| 129 Reverse a Match Cycle with `g%` | 039 | Reverse match cycling is isolated directly with explicit `matchit` activation. |
| 130 Return to the Previous Jump Origin | 052 | Previous-context return motions are isolated directly, including exact and linewise landings. |
| 131 Jump to a Tag Definition | 059 | `<C-]>` tag-definition jumping is isolated directly with generated local tags. |
| 132 Return Through the Tag Stack | 060 | `<C-t>` tag-stack unwinding is isolated directly after nested tag jumps. |
| 133 Choose Among Matching Tags | 061 | `g]` duplicate-tag disambiguation is isolated directly. |
| 134 Open a Tag Definition in a Split | 062 | `<C-w>]` split-opening tag jumps are isolated directly. |
| 135 Open a File at a Line Number | 064 | `gF` is isolated directly on deterministic `file:line` references. |
| 136 Open the File Under Cursor in a Split | 065 | `<C-w>f` is isolated directly. |
| 137 Operate on Inner and Outer Sentences | 068 | `is` and `as` are isolated directly. |
| 138 Recover the Latest Small Deletion | 075 | The small-delete register `\"-` is isolated directly. |
| 139 Walk Line Deletion History with Numbered Registers | 076 | Numbered delete-register recovery is isolated directly. |
| 140 Generate Lines with Expression Put | 079 | `:put =...` is isolated directly. |
| 141 Repeat One Substitution at New Scopes | 090 | `:&&` and `g&` are isolated directly. |
| 142 Reuse the Full Match in a Replacement | 093 | Replacement `&` is isolated directly. |
| 143 Reorder Captured Groups | 094 | Capture-group reordering is isolated directly. |
| 144 Change Replacement Case | 095 | Replacement case transforms are isolated directly. |
| 145 Compute Replacement Text | 096 | `\=` replacement expressions are isolated directly. |
| 146 Configure Every Window with `:windo` | 108 | `:windo` is isolated directly with explicit window-local verification. |
| 147 Select Buffers by Partial Name | 112 | Partial-name buffer selection is isolated directly. |
| 148 Open an Existing Buffer in a Split | 113 | `:sbuffer` is isolated directly. |
| 149 Restore the Most Recently Changed Line with `U` | 117 | `U` is isolated directly. |
| 150 Run a Command on Visible Fold Lines | 120 | `:folddoopen` is isolated directly. |
| 151 Traverse Quickfix History | 157 | `:colder` and `:cnewer` are isolated directly. |
| 152 Jump Spatially Through Quickfix | 158 | `:cabove` and `:cbelow` are isolated directly. |
| 153 Jump to Another Quickfix File | 159 | `:cnfile` and `:cpfile` are isolated directly. |
| 154 Filter an Existing Quickfix List | 161 | `:Cfilter` is isolated directly with `cfilter`. |
| 155 Create Quickfix from Shell Output | 162 | `:cexpr systemlist(...)` is isolated directly. |
| 156 Open Quickfix Only When Useful | 160 | `:cwindow` is isolated directly. |
| 157 Parse the Current Buffer as Errors | 163 | `:cgetbuffer` is isolated directly. |
| 158 Compile and Navigate Errors | 164 | `:make` plus quickfix navigation is isolated directly. |
| 159 Search Help into a Location List | 165 | `:lhelpgrep` is isolated directly. |
| 160 Move Diagnostics into Quickfix | 200 | `vim.diagnostic.setqflist()` is isolated directly. |
| 161 Choose a Source in a Three-Way Diff | 172 | `:diffget {bufspec}` is isolated directly. |
| 162 Refresh Diff Calculations | 173 | `:diffupdate` is isolated directly. |
| 163 Compare with a Patch Result | 174 | `:diffpatch` is isolated directly. |
| 164 Execute One Normal Command from Terminal Mode | 176 | `<C-\><C-o>` is isolated directly. |
| 165 Read Shell Output into the Buffer | 179 | `:read !{cmd}` is isolated directly. |
| 166 Navigate Between Folds | 194 | `zj` and `zk` are isolated directly. |
| 167 Adjust Fold Depth Incrementally | 195 | `zr` and `zm` are isolated directly. |
| 168 Reindent with the Equal Operator | 128 | `=` as an operator is isolated directly. |
| 169 Format Without Moving the Cursor | 130 | `gw` is isolated directly. |
| 170 Generate an Incrementing Sequence | 145 | Visual `g<C-a>` sequence generation is isolated directly. |

## Inferred Redundancy and Gap Notes

- **Resolved redundancy:** 021 and 053 now differentiate blockwise insertion from rectangular cleanup.
- **Resolved bundle cleanup:** 008, 012, 043, 083, 084, 087, and 089 were narrowed so later specialized katas carry the advanced follow-up work explicitly.
- **Out-of-catalog current katas:** 006, 013, 024, 026, 027, 049, 058, 060, 066, 067, 069, 070, 079, 086, 088, 093, 094, 095, 102, 104, and 109 are useful topics, but they do not map cleanly to the current 200-item backlog.

## Best Next Katas to Build

Prioritized from the uncovered or weakly covered backlog, biased toward foundational motions before niche or plugin-driven topics.

| Priority | Idea | Why next |
|---:|---|---|
| 1 | 180 termdebug workflow | The bundled debugger integration remains the biggest uncovered advanced built-in workflow. |
| 2 | 198-199 semantic rename and range code actions | The modern LSP editing gap is now concentrated in two still-missing actions. |
| 3 | 183-189 deeper completion sources | The completion foundation is clean now, but the specialized completion sources remain uncovered. |
| 4 | 018 and 032 WORD-end and paragraph motion | Two older motion gaps remain after the bundle cleanup. |
| 5 | 072 append to a named register | Still a direct register gap after narrowing 043. |
| 6 | 126 toggle case over a motion | Case-operator coverage is still missing `g~`. |
| 7 | 167 enable diff across existing windows | The diff foundation no longer implies `:windo diffthis`. |
| 8 | 193 reveal folds enclosing the cursor | `zv` remains a focused fold-navigation gap. |

## Backlog Clusters

- **Motion backlog:** 018, 032.
- **Register and case backlog:** 071, 072, 126.
- **Completion-source backlog:** 183, 184, 185, 186, 187, 188, 189, 190.
- **Diff, fold, and LSP backlog:** 167, 180, 193, 198, 199.
