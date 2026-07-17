import os
import re

def fix_buttons(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find plain <button> and replace with <button type="button"> unless it's type="submit"
    # We will use regex to find buttons without type attribute
    
    # Simple regex to find <button ...> where type= is not present
    pattern = r'<button(?![^>]*type=)([^>]*)>'
    
    def replacer(match):
        attributes = match.group(1)
        return f'<button type="button"{attributes}>'

    new_content = re.sub(pattern, replacer, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed buttons in {filepath}")

fix_buttons('c:/Users/pulki/Desktop/Redstone/components/FaqAccordion/FaqAccordion.tsx')
fix_buttons('c:/Users/pulki/Desktop/Redstone/components/Navbar/Navbar.tsx')
fix_buttons('c:/Users/pulki/Desktop/Redstone/components/TestimonialCarousel/TestimonialCarousel.tsx')
