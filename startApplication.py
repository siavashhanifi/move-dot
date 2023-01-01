import subprocess
import os

relativePathToBackendServer = "./compiled/backend/rest-service-0.0.1-SNAPSHOT.jar"
relativePathToFrontendFiles = "./compiled/frontend/html"

def runBackend():
    subprocess.Popen(["java", "-jar", relativePathToBackendServer], stdout=subprocess.DEVNULL)

def runFrontend():
    popen = subprocess.Popen(["python3","-m","http.server",
                              "--directory", relativePathToFrontendFiles,
                              "802"], stdout=subprocess.DEVNULL)

def waitForUserToExit():
    os.wait()

def main():
    print("Siavash Hanifi - Move Dot Application")
    runBackend()
    print("Started backend, listening at localhost:8080")
    runFrontend()
    print("Serving frontend at http://localhost:80")
    waitForUserToExit()

main()