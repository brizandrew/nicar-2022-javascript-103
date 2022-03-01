# Section 5: Installing Dependencies
So by now you should understand how we can seperate our code into their own files, and import them into our app. But if you wrote a great file that your collegue wanted to use, you'd have to send it to them somehow. They would have to download it and add it to their codebase, and if you found a bug and fixed it, you'd have to do all of that again. If only there was a way the entirety of the JavaScript community could share code in a consistent and easy to use way! Good news!

Dependencies are files made by other coders, uploaded to a registry, downloaded, and then used by other coders with access to that registry. The most famouse JavaScript registry is something we've already used: NPM! Private companies sometimes have their own registries with proprietary code, and there's a way to work with that, but we won't get into that for this lesson. Anyone can upload their code to NPM, and I encourage everyone to join the open-source community – but we also won't be covering that in this course. 

Dependencies solve all kinds of problems that other coders have stumbled upon. Problems as small as "trimming the white space at the end of a string" to problems as big as "combining HTML, JavaScript, and CSS files into a few efiicient files that can be uploaded to the web" (i.e. Parcel). You can find a whole list of them at [https://www.npmjs.com/](https://www.npmjs.com/). For this lesson, we'll be using a dependency made by a member of our News Nerd community named [`journalize`](https://www.npmjs.com/package/journalize). Journalize comes with a few functions useful for writing code in a journalistic context like automatically converting a number to AP style.

The first thing you need to do to use a dependency is install it:
```
npm install journalize
```

<details>
    <summary>How do I know what the dependency is named?</summary>
    When using npm, the name at the top of a depedencies NPM page is it's name. If you're ever unsure, every NPM page has a section on the top right under "Install" with a copy-able command. `npm i` is just shorthand for `npm install`.
</details>

## Using Journalize
Whether or not a dependency uses named or default exports is up to the original coder. Normally a quick look around the docs will show you an example of how to use the dependency. In the case of journalize, it uses named exports for each of its helper functions.

Let's import `apdate` in `src/renderArticle/index.js`:
```javascript
import { apdate } from 'journalize';
```

Notice just like before we're using `import`, the name of the export in curly braces, and `from`. When importing from a depencency though, you don't need to include a relative path, you can just write the name of the dependency.

Now, let's also import `pubDate` from our article file. Update the import statement to include a second import from that same file:
```diff
- import { headline } from '../article';
+ import { headline, pubDate } from '../article';
``` 

And log that instead of the headline in your `renderArticle` function:
```diff
-  console.log(headline);
+  console.log(pubDate);
```

You'll see the date being logged in the usual JavaScript format, but we want it in AP style. Make a new variable above the console.log called `apPubDate` and use the `apdate` function you imported to get it in AP style. Then log that:

```diff
-  console.log(pubDate);
+  const apPubDate = apdate(pubDate);
+  console.log(apPubDate);
```

You should see the log now display: "May 6, 2015", just like the journalism elders intended.


*–– Next up: [Rendering an Article](./6%20– Rendering%20an%20Article.md)*