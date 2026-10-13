import ComingSoon from "@/components/ui/coming-soon";

// Placeholder until the updates page is ready: replace <ComingSoon /> with the
// list of posts (individual posts still live at /news/[id]).
export default function NewsPage() {
  return (
    <ComingSoon
      title="Updates"
      colorClass="bg-[#FFE600]"
      description="Breaking news: there is no news. Yet."
      headline="Nothing to report, but the cat is sitting on the keyboard again."
      message="Real updates are on the way, as soon as I'm allowed back at my own keyboard. Until then, enjoy this very official announcement that something will be announced."
    />
  );
}
