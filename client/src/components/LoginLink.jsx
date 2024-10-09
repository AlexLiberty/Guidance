export default function LoginLink() {
  return (
    <>
      <a
        className="h-8 w-32 p-4 pr-8
        flex items-center justify-center
        font-bold text-center text-sm text-[#581ADB]
        rounded-full border-t-[1px] border-gray-300 shadow-sm shadow-gray-500
      hover:bg-gray-100 cursor-pointer"
      >
        Log In
      </a>
      <img
        className="h-7 w-7 rounded-full relative right-12 top-[1px]"
        src="src/assets/icons/user.png"
      ></img>
    </>
  );
}
