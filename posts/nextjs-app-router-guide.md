---
title: "Next.js App Router: Complete Migration Guide"
date: "2024-12-10"
description: "Learn how to migrate from Pages Router to App Router in Next.js 13+ with practical examples and best practices."
author: "Jane Smith"
category: "Next.js"
tags: ["Next.js", "App Router", "Migration", "React", "SSR"]
featuredImage: "/placeholder.jpg"
readingTime: "15 min read"
status: "published"
seo:
  keywords: "Next.js, App Router, Migration, React Server Components, SSR"
  ogImage: "/images/blog/nextjs-app-router-og.jpg"
---

# Next.js App Router: Complete Migration Guide

The Next.js App Router represents a paradigm shift in how we build Next.js applications. Built on React Server Components, it offers improved performance, better developer experience, and more intuitive routing patterns.

## Why Migrate to App Router?

### Key Benefits

- **React Server Components**: Zero JavaScript bundle for server components
- **Streaming**: Progressive page rendering for better UX
- **Improved Layouts**: Shared layouts with persistent state
- **Better Data Fetching**: Simplified data fetching patterns
- **Enhanced SEO**: Built-in SEO optimizations

## Migration Steps

### 1. Create the App Directory

Start by creating the `app` directory alongside your existing `pages` directory:

```bash
mkdir app
```

### 2. Root Layout Migration

Convert your `_app.js` and `_document.js` to a root layout:

```jsx
// app/layout.js
export const metadata = {
  title: "My App",
  description: "Welcome to my application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>My Navigation</nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 My Company</footer>
      </body>
    </html>
  );
}
```

### 3. Page Component Migration

Convert your page components from Pages Router to App Router:

```jsx
// pages/index.js (Old)
export default function Home({ posts }) {
  return (
    <div>
      <h1>Welcome</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await fetchPosts();
  return { props: { posts } };
};
```

```jsx
// app/page.js (New)
async function fetchPosts() {
  const res = await fetch("https://api.example.com/posts");
  return res.json();
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Welcome</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  );
}
```

## Conclusion

The App Router migration provides substantial benefits in performance and developer experience. Start with a gradual migration approach for best results.

---

_Have you migrated to App Router yet? Share your experience!_
