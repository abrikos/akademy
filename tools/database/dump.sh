#!/bin/bash
cd ~/akademy
now=$(date +"%Y%m%d_%H")
mongodump
zip academy dump/academy/*
#cp academy.zip build/.
unzip -l academy.zip
mv academy.zip "academy-${now}.zip"
scp "academy-${now}.zip" 192.168.1.193:/home/abrikos/Documents/backup/academy
rsync -a --ignore-existing  ~/akademy/uploads/ 192.168.1.193:/home/abrikos/Documents/backup/academy/uploads
#mv academy.zip /var/www/devportal.yakutia.science/web/

