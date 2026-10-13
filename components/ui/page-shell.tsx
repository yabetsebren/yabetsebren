interface PageShellProps {
  title: string;
  description: string;
  colorClass: string;
  children: React.ReactNode;
}

const PageShell = ({
  title,
  description,
  colorClass,
  children,
}: PageShellProps) => (
  <div
    className={`min-h-[calc(100vh-5rem)] border-b-4 border-black text-black [background-size:18px_18px] bg-[radial-gradient(rgba(0,0,0,0.14)_1.5px,transparent_1.5px)] ${colorClass}`}
  >
    <div className="container mx-auto max-w-5xl px-4 py-10 md:py-14">
      <h1 className="inline-block -rotate-1 border-4 border-black bg-white px-4 py-1 break-words text-4xl font-extrabold uppercase leading-tight shadow-[5px_5px_0_0_#000] sm:text-6xl sm:shadow-[6px_6px_0_0_#000] md:text-7xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg font-bold">{description}</p>
      <div className="mt-8">{children}</div>
    </div>
  </div>
);

export default PageShell;
