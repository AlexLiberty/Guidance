export default function SubmitButton({ isDisabled }) {
  return (
    <button
      type="submit"
      disabled={isDisabled}
      className={
        isDisabled
          ? "h-12 w-4/5 bg-zinc-500 text-zinc-200 rounded-full shadow-sm shadow-black"
          : "h-12 w-4/5 bg-[#581ADB] text-white rounded-full shadow-sm shadow-black"
      }
    >
      Continue
    </button>
  );
}
