#!/bin/sh
cd ~/akademy
git pull
tools/site-map.sh
npm run build
sh tools/move-build.sh
pm2 restart all
tools/database/dump.sh
