import LanguageIcon from "./LanguageIcon";

export default function LanguageListDropdown({
  isVisible,
  languages,
  onLanguageSelect,
}) {
  return (
    <div
      className={`min-h-20 h-auto min-w-40 max-w-80 absolute top-full mt-2 left-1/2 transform -translate-x-1/2
        border-[1px] border-gray-200 shadow-md shadow-gray-500 rounded-2xl p-4
        flex justify-center content-center items-center gap-4
        transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      {languages && languages.length > 0 ? (
        languages.map((icon, index) => (
          <LanguageIcon
            key={index}
            icon={icon}
            onClick={() => onLanguageSelect(icon)}
          />
        ))
      ) : (
        <p>No languages available</p>
      )}
    </div>
  );
}
