# Repository guidance

## Project scope

This repository contains the NoSleepClub Support Desk implementation for the MLAI Hackathon 2026 “The Escalation Referee” challenge. The application runs from the repository root.

## Engineering principles

- Keep application code in TypeScript and preserve clear boundaries between input validation, model assistance, deterministic policy, persistence and UI.
- Treat model output as proposed structured data or text. The server validates evidence and owns policy, safety and workflow decisions.
- Preserve challenge policy, Ground Truth and regression fixtures unless a change explicitly updates the associated decision record and evaluation.
- Use synthetic or anonymized examples. Never commit credentials, connection strings or real user data.
- Keep existing API contracts and compatibility behavior unless the requested change covers them.

## Before changing the system

Read README.md, RUNBOOK.md, docs/ARCHITECTURE.md, challenge/mlai-2026/PROJECT-MEMORY.md and challenge/mlai-2026/AGENTS.md.

## Verification

For application or data-path changes, run the relevant checks from RUNBOOK.md. Documentation-only changes should at least pass npm run check:docs.