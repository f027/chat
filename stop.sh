#!/bin/bash

# Find and kill the process listening on port 3002

# Get the process ID of the process listening on port 3002
PID=`lsof -i :3002 | awk 'NR>1 {print $2}'`

# Kill the process
if [ -z "$PID" ]; then
echo "No process listening on port 3002"
else
echo "Killing process $PID"
kill -9 $PID
fi



