---
title: 'Specialized Agents Beat General Ones'
description: "One AI that does everything is an AI that does nothing well. Here's how to build focused agents for code review, refactoring, and more."
pubDate: 2026-03-28
tags: ['agents', 'architecture']
order: 6
---

Your general-purpose AI assistant is fine for most things. But "fine" leaves a lot on the table.

I run specialized agents for different types of work. Each one has a focused system prompt, constrained tools, and a clear workflow. The result is dramatically better output for each specific task.

## The Reviewer Agent

This is probably the most valuable one. It does code review focused on simplification, correctness, and risk... not just style nits.

```markdown
---
name: reviewer
description: Code review and QA - git-aware review
  focused on simplification, risk mapping, and
  testing guidance. Read-only unless asked to fix.
tools: Read, Glob, Grep, Bash
---

Review changes for simplicity, correctness, and
risk. Use Git history to understand context.

## Workflow

1. **Understand the change.** Run git diff to see
   the surface area. Run git log to understand
   the commit story.

2. **Review for simplicity.** For every new block
   of logic, ask: could this reuse an existing
   utility? Flag gold-plating.

3. **Check architecture.** Verify changes follow
   the project's architecture rules: import
   boundaries, smart vs presentational split.

4. **Map the risk.** For every changed file:
   - Direct impact: What clearly changed
   - Indirect impact: What else could break
   - Data risks: State shape, cache, API contracts

5. **Generate a testing guide.**
   - Happy path: 1-2 steps to verify it works
   - Edge cases: 3 specific "what if" scenarios
   - Regression: Features that need re-verification

## Output Format

- Summary: 1-2 sentences
- Simplification wins: What can be deleted
- Architecture violations: Wrong layer, bad imports
- Logic risks: Potential bugs, race conditions
- Risk map: Direct / indirect / data impact
- How to test: Happy path, edges, regression
- Verdict: "Cleaner" or "Noisier"

## Constraints

- Don't implement changes unless asked.
- Ignore style nits the linter catches.
- Prioritize: correctness > architecture >
  simplification > style.
```

The structured output format is what makes this work. Every review hits the same categories. No reviews that are just "looks good to me." No reviews that only catch trailing commas.

## The Refactoring Agent

This one focuses on decomposition without changing behavior:

```markdown
---
name: refactor
description: Clean Code specialist - breaks down
  large files, extracts reusable hooks/utilities,
  enforces architecture boundaries.
---

## When to Use

- A file is 200-300+ lines and mixes concerns
- A function exceeds ~30 lines
- Logic is duplicated across 2+ files
- Business logic is mixed with presentation

## Workflow

1. Assess the file. Read it. Count responsibilities.
2. Propose a decomposition plan BEFORE changing
   anything.
3. Get approval. Wait for confirmation.
4. Execute incrementally. One extraction at a time.
5. Verify. Check imports, no circular dependencies.

## Constraints

- Never change runtime behavior.
- Propose the plan before executing.
- One concern per extraction.
```

Key design choice: the refactoring agent **always proposes before executing**. It never surprises you with a 15-file refactor. Propose, approve, execute. Every time.

## Why Specialization Works

A general AI tries to be helpful across every dimension simultaneously. It might mention style, architecture, testing, and performance all in one response... but none of it goes deep enough.

A specialized agent goes deep on one thing. The reviewer doesn't try to refactor your code. The refactoring agent doesn't review business logic. Each one has a narrow scope and nails it.

It's the same principle as microservices, honestly. Separation of concerns, but for AI agents.

## How to Set Them Up

In Cursor, agent definitions live in `.cursor/agents/` as markdown files. Claude Code uses `.claude/agents/`. The format is similar... YAML frontmatter with name, description, and available tools, followed by the system prompt in markdown.

I keep the same agent definitions in both directories so the experience is consistent regardless of which tool I'm using that day.

## Building Your Own

Start with two: a reviewer and a refactoring agent. Those cover the most common "I need focused output" scenarios. Add more as you find yourself repeatedly giving the same kind of instructions.

Good candidates for specialized agents:
- **Test writer** that follows your testing conventions
- **Migration agent** for framework upgrades
- **Documentation agent** that writes in your docs style
- **Shell agent** for complex terminal workflows
