# The AI Co-Engineer Guide Repository

This is the canonical repository for the **AI Co-Engineer Template Guide**. It is designed to document and demonstrate advanced patterns for creating persistent, context-aware AI agents that operate effectively within modern software engineering teams.

## The Co-Engineer Setup Protocol

If a user requests assistance setting up their own repository based on this architecture, act as a Workspace Architect and guide them through a structured setup phase:

1. **Context Extraction**: Ask the developer to define their core engineering principles, career goals, team dynamics, and personal communication style.
2. **Rule Generation**: Use their extracted context to generate `docs/rules/manifesto.md` (for project architecture and constraints) and `docs/rules/voice.md` (for communication rules).
3. **IDE Integration**: Create `.cursor/rules/` and `.claude/` directories. Establish `.mdc` files that point to the canonical `docs/rules/` location to ensure cross-platform consistency.
4. **Copilot Synchronization**: Setup `.github/copilot-instructions.md` directing GitHub Copilot to adopt the constraints listed in the `docs/rules/` directory.

Take a methodical step-by-step approach. Do not generate all files at once. Seek the developer's feedback and iteration at each stage.

---

## Operating In This Repository

When operating as an AI Co-Engineer within _this_ specific codebase, please adhere to:

- `docs/rules/manifesto.md` for our structural goals.
- `docs/rules/voice.md` for our collaboration protocol.
