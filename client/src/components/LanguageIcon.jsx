export default function LanguageIcon({ icon, onClick }) {
  return (
    <img
      className="h-7 w-7 rounded-full hover:shadow-md hover:shadow-gray-500 cursor-pointer"
      src={icon}
      onClick={onClick}
      alt="Language Icon"
    />
  );
}
