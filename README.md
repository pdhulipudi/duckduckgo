Download and install Node , GIT
--------
Download set-up files from below link and install

Node: https://nodejs.org/en/download/ ( version 20 and above LTS version )
GIT: https://git-scm.com/download/win

Makesure node and git are installed by checking versions: 
-> node -v && git -v

v20.11.0
git version 2.39.0.windows.2

Install VS Code and Import project
------

VS Code: https://code.visualstudio.com/download

checkout project to any local folder

-> git clone https://github.com/pdhulipudi/duckduckgo.git

Locate checkedout folder through VS code and import the project

Install the dependencies

-> npm install

Run Tests through command line
--------

Run Tests commandline from the project root folder

-> npx cypress run cypress\e2e\Test1_ToVerifyTheme.js, \cypress\e2e\Test2_ToVerifySearchAPICall.js



To Run tests on Cypress executor
-------

Run below command from project folder
-> npx cypress open

Select the browser and locate two tests 

Test1_ToVerifyTheme.js

Test2_ToVerifySearchAPICall.js

Run the cases individaul and verify the results.


