# Install PostHog

Last updated: Based on PostHog documentation source files

## Overview

Install PostHog in seconds with our wizard by running this command in your project directory with your terminal (it also works for LLM coding agents like Cursor and Bolt):

### AI Wizard (Recommended)

```bash
npx -y @posthog/wizard@latest --region us
```

For EU region:
```bash
npx -y @posthog/wizard@latest --region eu
```

Wait for it to finish and test the setup once the wizard is complete.

The wizard supports React, Next.js, Svelte, and React Native. We've got more on the way.

Check out the wizard's [GitHub repo](https://github.com/PostHog/wizard) for more details.

## JavaScript Snippet Installation

This is the simplest way to get PostHog up and running. It only takes a few minutes.

Copy the snippet below and replace `<ph_project_api_key>` and `<ph_client_api_host>` with your project's values, then add it within the `<head>` tags at the base of your product - ideally just before the closing `</head>` tag. This ensures PostHog loads on any page users visit.

You can find the snippet pre-filled with this data in [your project settings](https://us.posthog.com/settings/project#snippet).

```html
<script>
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('<ph_project_api_key>',{api_host:'<ph_client_api_host>', defaults:'<ph_posthog_js_defaults>'})
</script>
```

Once the snippet is added, PostHog automatically captures `$pageview` and [other events](/docs/data/autocapture) like button clicks. You can then enable other products, such as session replays, within [your project settings](https://us.posthog.com/settings).

### ES5 Support (Optional)

If you need ES5 support for example to track Internet Explorer 11 replace `/static/array.js` in the snippet with `/static/array.full.es5.js`

### Working with AI Code Editors

If you're working with AI code editors (like Lovable, Bolt.new, Replit, and others), it's easy to install PostHog. Just give it this prompt: `npx -y @posthog/wizard@latest`

## SDKs and Libraries

Custom-built libraries for integrating PostHog with popular client and server-side languages.

PostHog provides official SDKs for:
- JavaScript Web
- React
- React Native
- Android
- iOS
- Node.js
- Python
- PHP
- Ruby
- Go
- Flutter
- Elixir
- Capacitor
- Java (Beta)
- Rust
- C#/.NET

## Framework Guides

Framework-specific guides that cover our recommended approach to installing PostHog in a number of popular environments.

Supported frameworks include:
- Angular
- Astro
- Bubble
- Cloudflare Workers
- Django
- Docusaurus
- Flask
- Framer
- Gatsby
- Google Tag Manager
- Hono
- Laravel
- Next.js
- Nuxt.js
- n8n
- Phoenix
- Remix
- Retool
- RudderStack
- Segment
- Shopify
- Svelte
- Vue.js
- Vercel
- Webflow
- WooCommerce
- WordPress

## API Integration

Events can be ingested directly using our API and the `/i/v0/e` endpoint, which is the same endpoint that all of our libraries use behind the scenes.

Generally, this isn't something you'll need to use when integrating PostHog, but if you're working with a language or framework that PostHog doesn't support yet, this will allow you to still send events.

> **Note:** For this API, you should use your 'Project API Key' from the 'Project' page in PostHog. This is the same key used in your frontend snippet.

### Sending Events

Events can be sent either one at a time, or together in a batch. There is no limit on the number of events you can send in a batch, but the entire request body must be less than `20MB` by default.

#### Single Event

```bash
POST https://[your-instance].com/i/v0/e/
Content-Type: application/json
Body:
{
    "api_key": "<ph_project_api_key>",
    "event": "event_name",
    "properties": {
        "distinct_id": "distinct_id_of_your_user",
        "key1": "value1",
        "key2": "value2"
    },
    "timestamp": "[optional timestamp in ISO 8601 format]"
}
```

#### Batch Events

```bash
POST https://[your-instance].com/batch/
Content-Type: application/json
Body:
{
    "api_key": "<ph_project_api_key>",
    "batch": [
        {
            "event": "event_name",
            "properties": {
                "distinct_id": "distinct_id_of_your_user",
                "key1": "value1",
                "key2": "value2"
            },
            "timestamp": "[optional timestamp in ISO 8601 format]"
        },
        ...
    ]
}
```

> **Note:** Timestamp is optional. If not set, it'll automatically be set to the current time.

## Additional Setup Recommendations

### Set up a Reverse Proxy (Recommended)

We recommend setting up a reverse proxy, so that events are less likely to be intercepted by tracking blockers.

We have our own managed reverse proxy service included in the platform add-ons, which routes through our infrastructure and makes setting up your proxy easy.

If you don't want to use our managed service then there are several other options for creating a reverse proxy, including using Cloudflare, AWS Cloudfront, and Vercel.

### Grouping Products in One Project (Recommended)

If you have multiple customer-facing products (e.g. a marketing website + mobile app + web app), it's best to install PostHog on them all and group them in one project.

This makes it possible to track users across their entire journey (e.g. from visiting your marketing website to signing up for your product), or how they use your product across multiple platforms.

## Next Steps

After installation, you can:

1. **Send Events**: Learn how to track custom events and user actions
2. **Identify Users**: Connect anonymous events to known users
3. **Enable Features**: Turn on session replay, feature flags, experiments, and more
4. **Explore Analytics**: Use the PostHog dashboard to analyze your data

## Support

For questions and support, you can:
- Chat with Max AI (PostHog's AI assistant)
- Ask questions in the community
- Check the comprehensive documentation
- Contact PostHog support

---

*This documentation is extracted from the official PostHog source files and represents the current state of their installation guide.* 