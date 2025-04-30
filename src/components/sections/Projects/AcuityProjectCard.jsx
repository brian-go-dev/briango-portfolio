export const AcuityProjectCard = () => {
  const acuityTechStack = [
    "Javascript",
    "React",
    "Jest",
    "Next.JS",
    "ThemeUI",
    "GraphQL",
  ];

  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all">
      <h3 className="text-xl font-bold mb-2">Government Contract Project</h3>
      <p className="text-gray-400 mb-4">
        Advanced data analytics and machine learning to process and analyze
        vast, complex datasets—such as trade records, financial transactions,
        and shipment patterns—to detect anomalies and uncover illicit activities
        tied to transnational criminal organizations.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {acuityTechStack.map((tech, key) => {
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
    </div>
  );
};
