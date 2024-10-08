import { useState, useEffect, useRef } from "react";
import LanguageIcon from "./LanguageIcon";
import LanguageListDropdown from "./LanguageListDropdown";

export default function LanguageSelector() {
  const defaultIcon = "src/assets/icons/united-kingdom.png";
  const icons = [
    "src/assets/icons/united-kingdom.png",
    "src/assets/icons/ukraine.png",
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(defaultIcon);

  const dropdownRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const changeLanguage = (newIcon) => {
    setSelectedIcon(newIcon);
    setIsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative">
      <LanguageIcon icon={selectedIcon} onClick={toggleVisibility} />
      <div ref={dropdownRef}>
        <LanguageListDropdown
          isVisible={isVisible}
          languages={icons}
          onLanguageSelect={changeLanguage}
        />
      </div>
    </div>
  );
}
