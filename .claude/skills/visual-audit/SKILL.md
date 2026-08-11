---
name: visual-audit
description: "MANDATORY visual verification after any CSS, color, theme, or design change. Use this skill EVERY TIME you modify colors, backgrounds, themes (dark/light), CSS variables, or deploy a design change. This skill prevents the #1 design bug: invisible text from mismatched foreground/background colors. MUST run before telling the user 'done' or 'deployed'. Triggers on: CSS edits, color changes, theme switches, dark mode, light mode, style deployments, any visual/UI change."
---

# Visual Audit

You have shipped invisible text before. White text on white backgrounds. Dark text on dark backgrounds. This skill exists because you kept telling the user "it's done" without checking.

**This is not optional. This is a gate.**

## When This Triggers

After ANY of these actions:
- Editing CSS (inline, file, or variables)
- Changing colors, backgrounds, or themes
- Deploying a design change
- Switching between dark/light modes
- Modifying any visual element

## The Audit Process

Before saying "done", "deployed", "fixed", or anything that implies completion:

### Step 1: Verify via JavaScript (preferred)

Inject JS to check computed styles of key elements:

```javascript
// Check critical text elements against their backgrounds
var issues = [];
document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,span,td,th,a,label,button,div').forEach(function(el) {
    var style = getComputedStyle(el);
    var color = style.color;
    var bg = style.backgroundColor;
    if (bg === 'rgba(0, 0, 0, 0)') return; // transparent, skip
    
    // Parse RGB values
    var fg = color.match(/\d+/g);
    var bgc = bg.match(/\d+/g);
    if (!fg || !bgc) return;
    
    // Calculate relative luminance difference
    var fgLum = (0.299 * fg[0] + 0.587 * fg[1] + 0.114 * fg[2]);
    var bgLum = (0.299 * bgc[0] + 0.587 * bgc[1] + 0.114 * bgc[2]);
    var diff = Math.abs(fgLum - bgLum);
    
    if (diff < 40) { // Too similar = unreadable
        issues.push({
            tag: el.tagName,
            text: el.innerText.substring(0, 50),
            color: color,
            bg: bg,
            contrast: diff
        });
    }
});
JSON.stringify({issues: issues.slice(0, 10), total: issues.length});
```

### Step 2: Take a Screenshot

If browser tools are available, take a screenshot and actually look at it. Don't just say "it looks good" — describe what you see:
- Can you read all text?
- Are there sections that appear empty or blank?
- Do cards/panels have visible borders?

### Step 3: Check Both Themes

If the project has both dark and light themes:
- Run the audit on BOTH themes
- Switch to each theme and verify independently
- The most common bug: fixing one theme breaks the other

### Step 4: Report

Tell the user what you verified:
- "I checked X elements, found Y contrast issues"
- "Screenshot shows all text readable on [theme]"
- If issues found: fix them BEFORE telling the user it's done

## Red Flags That Must Block Deployment

- Text color within 40 luminance points of background color
- Any `color: #fff` or `color: white` on a light/white background
- Any `color: #000` or `color: rgba(0,0,0)` on a dark/black background
- CSS variables that resolve to the same value for both foreground and background
- Sections that appear "empty" in screenshots (hidden text)

## What "Done" Means

You can ONLY say the work is complete when:
1. You ran the contrast check JS and got 0 critical issues
2. You took a screenshot (or had the user confirm) and all text is visible
3. Both themes pass (if applicable)
4. You explicitly state what you verified: "Verified: all text readable, 0 contrast issues found on [dark/light] theme"

If you can't run the checks (no browser access, no JS execution), explicitly tell the user: "I cannot visually verify this change. Please check that all text is readable before considering this done."

## Never Again

- Never say "deployed" without checking
- Never assume color variables work correctly across themes
- Never trust that `!important` overrides are actually applying
- Always verify the COMPUTED style, not the CSS source
