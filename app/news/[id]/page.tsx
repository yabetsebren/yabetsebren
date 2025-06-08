import { getPostById, getAllPosts } from "@/lib/server-utils";
import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let post;
  try {
    post = await getPostById(id);
  } catch {
    notFound();
  }
  if (!post) return notFound();

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2 text-foreground">{post.title}</h1>
      <div className="flex items-center gap-2 text-muted-foreground mb-6">
        <Calendar className="h-4 w-4" />
        <span>{post.date}</span>
      </div>
      <article
        className="prose prose-neutral max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
