#!/usr/bin/env bash
npm run build
cd dist
git init
git remote add origin https://github.com/<your-username>/<your-repository-name>.git
git checkout -b gh-pages
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force
