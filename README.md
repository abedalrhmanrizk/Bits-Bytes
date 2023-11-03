# Blog Project

## Joy of React, Project III

In this project, I built an interactive MDX-based blog using Next 14:

![Screenshot of the final product](/docs/end-result.png)

## Getting Started

This is a Next 14 project. You'll first need to install NPM dependencies, and then run a local development server. Here are the relevant terminal commands:

```bash
# Install dependencies:
npm install

# Run a development server:
npm run dev
```

## Features

### Dark mode

![Screenshot of the site header, showing the RSS icon](/docs/dark-mode-toggle.gif)

---

### Homepage list of posts

Homepage that shows a list of blog posts:

![Screenshot showing the homepage with a reverse-chronological list of blog posts](/docs/homepage-list-of-posts.png)

---

### Displaying MDX

When clicking on one of the blog posts on the homepage, we're taken to the dynamic blog post route:

I used `next-mdx-remote` to render the MDX associated with the selected blog post.

![Screenshot showing the blog post layout with all of the content from the MDX file, with correct formatting (paragraphs, headings, etc)](/docs/blog-post-with-mdx.png)

---

### Code snippets with Bright

![Screenshot of the code snippets with correct syntax highlighting](/docs/bright-syntax-highlighting.png)

---

### Animated widget

![Screen recording showing the default behaviour, instant transitions](/docs/division-groups-default.gif)

![Screen recording showing the final animation](/docs/divison-groups-demo-with-remainder.gif)

![Screen recording of the `CircularColorsDemo` component](/docs/circular-colors-demo.gif)

---

### Handling invalid URLs

In this project, I using a dynamic route segment for the `postSlug`. We look up the blog post based on this route parameter.

if the user enters an invalid slug? For example, maybe they make a typo and try to visit `/javascritp-mdoulo-operatro`. Or enter a complete gibberish URL like `/fdjsmkl`, the blog will display `404 page`

![Screenshot of the 404 page](/docs/404-page.png)

---
