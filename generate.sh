#!/bin/bash

make clean
make

nohup xdg-open document.pdf

make clean

if [ -f nohup.out ]
then
  rm nohup.out
fi