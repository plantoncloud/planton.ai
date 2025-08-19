---
title: Planton Copilot
description: AI-powered DevOps co-pilot for simplified infrastructure management
---

# Planton Copilot

## Overview

Planton Copilot is your AI-powered DevOps co-pilot that transforms complex operations into simple, intuitive conversations. Powered by advanced large language models and multi-agent workflows, Plantora brings the expertise of a seasoned DevOps engineer right into your chat window.

## Key Features

### Conversational Interface
- **Natural Language Processing**: Communicate with your infrastructure using plain English
- **Context Awareness**: The AI understands your project structure and requirements
- **Real-time Responses**: Get instant feedback and suggestions

### Guided Resource Creation
Deploying resources like AWS RDS clusters has never been simpler. Just tell Plantora what you need, and it will guide you through the configuration, validating inputs and ensuring optimal setups.

**Example:**
```
User: "I need a PostgreSQL database for my web app"
Plantora: "I'll help you set up a PostgreSQL RDS instance. What's your preferred region and instance size?"
```

### Real-Time Deployment Progress
Stay informed with real-time updates on your infrastructure deployments right within the chat. Plantora leverages Pulumi-powered Infrastructure as Code workflows to provide live progress.

### Permission Management
Manage team access effortlessly through simple chat commands:
- Invite new team members
- Assign role-based permissions
- Grant resource access

## Getting Started

1. **Connect Your Cloud Account**
   ```bash
   planton connect aws
   ```

2. **Start a Conversation**
   ```bash
   planton chat
   ```

3. **Deploy Your First Resource**
   ```
   "Create a new Kubernetes cluster for my microservices"
   ```

## Best Practices

- **Be Specific**: Provide clear requirements for better results
- **Review Changes**: Always review the proposed changes before applying
- **Use Templates**: Leverage pre-built templates for common patterns

## Troubleshooting

### Common Issues

**Q: Why isn't Plantora responding?**
A: Check your internet connection and ensure you're logged into the Planton console.

**Q: Can I undo a deployment?**
A: Yes, you can rollback deployments using the chat interface or console.

## Support

Need help? Join our [Discord community](https://discord.gg/planton) or check our [documentation](/docs).
