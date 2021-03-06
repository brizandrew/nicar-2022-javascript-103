# Section 6: Rendering an Article
Now, it's time to put it all together!

As a quick rehash, remember the browser has a number of built-in functions for you to use. You've been using one of them quite frequently throughout this lesson (console.log). You can find a whole list of them on [MDN](https://developer.mozilla.org/en-US/docs/Web/API). For this final section you'll be using these two:
  - [document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById): Selects an element on the page with the ID supplied.
  - [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener): Runs a "callback" function when the event is fired.

Also available to you are a set of properties (these differ from functions because they're not "called" using parenthesis). You'll be using two of these too:
  - [window.innerWidth (READ ONLY)](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth): The current width of the user's window.
  - [element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth): Gets/sets the HTML inside an element.


The goal for this section is to have five JavaScript files in your final project, organized like proper modules:
- app.js: The root of the app, this is what Parcel will run – it will set up our rendering cycle
- article.js: The data and metadata of the article being rendered
- renderArticle/index.js: The root of the rendering module – it will determine which renderer to use and call it
- renderArticle/renderDesktop/index.js: It will import the article data, and render a layout appropriate for desktop users
- renderArticle/renderMobile/index.js: It will import the article data, and render a layout appropriate for mobile users

I'm sure we're short on time, so let's get started!

## The Mobile Renderer
Make a file located at `src/renderArticle/renderMobile/index.js`. Inside paste the following:
```javascript
// src/renderArticle/renderMobile/index.js
import { headline, body, coverArt, pubDate } from '../../article';
import { apdate, widont } from 'journalize';

export default function renderDesktop(){
  return `
    <div class="article mobile">
      <h1>${widont(headline)}</h1>

      <img class="cover-art mobile" src="${coverArt}" />

      <p class="pub-date">
        Published ${apdate(pubDate)}
      </p>

      ${body.map(text => `<p>${text}</p>`).join('')}
    </div>
  `;
}
```

Let's go over what each line does:
- Line 1: imports the data and metadata of the article.
- Line 2: imports two helper functions from journalize we'll want to use.
  - `apdate` which converts date's into AP style
  - `widont` which eliminates [orphans and widows](https://en.wikipedia.org/wiki/Widows_and_orphans)
- Line 4: Uses the default export syntax to export our function.
- Line 5: Returns a string created using string interpolation
- Line 6: Starts with a typical `<div>`, nothing too special
- Line 7: Passes the headline into `widont` to remove any orphans, and put the result in an `<h1>`.
- Line 9: Passes the cover art URL as is into the src property of an image.
- Line 11-13: Passes the publish date into `apdate`, adds the word "Published" and wraps that in a `<p>` tag.
- Line 15: We use two array functions, [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [`join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) to wrap each sentence in body into its own `<p>` tag.
- Line 16-18: Close the div, end the string, and end the function (respectively).

## The Desktop Renderer
Make a file located at `src/renderArticle/renderDesktop/index.js`. Inside we'll paste the following:
```javascript
// src/renderArticle/renderDesktop/index.js
import { headline, body, coverArt, pubDate } from '../../article';
import { apdate, widont } from 'journalize';

export default function renderDesktop(){
  const firstParagraph = body[0];
  const otherParagraphs = body.slice(1);

  return `
    <div class="article desktop">
    <h1>${widont(headline)}</h1>
      
      <p class="pub-date">
        Published ${apdate(pubDate)}
      </p>
      
      <p>${firstParagraph}</p>

      <img class="cover-art desktop" src="${coverArt}" />

      ${otherParagraphs.map(text => `<p>${text}</p>`).join('')}
    </div>
  `;
}
```

You'll notice, most of this is the same with two exceptions. Lines 5 and 6 break the first sentence away from the body using the standard square bracket accessor (`[]`), and then save everything EXCEPT the first sentence into a variable named `otherParagraphs` by using the array [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) function. With those two separated Line 16 can add the first paragraph by itself above the image, followed by the other paragraphs after it. This is the stragegy on the desktop view because you can use CSS to "float" the image to the right after the first paragraph (this CSS has already been written in `src/styles.css`).

## The Switcher
Delete everything you currently have in `src/renderArticle/index.js` and replace it with: 
```javascript
// src/renderArticle/index.js
export default function renderArticle(){

}
```

You're ready with a clean slate to write this function. Remember, the goal of this "switcher" function is threefold:
- Determine which renderer to use
- Use that renderer to get the right HTML
- Update the page to show the new HTML

First up, import both renderers:
```diff
// src/renderArticle/index.js

+ import renderMobile from './renderMobile';
+ import renderDesktop from './renderDesktop';

export default function renderArticle(){

}
```

Next, use `window.innerWidth` to determine the current width of the page:
```diff
// src/renderArticle/index.js

import renderMobile from './renderMobile';
import renderDesktop from './renderDesktop';

export default function renderArticle(){
+ const windowWidth = window.innerWidth;
}
```

Once you know the width of the page, determine where the mobile cutoff is going is (760px for the sake of example). Then, you can use an if clause to use the right renderer:
```diff
// src/renderArticle/index.js

import renderMobile from './renderMobile';
import renderDesktop from './renderDesktop';

export default function renderArticle(){
  const windowWidth = window.innerWidth;
  
+ if(windowWidth > 760){
+   const content = renderDesktop();
+ } else {
+   const content = renderMobile();
+ }
}
```

And lastly, use `getElementById` and `innerHTML` to render the content on to the page:
```diff
// src/renderArticle/index.js

import renderMobile from './renderMobile';
import renderDesktop from './renderDesktop';

export default function renderArticle(){
  const windowWidth = window.innerWidth;
+ const container = document.getElementById('app');
  
  if(windowWidth > 760){
    const content = renderDesktop();
+   container.innerHTML = content;
  } else {
    const content = renderMobile();
+   container.innerHTML = content;
  }
}
```

## The Main App
With your renderers ready to go there's only two more things to do: use it, and set up an event listener to use it every time the window changes size. In `src/app.js` replace what's there with:

```javascript
// src/app.js

import renderArticle from './renderArticle';

renderArticle();
window.addEventListener('resize', renderArticle);
```

Line 1 imports the switcher function. Line 3 runs it, and Line 4 sets up an event listener so that every time the window "resizes", it runs the switcher function again.

And if you did all this right, you should see the article rendering on the page. If you shrink the window down past 760 pixels, you should see the content change to now render a mobile version. 

*–– Next up: [Building & Publishing](./7%20– Building%20&%20Publishing.md)*