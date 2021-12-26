import Head from "next/head";
import Avatar from "../components/Avatar";
import {
  ViewGridIcon,
  MicrophoneIcon,
} from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import logo from "../assets/google.png";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) {
      return;
    }

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta
          name="description"
          content="Google Clone app"
        />
        <link rel="icon" href="/icon.png" />
      </Head>

      {/* Header */}
      <header className="flex justify-between p-5 w-full text-gray-00 space-x-4">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <Avatar url="https://media-exp1.licdn.com/dms/image/C5603AQGrjA0HbL0VYA/profile-displayphoto-shrink_400_400/0/1589376925679?e=1645056000&v=beta&t=mL9v6_YbzL-gVLGNIR0pN0SXP6D_oW0OrHjcHeXBPZQ" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow ml-5 mr-5 w-4/5">
        <Image
          src={logo}
          height={130}
          width={400}
          alt=""
        />

        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md 
        rounded-full border border-gray-200 px-5 py-2.5 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-6 mr-3 text-gray-500" />
          <input
            className="focus:outline-none flex-grow"
            type="text"
            ref={searchInputRef}
          />

          <MicrophoneIcon className="h-5 text-gray-500 ml-5 hover:text-black cursor-pointer" />
        </div>

        <div className="flex mt-8 flex-col w-1/2 space-y-2 justify-center sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>Google Search</button>

          <button className="btn" onClick={search}>I&apos;m Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
