---
title: 'Teach AI to Write Like You'
description: "If every message your AI drafts sounds like it was written by a polite robot, you need a voice guide. Here's how to build one that actually captures your patterns."
pubDate: 2026-03-28
tags: ['voice', 'communication']
order: 4
---

I use AI to draft Slack messages, PR descriptions, technical explanations... a lot of written communication. And for the longest time, everything it produced sounded like a LinkedIn post. Correct, professional, and obviously not written by a human being.

The fix was a voice guide. A markdown file that teaches the AI how you actually write.

## What Goes in a Voice Guide

You can write this manually, but if you want to be a true AI Co-Engineer, automate it. Here's a real workflow:

### The Automated Approach (MCP Server)

I connected my AI to an **MCP Server** that had read access to my Slack history. I didn't write out my own quirks; I just pointed the AI at my last 500 Slack messages and told it:

> "Read my sent messages. Find my common communication patterns, formatting styles, and vocabulary. Codify them into a structured markdown guide so you can write in my exact voice."

The AI did the heavy lifting, quantified my weird habits, and output the structure instantly.

### The Manual Approach

If you don't have an MCP setup, you can manually write the rules. The trick is to be specific about patterns, not vibes. "Write casually" is useless. Here's what works:

```markdown
# Voice Guide

## Core Characteristics

- **Proper capitalization by default.** Drop to
  lowercase only in very casual one-liners.
- **Minimal end punctuation.** Sentences often just
  stop
- **Short messages.** One thought per message in
  real-time chat.
- **Contractions always.** "it's", "I'll", "didn't".
  Never "it is" or "I will" in casual chat.
- **Frequent "haha" and "lol"** as natural softeners.

## Interjections

- "oooo", "yeay", "ooo"
- "I think" as a frequent softener before opinions
- Casual abbreviations: "w/e", "ATM", "BTW"

## Request Style

- "this one can use a looksy please (whenever)"
- "do you want to have a quick call to catch me
  up to speed"
- Polite but never stiff. Never "Could you kindly..."

## Red Flags - Things That Sound AI

AVOID these patterns:

- **NEVER use em dashes.** Use double hyphens `--`
  or "..." (3-4 dots) instead.
- "may indicate" - say "probably means" or
  "looks like"
- "Potentially" at start of sentence - say "maybe"
- Perfect grammar in every sentence
- "I hope this helps" / "Let me know if you have
  any questions"
- "Additionally" / "Furthermore" / "Moreover"
- Complete sentences when a fragment would do
```

## The Red Flags Section is Everything

I think the most valuable part of a voice guide isn't telling the AI what to do... it's telling it what to **stop** doing. Every AI model has patterns it defaults to. Em dashes. "Additionally." Perfectly parallel bullet lists. Sign-off phrases.

Call these out explicitly. The model will avoid them.

## Show, Don't Tell

Include before/after examples. This is worth more than any amount of description:

```markdown
## Examples: AI vs You

**AI version:** "I've pushed the updated changes to
the staging environment. The modifications include
fixes for the selling issue as well as the negative
placeholder removal."

**Your version:** "okay pushed the fixes to staging!
Selling should work now and the neg placeholders
are gone"
```

When the AI sees the delta between these two versions, it grasps the style instantly. Two or three examples like this do more work than a page of rules.

## Scope It

The voice guide should only apply when the AI is writing on your behalf... drafts, messages, documentation. It should NOT apply when writing code, commit messages, or technical analysis. Keep the activation narrow so it doesn't bleed into places where a different tone is appropriate.

## Talk To Your Computer

Here's my secret weapon: **Fluid Voice**. It's a dictation app that lets me literally talk to my computer all day.

When you start talking through problems out loud, your prompts stop being terse, structured queries and start becoming long, sprawling trains of thought. You over-explain, you go on personal tangents, you complain about annoying logic bugs. You are giving the AI infinite context.

Because of the voice guide, my AI can digest that rambling dictation and turn it into the exact code I need, while responding in a voice that feels like a trusted companion. The computer becomes someone you bounce ideas off of instead of a text box you have to formalize commands for.

## The Result

Messages that actually sound like you wrote them. PR descriptions that don't need editing. Slack drafts you can send without cringing. It takes maybe 30 minutes to write the initial guide, and you refine it over a few weeks as you catch patterns the AI still defaults to.

Worth every minute.
