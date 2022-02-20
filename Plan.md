# Javascript 103 (Modules) Lesson Plan

## What you should know coming in
- HTML
  - Basic tag structure
  - How to make a page using tags
- JavaScript
  - Variables
  - Conditionals
  - Functions
  - Objects
  - "The Console" (How to open it)
  - "The Dom" (generally speaking)
  - Template string literals (hopefully)


## What this class will be covering
#### 0: Comand Line
- Brief introduction to the command line and how to navigate directories
- Brief introduction to node, npm, and npx

#### 1: Start Here
Introduction to Node Frameworks (through [Parcel](https://parceljs.org/), but keeping it high level and general)
- What is "dev" or "start" (development servers)
- What is "build" (transpiling/compiling)
- What is "export" (making HTML pages)

```
$ npx parcel src/index.html
```

#### 2: Importing Your Own Files
Introduction to the ES6 import/export syntax
- Using the "default" import/export
- Using named exports
- Using * imports
- [All imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [All exports](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

#### 3: Installing Dependencies
What are dependencies, how do you find them, and how do you use them?
- Finding dependencies
  - How to find things in the NPM registry
  - Things to look out for when choosing a dependency
- Installing dependencies
- Importing depdendencies
- Dependencies demo (ask audience for favorites, otherwise use below)
  - journalize
  - lodash
  - jquery
  - us
  - lorem-ipsum

#### 4: Native Web APIs
Dependencies are great, but modern browswers come with a lot of [built-in functionality](https://developer.mozilla.org/en-US/docs/Web/API).
  - [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
  - [window.innerWidth](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth)
  - [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  - [createContextualFragment](https://davidwalsh.name/convert-html-stings-dom-nodes)
  - [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

#### 5: Rebuild & Deploy
Briefly remind them about Parcel's build/export command. And talk about what "deployment" looks like.
- http://andrewbriz.work/nicar/js-103/

```
$ npx parcel build src/index.html --public-url ./
```