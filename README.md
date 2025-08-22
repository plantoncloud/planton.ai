<p align="center">
  <a href='http://makeapullrequest.com'><img alt='PRs Welcome' src='https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=shields'/></a>
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/plantoncloud/planton.ai"/>
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/plantoncloud/planton.ai"/>
  <img alt="GitHub closed pull requests" src="https://img.shields.io/github/issues-pr-closed/plantoncloud/planton.ai"/>
</p>

# planton.ai — Website, docs, and blog

This is the repository for the planton.ai website. It contains:

- All written content and visuals for the public website: product pages, docs, blog, case studies, tutorials, and marketing pages
- File system–based content for docs and blog (Markdown/MDX) alongside the components, templates, and logic used to render them
- All the components, styling, and configurations used to run the site as an application

## Table of contents
- [Quick start](#quick-start)
- [Advanced setup](#advanced-setup)
- [Contributing](#contributing)
 - [Cursor rules for docs](#cursor-rules-for-docs)

## Quick start

1. **Pre-installation**

    Install Node.js (≥ 18). If you use `nvm`, run `nvm use` in the repo to switch to the recommended version. Enable Yarn (Berry) via Corepack.

    ```bash
    node -v   # should be >= 18
    corepack enable  # enables Yarn 4 from packageManager field
    ```

2.  **Start developing**

    Clone the repo and navigate into the directory:

    ```bash
    git clone git@github.com:plantoncloud/planton.ai.git && cd planton.ai
    ```

    Install dependencies and start the dev server (Next.js):

    ```bash
    yarn
    yarn dev
    ```

    Your site is now running at `http://localhost:3000`.

3.  **Open the source code and start editing!**

    Content lives under `content/` and app code under `src/`. Changes in most files hot-reload automatically.

## Advanced setup

### Scripts

```bash
# Lint
yarn lint

# Build for production
yarn build

# Start production server (after build)
yarn start
```

### Content model

- Docs: Markdown files under `content/docs/**`
- Blog: MD/MDX under `content/blog/**`
- Static assets: `public/`

The app uses file system–based routing and content rendering. To add a new page:
1) Create a Markdown/MDX file under `content/docs` or `content/blog`
2) Include frontmatter (e.g., `title`, `description` for docs; `title`, `date`, `author`, `tags` for blog)
3) Run `yarn dev` and navigate to the route

### Project structure

- `src/app/docs/**`: Docs routes and components
- `src/app/blog/**`: Blog routes and components
- `src/app/components/**`: Shared UI components
- `src/lib/**`: Utilities for parsing/reading content

## Contributing

We <3 contributions big and small. In priority order (although everything is appreciated):

- Open a PR
  - Follow the [Quick start](#quick-start) to run the site locally
  - For basic content edits, navigate to the file in GitHub and click the edit icon (pencil)
- Open an issue for bugs or content ideas: `https://github.com/plantoncloud/planton.ai/issues/new`

Guidelines:
- Keep content changes focused and include a brief summary in the PR description
- For docs/blog posts, prefer copy-pastable examples and reference exact file paths or commands where possible

## Cursor rules for docs

We use Cursor as a native part of our workflow for writing docs and blog posts. To make this transparent and repeatable, we maintain rule files under:

```
.cursor/rules/docs/
  00-docs-style.mdc     # Style and tone guide for docs/blogs
  01-docs-sources.mdc   # Source-of-truth and referencing guide
```

How to use (in Cursor Chat):
- `@docs-style`: Apply the docs/blog style and tone (voice, IA, frontmatter templates)
- `@docs-sources`: Ground content in source code across repos (Project Planton legoblocks, Planton Cloud APIs and services, CLI-first flows)

Why we do this: we want our documentation to be accurate, humble, and useful. That means grounding every page in real code (protobufs, IaC, backend/CLI), and writing in a reader-first tone. The rules above encode that process so contributors can open PRs with confidence.


