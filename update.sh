#!/bin/sh
cd ~/akademy


GIT=`git pull`
if [[ $GIT =~ "Already" ]]; then
  date > public/build.txt
  echo $GIT
else
  npm i
  npm run build
  pm2 restart all
fi