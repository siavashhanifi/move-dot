This is a simple frontend-backend-split web application
written in React.js (with TypeScript) and Java with
Spring Boot.

It allows the user to move a dot up, down, left or right
in a 3x3 matrix. Each move updates the dot-position whose
state is stored in the backend. 

The frontend polls the backend for the dot-position every
100millisecond. Thus in the case when more than one 
frontends are active at the same time; all dot-movements
will be shared between the users.

The project comes with a set of pre-compiled files and 
a script "startApplication.py" which starts the backend
and hosts the frontend on an http-server. It requires that
Java Runtime Environment (JRE) 17 and python3 is installed.
If the prerequisites are installed simply run:

python3 ./startApplication.py

Uml diagrams written in plantuml and exported as .png files 
can be found in the /documentation folder.

Testing of the logic and the rest interface is done on the
backend.

In order to compile the source code follow these instructions:

Backend: 1. cd ./src/backend/
         2.(linux) ./gradlew build
         2.(windows) ./gradle.bat build
         3. compiled jar will be found in /build/libs

Frontend: 1. cd ./src/frontend
          2. npm install
          3. npm run-script build