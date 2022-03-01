# Section 3: Welcome to Parcel
[Parcel](https://parceljs.org/) is a JavaScript "framework", which at a basic level just means it's a tool (also written in JavaScript) which (if you follow its rules) will make a website for you. Common frameworks you may have heard about include:
- React
- Vue
- Gatsby
- Svelte

Each of those frameworks and build tools could easily fill an entire class (or even an entire course), which is why I've chosen to Parcel as the easiest and most intuitive to start with. At their basic level, though, most frameworks offer three services in the form of commands:
- The **"Development"** command starts up a server for you to develop with. These servers are not stable or fast enough to host an entire website with, but they're usually close enough for you to work with. They also usually come with a host of features to improve your quality of life (such as automatically reloading the page when you make changes to a file).
- The **"Build"** (technically called "transpiling" and/or "compiling"), command is the process of taking your code and all the dependencies you're using and turning it into a single JavaScript file that _most_ browsers can read. 
- The **"Export"** command is sometimes done automatically with the build command, but some frameworks keep them separate. Exporting takes your "built" files, and generates an HTML page for every page that should be on your website. For example, imagine having a single app that generates 100 posts. Build would generate the scripts needed to load each of those pages, and export would then follow up by actually make 100 HTML files. The collective name for all of these files is often called "a bundle".

The last step to making a website is to "deploy" or "publish" your pages. Most frameworks leave that up to you because there's so many ways to handle it. We'll go over a basic way in Section 6.

Now, enough with the introduction, let's use some Parcel! You should already have a directory called `src` in your working folder (this a common pattern where you put the "raw" files you're working with in a folder with that name). Inside your `src` folder is:
- `index.html`: This is our "root" HTML file. It's what we will point parcel at to use as a starting point.
- `styles.css`: You'll see in `index.html` we load this file on line 7. Parcel will know when it exports our app to pull styles from here.
- `app.js`: You'll see in `index.html` we load this file on line 8 with a type "module". Parcel will know when it builds our app to build that file and all its dependencies.

Start the development server by running:
```bash
npx parcel src/index.html
```

The terminal should give you a website to visit to see your development server. It's probably [http://localhost:1234](http://localhost:1234). Once there, open up the console (Cmd+Opt+J). You should see a blank page with a blank console, which means you're ready to start coding. In `src/app.js`, add the following code:
```javascript
console.log("Hello World");
```

Next time you save, you should see those words in the console!

<details>
    <summary>It's not refreshing!</summary>
    Sometimes your computer will cache old files, and when you refresh the page it will be showing the result of old code.
    I'm not sure why Parcel does this, but many other frameworks don't have this problem. To fix this issue, open the 
    Network Tab in your console (use Cmd+Opt+I if your console isn't open). Then check the box "Disable cache".
</details>

*–– Next up: [Your First Module](./4%20– Your%20First%20Module.md)*