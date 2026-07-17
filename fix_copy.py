import os

# Fix emails
def fix_emails(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if not file.endswith(('.tsx', '.ts')):
                continue
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            if 'infor@redstonedrivingschool.com' in content:
                content = content.replace('infor@redstonedrivingschool.com', 'info@redstonedrivingschool.com')
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed email in {path}")

fix_emails('c:/Users/pulki/Desktop/Redstone/app')
fix_emails('c:/Users/pulki/Desktop/Redstone/components')

# Fix text in app/page.tsx
page_path = 'c:/Users/pulki/Desktop/Redstone/app/page.tsx'
with open(page_path, 'r', encoding='utf-8') as f:
    content = f.read()

old_text = "Redstone is a hub of trained professionals backed by more than three decades of rich experience. We are known for preparing convinced, trained, and adept drivers by instilling the utmost confidence in them through our comprehensive online classes and expert, hands-on in-car instruction."
new_text = "Redstone Driving School is a hub of trained professionals, backed by more than a decade of rich experience. We are known for preparing safe, adept drivers by instilling the utmost confidence in them through our comprehensive online classes and expert, hands-on in-car instruction."
if old_text in content:
    content = content.replace(old_text, new_text)
    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed text in page.tsx")
else:
    print("Text not found in page.tsx")

# Fix text in app/about/page.tsx
about_path = 'c:/Users/pulki/Desktop/Redstone/app/about/page.tsx'
with open(about_path, 'r', encoding='utf-8') as f:
    content = f.read()

old_text_about = "Redstone is a hub of trained professionals backed by more than three decades of rich experience. We are known for preparing convinced, trained, and adept drivers by instilling the utmost confidence in them through our comprehensive online classes and calm, expert in-car instruction."
new_text_about = "Redstone Driving School is a hub of trained professionals, backed by more than a decade of rich experience. We are known for preparing safe, adept drivers by instilling the utmost confidence in them through our comprehensive online classes and calm, expert in-car instruction."

if old_text_about in content:
    content = content.replace(old_text_about, new_text_about)
    with open(about_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed text in about/page.tsx")
else:
    print("Text not found in about/page.tsx")
