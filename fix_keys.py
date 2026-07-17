import os
import re

def fix_array_keys(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # We need to replace array index keys with a string combination or a specific ID
    # Since these are static arrays in the codebase, we'll use a sanitized title/question as the key
    
    if 'app/page.tsx' in filepath:
        # {feature.title} is available.
        # Replace key={i} with key={feature.title}
        new_content = content.replace('key={i}', 'key={feature.title}')
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed array key in {filepath}")
            
    if 'FaqAccordion.tsx' in filepath:
        # {item.question} is available
        new_content = content.replace('key={index}', 'key={item.question}')
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed array key in {filepath}")
            
    if 'TestimonialCarousel.tsx' in filepath:
        # {testi.author} is available
        new_content = content.replace('key={i}', 'key={testi.author}')
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed array key in {filepath}")

fix_array_keys('c:/Users/pulki/Desktop/Redstone/app/page.tsx')
fix_array_keys('c:/Users/pulki/Desktop/Redstone/components/FaqAccordion/FaqAccordion.tsx')
fix_array_keys('c:/Users/pulki/Desktop/Redstone/components/TestimonialCarousel/TestimonialCarousel.tsx')
