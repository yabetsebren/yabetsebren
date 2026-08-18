# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS. Features a dark/light theme toggle, animated logo, and a blog system.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark/Light Theme**: Automatic theme switching with user preference persistence
- **Responsive**: Mobile-first design that works on all devices
- **Animated Logo**: Dynamic jaguar logo with theme-based switching
- **Blog System**: Markdown-based blog with syntax highlighting
- **Static Export**: Optimized for GitHub Pages deployment
- **TypeScript**: Full type safety throughout the application
- **TailwindCSS**: Utility-first CSS framework for rapid styling

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: TailwindCSS + Shadcn/ui components
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Markdown**: gray-matter + remark for blog posts
- **Deployment**: GitHub Pages (static export)

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page (About, Latest Posts, Projects, Teaching)
│   ├── projects/          # Projects page
│   └── news/              # Blog/news pages
├── components/            # Reusable components
│   ├── ui/               # Shadcn/ui components
│   ├── navbar.tsx        # Navigation component
│   └── theme-toggle.tsx  # Theme switcher
├── lib/                  # Utility functions
│   ├── utils.ts          # Client-side utilities
│   └── server-utils.ts   # Server-side utilities
├── posts/                # Markdown blog posts
├── public/               # Static assets
│   ├── black_logo.svg    # Dark theme logo
│   └── white_logo.svg    # Light theme logo
└── styles/               # Global styles
```

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Prerequisites

1. Create a repository named `username.github.io` (replace `username` with your GitHub username)
2. Push your code to the `main` branch

### Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:

1. Builds the static site when you push to the `main` branch
2. Exports the site to static HTML/CSS/JS files
3. Deploys to GitHub Pages

### Manual Deployment

If you prefer to deploy manually:

```bash
# Install dependencies
pnpm install

# Build and export static files
pnpm run build:export

# Deploy to GitHub Pages
pnpm run deploy
```

### GitHub Pages Settings

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Set source to "Deploy from a branch"
4. Select the `gh-pages` branch
5. Your site will be available at `https://username.github.io`

## 🔧 Development

### Getting Started

```bash
# Clone the repository
git clone https://github.com/username/username.github.io.git
cd username.github.io

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm build:export` - Build and export static files
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm deploy` - Deploy to GitHub Pages

### Adding Blog Posts

1. Create a new `.md` file in the `posts/` directory
2. Add frontmatter with metadata:

```markdown
---
title: "Your Post Title"
date: "2024-01-01"
description: "Post description"
author: "Your Name"
category: "Technology"
tags: ["nextjs", "react"]
---

Your post content here...
```

### Customization

#### Logo

- Replace `public/black_logo.svg` and `public/white_logo.svg` with your own logos
- Update the logo component in `components/ui/logo.tsx` if needed

#### Theme Colors

- Modify `tailwind.config.ts` to customize the color scheme
- Update CSS variables in `styles/globals.css`

#### Content

- Update personal information in `app/page.tsx`
- Modify project details in `app/projects/page.tsx`
- Update teaching entries in the Teaching section of `app/page.tsx`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/username/username.github.io/issues).

## 📧 Contact

- Website: [https://username.github.io](https://username.github.io)
- GitHub: [@username](https://github.com/username)
- Email: your.email@example.com

---

Built with ❤️ using Next.js and deployed on GitHub Pages
