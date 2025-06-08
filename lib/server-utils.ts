import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkPrism from "remark-prism";

const postsDirectory = path.join(process.cwd(), "posts");

export type PostMeta = {
  id: string;
  title: string;
  date: string;
  description: string;
  author?: string;
  category?: string;
  tags?: string[];
  featuredImage?: string;
  readingTime?: string;
  status?: "published" | "draft";
  seo?: {
    keywords?: string;
    ogImage?: string;
  };
};

export type Post = PostMeta & {
  content: string;
};

const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

export const getAllPosts = async (): Promise<PostMeta[]> => {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        id: fileName.replace(/\.md$/, ""),
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
        author: data.author,
        category: data.category,
        tags: data.tags || [],
        featuredImage: data.featuredImage,
        readingTime: data.readingTime || calculateReadingTime(content),
        status: data.status || "published",
        seo: data.seo,
      };
    })
    .filter((post) => post.status === "published")
    .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
};

export const getPostById = async (id: string): Promise<Post | null> => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Process markdown with syntax highlighting
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(content);

    return {
      id,
      title: data.title || "",
      date: data.date || "",
      description: data.description || "",
      author: data.author,
      category: data.category,
      tags: data.tags || [],
      featuredImage: data.featuredImage,
      readingTime: data.readingTime || calculateReadingTime(content),
      status: data.status || "published",
      seo: data.seo,
      content: processedContent.toString(),
    };
  } catch (error) {
    console.error("Error processing post:", error);
    return null;
  }
};

export const getPostsByCategory = async (
  category: string
): Promise<PostMeta[]> => {
  const allPosts = await getAllPosts();
  return allPosts.filter(
    (post) => post.category?.toLowerCase() === category.toLowerCase()
  );
};

export const getPostsByTag = async (tag: string): Promise<PostMeta[]> => {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) =>
    post.tags?.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  );
};

export const getRelatedPosts = async (
  currentPostId: string,
  limit: number = 3
): Promise<PostMeta[]> => {
  const currentPost = await getPostById(currentPostId);
  if (!currentPost) return [];

  const allPosts = await getAllPosts();

  // Filter out current post and calculate relevance scores
  const relatedPosts = allPosts
    .filter((post) => post.id !== currentPostId)
    .map((post) => {
      let score = 0;

      // Same category gets high score
      if (post.category === currentPost.category) {
        score += 3;
      }

      // Shared tags get points
      const sharedTags =
        post.tags?.filter((tag) => currentPost.tags?.includes(tag)) || [];
      score += sharedTags.length;

      return { ...post, relevanceScore: score };
    })
    .filter((post) => post.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit);

  return relatedPosts;
};

export const getAllCategories = async (): Promise<string[]> => {
  const allPosts = await getAllPosts();
  const categories = new Set<string>();

  allPosts.forEach((post) => {
    if (post.category) {
      categories.add(post.category);
    }
  });

  return Array.from(categories).sort();
};

export const getAllTags = async (): Promise<string[]> => {
  const allPosts = await getAllPosts();
  const tags = new Set<string>();

  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
};

export const searchPosts = async (query: string): Promise<PostMeta[]> => {
  const allPosts = await getAllPosts();
  const searchTerms = query.toLowerCase().split(" ");

  return allPosts.filter((post) => {
    const searchableText = [
      post.title,
      post.description,
      post.category,
      ...(post.tags || []),
    ]
      .join(" ")
      .toLowerCase();

    return searchTerms.every((term) => searchableText.includes(term));
  });
};
