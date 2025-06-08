# Blog Functionality Documentation

This portfolio website includes a comprehensive blog system built with Next.js 15, TypeScript, and Markdown. The blog supports rich content, metadata, categories, tags, and modern features.

## Features

### ✨ Core Features

- **Markdown-based content** with frontmatter metadata
- **Syntax highlighting** using Prism.js
- **Featured images** for posts
- **Categories and tags** for organization
- **Author information** and reading time
- **SEO optimization** with metadata and structured data
- **Related posts** based on categories and tags
- **Search functionality** across posts
- **Responsive design** with modern UI components

### 📝 Content Management

- **Draft/Published status** control
- **Reading time calculation** (automatic)
- **Rich frontmatter** support
- **Image optimization** with Next.js Image component
- **Social sharing** metadata (Open Graph, Twitter Cards)

## File Structure

```
├── app/
│   ├── api/posts/                 # API routes for blog
│   │   ├── route.ts              # Get all posts
│   │   ├── [id]/route.ts         # Get single post
│   │   ├── categories/route.ts   # Get all categories
│   │   ├── tags/route.ts         # Get all tags
│   │   └── search/route.ts       # Search posts
│   ├── news/                     # Blog pages
│   │   ├── page.tsx             # Blog listing page
│   │   └── [id]/page.tsx        # Individual post page
├── lib/
│   ├── server-utils.ts          # Server-side utilities
│   └── utils.ts                 # Client-side utilities
├── posts/                       # Markdown blog posts
│   ├── react-best-practices-2024.md
│   ├── nextjs-app-router-guide.md
│   ├── typescript-advanced-patterns.md
│   └── web-performance-optimization.md
└── public/images/blog/          # Blog images
```

## Creating Blog Posts

### Frontmatter Structure

Each blog post should include comprehensive frontmatter:

```yaml
---
title: "Your Blog Post Title"
date: "2024-12-15"
description: "Brief description of the post for SEO and previews"
author: "Author Name"
category: "Category Name"
tags: ["Tag1", "Tag2", "Tag3"]
featuredImage: "/images/blog/featured-image.jpg"
readingTime: "10 min read" # Optional, auto-calculated if not provided
status: "published" # or "draft"
seo:
  keywords: "SEO keywords, separated by commas"
  ogImage: "/images/blog/og-image.jpg"
---
```

### Content Guidelines

1. **Use proper markdown syntax** for headings, lists, and formatting
2. **Include code blocks** with language specification for syntax highlighting
3. **Add images** with descriptive alt text
4. **Use blockquotes** for important notes or tips
5. **Structure content** with clear headings and sections

### Example Post Structure

````markdown
---
title: "Advanced React Patterns"
date: "2024-12-15"
description: "Learn advanced React patterns for building scalable applications"
author: "John Doe"
category: "React"
tags: ["React", "JavaScript", "Patterns"]
featuredImage: "/images/blog/react-patterns.jpg"
status: "published"
---

# Advanced React Patterns

Introduction paragraph explaining what the post covers.

## Section 1: Pattern Name

Explanation of the pattern with examples.

```jsx
// Code example with syntax highlighting
const ExampleComponent = () => {
  return <div>Hello World</div>;
};
```
````

### Subsection

More detailed explanation.

> **Pro Tip**: Important note or tip for readers.

## Conclusion

Summary and key takeaways.

---

_What's your experience with these patterns? Share in the comments!_

````

## API Endpoints

### GET /api/posts
Returns all published posts with metadata.

