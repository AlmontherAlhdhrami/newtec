#!/bin/bash
# Script to replace fonts in all .tsx files

# Replace Tajawal with Noto Kufi Arabic
sed -i "s/fontFamily: 'Tajawal, sans-serif'/fontFamily: 'Noto Kufi Arabic, sans-serif'/g" /src/app/components/*.tsx

# Replace Amiri with Ruwudu  
sed -i "s/fontFamily: 'Amiri, serif'/fontFamily: 'Ruwudu, serif'/g" /src/app/components/*.tsx

echo "Font replacement completed!"
