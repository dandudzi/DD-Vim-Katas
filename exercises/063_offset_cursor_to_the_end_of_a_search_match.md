### Offset cursor to the end of a search match

Use this text as an example:

```text
Aim to learn a new programming lang each year.
Which lang did you pick up last year?
Which langs would you like to learn?
```

Task: replace "lang" with "language".

`{start} on A of Aim` - initial position
`/lang/e<CR>` - search for 'lang', `/e` offsets cursor to the end of the match (on 'g')
`a` - enter Insert mode after the cursor (append)
`uage<Esc>` - type "uage" to turn "lang" into "language", then exit Insert mode
`n` - jump to next 'lang' match (cursor lands on 'g' due to `/e` offset)
`.` - repeat the last edit (`auage<Esc>`)
`n.` - repeat for the third match
