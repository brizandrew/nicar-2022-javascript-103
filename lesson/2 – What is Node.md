# Section 2: What is Node
Node is a "JavaScript runtime". All browsers come with a runtime built-in, which you use to run JavaScript code directly in the console as you did in the previous class. In order to run JavaScript locally on our computer, you need to a program to be able to convert the code into actions taken on your computer. By far, the most common is called Node. 

If you're using the conference laptop's you should already have it installed, but if you're doing this at home, you can download the latest version [here](https://nodejs.org/en/download/). Once installed, your Terminal will have three new commands it can run `node`, `npm`, and `npx`.

If you've ever used Python, the `node` command works the same way as the `python` one. You can either just type `node` and hit enter which will bring up a live console in your Terminal (the same way it works in the browswer). Or you can write the path to a file after "node" and it will run that file. Try typing:

```bash
node testme.js
```

In reality, you'll rarely actually use the `node` command, but it's good to know it's there to test things with like this. 

One command you will definitely use is `npm` which stands for "node package manager". It's used to start a project and download "dependencies" from the internet (more on that in Section 3). 

First, to initialize your project run:
```bash
npm init
```

"npm" is a command with subcommands, one of which is used to "init" (or initialize) your project. This will ask you a few questions, which you can mostly ignore if this is going to be personal code (i.e. not code you're going to publish for others to download). Next, we're going to use another common npm pattern which is:

```bash
npm install parcel
```

Another subcommand is "install" which downloads open-source code you can use for your projects. The depedency we're installing now is called [Parcel](https://parceljs.org/). 

The last command that comes with Node is `npx`: node's "package runner" (I guess NPR was a taken accronym). Some dependencies come with their own node commands which we can use with "npx". Parcel is one of those dependencies, and we'll use it with npx in the next section.

*?????? Next up: [Welcome to Parcel](./3%20?????Welcome%20to%20Parcel.md)*