2. System Requirements
The following hardware prerequisites are required to successfully setup CCBP IDE in your Windows System

A 64-bit Windows 10 with Version 1903 or higher, with a Build higher than 18363.1049.
A 15 GB free space on C: Drive
8 GB system RAM (Minimum).
BIOS-level hardware virtualization support must be enabled in the BIOS settings.
Note
For smooth running of the IDE, it is recommended to have 8 GB of RAM and an SSD for C: drive.
With a lesser configuration, you will experience your PC to hang occasionally as the setup is Memory and Disk intensive.
If your PC has less than 8 GB RAM, then installing Ubuntu OS alongside Windows and working on Ubuntu instead is recommended over doing the following setup.
Warning
If your PC date & time are incorrect, then you will run into issues during installation and usage. You need to update your PC's date & time and restart it before proceeding further.

Quick Tip
To check your version and build number, select Windows logo key + R , type winver, select OK.
Note
If you are running an older version of Windows 10, open "Settings" from your Windows menu, navigate to "Update & Security" and select "Check for Updates". Install all available updates and feature updates. You may need to restart multiple times in the process.




3. Enable WSL Feature
Open PowerShell as Administrator and run:

dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart



4. Enable Virtual Machine Feature
Enable the Virtual Machine Platform feature. Your system will require BIOS-level hardware virtualization support which must be enabled in the BIOS settings.

You can check whether virtualization support is enabled by checking your Task Manager.
  


Open PowerShell as Administrator and run:
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

Powershell
Restart your PC.




5. Download Kernel Package
Download the latest WSL2 Linux kernel update package for x64 PCs
Run the update package downloaded in the previous step. (Double-click to run - you will be prompted for elevated permissions, select "yes" to approve this installation.)





6. Set WSL 2 as your default version
Open PowerShell and run this command to set WSL 2 as the default version.

wsl --set-default-version 2






7. Install Linux Distribution
Install Ubuntu from Microsoft Store.
Once the installation is complete, open "Ubuntu" from start-menu.
Enter a new username and password for the WSL environment when prompted.
Note
Password will not be visible when you're typing.






8. Setup Docker
Download Docker Installer and double-click Docker Desktop Installer.exe from your admin account to run the installer.
When prompted, ensure the Enable WSL 2 Features option is selected on the Configuration page.
Follow the instructions on the installation wizard authorize the installer and proceed with the install.
When the installation is successful, click Close to complete the installation process.

To start Docker Desktop, search for Docker, and select Docker Desktop in the search results.


When the whale icon in the status bar stays steady, Docker Desktop is up-and-running, and is accessible from any terminal window.


Enable Docker Integration with the WSL


Common Errors






9. Using docker from WSL
Now search for Ubuntu in your installed applications and start the application. A terminal will be opened.

Run the below command to see the docker version
docker -v

SHELL
Run the below command to install the prerequisites for the IDE
curl -s https://assets.ccbp.in/ide/windows-post-docker-installation.sh | bash

Restart your PC
Starting the IDE
Open the Ubuntu application and run the below step to start the IDE
cd ~/ccbp-ide && docker-compose up -d

SHELL
Access the IDE from http://localhost






10. Setting up a sample workspace
Now your IDE is ready, let’s create a sample workspace by running the following commands
Step - 1 : Authentication
Authenticate to Advance Learning Portal
ccbp authenticate UJR41DFIWJ
Step - 2 : Start a sample project
Create a sample workspace and get the project’s files
ccbp start FNLL8QE5WE
Right click on the index.html, select Open With -> Preview to view the output
And you are all set for working on your further projects! 


















