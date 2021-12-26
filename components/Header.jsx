import { SearchIcon } from '@heroicons/react/outline';
import { MicrophoneIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import logo from '../assets/google.png'
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header({ searchTerm }) {
    const router = useRouter();
    const searchInputRef = useRef(searchTerm);

    const search = (e) => {
        e.preventDefault();
    
        const term = searchInputRef.current.value;
    
        if (!term) {
          return;
        }
    
        router.push(`/search?term=${term}`);
      };

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image 
                    className="cursor-pointer" 
                    src={logo} 
                    alt="" 
                    height={50}
                    width={140}
                    onClick={() => router.push('/')}
                />

                <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg 
                    max-w-3xl items-center px-4 sm:px-6 py-2 sm:py-3 ml-10 mr-5"
                >
                    <input 
                        className="flex-grow w-full focus:outline-none" 
                        ref={searchInputRef} 
                        type="text" 
                    />
                    <XIcon className="h-5 sm:h-7 sm:mr-3 text-gray-500 cursor-pointer 
                        transition duration-100 transform hover:scale-125" 
                        onClick={() => (searchInputRef.current.value = "")} 
                    />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex 
                        text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer" 
                    />
                    <SearchIcon className="h-6 hidden sm:inline-flex 
                        text-blue-500 cursor-pointer"
                    />
                    <button hidden type="submit" onClick={search}>
                        Search
                    </button>
                </form>
                <Avatar 
                    className="ml-auto"
                    url="https://media-exp1.licdn.com/dms/image/C5603AQGrjA0HbL0VYA/profile-displayphoto-shrink_400_400/0/1589376925679?e=1645056000&v=beta&t=mL9v6_YbzL-gVLGNIR0pN0SXP6D_oW0OrHjcHeXBPZQ" 
                />
            </div>

            <HeaderOptions />
        </header>
    )
}

export default Header
