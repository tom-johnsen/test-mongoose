# Useful commands in the terminal

## Basic files and folder operations

- `ls`: list files in the current directory
- `cd`: change directory
- `pwd`: print the current directory
- `mkdir`: create a new directory
- `rm`: remove a file or directory
- `mv`: rename a file or directory
- `cp`: copy a file or directory
- `touch`: create a new file
- `cat`: display a file
- `grep`: search a file for a string
- `find`: search a directory for a file

## Find/show/terminate processes

- `ps`: list processes
- `ps -a`: list all processes
- `ps -fp PID`: show process information for a given PID
- `top`: show processes by CPU usage
- `lsof -i :PORT`: list processes using the specified PORT
- `kill PID`: terminate a process by its PID
- `pkill -f "NAME"`: terminate processes by their NAME

## Administrative

- `sudo`: run a command as root
- `sudo su`: switch to root user
- `chmod`: change file permissions
- `chown`: change file ownership
- `chgrp`: change file group ownership
- `chattr`: change file attributes
- `df`: display disk usage information
- `free`: display memory usage information
- `id`: display user information
- `who`: display users currently logged in
- `whoami`: display the current user
- `clear`: clear the screen
- `history`: display the command history
- `history -c`: clear the command history

## apt (or apt-get)

- `apt update`: update the package list
- `apt upgrade`: upgrade installed packages
- `apt install`: install packages
- `apt remove`: remove packages
- `apt purge`: purge packages
- `apt autoremove`: remove unused packages
- `apt clean`: remove downloaded packages
- `apt search`: search for packages
- `apt show`: show package information
- `apt list`: list available packages