**Response:**
```json
[
  {
    "id": "post-slug",
    "title": "Post Title",
    "date": "2024-12-15",
    "description": "Post description",
    "author": "Author Name",
    "category": "Category",
    "tags": ["tag1", "tag2"],
    "featuredImage": "/images/blog/image.jpg",
    "readingTime": "5 min read",
    "status": "published"
  }
]
````

### GET /api/posts/[id]

Returns a single post with full content.

**Response:**

```json
{
  "id": "post-slug",
  "title": "Post Title",
  "content": "<html>Processed markdown content</html>"
  // ... other metadata
}
```

### GET /api/posts/categories

Returns all available categories.

### GET /api/posts/tags

Returns all available tags.

### GET /api/posts/search?q=query

Searches posts by title, description, category, and tags.

## Server-Side Functions

### Available Functions in `lib/server-utils.ts`

- `getAllPosts()` - Get all published posts
- `getPostById(id)` - Get single post by ID
- `getPostsByCategory(category)` - Filter posts by category
- `getPostsByTag(tag)` - Filter posts by tag
- `getRelatedPosts(postId, limit)` - Get related posts
- `getAllCategories()` - Get all categories
- `getAllTags()` - Get all tags
- `searchPosts(query)` - Search posts

## Client-Side Functions

### Available Functions in `lib/utils.ts`

- `getAllPosts()` - Fetch posts via API
- `getPostById(id)` - Fetch single post via API
- `getAllCategories()` - Fetch categories via API
- `getAllTags()` - Fetch tags via API
- `searchPosts(query)` - Search posts via API
- `formatDate(dateString)` - Format date for display
- `formatDateShort(dateString)` - Format date (short)
- `slugify(text)` - Convert text to URL-friendly slug
- `truncateText(text, maxLength)` - Truncate text with ellipsis

## Styling and UI

### Components Used

- **Card components** for post previews and layouts
- **Badge components** for categories and tags
- **Button components** for actions and navigation
- **Typography** with Tailwind CSS prose classes
- **Image optimization** with Next.js Image component

### Responsive Design

- **Mobile-first** approach
- **Grid layouts** that adapt to screen size
- **Hover effects** and smooth transitions
- **Dark mode** support with CSS custom properties

## SEO Features

### Metadata Generation

- **Dynamic page titles** and descriptions
- **Open Graph** tags for social sharing
- **Twitter Card** metadata
- **Structured data** (JSON-LD) for search engines
- **Keywords** and author information

### Performance Optimization

- **Static generation** for blog pages
- **Image optimization** with Next.js
- **Code splitting** for better loading
- **Syntax highlighting** with minimal bundle size

## Adding New Features

### To Add a New Field to Posts:

1. **Update the type definitions** in both `server-utils.ts` and `utils.ts`
2. **Modify the parsing logic** in `getAllPosts()` and `getPostById()`
3. **Update the UI components** to display the new field
4. **Add the field to frontmatter** in existing posts

### To Add New API Endpoints:

1. **Create new route files** in `app/api/posts/`
2. **Implement server-side logic** in `lib/server-utils.ts`
3. **Add client-side functions** in `lib/utils.ts`
4. **Update UI components** to use new endpoints

## Best Practices

### Content Creation

- **Write descriptive titles** and meta descriptions
- **Use consistent categories** and tags
- **Optimize images** for web (WebP, appropriate sizes)
- **Include alt text** for all images
- **Structure content** with proper headings

### Performance

- **Optimize images** before uploading
- **Use appropriate image sizes** for different viewports
- **Minimize markdown file sizes** when possible
- **Test loading times** on different devices

### SEO

- **Use descriptive URLs** (post slugs)
- **Include relevant keywords** naturally
- **Write compelling meta descriptions**
- **Add structured data** for rich snippets
- **Optimize for Core Web Vitals**

## Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and ensure images exist in `public/` directory
2. **Syntax highlighting not working**: Verify Prism.js CSS is imported in `globals.css`
3. **Posts not appearing**: Check `status: "published"` in frontmatter
4. **Build errors**: Ensure all required frontmatter fields are present

### Development Tips

- **Use TypeScript** for better development experience
- **Test on different screen sizes** during development
- **Validate markdown** before publishing
- **Check console** for any API errors
- **Use browser dev tools** to debug styling issues

---

This blog system provides a solid foundation for content creation while maintaining excellent performance and SEO. The modular architecture makes it easy to extend with additional features as needed.
