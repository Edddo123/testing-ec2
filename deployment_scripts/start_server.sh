#!/bin/bash
cd /home/admin/testing-ec2
NODE_ENV=production pm2 start ecosystem.config.js -f
