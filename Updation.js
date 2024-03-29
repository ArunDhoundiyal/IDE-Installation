Updating your CCBP IDE

To update your ccbp ide to a latest version, open terminal (default Ubuntu terminal or the Ubuntu app installed in your windows system) and change directory to where you have installed the ide
cd ~/ccbp-ide

Save your code, close the existing tabs and stop the IDE
docker-compose down

Get the latest version of the docker-compose.yml file
curl -fsSL https://assets.ccbp.in/ide/docker-compose.yml -o docker-compose.yml

Pull the latest docker images
docker-compose pull

Now finally, start the IDE again
cd ~/ccbp-ide && docker-compose up -d

To check the latest version, open a terminal inside the ccbp IDE and run the below command
ccbp version

Now the latest stable version available is 1.3.3
