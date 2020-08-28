#!/bin/bash
now=$(date +"%m_%d_%Y")
mongodump
zip academy dump/academy/*
#cp academy.zip build/.
unzip -l academy.zip
scp ~/akademy/academy.zip "192.168.1.148:/home/abrikos/backup/akademy-${now}.zip"
#mv academy.zip /var/www/devportal.yakutia.science/web/

