#!/bin/bash
# Run this (in your normal terminal) to apply the social icon picture changes
set -e
cp src/components/Footer.jsx.new src/components/Footer.jsx
cp src/pages/Contact.jsx.new src/pages/Contact.jsx
cp src/pages/OurTeam.jsx.new src/pages/OurTeam.jsx || true
echo "Done. Instagram and LinkedIn are now greyscaled rounded icon pictures (click to open)."
echo "Delete the *.new *.patch *.sh files if you want."
