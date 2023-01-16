#!/bin/bash
./stop.sh

nohup node ./bin/www >chat.log 2>&1 &

