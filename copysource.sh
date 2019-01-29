#!/bin/bash
rm -rf ./static/*
rm precache-*
cp -r ./source_dist/build/* .
git add .
git commit -m "update"
git push origin master