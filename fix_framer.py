import os
import re

def fix_framer(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find framer-motion imports and replace 'motion' with 'm'
    pattern_import = r'import\s+\{([^}]*motion[^}]*)\}\s+from\s+[\'"]framer-motion[\'"]'
    
    def replacer_import(match):
        imports = match.group(1)
        if 'motion' in imports:
            imports = imports.replace('motion', 'm')
        return f'import {{ {imports} }} from "framer-motion"'

    new_content = re.sub(pattern_import, replacer_import, content)
    
    # Replace <motion.div with <m.div etc.
    new_content = re.sub(r'<motion\.', '<m.', new_content)
    new_content = re.sub(r'</motion\.', '</m.', new_content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed framer-motion in {filepath}")

for root, _, files in os.walk('c:/Users/pulki/Desktop/Redstone/components'):
    for file in files:
        if file.endswith('.tsx'):
            fix_framer(os.path.join(root, file))

for root, _, files in os.walk('c:/Users/pulki/Desktop/Redstone/app'):
    for file in files:
        if file.endswith('.tsx'):
            fix_framer(os.path.join(root, file))
