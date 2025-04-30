export const DUProjectCard = () => {
  const DUTechStack = [
    "Javascript",
    "React",
    "Jest",
    "Next.JS",
    "ThemeUI",
    "GraphQL",
  ];

  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all">
      <h3 className="text-xl font-bold mb-2">Digital University</h3>
      <p className="text-gray-400 mb-4">
        Provides airmen with access to modern digital learning resources to
        build technical skills in areas like software development, data science,
        cybersecurity, and cloud computing.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {DUTechStack.map((tech, key) => {
          return (
            <span
              key={key}
              className="
                  bg-blue-500/10 text-blue-500 py-1 px-3 
                  rounded-full text-sm
                  transition
                  hover:bg-blue-500/20 hover:-translate-y-0.5
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                "
            >
              {tech}
            </span>
          );
        })}
      </div>
      <div className="flex justify-between items-center">
        <a
          href="https://digitalu.af.mil/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};
