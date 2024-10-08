import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import LanguageSelector from "./components/LanguageSelector";
import SignInLink from "./components/SignInLink";
import LoginLink from "./components/LoginLink";

export default function App() {
  return (
    <header className="h-20 flex items-center justify-center">
      <div className="pl-20 w-1/2 h-full flex items-center justify-start">
        <FontAwesomeIcon
          icon={faBarsStaggered}
          rotation={180}
          style={{ color: "#581ADB" }}
        />
        <h1 className="text-black text-3xl font-bold select-none pb-2">
          Guidance
        </h1>
        <FontAwesomeIcon
          icon={faStar}
          spin
          size="xl"
          style={{ color: "#581ADB" }}
        />
        <h1 className="text-[#581ADB] text-3xl font-bold select-none pb-2">
          com
        </h1>
      </div>

      <div className="pr-20 w-1/2 h-full flex items-center justify-end gap-4">
        <LanguageSelector />
        <SignInLink />
        <LoginLink />
      </div>
    </header>
  );
}
