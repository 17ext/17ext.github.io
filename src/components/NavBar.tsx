import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useState } from "react";

export default function NavBar() {
  const session = useSession();
  const user = session.data?.user;

  const [active, setActive] = useState(0);

  const buttonStyle = { unfocused: "bg-gray-900", focused: "bg-gray-500" };
  const isPageWithSidebar = false;
  const currTheme = "light";

  return (
    <div className="sticky top-0 z-20 mx-auto flex max-w-[1420px] items-center justify-center">
      <NavBar
        // fluid={true}
        rounded={true}
        className="z-20 w-full border-b border-gray-200 bg-white px-2 py-2.5 dark:border-gray-600 dark:bg-gray-900 sm:px-4"
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <NavBar.Brand href="/" className="flex cursor-pointer items-center">
            {/* <img
                            src={Logo.src}
                            className="h-6 mr-3 sm:h-9"
                            alt="Logo"
                        /> */}
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Fly
            </span>
          </NavBar.Brand>

          <div className="flex gap-2">
            {/* Day - night toggler */}
            <span className="ml-auto">
              {currTheme.length > 0 ? (
                <button
                  onClick={() => {}}
                  id="theme-toggle"
                  type="button"
                  className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:float-right md:mr-4"
                >
                  <svg
                    id="theme-toggle-dark-icon"
                    className={`₹{
                                            currTheme == "dark" && "hidden"
                                        } h-5 w-5`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <svg
                    id="theme-toggle-light-icon"
                    className={`${currTheme == "light" && "hidden"} h-5 w-5`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              ) : null}
              {/* <Nav.Toggle className="" /> */}
            </span>
            <div className="">
              {session ? (
                // <MenuDropdown session={session} />
                <hr />
              ) : (
                <button
                  onClick={() => void signIn("kakao", { callbackUrl: "/" })}
                  className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-center text-base font-medium text-white focus:ring-4"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </NavBar>
    </div>

    // <nav className="bg-gray-800">
    //   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //     <div className="relative flex h-16 items-center justify-between">
    //       <div className="hidden sm:ml-6 sm:block">
    //         <div className="flex flex-row space-x-3 ">
    //           {user == null ? (
    //             <Link href="/">
    //               <button
    //                 className={`rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-slate-500 ${buttonStyle.unfocused}`}
    //               >
    //                 Home
    //               </button>
    //             </Link>
    //           ) : (
    //             <Link href="/">
    //               <button
    //                 className={`rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-slate-500
    //               ${active == 0 ? buttonStyle.focused : buttonStyle.unfocused}`}
    //                 onClick={() => setActive(0)}
    //               >
    //                 New Spending
    //               </button>
    //             </Link>
    //           )}
    //           {user == null ? (
    //             <></>
    //           ) : (
    //             <Link href="/profile">
    //               <button
    //                 className={`rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-slate-500
    //               ${active == 1 ? buttonStyle.focused : buttonStyle.unfocused}`}
    //                 onClick={() => setActive(1)}
    //               >
    //                 Profile
    //               </button>
    //             </Link>
    //           )}
    //           {user == null ? (
    //             <></>
    //           ) : (
    //             <Link href="/search">
    //               <button
    //                 className={`rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-slate-500
    //                 ${
    //                   active == 2 ? buttonStyle.focused : buttonStyle.unfocused
    //                 }`}
    //                 onClick={() => setActive(2)}
    //               >
    //                 Search Friends
    //               </button>
    //             </Link>
    //           )}
    //         </div>
    //       </div>

    //       <div className="hidden justify-end sm:ml-6 sm:block">
    //         <div className="flex flex-row space-x-3 ">
    //           {user == null ? (
    //             <Link href="/">
    //               <button
    //                 className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-500"
    //                 onClick={() => void signIn("kakao", { callbackUrl: "/" })}
    //               >
    //                 Sign In
    //               </button>
    //             </Link>
    //           ) : (
    //             <Link href="/">
    //               <button
    //                 className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-500"
    //                 onClick={() => void signOut({ callbackUrl: "/" })}
    //               >
    //                 Sign Out
    //               </button>
    //             </Link>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}
