import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

const index = () => {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
      </Head>
      <header className="flex justify-between w-full p-5 text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p>Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p>Gmail</p>
          <p>Images</p>
          <ViewGridIcon className="h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-100" />
          <Avatar url="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" />
        </div>
      </header>
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          width={300}
          height={100}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
            defaultValue={router.query.term}
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col mt-8 w-1/2 space-y-2 justify-center sm:space-y-0 sm:space-x-4 sm:flex-row">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm feeling lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default index;
// https://google-clone-black.vercel.app/
