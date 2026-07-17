import os

replacements = {
    "app/about/page.tsx": [
        ('Sunny" Seera', 'Sunny&quot; Seera'),
        ('aren\'t', 'aren&apos;t'),
        ('they\'re', 'they&apos;re'),
        ('you\'re', 'you&apos;re')
    ],
    "app/courses/page.tsx": [
        ("don't", "don&apos;t"),
        ("You're", "You&apos;re")
    ],
    "app/page.tsx": [
        ('Sunny" Seera', 'Sunny&quot; Seera'),
        ('aren\'t', 'aren&apos;t'),
        ('they\'re', 'they&apos;re'),
        ('you\'re', 'you&apos;re'),
        ("You're", "You&apos;re")
    ],
    "app/reviews-faq/page.tsx": [
        ("It's easy!", "It&apos;s easy!"),
        ('hours\'', 'hours&apos;')
    ],
    "components/TestimonialCarousel/TestimonialCarousel.tsx": [
        ('14"', '14&quot;')
    ]
}

for file, reps in replacements.items():
    if not os.path.exists(file):
        continue
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in reps:
        content = content.replace(old, new)
        
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed quotes in {file}")
