import os
import re

def optimize_images(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find plain <img src="..." alt="..."> tags and replace with <Image src="..." alt="..." fill />
    # Also we need to make sure next/image is imported
    
    # First, let's see if there are any <img> tags
    if '<img ' not in content:
        return
        
    # We will replace <img with <Image
    # We will also remove the eslint-disable comment
    new_content = content.replace('{/* eslint-disable-next-line @next/next/no-img-element */}', '')
    new_content = re.sub(r'<img\s+', '<Image ', new_content)
    
    # If the file uses next/image we need to import it
    if 'next/image' not in new_content:
        # Add import at the top
        new_content = "import Image from 'next/image';\n" + new_content
        
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed images in {filepath}")

optimize_images('c:/Users/pulki/Desktop/Redstone/app/about/page.tsx')
optimize_images('c:/Users/pulki/Desktop/Redstone/app/page.tsx')
