#!/bin/sh

git stash
git checkout main
git pull

npm install
npm run build
git checkout gh-pages
git pull

cp -r dist/* .

rm -rf dist



