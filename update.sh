#!/bin/sh
cd ~/akademy
date > public/build.txt
GIT=`git pull`
if [[ $GIT =~ "Already" ]]; then
  echo $GIT
else
  npm i
  npm run build
  pm2 restart all
#tools/site-map.sh
#
#sh tools/move-build.sh
#
#tools/database/dump.sh
