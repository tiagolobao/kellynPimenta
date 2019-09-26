#!/bin/bash
echo precompiling...
sass split.scss:../assets/split.css
tsc script.ts
rm ../assets/script.js
mv script.js ../assets/script.js
