---
title: 'Skills Over Prompts'
description: "Prompts are disposable. Skills are reusable, testable, and they compound over time. Here's how to build a skill system that makes your AI get better at specific tasks."
pubDate: 2026-03-28
tags: ['skills', 'architecture']
order: 8
---

A prompt is a one-shot instruction. You type it, the AI does it, it's gone. If you need the same thing tomorrow, you type it again. Or you dig through your history. Or you remember 80% of it and get 80% of the result.

A skill is a persistent, reusable instruction set that the AI loads automatically when it recognizes the right context. It's the difference between telling someone how to do their job every morning vs. writing a playbook they can reference.

## Anatomy of a Skill

Skills live in a directory with a `SKILL.md` file:

```
user-profile/
  SKILL.md          # Instructions for the AI
  profile.md        # The actual profile data
  voice-guide.md    # Writing style reference
```

The `SKILL.md` has YAML frontmatter that tells the AI when to activate:

```markdown
---
name: user-profile
description: >-
  Persistent user profile and context. Read this
  proactively at the start of sessions. Update
  profile.md when you learn new relevant information.
---

# User Profile

## Reading the Profile
At session start, read profile.md to understand
who the user is and their preferences.

## Updating the Profile
When you learn something durable, update profile.md.
Good captures: role changes, tool preferences,
workflow patterns, collaborators.
Do not capture: ephemeral tasks, credentials.
Keep under 200 lines.
```

## Where Skills Live

| Type | Path | Scope |
|------|------|-------|
| Personal | `~/.cursor/skills/` | All your projects |
| Project | `.cursor/skills/` | Shared with the team |

Personal skills are things like your user profile, voice guide, and communication preferences. Project skills are things like "how to run our test suite" or "how to deploy to staging."

## Writing Good Skills

Three principles that matter:

**1. The description is everything.** The AI uses the description to decide whether to activate the skill. Be specific. Include trigger scenarios.

```yaml
# Bad
description: Helps with documents

# Good
description: >-
  Extract text from PDF files, fill forms, merge
  documents. Use when working with PDF files or
  when the user mentions PDFs or document extraction.
```

**2. Progressive disclosure.** Put essential instructions in SKILL.md. Put detailed references in linked files. The AI reads SKILL.md first and only loads supporting files when needed. This keeps the context window efficient.

**3. Match specificity to fragility.** For tasks where consistency is critical (database migrations, deployment scripts), give the AI exact commands. For tasks with multiple valid approaches (code review, refactoring), give it principles and let it adapt.

| Freedom Level | When to Use | Example |
|---|---|---|
| High (text) | Multiple valid approaches | Code review |
| Medium (templates) | Preferred pattern, some variation ok | Report generation |
| Low (exact scripts) | Fragile, consistency critical | Database migrations |

## Skills That Compound

The magic of skills vs. prompts is compounding. My user profile skill has been running for months. Every week, the AI learns something new about how I work and adds it to the profile. The context gets richer without me doing anything.

My voice guide started at 30 lines and is now around 80 because I keep catching AI patterns I don't like and adding them to the "red flags" section. Each addition makes every future draft better.

## Skill Ideas to Start With

- **User profile**: Who you are and how you work
- **Voice guide**: How you write
- **PR template**: Your team's PR format with auto-populated sections
- **Test conventions**: How your project writes tests
- **Deployment runbook**: Step-by-step deploy with rollback
- **Incident response**: How to triage and document production issues

Start with two or three. See how they feel after a week. Refine. Add more.

The whole point is that this investment pays dividends every single day you use the tool. Prompts are spent once. Skills keep earning.
