import os
import re

def fix_labels(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all inputs/selects/textareas with a name attribute inside a label
    # or preceded by a label and link them with htmlFor and id.
    
    # We will use a regex to find all <label>...</label> \s* <input/select/textarea name="xyz" ...>
    # and replace them with <label htmlFor="xyz">...</label> \s* <input/select/textarea id="xyz" name="xyz" ...>
    
    pattern = r'<label>(.*?)</label>\s*<(input|select|textarea)([^>]*)name="([^"]+)"([^>]*)>'
    
    def replacer(match):
        label_content = match.group(1)
        tag = match.group(2)
        before_name = match.group(3)
        name = match.group(4)
        after_name = match.group(5)
        
        # If it already has an id, don't mess with it (unlikely in this codebase)
        if 'id=' in before_name or 'id=' in after_name:
            return match.group(0)
            
        return f'<label htmlFor="{name}">{label_content}</label>\n                    <{tag} id="{name}"{before_name}name="{name}"{after_name}>'

    new_content = re.sub(pattern, replacer, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed labels in {filepath}")

fix_labels('c:/Users/pulki/Desktop/Redstone/app/contact/page.tsx')
fix_labels('c:/Users/pulki/Desktop/Redstone/app/registration/page.tsx')
