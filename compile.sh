#!/bin/bash
mkdir -p ./target/static/
cp -r ./target/cljsbuild/public/* ./target/static/
cp -r ./resources/public/* ./target/static/
cp ./build-files/index.html ./target/static/