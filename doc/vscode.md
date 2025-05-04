# VS Code

## Keyboard Driven Workflow

### Things that I would like to implement

- [ ] When focused on the explorer `a` to create a new file
- [ ] When focused on the explorer `d` to delete a file
- [ ] When focused on the explorer `Shift + a` to create a new folder

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
