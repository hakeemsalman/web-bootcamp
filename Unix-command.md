# Unix

In vs-code, keep Default Terminal profile is `git bash`.

Command Palette -> Terminal Default profile -> select git bash

## Understanding Unix command

Shell is User-interface and used to interact with Kernel. Kernel is core part of OS and it interacts with hardware.

GUI Shell is a user-friendly shell work on OS.

GUI Shell on Windows   -> windows explorer
GUI Shell on Mac       -> Mac finder
Command Line Interface -> On all OS 


[https://www.opengroup.org/openbrand/register/](https://www.opengroup.org/openbrand/register/)


So here we are using Bash - `Borne Again SHell`

## Command Line Techniques and Directory Navigation
`ls` command to `list` out the files and directories

```bash
$ ls 
```
```shell 
./           
../         
'3D Objects'/
Music/
PrintHood@
.android/
'My Documents'@
Recent@
.cache/
'Saved Games'/
.eclipse/
'Application Data'
```


---

```
$ cd Music/
```

```shell
1.mp3
lovely-song.mp3
```
---

```bash
$ cd ~ 
``` 
`~` it's a `tilder`. It is used to change directory to Default Home location

---

```bash
$ cd ..
```
Change directory from current folder to outsite folder. eg: Music to Home folder.
---

Going to beginning, press `ctrl` + `a`
Going to end, press       `ctrl` + `e`
Clear command, press `ctrl` + `u`


## Creating, Opening, and Removing Files through the Command Line

1. Creating a file using `touch` command

```bash
$ touch Text2.txt
```

2. Opening a file using `open` command
```bash
$ open Text2.txt
```

3. Removing file using `rm` command, `*` all files. To remove a directory we have to use `-r` flag in `rm` command
```bash
$ rm Text2.txt
$ rm *
$ rm -r Music/
```

4. Show current working path or directory using `pwd` command. `pwd` stands for Print Working Directory
```bash
$ pwd
```

---
Learning more about Command Line Interface check out this [link](https://www.learnenough.com/command-line-tutorial)
