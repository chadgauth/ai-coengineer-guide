---
title: 'The Tiered Rules Architecture'
description: 'Stop putting everything in a single .cursorrules file. Modern AI workflows use a tiered approach to maximize accuracy while minimizing context window bloat.'
pubDate: 2026-03-29
tags: ['architecture', 'cursor', 'mdc']
order: 12
---

## The Monolithic Rule File is Dead

When AI auto-completion first hit IDEs, the standard practice was to dump every single convention, framework preference, and syntax rule into a massive `.cursorrules` file.

This is an anti-pattern. Every token in a global rules file is consumed in _every single AI request_, which slows down the model, dilutes its focus, and exacerbates "hallucination creep".

The modern gold standard is the **Tiered Rules Architecture**, utilizing `.mdc` (Markdown Context) files to selectively inject context exactly when the agent needs it.

### Tier 1: Global Context

**Purpose:** Foundational project info (e.g., "Next.js 15", "Tailwind styling only").
**Constraint:** Keep it under 200 words.
**Implementation:** Use the `alwaysApply: true` flag in your frontmatter.

```yaml
---
description: Foundational stack and global constraints
globs: *
alwaysApply: true
---
```

### Tier 2: Domain-Specific Context

**Purpose:** Rules that only activate when you open specific files or directories. This keeps the AI focused on relevant patterns (like Zod validation for backend APIs) without cluttering frontend component tasks.
**Implementation:** Utilize `globs` to auto-attach the rule.

```yaml
---
description: Standards for API routes and validation
globs: ['src/api/**/*.ts']
alwaysApply: false
---
```

### Tier 3: Feature-Specific Context

**Purpose:** Rules explicitly requested by the agent using description metadata.
**Implementation:** The AI reads the descriptions of available files (e.g., "Use when modifying Stripe payment flows") and dynamically "pulls in" the `.mdc` file only when it detects the current task is relevant.

## The "Dos and Don'ts" Pattern

AI thrives on negative constraints. Don't just tell the model what it _should_ do; explicitly tell it the pitfalls to avoid.

Instead of: _"Write clean React components."_
Use: _"Never use default exports. Avoid substituting `any` for missing types. Do not use `useEffect` for data fetching; mandate React Router loaders."_

By splitting your specifications into modular, composable `.mdc` files, you create a lightweight, razor-sharp context environment that scales organically with your monorepo.
