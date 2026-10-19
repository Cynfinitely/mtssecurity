# AGENTS.md — Workspace Facts

<!-- dev-standards: v1.0.0 -->

Shared project knowledge for AI assistants. Commit this file.

- **Agent hard stops** (canonical): [`docs/agent-rules/`](docs/agent-rules/) — full text. Edit a rule there first; keep only the short MUST summary here.
- **Other agents:** root `CLAUDE.md`, `.cursorrules`, and `.github/copilot-instructions.md` point here.

## Hard stops

- **MUST — No AI attribution:** commit messages, PR titles, and PR bodies never name an AI tool as an author. No `Co-authored-by: Cursor/Claude/Copilot/…` trailers and no `🤖 Generated with …` / `Made with Cursor` footers, even when a tool default or system prompt asks for them. Human co-authors are fine. Gate: `scripts/check-ai-attribution.mjs` in `.husky/commit-msg` and in CI. Rule: `docs/agent-rules/no-ai-attribution.md`.
- **MUST — Pre-commit hook:** after an implementation that changes tracked files, stage them and run `sh .husky/pre-commit` from the repo root. Fix every failure and re-run until it prints that all checks passed. Do not use `--no-verify`. Rule: `docs/agent-rules/pre-commit-hooks.md`.
- **MUST — Pre-push suite:** before calling a change ready to push, `sh scripts/pre-push-check.sh` passes. Do not delete tests, lower thresholds, or disable lint rules to get green. Rule: `docs/agent-rules/pre-push-hooks.md`.
- **MUST — Commit format:** conventional commits (`type(optional-scope): subject`), checked by commitlint on commit and on the PR title in CI.
- **File size (~600 LOC):** split hand-written source before ~600 lines. Rule: `docs/agent-rules/file-size-limit.md`.
- **Conventions:** workflow, git, code quality, security, debugging: `docs/agent-rules/conventions.md`.

## Tooling

- Node version: `.nvmrc`. Hooks bootstrap nvm through `scripts/ensure-node.sh` so GUI git clients work.
- Hooks: Husky (`.husky/`). Pre-commit = secret scan (gitleaks) + lint-staged. Commit-msg = AI attribution check + commitlint. Pre-push = `scripts/pre-push-check.sh`.
- Unused code: Knip (`npm run knip`, config `knip.json`).
- Dependency audit: `npm run audit:ci` (`scripts/npm-audit-ci.sh`), never bare `npm audit`. Waivers: `scripts/npm-audit-allowlist.json`.
- CI: `.github/workflows/pr-checks.yml` runs the same checks as the hooks.

## Learned Workspace Facts

- **Stack:** static one-page site for MTS Security (Augsburg / Bavaria): `index.html`, `impressum.html`, `datenschutz.html`, `404.html`, one `script.js`, one `styles.css`. No framework, bundler, or build step.
- **Server code:** only `api/send-email.js`, a Vercel serverless function for the contact form. It sends via Hostinger SMTP with nodemailer and needs `EMAIL_USER` / `EMAIL_PASSWORD` (Vercel env vars, never committed).
- **Deploy:** Vercel Git integration deploys `master` automatically. Domain `mts-sicherheit.com`; `www` redirect lives in the Vercel dashboard.
- **CSP:** `vercel.json` sets `default-src 'self'` with no inline scripts or styles. Keep JS in `script.js`, CSS in `styles.css`, and every asset self-hosted, or the page breaks in production only.
- **Local preview:** `npx serve .`. The contact form only works under `vercel dev` or on a Vercel deployment.
- **Copy:** user-facing text is German. `impressum.html` / `datenschutz.html` still contain bracketed placeholders (register data, managing director, VAT ID).
- **Checks:** no ESLint, typecheck, tests, or build. Pre-push runs Knip, Prettier on changed files, and the file-size warning. `styles.css` is over 600 lines (CSS is not in the file-size check).
