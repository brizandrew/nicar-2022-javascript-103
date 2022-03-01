# Section 4: Your First Module
One of the benefits of using modern, modular JavaScript is that you can organize your code into seperate files like you would in any other programming language. In JavaScript, you do this by importing and exporting primitive types or objects (which includes arrays and functions). Any file that exports something is called a "Module".


## Coding a Default Export
In order to import something into your main file, you first need to create a module. Let's make a folder called `renderArticle` in our `src` directory. And inside that, make a file called `index.js`. 

<details>
    <summary>Why index.js?</summary>
    A common pattern you see in JavaScript is there being a filed called "index.js" inside a folder which [represents an entry point](https://stackoverflow.com/questions/21063587/what-is-index-js-used-for-in-node-js-projects) into the module. Most frameworks will then interpret an attempt to "import" the folder as an attempt to import that index file. For example, if you import "src/renderArticle", Parcel knows to look for the file "src/renderArticle/index.js".
</details>

Inside `index.js`, paste 
```javascript
// src/renderArticle/index.js

export default function renderArticle(){
  console.log('Render article!');
}
```

This is what's called the "default export" syntax. You start with the keywords "export default", and then you can put any JavaScript primitive type or object you'd to export.

## Coding a Default Import

Now that you've exported something, let's go back to `app.js` and import it! Inside `app.js`, delete what you have and paste the following:
```javascript
// src/app.js

import renderArticle from "./renderArticle";

renderArticle();
```

This is the "default import" syntax in which you write the keyword "import", followed by whatever you want to name the import in this file (think of this as creating a new variable in your file) then the keyword "from" and then a relative path to the file you're trying to import. (Why don't you need the `index.js` part? Read "Why index.js?" above.) 

Finally, since you imported a function, you can then run it. You should see the output message change.

**REMEMBER!** When using "default" imports/exports the name of the thing exported (function, variable, array, etc.) does NOT need to match the name used when imported. Default exports are useful when your file only needs to export one thing.

## Named Imports/Exports
I've saved you some time by providing the text and metadata to a POLITICO article and coding it using "named" exports. Unlike default imports, the name of these DO need to match when you import them. Named exports are useful when your file needs to export multiple things. Check out the file named `src/article.js`. You should see four named exports called `headline`, `coverArt`, `pubDate`, and `body`. Named exports usually start with a variable being declared:

```javascript
// src/article.js

const headline = "Bees are good,' Obama says as children scream";
```

And then have a list of those exports at the bottom wrapped in curly braces (`{}`) and seperated by commas:

```javascript
// src/article.js

export {
  headline,
}
```

With the named exports ready, let's go into `src/renderArticle/index.js` and import just the headline for now. At the top of the page add the following:

```javascript
// src/renderArticle/index.js

import { headline } from '../article';
```

You can see above that the syntax is similiar. Start with the keyword `import`, followed by the name of the export in curly braces. Then, add the keyword `from` and finally the relative path to the file.

<details>
    <summary>Why no ".js?"</summary>
    Another common pattern you see in JavaScript is to avoid using the ".js" at the end of a JavaScript file. Most frameworks will assume that a file without an extension is a JavaScript file and will import it as such. As you get into more complicated setups you can import other types of files and write "loaders" so that your framework understands how to handle each file.
</details>

Now, swap out the argument to console.log from `'Render article!'` to just `headline` (no quotes, becuase it's not the STRING, `"headline"`). Once you save, you should see the console logging the headline to the article:

```diff
// src/renderArticle/index.js

-  console.log('Render article!');
+  console.log(headline);
```

## Other Import/Export Syntaxes
There's actually a lot more than just these two ways of importing and exporting things in JavaScript. MDN keeps a handy list of the available syntaxes for both [imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [exports](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export).

*–– Next up: [Installing Dependencies](./5%20– Installing%20Dependencies.md)*