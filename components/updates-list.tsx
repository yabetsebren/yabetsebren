"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Cat, Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { asset } from "@/lib/asset";
import type { PostMeta } from "@/lib/server-utils";

interface UpdatesListProps {
  posts: PostMeta[];
}

const Thumbnail = ({ src }: { src?: string }) => {
  const [failed, setFailed] = useState(false);
  const url = src ? (src.startsWith("/") ? asset(src) : src) : "";

  if (!url || failed) {
    return (
      <div className="flex h-24 w-24 shrink-0 items-center justify-center border-2 border-black bg-black sm:h-28 sm:w-28">
        <Cat className="h-8 w-8 text-[#FFE600]" />
      </div>
    );
  }

  return (
    <img
      src={url}
      alt=""
      onError={() => setFailed(true)}
      className="h-24 w-24 shrink-0 border-2 border-black bg-white object-cover sm:h-28 sm:w-28"
    />
  );
};

const chipBase =
  "border-2 border-black px-3 py-1 font-mono text-xs font-bold uppercase transition-colors";

const UpdatesList = ({ posts }: UpdatesListProps) => {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const byKey = new Map<string, string>();
    posts.forEach((post) =>
      (post.tags ?? []).forEach((tag) => {
        if (!byKey.has(tag.toLowerCase())) byKey.set(tag.toLowerCase(), tag);
      })
    );
    return Array.from(byKey.values()).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  const visible = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    return posts.filter((post) => {
      const tags = post.tags ?? [];
      if (activeTag && !tags.some((tag) => tag.toLowerCase() === activeTag)) {
        return false;
      }
      const haystack = [post.title, post.description, post.category, ...tags]
        .join(" ")
        .toLowerCase();
      return words.every((word) => haystack.includes(word));
    });
  }, [posts, query, activeTag]);

  const filtering = query.trim() !== "" || activeTag !== null;

  const clearFilters = () => {
    setQuery("");
    setActiveTag(null);
  };

  return (
    <div>
      <div className="mb-8 space-y-4">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter by a word or tag"
            aria-label="Filter updates by a word or tag"
            className="w-full border-2 border-black bg-white py-2 pl-10 pr-3 font-medium text-black shadow-[3px_3px_0_0_#000] placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              aria-pressed={activeTag === null}
              onClick={() => setActiveTag(null)}
              className={`${chipBase} ${
                activeTag === null
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-white/70"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => {
              const key = tag.toLowerCase();
              const selected = activeTag === key;
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveTag(selected ? null : key)}
                  className={`${chipBase} ${
                    selected
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-white/70"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        )}

        <div className="flex items-center gap-4">
          <p className="font-mono text-xs font-bold uppercase">
            {filtering
              ? `${visible.length} of ${posts.length} updates`
              : `${posts.length} updates`}
          </p>
          {filtering && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase underline decoration-2 underline-offset-4"
            >
              <X className="h-3 w-3" />
              Clear filter
            </button>
          )}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="border-y-4 border-black py-10 text-lg font-bold">
          Nothing matches that filter.
        </p>
      ) : (
        <ul className="divide-y-4 divide-black border-y-4 border-black">
          {visible.map((post) => (
            <li key={post.id} className="flex items-start gap-4 py-6">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {post.category && (
                    <Badge variant="outline">{post.category}</Badge>
                  )}
                  <span className="font-mono text-xs font-bold uppercase">
                    {post.date}
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-extrabold leading-snug sm:text-3xl">
                  <Link
                    href={`/news/${post.id}`}
                    className="underline decoration-4 decoration-transparent underline-offset-4 hover:decoration-black"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 max-w-3xl font-medium">{post.description}</p>
                {(post.tags ?? []).length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {(post.tags ?? []).map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setActiveTag(tag.toLowerCase())}
                        className="border-2 border-black bg-white px-2 py-0.5 font-mono text-[11px] font-bold uppercase text-black transition-colors hover:bg-black hover:text-white"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Thumbnail src={post.thumbnail || post.featuredImage} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpdatesList;
