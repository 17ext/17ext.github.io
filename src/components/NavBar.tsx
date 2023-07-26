import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useState } from "react";

export default function NavBar() {
  const session = useSession();
  const user = session.data?.user;

  const [active, setActive] = useState(0);

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://flowbite-react.com/favicon.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

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
