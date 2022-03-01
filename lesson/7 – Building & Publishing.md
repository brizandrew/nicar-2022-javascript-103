# Section 7: Building & Publishing

To turn you src files into built and exported website files using Parcel, run the following command:

```bash
npx parcel build src/index.html --public-url ./
```

<details>
    <summary>The build failed!</summary>
    If you see an error that says "Target "main" declares an output file path of "testme.js"", go to your `src/package.json` file and delete the line that reads: <code>"main": "testme.js",</code>. Because there was a JavaScript file in your folder when you ran `npm init`, there's a chance it added that line which shouldn't be there.
</details>

This will save those files in a folder called `dist`. You can then upload the contents of that folder to any server you have access to.

There are countless ways to upload files to a server for public use (and plenty of pitfalls to know about if you're writing your own method from scratch). As such, it's beyond the scope of this course, but check out [Amazon Web Services's tutorial](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html) for a tutorial on using their S3 service or [GitHub Page's](https://pages.github.com/) for help using GitHub for similiar results.