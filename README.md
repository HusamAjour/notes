# LAB - 01

## Node Ecosystem

### Author: Husam Ajour

### Links and resources

| PR | [Link 1](https://github.com/HusamAjour/notes/pull/1)

### Modules

`Nodejs`

### Packages

`minimist`
`random-id`

### How to initialize/run the application

* e.g `node index.js --add 'note text`
* e.g `node index.js -a 'note text`
* e.g `./index.js --add 'note text`
* e.g `./index.js -a 'note text`

### Tests

* Test 1: `node index.js --add "This is a really cool thing that I wanted to remember for later"`, this will work and will return a message as says: "Adding note: This is a really cool thing that I wanted to remember for later with id = (Random)";
* Test 2: `node index.js --add`, this won't work and will return a message says: "Empty note"
* Test 3:  `node index.js --ad` "This is a really cool thing that I wanted to remember for later", this won't work and will return a message says: Wrong command.

* Test General: If you try with any action other than `add` or `a`, and if you use the `add` or `a` action not followed with a note text you'll receive an error message.

### UML

![img](assets/uml.PNG)
