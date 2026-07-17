import os
import re

def fix_radio_groups(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The issue is that the main group label (e.g., "Car Rental...") doesn't have an ID
    # or the role="group" and aria-labelledby. We'll wrap radioGroups in a <fieldset> and use <legend> for the label.
    
    # We will look for this pattern:
    # <label>Title <span className={styles.required}>*</span></label>
    # <div className={styles.radioGroup}>
    
    # First, let's replace <label>...Car Rental...</label> with <fieldset>...
    
    pattern = r'<label>([^<]+(?:<span[^>]*>[^<]*</span>)?(?:[^<]*))</label>\s*<div className=\{styles.radioGroup\}>'
    
    def replacer(match):
        label_content = match.group(1)
        return f'<fieldset className={{styles.radioGroupContainer}}>\n                      <legend>{label_content}</legend>\n                      <div className={{styles.radioGroup}}>'
        
    new_content = re.sub(pattern, replacer, content)
    
    # Now we need to close the fieldset where the div closes. This is a bit tricky with regex, 
    # so we'll do it by replacing the specific known radioGroups in registration/page.tsx
    
    # Let's just do targeted replacements for the 3 groups in registration/page.tsx
    
    if 'registration/page.tsx' in filepath:
        new_content = new_content.replace(
            '<label>Car Rental for Basic Road Test ($99) <span className={styles.required}>*</span></label>\n                    <div className={styles.radioGroup}>',
            '<fieldset className={styles.fieldset}>\n                      <legend>Car Rental for Basic Road Test ($99) <span className={styles.required}>*</span></legend>\n                      <div className={styles.radioGroup}>'
        ).replace(
            '<label>Opting for an Online 15hrs Course ($100) <span className={styles.required}>*</span></label>\n                    <div className={styles.radioGroup}>',
            '<fieldset className={styles.fieldset}>\n                      <legend>Opting for an Online 15hrs Course ($100) <span className={styles.required}>*</span></legend>\n                      <div className={styles.radioGroup}>'
        ).replace(
            '<label>Payment Option <span className={styles.required}>*</span></label>\n                <div className={styles.radioGroup}>',
            '<fieldset className={styles.fieldset}>\n                  <legend>Payment Option <span className={styles.required}>*</span></legend>\n                  <div className={styles.radioGroup}>'
        )
        
        # Now close the fieldsets
        new_content = new_content.replace(
            '</label>\n                    </div>\n                  </div>\n                </div>\n                <div className={styles.col}>',
            '</label>\n                      </div>\n                    </fieldset>\n                  </div>\n                </div>\n                <div className={styles.col}>'
        )
        
        new_content = new_content.replace(
            '</label>\n                    </div>\n                  </div>\n                </div>\n              </div>',
            '</label>\n                      </div>\n                    </fieldset>\n                  </div>\n                </div>\n              </div>'
        )
        
        new_content = new_content.replace(
            '</label>\n                </div>\n              </div>\n\n              <button type="submit"',
            '</label>\n                  </div>\n                </fieldset>\n              </div>\n\n              <button type="submit"'
        )
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed radio groups in {filepath}")

fix_radio_groups('c:/Users/pulki/Desktop/Redstone/app/registration/page.tsx')
