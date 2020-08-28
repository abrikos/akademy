#!/bin/bash
cd ~/akademy
now=$(date +"%m_%d_%Y")
mongodump
zip academy dump/academy/*
#cp academy.zip build/.
unzip -l academy.zip
mv academy.zip "academy-${now}.zip"
scp "academy-${now}.zip" 192.168.1.148:/home/abrikos/Documents/backup/academy
#mv academy.zip /var/www/devportal.yakutia.science/web/

