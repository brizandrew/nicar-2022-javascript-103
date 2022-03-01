# Section 1: The Comand Line
In order to use modern JavaScript tools, you'll need a _very_ fundamental primer on the Terminal. Terminal is an app that all MacOS and Linux computers come with that allows you to run bash commands (you can download [a bash terminal program for Windows](https://gitforwindows.org/) as well). You use the terminal by typing in bash commands and hitting enter. There's LOTS of commands to start and installing new software often gives you even more. For today's lesson we're going to focus on only a few.

The first command is `pwd` which stands for "print working directory" and tells you what folder on your computer you're currently working in:
```bash
pwd
```

You'll likely see something like (`/Users/abriz`). Your user directory is usually the folder you start in when you first open the terminal. You can then use another command to see the files and folders in this directory: `ls`. You should see a whole list of files and other directories inside your user directory. 

To "open" one of them (like you would double-click in a normal Finder window) we use the `cd` ("change directory") command along with the name of the folder like this (don't use the angle brackets `<>`, that's just for the example):
```bash
cd <INSERT_NAME_OF_DIRECTORY_HERE>
```

One "cheat" you can do with cd though is find the folder you want to go toin Finder. Write the letters "cd" and a space in the Terminal. And then, drag the folder into the Terminal. You should see a path show up. Finaly, hit enter! Let's CD into the directory called `1 – Start Here`.

*–– Next up: [What is Node?](2%20– What%20is%20Node.md)*