import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import { registerUser } from "../services/userService";

export default function RegistrationForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (e) => {
    setEmail(e.target.value);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(e.target.value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
    } else {
      setPasswordError("");
    }
  };

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const isDisabled =
    emailError ||
    passwordError ||
    confirmPasswordError ||
    !email ||
    !password ||
    !confirmPassword;

  const [registrationError, setRegistrationError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !email ||
      emailError ||
      !password ||
      passwordError ||
      !confirmPassword ||
      confirmPasswordError
    ) {
      return;
    }

    try {
      const userData = { email, password };
      const response = await registerUser(userData);
      alert(response.message);
      onClose();
    } catch (error) {
      setRegistrationError(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-auto w-[420px] pb-12
        absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10
        flex flex-col items-center
        bg-white
        rounded-xl shadow-md shadow-gray-500"
    >
      <h3 className="text-2xl text-[#581ADB] font-bold text-center pt-4 pb-8 select-none">
        Register
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="sm"
          style={{ color: "#6b7280" }}
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        />
      </h3>
      <InputField
        type="email"
        name="email"
        placeholder="Email"
        validationMessage={emailError}
        value={email}
        onChange={validateEmail}
        required
      />
      <div className="h-8 w-full"></div>
      <InputField
        type="password"
        name="password"
        placeholder="Password"
        validationMessage={passwordError}
        value={password}
        onChange={validatePassword}
        required
      />
      <div className="h-4 w-full"></div>
      <InputField
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        validationMessage={confirmPasswordError}
        value={confirmPassword}
        onChange={validateConfirmPassword}
        required
      />
      {registrationError && <p className="text-red-500">{registrationError}</p>}{" "}
      <div className="h-8 w-full"></div>
      <SubmitButton isDisabled={isDisabled} />
      <div className="h-8 w-full"></div>
      <button className="h-12 w-4/5 border-2 border-gray-300 text-white rounded-full flex items-center justify-start">
        <img
          className="h-6 w-6 transform translate-x-4"
          src="/src/assets/icons/google.png"
        />
        <p className="w-full pb-1 pr-6 text-center text-black">
          Sign In with Google
        </p>
      </button>
      <div className="h-4 w-full"></div>
      <button className="h-12 w-4/5 border-2 border-gray-300 text-white rounded-full flex items-center justify-start">
        <img
          className="h-6 w-6 transform translate-x-4"
          src="/src/assets/icons/facebook.png"
        />
        <p className="w-full pb-1 pr-6 text-center text-black">
          Sign In with Facebook
        </p>
      </button>
      <div className="h-4 w-full"></div>
      <button className="h-12 w-4/5 border-2 border-gray-300 text-white rounded-full flex items-center justify-start">
        <img
          className="h-6 w-6 transform translate-x-4"
          src="/src/assets/icons/apple.png"
        />
        <p className="w-full pb-1 pr-6 text-center text-black">
          Sign In with Apple
        </p>
      </button>
    </form>
  );
}
