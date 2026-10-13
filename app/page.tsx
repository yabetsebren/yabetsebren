import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "@/lib/server-utils";
import { asset } from "@/lib/asset";

// Two spotlights (pink and white), one from each top corner, crossing over the photo.
// Conic gradients give a clean cone of light; the mask fades it out with distance.
const beamMask = "linear-gradient(to bottom, black 60%, transparent 100%)";
const beams = [
  {
    background:
      "conic-gradient(from 134deg at 10% 0%, transparent 0deg, rgba(255,46,154,0.75) 9deg, transparent 18deg, transparent 360deg)",
  },
  {
    background:
      "conic-gradient(from 208deg at 90% 0%, transparent 0deg, rgba(255,255,255,0.7) 9deg, transparent 18deg, transparent 360deg)",
  },
];

const aboutParagraphs = [
  "I'm a graduate student researching ML at Montana State University. I work at MSU's Computational Intelligence Lab, co-advised by Dr. Neda Nazemi  and Dr. Faraz Dadgostari",
  "My research focuses on causal inference and causal discovery, in which I implement and modify existing methods as well as develop new ones.",
  "I am currently developing a method to identify and test differences in lagged relationships within multivariate time series across populations.",
];

// Home is intentionally short: who I am, and what's new. Everything else
// (publications, projects, teaching, skills) lives on its own page.
export default async function HomePage() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      {/* About / profile — a dark stage with spotlights */}
      <section className="relative overflow-hidden border-b-4 border-black bg-[#0B0B0F] text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(255,46,154,0.35),transparent_70%)]" />

        <div className="container relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 px-4 py-10 md:grid-cols-[1fr_auto] md:py-12">
          <div>
            <h1 className="text-4xl font-extrabold uppercase leading-[0.9] sm:text-5xl md:text-6xl">
              Yabets{" "}
              <span className="inline-block -rotate-1 border-4 border-black bg-primary px-2 pb-0.5 text-black shadow-[4px_4px_0_0_#FFE600]">
                Ebren
              </span>
            </h1>

            <p className="mt-4 text-lg font-bold">
              {/* Graduate student at Montana State University */}
            </p>
            <div className="mt-3 max-w-xl space-y-3 text-white/80">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="shadow-[3px_3px_0_0_#FF2E9A]"
              >
                <Link href="https://github.com/yabetsebren" target="_blank">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="shadow-[3px_3px_0_0_#FF2E9A]"
              >
                <Link href="https://www.linkedin.com/in/yabets-ebren/" target="_blank">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="shadow-[3px_3px_0_0_#FF2E9A]"
              >
                <Link href="mailto:yabets.ebren@student.montana.edu">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* The spotlit star: a big portrait under two crossing spotlights */}
          <div className="relative mx-auto flex h-[440px] w-[380px] max-w-full items-end justify-center">
            <div className="pointer-events-none absolute left-1/2 top-[-90px] h-[600px] w-[640px] -translate-x-1/2">
              {beams.map((beam, i) => (
                <div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    background: beam.background,
                    maskImage: beamMask,
                    WebkitMaskImage: beamMask,
                  }}
                />
              ))}
            </div>

            {/* Light pooling on the stage floor */}
            <div className="absolute bottom-2 h-12 w-80 max-w-full rounded-[100%] bg-primary/60 blur-xl" />
            <div className="absolute bottom-6 h-6 w-60 max-w-full rounded-[100%] bg-white/50 blur-md" />

            {/* A large plain circle, no outline */}
            <Avatar className="relative mb-8 aspect-square h-auto w-[84%]">
              <AvatarImage
                src={asset("/newpp.jpg?height=320&width=320")}
                className="object-cover object-top"
                alt="Yabets Ebren"
              />
              <AvatarFallback className="text-5xl text-black">YE</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      {/* Latest updates — three plain lines, no cards */}
      {/* <section className="border-b-4 border-black bg-[#FFE600] text-black">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">
              Blog & Updates
            </h2>
            <Button asChild size="sm" className="shrink-0 bg-black text-white hover:bg-black/80">
              <Link href="/news">
                More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <ul className="mt-4 divide-y-2 divide-black border-y-2 border-black">
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/news/${post.id}`}
                  className="flex flex-col gap-1 py-3 hover:bg-white sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-bold underline-offset-4 hover:underline">
                    {post.title}
                  </span>
                  <span className="shrink-0 font-mono text-xs font-bold uppercase">
                    {post.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section> */}
    </>
  );
}
