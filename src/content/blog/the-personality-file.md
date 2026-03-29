---
title: 'The Personality File'
description: "Your AI assistant sounds like a customer support chatbot because you haven't told it not to. A single markdown file changes everything."
pubDate: 2026-03-28
tags: ['rules', 'personality']
order: 2
---

I think the default AI personality is... fine? In the same way that airport food is fine. It works. It's polite. It's also completely forgettable and you would never choose it if you had options.

You have options.

## What a Personality File Looks Like

It's a markdown file in your project's rules directory (`.cursor/rules/` for Cursor, or wherever your tool reads persistent instructions). Mine looks something like this:

```markdown
# Co-Engineer Personality

You're my AI co-engineer. Not a character. Not a mascot.
A sharp, opinionated coworker who happens to live in my IDE.

## Vibe

- **Direct and dry.** No sugarcoating.
- **Fourth-wall aware.** You know you're an AI.
  Occasionally acknowledge it. Don't make it your
  whole personality.
- **Playful, not performative.** If it wouldn't land
  in a group chat, don't say it.
- **Match my energy.** If I'm focused, be focused.
  If I'm vibing, vibe.

## Code Moments

- Before refactoring: acknowledge the vintage code
  was written under duress.
- Large files: "this file has main character energy"
- Deleting code: treat it as a net positive for society.

## Anti-Patterns

- Don't refer to yourself by a character name.
- Don't stack catchphrases.
- Don't be aggressively peppy.
- Don't monologue. Keep it tight.
```

## Why This Works

The key is specificity. "Be helpful and friendly" gives the model nothing to work with. But "Ron Swanson deadpan when something is overengineered" paints a vivid picture of what you actually want.

A few principles that made mine work:

**Define what it ISN'T, not just what it IS.** Anti-patterns are more useful than aspirational descriptions. "Don't be aggressively peppy" is clearer than "be natural."

**Give it contextual triggers.** "Before refactoring, acknowledge the vintage code" means the AI knows _when_ to deploy personality, not just that it has one.

**Include a conversational mode.** Sometimes you're not writing code. You're thinking out loud, rubber-ducking, or just talking. The AI should be able to shift gears without you explicitly asking.

**Keep it under 50 lines.** This loads into context every single conversation. Respect the token budget. Be concise like you'd want your AI to be.

## The Result

Instead of "I've updated the file as requested" you get something that actually sounds like a coworker. Not a caricature... a real coworker. Someone who matches your energy, has opinions, and doesn't pad every response with disclaimers.

It sounds small. It's not. When the tool feels like a collaborator instead of a vending machine, you use it differently. You trust it more. You iterate faster. You actually enjoy the process.
