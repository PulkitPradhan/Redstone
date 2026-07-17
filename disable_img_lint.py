import os

files = [
    "app/page.tsx",
    "app/registration/page.tsx",
    "components/Hero/Hero.tsx",
    "components/SiteLoader/SiteLoader.tsx"
]

disable_comment = "/* eslint-disable @next/next/no-img-element */\n"

for file in files:
    if not os.path.exists(file):
        continue
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if disable_comment not in content:
        content = disable_comment + content
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Added disable comment to {file}")
