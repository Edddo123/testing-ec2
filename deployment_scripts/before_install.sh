#!/bin/bash
FILE=/home/admin/testing-ec2/app.js
if test -f "$FILE"; then
   echo "$FILE exists"
   cd /home/admin/
   pm2 stop --silent app.js
   pm2 delete app.js
   killall -9 node
else 
    echo "$FILE does not exist."
fi
cd /home/admin/
sudo rm -rf app
sudo mkdir app
