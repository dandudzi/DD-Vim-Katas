### Insert current word at the command prompt

Rename the variable 'country' to 'counter':

```javascript
var country;
for (country = 1; country <= 10; country++) {
  // Do something with country
}
```

Start on line 6 at the 't' character
`*` - selects all the words 'country'
`cwcounter<Esc>` - replaces the word with counter
`:%s//<C-r><C-w>/g` - gets the current word for the substitute command

`q:` - open history of commands
`<CR> / ⏎` - executes commands
`q/` - open search history
