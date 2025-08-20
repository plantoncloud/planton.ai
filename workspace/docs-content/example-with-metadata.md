---
title: "Getting Started Guide"
description: "Learn how to get started with our platform"
icon: "🚀"
category: "guides"
order: 1
badge: "Popular"
---

# Getting Started Guide

This is an example markdown file that demonstrates how the new dynamic sidebar system works.

## Features

- **Icons**: Automatically assigned based on content type and category
- **Badges**: Support for Popular, Beta, New, etc.
- **Ordering**: Custom ordering for sidebar items
- **Categories**: Automatic categorization based on file location
- **Titles**: Custom titles that override filename formatting

## How It Works

1. **Frontmatter**: Define metadata in the YAML frontmatter
2. **Automatic Processing**: The system reads this metadata during build
3. **Dynamic Sidebar**: Sidebar is generated with icons, badges, and proper ordering
4. **Fallbacks**: If no metadata is provided, sensible defaults are used

## Metadata Options

- `title`: Custom display title
- `description`: Description for tooltips or search
- `icon`: Custom emoji or icon identifier
- `category`: Content category for grouping
- `order`: Numerical order for sorting
- `badge`: Status badge (Popular, Beta, New, etc.)
- `isExternal`: Whether this is an external link
- `externalUrl`: URL for external links 