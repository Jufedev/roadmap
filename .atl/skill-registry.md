# Skill Registry — roadmap

Generated: 2026-05-17

## User Skills

| Skill | Trigger | Source |
|-------|---------|--------|
| judgment-day | "judgment day", "dual review", "juzgar" | ~/.claude/skills/judgment-day/SKILL.md |
| issue-creation | Creating GitHub issues, bug reports, feature requests | ~/.claude/skills/issue-creation/SKILL.md |
| go-testing | Writing Go tests, teatest, test coverage | ~/.claude/skills/go-testing/SKILL.md |
| branch-pr | Creating PRs, preparing changes for review | ~/.claude/skills/branch-pr/SKILL.md |
| skill-creator | Creating new AI skills, documenting patterns | ~/.claude/skills/skill-creator/SKILL.md |

## Project Conventions

No project-level convention files detected (no CLAUDE.md, .cursorrules, agents.md, etc. in project root).

## Compact Rules

### issue-creation
- Follow issue-first enforcement: every PR must reference an issue
- Use structured templates for bug reports and feature requests

### branch-pr
- Follow issue-first enforcement: branch name must reference issue number
- PR body must include Summary and Test Plan sections

### judgment-day
- Launch two independent blind judge sub-agents in parallel
- Synthesize findings, apply fixes, re-judge until both pass (max 2 iterations)

### go-testing (context: Go files)
- Use table-driven tests with descriptive subtests
- Use teatest for Bubbletea TUI testing
- Follow Gentleman.Dots testing patterns

### skill-creator (context: creating skills)
- Follow Agent Skills spec for structure and metadata
- Include frontmatter with name, description, triggers
