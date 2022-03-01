# JavaScript Modules Cheatsheet

## The Command Line
To open a terminal, find the Terminal app on your computer. (For Macs it's under `Applications/Utilities/Terminal`). To run a command type in a command, potentially a subcommand, and any arguments for that command; then press enter.
- `pwd`: Prints the current directory you're working in
- `ls`: Lists the files and directories in your working directory.
- `cd <DIRECTORY_PATH_HERE>`: Changes the working directory to the path provided as an argument

*Further Reading: [CodeAcademy: Learn the Command Line](https://www.codecademy.com/learn/learn-the-command-line)*

## What is Node
Node is a [JavaScript runtime](https://www.codecademy.com/article/introduction-to-javascript-runtime-environments) which allows you to execute JavaScript on your computer (without a browser). You can install it [here](https://nodejs.org/en/download/), and it comes with a few basic commands/subcommands:
- `node`: Start a live runtime in your Terminal (exit it by hitting Ctrl+C)
- `node <PATH_TO_JS_FILE>`: Run the file passed as an argument using the runtime
- `npm init`: Start a new JavaScript project in your working directory (creates a file called `package.json`)
- `npm install`: Download all dependencies listed in the `package.json`
- `npm install <DEPENDENCY_NAME_HERE>`: Install a dependency from the NPM registry into your project
- `npx <DEPENDENCY_COMMAND_HERE>`: Many dependencies come with their own commands, use this to run those commands with the appropriate arguments.

## Welcome to Parcel
[Parcel](https://parceljs.org/) is one framework available to modern JavaScript developers. Frameworks are tools that help you convert your modules into a bundle to use as a website. Frameworks usually come with a number of opinions on how you should structure your code. Almost all frameworks come with three services (the exact command may vary from framework to framework):
- dev: Starts a development server which provides quality of life tools to make writing JavaScript in modules easier.
- build: Combines all your JavaScript modules (and your used dependencies) into one or a few files
- export: Builds an HTML page for each web page on your site (with proper links to the your static JS files)

If you're using Parcel, the command to start a development server is (exit it by hitting Ctrl+C):
```bash
npx parcel src/index.html
```

If you're using Parcel, the command to build and export is:
```bash
$ npx parcel build src/index.html --public-url ./
```

*Further Reading: [State of JS 2021: Front End Frameworks](https://2021.stateofjs.com/en-US/libraries/front-end-frameworks)*

## Custom Modules
Modules are JavaScript files that export something. There's a number of ways to [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) things in a JS file. Two common ways are default and named:

```javascript
// Default import
import nameNOTMatter from './path/to/my/module'

// Named import
import { nameDoesMatter } from './path/to/my/other/module';

// Default export
export default '2022';

// Named export
const year = 2022;
export {
  year
}
```

## Dependencies
You can find a list of dependencies on [NPM](https://www.npmjs.com/). Install them using their name by running:
```bash
npm install <DEPEDENCY_NAME>
```

Then import them usually using a default import:
```javascript
import dep from '<DEPEDENCY_NAME>';
```

Sometimes depdencies use named exports and don't have a default export. Check the dependency docs for more info about each one.

Anyone can publish to NPM so if you're not sure if something is good, you can often look at the number of weekly downloads:
- Greater than 1M: Popular and actively supported, definitely can use it
- Greater than 10K: Fairly popular, likely a bit niche, usually good to use
- Less than 1K: Likely either extremely niche or broken

Popular dependencies for coding in Journalism:
  - [`lodash`](https://www.npmjs.com/package/lodash): Helper functions for all kinds of operations
  - [`journalize`](https://www.npmjs.com/package/journalize): Helper functions for writing text in journalistic style
  - [`jquery`](https://www.npmjs.com/package/jquery): Helper functions that are [mostly unnecesary in 2022](https://youmightnotneedjquery.com/), but if you're used to using it, this is how you can import it in your modules
  - [`us`](https://www.npmjs.com/package/us): Data about US states including fips codes, AP style abbreviations, and capitals
  - [`lorem-ipsum`](https://www.npmjs.com/package/lorem-ipsum): Generates placeholder text

*Further Reading: [State of JS 2021: Popular Libraries](https://2021.stateofjs.com/en-US/other-tools)*


## Building & Publishing
If you're using Parcel, the command to build your bundle into a folder named `dist` is:

```bash
$ npx parcel build src/index.html --public-url ./
```

*Further Reading: [Deploying with AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html) and [Deploying with GitHub Pages](https://pages.github.com/)*
