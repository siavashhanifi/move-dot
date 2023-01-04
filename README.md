<h1>Move Dot</h1>

<p>This is a simple frontend-backend-split web application
written in React.js (with TypeScript) and Java with
Spring Boot. It allows the user to move a dot up, down, left or right
in a 3x3 matrix. Each move updates the dot-position whose
state is stored in the backend. The frontend polls the backend for the dot-position every
100millisecond. Thus in the case when more than one 
frontends are active at the same time; all dot-movements
will be shared between the users.</p>

<h3>Running the application</h3>
<p>The project comes with a set of pre-compiled files and 
a script "startApplication.py" which starts the backend
and hosts the frontend on an http-server. It requires that
Java Runtime Environment (JRE) 17 and python3 is installed.
If the prerequisites are installed simply run:</p>

python3 ./startApplication.py

<h3>Software Design & Documentation</h3>
<p>The code has been designed and written following the MVC-pattern for both frontend and backend. This design is depicted in uml diagrams written in plantuml and exported as .png file and can be found in the /documentation folder.</p>

<h3>Testing</h3>
<p>Testing of the logic and the rest interface is done on the
backend.</p>
<h3>Compiling the source code</h3>
<p>In order to compile the source code follow these instructions:</p>

<h4>Backend:</h4> 
<ol>
    <li>cd ./src/backend/</li>
    <li>(linux) ./gradlew build, (windows) ./gradle.bat build </li>
    <li>compiled jar will be found in /build/libs</li>
</ol>
<h4>Frontend:</h4>
<ol>
    <li>cd ./src/frontend</li>
    <li>npm install</li>
    <li>npm run-script build</li>
</ol>
