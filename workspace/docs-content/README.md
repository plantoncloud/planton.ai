---
title: "Documentation"
description: "Main documentation index"
icon: "📚"
category: "docs"
order: 0
---

# Documentation

Welcome to our documentation! This system now supports dynamic sidebar generation with rich metadata.

## How to Add New Documentation

### 1. Basic Markdown File
Create a `.md` file anywhere in the `workspace/docs-content/` directory:

```markdown
---
title: "My Page Title"
description: "Optional description"
icon: "🚀"
order: 5
badge: "New"
---

# My Page Title

Content goes here...
```

### 2. Directory with Index
For directories, create an `index.md` or `README.md` file:

```markdown
---
title: "API Reference"
description: "Complete API documentation"
icon: "🔌"
order: 2
---

# API Reference

This directory contains all API documentation...
```

### 3. External Links
For external resources:

```markdown
---
title: "External Resource"
description: "Link to external documentation"
icon: "🔗"
isExternal: true
externalUrl: "https://example.com/docs"
order: 10
---
```

## Available Icons

### Category Icons (Automatic)
- 📦 Products
- 📚 Documentation
- 👥 Community
- 🏢 Company
- 📖 Handbook
- 💡 Solutions
- 🔓 Open Source
- 🎯 Use Cases

### Content Type Icons (Automatic)
- 🔌 API
- 🛠️ SDK
- 🗺️ Guide
- 🎓 Tutorial
- 🔗 Integration
- 🔄 Migration
- 🚀 Deployment
- 📊 Monitoring
- 🔒 Security
- ⚡ Performance
- 📈 Analytics
- 🧪 Experiments
- 🚩 Feature Flags
- 🎬 Session Replay
- ❌ Error Tracking
- 📝 Surveys
- 🔗 Data Pipelines
- 🏭 Data Warehouse
- 🤖 AI/LLM
- 🎯 Max AI

### Custom Icons
You can use any emoji or specify custom icon identifiers that will be mapped to emojis.

## Badge Options

- **Popular** - Green badge for popular content
- **Beta** - Blue badge for beta features
- **New** - Purple badge for new content
- **Deprecated** - Red badge for deprecated content
- **Experimental** - Yellow badge for experimental features

## Ordering

- Use `order: 1` for highest priority
- Lower numbers appear first
- Items with the same order are sorted alphabetically
- Directories appear before files by default

## Examples

### Simple Page
```markdown
---
title: "Quick Start"
icon: "🚀"
order: 1
---

# Quick Start
```

### API Documentation
```markdown
---
title: "Authentication API"
description: "Learn how to authenticate with our API"
icon: "🔌"
category: "api"
order: 2
badge: "Popular"
---

# Authentication API
```

### External Link
```markdown
---
title: "GitHub Repository"
description: "View source code on GitHub"
icon: "💻"
isExternal: true
externalUrl: "https://github.com/your-repo"
order: 100
---
```

## Automatic Features

- **Category Detection**: Automatically detected from file path
- **Icon Assignment**: Smart icon selection based on content type
- **Ordering**: Automatic sorting by order, type, and name
- **Fallbacks**: Sensible defaults when metadata is missing

## File Naming

- Use kebab-case for filenames: `my-page.md`
- The system automatically converts to Title Case for display
- You can override with the `title` field in frontmatter
- Special files (starting with `prompt.` or `response.`) are automatically excluded
