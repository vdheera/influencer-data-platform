#!/bin/bash

# Create the avatars directory if it doesn't exist
mkdir -p public/images/avatars

# Move any downloaded avatar PNGs to the avatars directory
mv avatar-*.png public/images/avatars/

echo "Avatars have been moved to public/images/avatars/" 