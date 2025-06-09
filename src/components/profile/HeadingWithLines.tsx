interface HeadingWithLinesProps {
  title: string;
  description?: string;
}

const HeadingWithLines: React.FC<HeadingWithLinesProps> = ({
  title,
  description,
}) => {
  return (
    <div className="my-6 mt-10">
      <div className="flex items-center mb-2">
        {/* Left fading line */}
        <div className="block flex-grow h-px bg-gradient-to-l from-textlight/40 dark:from-textdark/40 to-transparent" />

        {/* Heading */}
        <h2 className="text-2xl font-semibold mx-4 text-center whitespace-nowrap">
          {title}
        </h2>

        {/* Right fading line */}
        <div className="block flex-grow h-px bg-gradient-to-r from-textlight/40 dark:from-textdark/40 to-transparent" />
      </div>

      {description && (
        <p className="text-lg text-textaltlight dark:text-textaltdark text-center">
          {description}
        </p>
      )}
    </div>
  );
};

export default HeadingWithLines;
