import PageShell from "@/components/ui/page-shell";
import { GraduationCap } from "lucide-react";

const courses = [
  {
    title: "Data Structures and Algorithms",
    meta: "Teaching Assistant • Montana State University • Fall 2025  • CSCI 132",
  },
  {
    title: "Human Computer Interaction",
    meta: "Teaching Assistant • Montana State University • Spring 2025  • CSCI 445",
    
  },
  {
    title: "Programming with C",
    meta: "Teaching Assistant • Montana State University • Spring 2026 • CSCI 112",
   
  },

];

export default function TeachingPage() {
  return (
    <PageShell
      title="Teaching"
      description="Courses I've taught or assisted with."
      colorClass="bg-[#5CC8FF]"
    >
      <ul className="divide-y-4 divide-black border-y-4 border-black">
        {courses.map((course, i) => (
          <li key={i} className="flex gap-4 py-6">
            <div className="h-fit shrink-0 border-2 border-black bg-white p-2 shadow-[3px_3px_0_0_#000]">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                {course.title}
              </h2>
              <p className="mt-1 font-mono text-xs font-bold uppercase">
                {course.meta}
              </p>
              {/* <p className="mt-2 max-w-3xl font-medium">{course.description}</p> */}
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
