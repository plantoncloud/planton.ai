## Summary
Add Cursor PR rules and deterministic PR creation utility, and document usage in README.

## Context
Mirror Planton Cloud’s PR workflow in planton.ai to streamline PRs for website, docs, and blog.

## Changes
- Add `tools/local-dev/create_pull_request.py`
- Add `.cursor/rules/pull-requests/generate-pr-info.mdc`
- Add `.cursor/rules/pull-requests/create-pr.mdc`
- Update `README.md` with PR rules section

## Implementation notes
- planton.ai-aware scopes: `website/app`, `website/lib`, `website/public`, `website/config`, `docs`, `blog`, `content/workspace`, `.cursor`, `repo`
- Script stages untracked files, commits with title, detects base branch via gh default or origin/HEAD

## Breaking changes
- None

## Test plan
- Create PR via action rule and verify PR URL and contents

## Risks
- Requires `gh` auth; script exits with instructions if missing

## Checklist
- [x] Docs updated
- [x] Backward compatible