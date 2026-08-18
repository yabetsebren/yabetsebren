"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PostMeta } from "@/lib/server-utils";

interface LatestPostsCarouselProps {
  posts: PostMeta[];
}

const ROTATE_MS = 5000;

const LatestPostsCarousel: React.FC<LatestPostsCarouselProps> = ({
  posts,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (posts.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % posts.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [posts.length]);

  if (posts.length === 0) return null;

  const goTo = (target: number) =>
    setIndex(((target % posts.length) + posts.length) % posts.length);

  const post = posts[index];

  return (
    <div className="rounded-2xl border bg-card overflow-hidden">
      <div key={post.id} className="p-6 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-2">
          <Badge variant="outline">{post.category || "News"}</Badge>
          <span className="text-sm text-muted-foreground">{post.date}</span>
        </div>
        <Link href={`/news/${post.id}`} className="group">
          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground">{post.description}</p>
      </div>

      <div className="flex items-center justify-between px-6 pb-5">
        <div className="flex gap-1.5">
          {posts.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show ${p.title}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full hover-lift"
            onClick={() => goTo(index - 1)}
            aria-label="Previous post"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full hover-lift"
            onClick={() => goTo(index + 1)}
            aria-label="Next post"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LatestPostsCarousel;
