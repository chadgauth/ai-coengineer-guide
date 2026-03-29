---
title: 'Self-Improving Rules'
description: "Static rules go stale. Here's a pattern where your AI proposes its own rule updates when it notices recurring patterns in your codebase."
pubDate: 2026-03-28
tags: ['rules', 'automation']
order: 5
---

Rules are great. Static rules that slowly rot as your codebase evolves... less great.

I have a meta-rule. A rule about rules. It teaches the AI to notice when a pattern keeps showing up that isn't captured by any existing rule, and propose an update.

## The Self-Improving Rule

```markdown
# Self-Improving Rules

When you notice a **recurring pattern** during code
generation or review that is not yet captured by any
existing rule file, follow this process:

1. **Identify the pattern.** It must appear in 2+
   places or be the subject of explicit team
   feedback (e.g., PR review comments).
2. **Propose an update.** Tell the developer:
   - Which rule file the pattern belongs in
   - The exact lines to add (1-5 lines)
   - Why: link to the specific code that surfaced it
3. **Wait for approval.** Never edit rule files
   without explicit developer confirmation.
4. **Apply the change.** Edit the source of truth
   rule file.

Do NOT propose rules for:
- One-off situations or personal style preferences
- Patterns already enforced by the linter
- Obvious conventions the AI consistently gets right
```

## Why the Guardrails Matter

Without the "do NOT propose rules for" section, the AI would suggest a new rule every other conversation. The guardrails keep it from being noisy. It should only surface patterns that:

1. Actually recur (2+ instances)
2. Aren't already caught by existing tooling
3. Are substantial enough to codify

The "wait for approval" part is critical. The AI should never autonomously edit its own rules. That's a recipe for drift. It proposes, you approve, it applies. Human in the loop always.

## How It Works in Practice

Here's what it looks like. I'm refactoring a component and the AI notices I'm using `styled(Box)` instead of `styled('div')` for the third time this week:

> "I've noticed you're using `styled(Box)` again.
> The architecture rules say to use `styled('div')`
> for performance reasons, but this isn't enforced
> anywhere currently.
>
> Want me to add this to the architecture rules:
> `Use styled('div'), never styled(Box) — performance issue.`"

Then I say "yeah, add it" and it updates the rule file. Now it catches it automatically going forward, and so does every other agent that reads the rules.

## The Compound Effect

Over a few months, this adds up. Your rule set becomes a living document that captures your team's actual conventions... not what you wrote down six months ago, but what you're actually doing now.

It's like having a junior engineer who takes notes during code reviews and turns them into team documentation. Except this one doesn't forget, doesn't get busy, and proposes updates in 5 lines or less.

## Organization

I keep rule source-of-truth files in `docs/rules/*.md` and have `.cursor/rules/*.mdc` files that import from them. The AI only ever edits the source of truth. This way the rules are readable by humans in normal markdown and also loaded as AI context automatically.

Single source of truth. Multiple consumers. Works well.
