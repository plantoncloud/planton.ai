---
title: "Mini Blog"
description: "A simple markdown file with a few blog posts that include images and videos."
date: 2025-08-20
---

# Mini Blog

Welcome! Below are a few short posts with images and videos.

# Blog Grid

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">

  <div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
    <img src="https://picsum.photos/id/1015/400/250" alt="Post 1" style="width:100%; height:auto;" />
    <h3 style="padding: 0.75rem;">🚀 Launch Notes</h3>
  </div>

  <div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
    <img src="https://picsum.photos/id/1014/400/250" alt="Post 2" style="width:100%; height:auto;" />
    <h3 style="padding: 0.75rem;">🎨 UI Preview</h3>
  </div>

  <div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
    <img src="https://picsum.photos/id/1013/400/250" alt="Post 3" style="width:100%; height:auto;" />
    <h3 style="padding: 0.75rem;">🎥 Feature Walkthrough</h3>
  </div>

  <div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
    <img src="https://picsum.photos/id/1012/400/250" alt="Post 4" style="width:100%; height:auto;" />
    <h3 style="padding: 0.75rem;">📺 Demo</h3>
  </div>
  
  <div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
    <img src="https://picsum.photos/id/1011/400/250" alt="Post 4" style="width:100%; height:auto;" />
    <h3 style="padding: 0.75rem;">📺 Demo</h3>
  </div>
  
  <div style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
    <img src="https://picsum.photos/id/1010/400/250" alt="Post 4" style="width:100%; height:auto;" />
    <h3 style="padding: 0.75rem;">📺 Demo</h3>
  </div>

</div>

## Post 1 — Launch Notes

**Date:** 2025-08-01

Here's a quick snapshot from our launch day.

![Team at launch desk](https://picsum.photos/800/400 "Launch day 🎉")
*Caption: The team just after rolling out v1.*

Key highlights:

- Initial release with auth, dashboard, and reports
- Deployed on Cloud Run
- ~1200 MAU in the first week

---

## Post 2 — UI Preview (Image Gallery)

**Date:** 2025-08-05

A peek at the latest UI screens:

![Dashboard Overview](/images/blogs/blog-1.jpg "Dashboard Overview")

---

## Post 3 — Feature Walkthrough (Local Video)

**Date:** 2025-08-10

Below is a local MP4 video embedded directly in Markdown using HTML:

<video controls width="100%" preload="metadata" >
  <source src="/videos/waves.mp4" type="video/mp4" />
  Your browser does not support the video tag. 
  <a href="/videos/waves.mp4">Download the video</a>.
</video>

*Caption: End-to-end walkthrough of creating and scheduling a campaign.*

---

## Post 4 — Demo (YouTube Embed)

**Date:** 2025-08-12

If you prefer an external embed, you can place raw HTML (works in most MD renderers and MDX):

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="Product Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style="position:absolute; top:0; left:0; width:100%; height:100%;"
  ></iframe>
</div>

---

### Footer

Thanks for reading!