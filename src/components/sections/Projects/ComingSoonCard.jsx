export const ComingSoonCard = () => {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all">
      <h3 className="text-xl font-bold mb-2">More to come...</h3>
      <p className="text-gray-400 mb-4">
        I'm continually pursuing new projects to deepen my expertise and extend
        the range of my capabilities. My current is in mastering advanced
        programming techniques and developing proficiency in backend
        development. These endeavors help me build a more comprehensive skill
        set while exploring technologies in the development landscape.
      </p>
      <div className="flex justify-between items-center">
        <a
          href="https://www.linkedin.com/in/brian-go/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Check my LinkedIn for more 🙂
        </a>
      </div>
    </div>
  );
};
