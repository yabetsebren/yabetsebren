import { Badge } from "@/components/ui/badge";
import PageShell from "@/components/ui/page-shell";
import { FileText, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

type PublicationLinks = {
  paper?: string;
  pdf?: string;
  arxiv?: string;
  code?: string;
};

const publications: {
  id: string;
  title: React.ReactNode;
  authors: string[];
  venue: string;
  year: string;
  type: string;
  links: PublicationLinks;
}[] = [
  {
    id: "weed-research-2026",
    title: (
      <>
        Influence of Chlorsulfuron and <em>Funneliformis mosseae</em>, an
        Arbuscular Mycorrhizal Fungus on <em>Striga hermonthica</em> Incidence
        and Sorghum Growth
      </>
    ),
    authors: [
      "Suha H. A. Elhag",
      "Magdam E. Abdelgani",
      "Namia E. Gorashi",
      "Yabets G. Ebren",
      "Abdel A. G. T. Babiker",
    ],
    venue: "Weed Research",
    year: "2026",
    type: "Journal Article",
    links: { paper: "https://onlinelibrary.wiley.com/doi/10.1111/wre.70114" },
  },
  {
    id: "placeholder-second",
    title: "more coming soon",
    authors: ["Yabets Ebren"],
    venue: "",
    year: "2026",
    type: "Preprint",
    links: {},
  },
];

const linkClass =
  "inline-flex items-center gap-1.5 text-sm font-bold underline decoration-2 underline-offset-4 hover:bg-white";

// No cards: plain rows on the pink page, split by thick black rules.
export default function PublicationsPage() {
  return (
    <PageShell
      title="Publications"
      description="Papers and preprints."
      colorClass="bg-[#FF8AC4]"
    >
      <ul className="divide-y-4 divide-black border-y-4 border-black">
        {publications.map((pub) => (
          <li key={pub.id} className="py-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{pub.type}</Badge>
              <span className="font-mono text-xs font-bold uppercase">
                {pub.venue} · {pub.year}
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold leading-snug sm:text-3xl">
              {pub.title}
            </h2>
            <p className="mt-2 max-w-3xl font-medium">
              {pub.authors.map((author, i) => (
                <span key={author}>
                  {author.includes("Ebren") ? (
                    <strong className="font-extrabold underline decoration-2 underline-offset-4">
                      {author}
                    </strong>
                  ) : (
                    author
                  )}
                  {i < pub.authors.length - 1 && ", "}
                </span>
              ))}
            </p>

            {(pub.links.paper || pub.links.pdf || pub.links.arxiv || pub.links.code) && (
              <div className="mt-4 flex flex-wrap gap-4">
                {pub.links.paper && (
                  <Link href={pub.links.paper} target="_blank" className={linkClass}>
                    <ExternalLink className="h-4 w-4" />
                    Read paper
                  </Link>
                )}
                {pub.links.pdf && (
                  <Link href={pub.links.pdf} target="_blank" className={linkClass}>
                    <FileText className="h-4 w-4" />
                    PDF
                  </Link>
                )}
                {pub.links.arxiv && (
                  <Link href={pub.links.arxiv} target="_blank" className={linkClass}>
                    <ExternalLink className="h-4 w-4" />
                    arXiv
                  </Link>
                )}
                {pub.links.code && (
                  <Link href={pub.links.code} target="_blank" className={linkClass}>
                    <Github className="h-4 w-4" />
                    Code
                  </Link>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
