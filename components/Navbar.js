"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { fetchuser } from "@/actions/useractions";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  const [showdropdown, setshowdropdown] = useState(false);
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();

    const searchUsername = username.trim();

    if (!searchUsername) {
      return;
    }

    setSearching(true);
    setSearchError("");

    try {
      const user = await fetchuser(searchUsername);

      if (!user) {
        setSearchError("User not found");
        return;
      }

      router.push(`/${user.username}`);
      setUsername("");
    } catch (error) {
      console.error(error);
      setSearchError("Something went wrong");
    } finally {
      setSearching(false);
    }
  };

  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <nav className="flex justify-between px-2 md:px-4 bg-gray-900 text-white h-16 items-center relative">
      <div className="logo font-bold text-lg md:text-xl">
        <Link href={"/"}>
          <span className="flex justify-center items-center ">
            <Image className="md:w-12 md:h-12 w-9 h-9" src="/tea.gif" alt="" width={44} height={44} />
            GetMeaChai
          </span>
        </Link>
      </div>

      {/* <ul className='flex gap-6 cursor-pointer'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
          </ul> */}
      <form onSubmit={handleSearch} className="flex flex-col absolute mt-16 w-full md:w-80 left-0 md:left-250 md:right-120 top-0 md:mt-2.5 md:mr-4 z-10">
        <div className="flex">
          <input
            type="text"
            placeholder="Search username..."
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setSearchError("");
            }}
            className="md:w-56 w-full px-4 border-t-0 py-2 md:rounded-l-lg bg-gray-800 border border-gray-600 text-white outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            disabled={searching}
            className="px-4 py-2 bg-linear-to-br from-purple-600 to-blue-500 md:rounded-r-lg"
          >
            {searching ? "..." : "Search"}
          </button>
        </div>

        {searchError && (
          <span className="absolute top-11 left-0 text-red-400 text-sm">
            {searchError}
          </span>
        )}
      </form>
      <div className="relative flex md:flex-row flex-col">
        {session && (
          <>
            <button
              onClick={() => setshowdropdown(!showdropdown)}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="md:mx-2 bg-linear-to-br  hover:bg-linear-to-bl  text-white from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 md:font-medium font-normal text-[11px] rounded-lg md:text-sm px-2 md:px-8 py-2 md:py-2.5 text-center leading-5 inline-flex items-center"
              type="button"
            >
              {session?.user?.email}
              <svg
                className="w-4 h-4 ms-1.5 -me-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className={`z-10 ${showdropdown ? "" : "hidden"}  absolute bg-gray-800 border border-gray-600 rounded-lg shadow w-44`}
            >
              <ul
                className="p-2 text-sm text-body text-gray-400 font-medium"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    href="/dashboard"
                    onClick={() => setshowdropdown(false)}
                    className="hover:bg-gray-600 inline-flex items-center w-full p-2 hover:text-white rounded-lg"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${session?.user?.username}`}
                    onClick={() => setshowdropdown(false)}
                    className="inline-flex items-center w-full p-2 hover:bg-gray-600 hover:text-white rounded-lg"
                  >
                    Your page
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={() => {
                      signOut();
                      setshowdropdown(false);
                    }}
                    className="text-red-500 inline-flex items-center w-full p-2 hover:bg-red-500 hover:text-white rounded-lg"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}

        {session && (
          <button
            className="hidden md:block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-normal md:font-medium rounded-lg text-[10px] md:text-sm px-0 py-1 md:px-4 md:py-2.5 md:ml-2 text-center md:leading-5"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </button>
        )}
        {!session && (
          <Link href="/login">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-normal md:font-medium rounded-lg text-[14px] md:text-sm px-3.5 py-2 md:px-4 md:py-2.5 text-center md:leading-5">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
