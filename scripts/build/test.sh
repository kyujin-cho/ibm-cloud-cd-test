#!/bin/bash
set -x
set -e
VERSION=v13.8.0
DISTRO=linux-x64

npm install -g yarn
yarn install
yarn eslint .
yarn test
