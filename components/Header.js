import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center p-6">
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          width={120}
          height={40}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex-grow flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            className="flex flex-grow w-full focus:outline-none"
            type="text"
            ref={searchInputRef}
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 sm:mr-3 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125"
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
          <button hidden type="submit" onClick={search}></button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
        />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
