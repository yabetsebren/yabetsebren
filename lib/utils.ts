import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

// Note: Server functions are available in ./server-utils.ts
// They should only be imported in server components and API routes

// Utility functions for formatting
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatDateShort = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, "") + "...";
};
