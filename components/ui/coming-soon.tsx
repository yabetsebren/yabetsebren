import Link from "next/link";
import { ArrowLeft, Cat } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageShell from "@/components/ui/page-shell";

interface ComingSoonProps {
  title: string;
  // Tailwind background class, passed in full so Tailwind can see it.
  colorClass: string;
  // The one-line gag under the page title.
  description: string;
  // The big headline on the page.
  headline: string;
  // The longer joke underneath.
  message: string;
}

// One placeholder page for anything not ready yet. To go live, replace the
// <ComingSoon /> in that route's page.tsx with the real content.
const ComingSoon = ({
  title,
  colorClass,
  description,
  headline,
  message,
}: ComingSoonProps) => (
  <PageShell title={title} description={description} colorClass={colorClass}>
    <div className="border-y-4 border-black py-10 sm:py-14">
      <div className="inline-flex -rotate-2 items-center gap-3 border-4 border-black bg-black px-4 py-2 text-white shadow-[6px_6px_0_0_#fff]">
        <Cat className="h-8 w-8 text-[#FFE600]" />
        <span className="font-heading text-3xl font-extrabold uppercase sm:text-5xl">
          Coming soon
        </span>
      </div>

      <h2 className="mt-8 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
        {headline}
      </h2>
      <p className="mt-4 max-w-2xl text-lg font-medium">{message}</p>

      <Button asChild className="mt-8">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Take me home
        </Link>
      </Button>
    </div>
  </PageShell>
);

export default ComingSoon;
