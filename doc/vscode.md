# VS Code

## Keyboard Driven Workflow

### Things that I would like to implement

- [x] When focused on the explorer `a` to create a new file
- [ ] When focused on the explorer `d` to delete a file
- [x] When focused on the explorer `Shift + a` to create a new folder
- [ ] Note: When work in `.md` files, `cmd +b` will bold the text, but I want it to toggle the sidebar.

````json
{
    "key": "a",
    "command": "explorer.newFile",
    "when": "explorerViewletFocus"
},
{
    "key": "shift + a",
    "command": "explorer.newFile",
    "when": "explorerViewletFocus"
}
```

### Links

- [Keyboard Shortcuts](https://code.visualstudio.com/docs/getstarted/keybindings)
-
````
