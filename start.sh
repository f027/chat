#!/bin/bash
# Find the process ID for port 3002
port=3002
#根据端口号查询对应的pid
pid=$(netstat -nlp | grep :3002 | awk '{print $7}' | awk -F"/" '{ print $1 }');

#杀掉对应的进程，如果pid不存在，则不执行
if [  -n  "$pid"  ];  then
    echo "kill pid $pid"
    kill  -9  $pid;
fi

echo "start server :  node ./bin/www "
nohup node ./bin/www >>chat.log 2>&1 &
echo "start server success , logfile is chat.log"
tail -f chat.log
