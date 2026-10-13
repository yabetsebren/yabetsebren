import { Badge } from "@/components/ui/badge";
import PageShell from "@/components/ui/page-shell";

const skillCategories = [
  {
    label: "Research Areas",
    skills: ["Causal Inference", "Causal Discovery", "Structural causal models (SCMs)","Counterfactual reasoning", "Applied ML"],
  },
  {
    label: "ML & Deployment",
    skills: ["PyTorch", "TensorFlow", "Docker", "scikit-learn", "Hugging Face"],
  },
];

export default function SkillsPage() {
  return (
    <PageShell
      title="Skills"
      description="What I work with."
      colorClass="bg-[#C9A7FF]"
    >
      <ul className="divide-y-4 divide-black border-y-4 border-black">
        {skillCategories.map((category) => (
          <li
            key={category.label}
            className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-6"
          >
            <h2 className="w-44 shrink-0 font-mono text-sm font-bold uppercase tracking-wider">
              {category.label}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
