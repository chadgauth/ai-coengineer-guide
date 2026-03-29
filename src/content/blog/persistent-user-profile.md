---
title: 'The User Profile Pattern'
description: 'Build a persistent memory layer that teaches your AI who you are, what you care about, and how you work. It learns over time without you manually updating it.'
pubDate: 2026-03-28
tags: ['skills', 'memory']
order: 3
---

This is probably the highest-leverage thing I've built. A single markdown file that tells the AI who I am, and it updates itself as it learns more.

## The Setup

Create a skill directory (for Cursor, that's `~/.cursor/skills/user-profile/`). Inside, create a `SKILL.md` that teaches the AI how to read and update your profile:

```markdown
---
name: user-profile
description: >-
  Persistent user profile and context. Read this
  proactively at the start of sessions to personalize
  interactions. Update profile.md when you learn new
  relevant information.
---

# User Profile

## Reading the Profile

At the start of a session, read profile.md to
understand who the user is and their preferences.

## Updating the Profile

When you learn something new and durable, update
profile.md. Good things to capture:

- Role changes, team changes, new projects
- Tool preferences, workflow patterns
- Communication style preferences
- Key collaborators and their roles
- Recurring pain points or priorities

**Do not capture**: ephemeral task details,
one-off questions, sensitive credentials.

Keep profile.md under 200 lines.
```

Then create the actual `profile.md`:

```markdown
# User Profile

## Role & Work

- Frontend engineer, senior level
- DevX/DevOps mindset applied to frontend
- Uses AI tools aggressively for productivity

## Working Philosophy

- Focuses on high-priority, high-impact work
- Prefers direct feedback over praise
- Favorite phrase: "boiling the ocean"
  (Note to AI: I have a tendency to want to boil the ocean. Push back on me constructively when I get emotional or try to over-engineer things.)
- Wants to be a force multiplier

## Communication Preferences

- Appreciates concise, practical answers
- Answer first, explain only if asked
- Drop the formal hedging. Be direct.
- When given a direct instruction, just do it.
  Save "are you sure?" for destructive actions only.

## Strengths

- Makes problems disappear
- Thinks in systems
- Cross-functional instinct
- Fast learner who dives deep

## Growth Edges

- Making invisible work visible
- Delegating instead of just fixing things silently
- Setting boundaries on work hours
```

## What Makes This Powerful

The AI reads this at the start of every session. It knows my role, my style, my strengths, and the areas I'm trying to grow in. That last part is key... I've got a note in there about my tendency to "boil the ocean" and wanting to delegate more instead of silently fixing things. The AI actually nudges me on that now. Not in a preachy way, just a casual "hey, maybe we should scope this down" when I'm clearly getting frustrated and trying to rewrite an entire module at 11 PM.

**It updates itself.** When I mention a new project, the AI offers to update my profile. When I talk about a new teammate, it adds them. The profile grows organically over weeks and months.

**It sets communication boundaries.** "When given a direct instruction, just do it" stopped the AI from asking "are you sure?" every time I told it to do something obvious. Huge quality-of-life improvement.

**It's portable.** The skill lives in my home directory, not in any specific project. Every repo I open in Cursor gets the same context about me.

## The Growth Edges Section

I want to call this out specifically because I think it's underrated. Putting your actual growth areas in the profile means the AI can hold you accountable in small ways. It's not a therapist... it's more like a coworker who remembers what you said you wanted to work on.

Keep it honest. Keep it updated. This is the closest thing to AI that actually knows you.
