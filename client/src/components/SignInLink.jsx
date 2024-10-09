import { useState } from "react";
import RegistrationForm from "./RegistrationForm";

export default function SignInLink() {
  const [isRegistrationFormVisible, setIsRegistrationFormVisible] =
    useState(false);

  const toggleRegistrationForm = () => {
    setIsRegistrationFormVisible(!isRegistrationFormVisible);
  };

  const closeRegistrationForm = () => {
    setIsRegistrationFormVisible(false);
  };

  return (
    <>
      <a
        className="h-8 w-24 p-4 flex items-center justify-center font-bold text-center text-sm text-[#581ADB] rounded-full border-t-[1px] border-gray-300 shadow-sm shadow-gray-500 hover:bg-gray-100 cursor-pointer"
        onClick={toggleRegistrationForm}
      >
        Sign In
      </a>

      {isRegistrationFormVisible && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeRegistrationForm}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <RegistrationForm onClose={closeRegistrationForm} />
          </div>
        </div>
      )}
    </>
  );
}
