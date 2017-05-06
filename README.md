# conner

Programmer CLI-Butler (CLIB) Conner, for simple integrations.

####Only works with Windows.

###How to setup environment variable
```
npm i conner -g
```
* Right Click PC ->
* Properties -> 
* Advanced System Settings -> 
* Environmental Variables ->
* Click Path -> 
* Edit -> 
* New -> 
* C:\Users\\\<Your User>\AppData\Roaming\npm\node_modules\conner

# Settings

Settings are created by making a desc.json file in the root of the conner node_module
```
{ //default desc.json
  "master": "Brayan Byrdsong",
  "name": "master",
  "credentials": [
    "brayanbyrdsong@gmail.com",
    "bbyrdsong@gozeezor.com"
  ]
}
```

# Tasks

* clear-all
```
conner clear-all

/*
* Delete's the brain folder.
*/
```
* forget
```
conner forget 0

/*
* forget todo at index arg0
*/
```
* hey
```
conner hey

/*
* returns conner: "Hello, master."
*/
```
* list
```
conner list

/*
* returns a list of lists
*/
```
* look-up
```
conner look-up cat pictures

/*
* google's args
*/
```
* music
```
conner music dark sky paradise

/*
* google play music search args
*/
```
* remember
```
conner remember to test responsive-ness

/*
* adds a todo to your 'conner todo' list
*/
```
* run
```
conner run md test

/*
* runs a command in the cmd
*/
```
* run-list
```
conner run-list <filename>.bat

/*
* run's a saved list (.bat file)
*/
```
* save-list
```
conner save-list <filename>.bat

/*
* saves .bat files in conner's brain dir
*.
```
* save-template
```
conner save-template <name> <path to directory>

/*
* saves folder in conner's brain dir
*/
```
* say
```
conner say works

/*
* conner will echo anything you say appending 'conner: "args"'
*/
```
* template
```
conner template <name> <path>

/*
* pastes a template at the path
*/
```
* templates
```
conner templates

/*
* list all templates saved
*/
```
* todo
```
conner todo

/*
* list all things remembered.
*/
```
* video
```
conner video cats

/*
* youtube search args
*/
```