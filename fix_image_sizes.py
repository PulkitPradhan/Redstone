import os
import re

def fix_image_sizes(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add sizes prop to Image with fill
    
    # We will just replace <Image ... fill ... > with <Image ... fill sizes="(max-width: 768px) 100vw, 50vw" ... >
    
    pattern = r'(<Image[^>]*\bfill\b[^>]*)>'
    
    def replacer(match):
        img_tag = match.group(1)
        if 'sizes=' not in img_tag:
            return f'{img_tag} sizes="(max-width: 768px) 100vw, 50vw">'
        return match.group(0)

    new_content = re.sub(pattern, replacer, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed image sizes in {filepath}")

fix_image_sizes('c:/Users/pulki/Desktop/Redstone/app/page.tsx')
fix_image_sizes('c:/Users/pulki/Desktop/Redstone/app/about/page.tsx')
