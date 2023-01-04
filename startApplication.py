import subprocess
import os
import signal

relativePathToBackendServerJar = "./compiled/backend/move-dot-0.0.1.jar"
relativePathToFrontendFiles    = "./compiled/frontend/html"

backendProccess   = None
httpServerProcess = None

def runBackend():
    global backendProcess
    backendProcess = subprocess.Popen(["java", "-jar", relativePathToBackendServerJar], stdout=subprocess.DEVNULL)

def runFrontend():
    global httpServerProcess
    httpServerProcess = subprocess.Popen(["python3","-m","http.server",
                                          "--directory", relativePathToFrontendFiles,
                                          "8081"], stdout=subprocess.DEVNULL)

def waitForUserToExit():
    global httpServerProcess
    httpServerProcess.wait()

def cleanUpResources():
    global backendProcess
    global httpServerProcess
    
    if backendProcess != None:
        backendProcess.kill()
        print("Shut down backend")

    if httpServerProcess != None:
        httpServerProcess.kill()
        print("Shut down http server")

def handleStopSignals(signum, frame):
    cleanUpResources()
    os._exit(0)

def main():
    try:
        print("Siavash Hanifi - Move Dot Application")
        runBackend()
        print("Started backend, listening at localhost:8080")
        runFrontend()
        print("Serving frontend at http://localhost:8081")
        waitForUserToExit()
        cleanUpResources()
    except e:
        cleanUpResources()
        os._exit(1)

signal.signal(signal.SIGINT, handleStopSignals)
signal.signal(signal.SIGTERM, handleStopSignals)
main()