#!/bin/bash
echo precompiling...
sass style.scss:../assets/style.css
tsc script.ts
rm ../assets/script.js
mv script.js ../assets/script.js
