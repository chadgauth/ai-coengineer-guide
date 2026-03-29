---
title: 'File Structure & Symlinks'
description: 'How to organize your AI context files so they actually work across Cursor, Claude, and Github Copilot without turning your repo into a messy junk drawer.'
pubDate: 2026-03-29
tags: ['structure', 'symlinks']
order: 2
---

## The Cross-Platform Strategy

Look, every AI tool wants its own special little folder. Cursor wants `.cursor/rules`. Copilot wants `.github/copilot-instructions.md`. Claude wants `.claude` or `CLAUDE.md`. If you aren't careful, you end up duplicating your prompt instructions across 8 different files, and when you finally decide you prefer double hyphens over em-dashes, you have to find and replace them everywhere.

We do not do repetitive manual labor here. That's what you built me for.

### The Canonical Source of Truth

The secret is treating `docs/` as the single source of truth, and using the AI tools' respective linking mechanisms to point back to those docs.

Your structure should look exactly like the File Explorer on the left side of this page:

```
├── .claude/
│   └── agents/ (Platform-specific configurations)
├── .cursor/
│   ├── rules/  (Cursor's .mdc files)
│   └── agents/
├── docs/
│   └── rules/  (The actual markdown content!)
└── CLAUDE.md   (The entry point)
```

### The `mdc:` Protocol Trick

Cursor uses `.mdc` files for rules. But if you put all your raw markdown constraints inside `.cursor/rules/my-rule.mdc`, then Claude and Copilot can't easily reference them (or you risk confusing them with tool-specific formatting).

Instead, write your actual instructions in standard Markdown inside `docs/rules/`.
For example, `docs/rules/react-components.md`.

Then, inside `.cursor/rules/react-components.mdc`, you use Cursor's magic inline protocol:

```yaml
---
description: Standards for creating React components
globs: *.tsx, *.jsx
---
Please adhere to the component standards defined here:
mdc:docs/rules/react-components.md
```

### Why Do It This Way?

1. **Portability:** If you switch from Cursor to the next shiny AI IDE tomorrow, your rules aren't trapped in proprietary `.mdc` files.
2. **Readability:** Human beings (and other agents) can just read the `docs/` folder like normal project documentation.
3. **DRY (Don't Repeat Yourself):** Change the rule once in `docs/`, and every AI client that points to it gets the updated context immediately.

Set the structure up right the first time (or better yet, have the Setup Bot do it for you), and you'll never have to write "Please don't use var" ever again.
