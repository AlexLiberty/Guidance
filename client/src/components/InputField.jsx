import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function InputField({
  type = "text",
  name,
  placeholder,
  validationMessage = "",
  pattern = "",
  required = false,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col w-4/5">
      <input
        type={type}
        name={name}
        required={required}
        pattern={pattern}
        className="h-12 p-4 pl-8 pt-3 outline-none border-2 border-gray-300 bg-gray-100 rounded-full text-[#581ADB]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {validationMessage && (
        <span
          id={`${name}-validation`}
          className="text-xs text-[#ee0039] flex gap-2 items-center font-bold mt-1"
        >
          <FontAwesomeIcon
            beatFade
            icon={faCircleExclamation}
            style={{ color: "#ee0039" }}
          />
          {validationMessage}
        </span>
      )}
    </div>
  );
}
