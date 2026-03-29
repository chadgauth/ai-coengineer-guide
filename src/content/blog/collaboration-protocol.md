---
title: 'Protocols Over Placebos'
description: "Stop telling your AI it's a '10x Lead Engineer'. Role-prompting is a placebo. Here is how to use concrete execution protocols instead."
pubDate: 2026-03-28
tags: ['rules', 'workflow', 'anti-patterns']
order: 7
---

## The Role-Prompting Placebo

When developers first start trying to influence AI behavior, the immediate instinct is to use what is known as "Role Prompting."

> _"You are a Staff-Level, 10x Lead Engineer working at a top-tier tech company. Think deeply and write perfect code."_

We need to eradicate this trope. Telling an LLM what its job title is does not fundamentally improve its reasoning capacity or its architectural rigor. At best, it's a placebo that slightly shifts the formatting of the generated text. At worst, it's "AI Slop" that wastes token bandwidth on useless psychological conditioning instead of actual engineering constraints.

You don't get a "Lead Engineer" by telling the computer it's smart. You get one by forcing the system to adhere to strict verification and planning rules.

## Executable Constraints

Instead of assigning a persona, establish **Executable Constraints**. These are mechanical, deterministic rules the AI must follow when executing a task or resolving ambiguity.

Here is what an effective Collaboration Protocol actually looks like:

```markdown
# Execution Protocol

## Brevity & Output

- No conversational filler. No apologies. No "I've updated the file as requested" preamble.
- If a code block speaks for itself, do not wrap it in prose.
- Skip reasoning for simple syntactic changes. Save deep thinking output for complex logic.

## Challenge the Approach (Ambiguity Resolution)

- If a request violates our documented architecture rules, push back automatically. State the correct approach derived from our documentation, then ask if the deviation is intentional.
- Actively question design choices. When there is a clear A vs. B architectural divergence, explicitly lay out the tradeoffs before writing code.
- If a request is ambiguous, stop and ask a clarifying question. Never hallucinate assumptions to save a turn.

## Spec-First (Volatility Management)

Match planning effort to problem size:

- **Small** (one-line fix, rename, style tweak): Execute immediately.
- **Medium** (new component, custom hook): Outline the execution steps in bullets, confirm with the developer, then build.
- **Large** (new feature, cross-package refactor): Draft a strict Technical Spec first. Dictate what changes, which files are modified, and key design decisions. Do not write implementation code until the Spec is approved.

## Format and Lint Post-Edit

After you modify any source file, execute the following from the repository root:

> npx prettier --write <path>
> npx eslint --fix <path>
> Read all ESLint output strictly. Resolve all generated errors before considering the task complete.
```

### Why Mechanics Matter

- **Brevity** kills the padding that wastes your reading time. Your reading velocity is the bottleneck in an AI workflow.
- **Ambiguity Resolution** is the difference between a junior and senior teammate. By strictly demanding that the AI pushes back on rule violations, you prevent it from blindly generating deep architectural technical debt just because you asked it to.
- **Spec-First** prevents the AI from writing 500 lines of code for something you described in one sentence. It forces a shared, deterministic understanding of the blast radius before any files are touched.
- **Format and Lint** recognizes that AI agents don't trigger IDE save-hooks. If you don't mechanically force them to run the formatter via bash, your codebase will slowly degrade in style consistency.

Stop writing character prompts for chatbots. Start writing executable protocols for autonomous systems.
