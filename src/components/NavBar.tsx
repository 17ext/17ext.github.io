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
    <header className="fixed z-50 w-full border-b border-gray-200 bg-white bg-opacity-90 backdrop-blur backdrop-filter dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="flex items-center space-x-2.5">
          <a
            className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white"
            href="/"
          >
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.43 0.92268C11.1426 0.398115 12.1177 0.407491 12.82 0.945665L19.9928 6.44198C21.0266 7.23419 21.0266 8.78771 19.9928 9.57992L17.2573 11.6761L20.0379 13.9037C21.0493 14.7139 21.022 16.2574 19.9826 17.0315L12.62 22.5153C11.8634 23.0788 10.8134 23.0332 10.1089 22.4063L4.34789 17.2802L3.54224 16.5903C-0.0530112 13.5114 0.390183 7.84094 4.41274 5.35212L10.43 0.92268ZM16.1955 10.8254L12.8515 8.14659C12.1375 7.57457 11.1235 7.56365 10.3972 8.12017L7.92298 10.0161C6.88913 10.8084 6.88913 12.3619 7.92298 13.1541L10.4154 15.064C11.129 15.6108 12.1224 15.6108 12.836 15.064L16.1773 12.5036L19.2086 14.932C19.5457 15.2021 19.5366 15.7166 19.1901 15.9747L11.8275 21.4585C11.5753 21.6463 11.2253 21.6311 10.9905 21.4221L5.2248 16.2918L4.40495 15.5895C1.48255 13.0869 1.84941 8.47338 5.13088 6.46078L5.15471 6.44617L11.2165 1.98398C11.454 1.80913 11.779 1.81225 12.0132 1.99164L19.1859 7.48796C19.5305 7.75203 19.5305 8.26987 19.1859 8.53394L16.1955 10.8254ZM15.1155 11.653L12.0291 14.018C11.7913 14.2003 11.4601 14.2003 11.2223 14.018L8.72984 12.1081C8.38523 11.844 8.38523 11.3262 8.72984 11.0621L11.2041 9.16615C11.4462 8.98065 11.7842 8.98429 12.0222 9.17496L15.1155 11.653Z"
                fill="#7C3AED"
                stroke="#7C3AED"
                stroke-width="0.5"
              ></path>
            </svg>
            <span className="-mt-0.5">Contentlayer</span>
          </a>
          <span className="inline-block whitespace-nowrap rounded border border-slate-400/70 px-1.5 align-middle font-medium leading-4 tracking-wide text-slate-500 [font-size:10px] dark:border-slate-600 dark:text-slate-400">
            Beta
          </span>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-8 w-8 items-center justify-end text-slate-600 dark:text-slate-300"
          >
            <span className="inline-block w-4">
              <svg
                viewBox="0 0 32 32"
                fill="current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 4.28571C0 3.02357 1.02357 2 2.28571 2H29.7143C30.9786 2 32 3.02357 32 4.28571C32 5.55 30.9786 6.57143 29.7143 6.57143H2.28571C1.02357 6.57143 0 5.55 0 4.28571ZM0 15.7143C0 14.45 1.02357 13.4286 2.28571 13.4286H29.7143C30.9786 13.4286 32 14.45 32 15.7143C32 16.9786 30.9786 18 29.7143 18H2.28571C1.02357 18 0 16.9786 0 15.7143ZM29.7143 29.4286H2.28571C1.02357 29.4286 0 28.4071 0 27.1429C0 25.8786 1.02357 24.8571 2.28571 24.8571H29.7143C30.9786 24.8571 32 25.8786 32 27.1429C32 28.4071 30.9786 29.4286 29.7143 29.4286Z"></path>
              </svg>
            </span>
          </button>
        </div>
        <nav className="hidden items-center divide-x divide-gray-200 dark:divide-gray-800 lg:flex">
          <div className="flex items-center pr-2 lg:space-x-4 lg:pr-8">
            <a
              className="group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200"
              href="/docs"
            >
              <span className="">Documentation</span>
            </a>
            <a
              className="group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200"
              href="/examples/nextjs"
            >
              <span className="">Examples</span>
            </a>
            <div className="px-3">
              <button
                aria-label="Search"
                className="flex h-8 cursor-text items-center rounded-md border border-gray-200 bg-gray-50 px-2 text-sm hover:border-gray-300 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 dark:hover:bg-gray-800"
              >
                <span className="mr-2 block w-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="current"
                    viewBox="0 0 512 512"
                  >
                    <path d="M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z"></path>
                  </svg>
                </span>
                <span className="mr-8 text-slate-400 dark:text-slate-500">
                  Search...
                </span>
                <span className="inline-block whitespace-nowrap rounded border border-slate-400/70 px-1.5 align-middle font-medium leading-4 tracking-wide text-slate-500 [font-size:10px] dark:border-slate-600 dark:text-slate-400">
                  ⌘K
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-center pl-2 lg:space-x-2 lg:pl-8">
            <button
              type="button"
              id="radix-:R3dl6:"
              aria-haspopup="menu"
              data-state="closed"
              className="flex h-8 items-center rounded-md bg-transparent px-3 text-slate-400 hover:bg-gray-50 hover:text-slate-500 dark:text-slate-500 dark:hover:bg-gray-900 dark:hover:text-slate-400"
            >
              <span className="block w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="current"
                  viewBox="0 0 512 512"
                >
                  <path d="M120.2 154.2c4.672 4.688 10.83 7.031 16.97 7.031S149.5 158.9 154.2 154.2c9.375-9.375 9.375-24.56 0-33.93L108.9 74.97c-9.344-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L120.2 154.2zM256 112c13.25 0 24-10.75 24-24v-64C280 10.75 269.3 0 256 0S232 10.75 232 24v64C232 101.3 242.8 112 256 112zM112 256c0-13.25-10.75-24-24-24h-64C10.75 232 0 242.8 0 256s10.75 24 24 24h64C101.3 280 112 269.3 112 256zM374.8 161.2c6.141 0 12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.94s-24.59-9.375-33.94 0l-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.93C362.5 158.9 368.7 161.2 374.8 161.2zM256 400c-13.25 0-24 10.75-24 24v64C232 501.3 242.8 512 256 512s24-10.75 24-24v-64C280 410.8 269.3 400 256 400zM120.2 357.8l-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.94c4.688 4.688 10.83 7.031 16.97 7.031s12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.93S129.6 348.4 120.2 357.8zM488 232h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64C501.3 280 512 269.3 512 256S501.3 232 488 232zM391.8 357.8c-9.344-9.375-24.56-9.372-33.94 .0031s-9.375 24.56 0 33.93l45.25 45.28c4.672 4.688 10.83 7.031 16.97 7.031s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L391.8 357.8zM256 144C194.1 144 144 194.1 144 256c0 61.86 50.14 112 112 112s112-50.14 112-112C368 194.1 317.9 144 256 144z"></path>
                </svg>
              </span>
            </button>
            <a
              className="group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/contentlayerdev/contentlayer"
            >
              <span className="block w-5 text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400">
                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M127.975 10C61.1744 10 7 64.167 7 130.99C7 184.444 41.663 229.787 89.7396 245.786C95.7928 246.9 97.9987 243.164 97.9987 239.955C97.9987 237.088 97.8947 229.475 97.8353 219.382C64.1824 226.69 57.082 203.161 57.082 203.161C51.5784 189.182 43.6461 185.461 43.6461 185.461C32.6612 177.96 44.4779 178.108 44.4779 178.108C56.6215 178.963 63.0089 190.579 63.0089 190.579C73.8007 209.065 91.329 203.725 98.2215 200.628C99.3208 192.814 102.448 187.482 105.901 184.459C79.0369 181.406 50.7911 171.023 50.7911 124.662C50.7911 111.456 55.5074 100.65 63.2466 92.1974C61.9988 89.1374 57.847 76.8304 64.435 60.1785C64.435 60.1785 74.588 56.9254 97.7016 72.582C107.35 69.8934 117.703 68.5565 127.99 68.5045C138.269 68.5565 148.615 69.8934 158.278 72.582C181.377 56.9254 191.515 60.1785 191.515 60.1785C198.118 76.8304 193.966 89.1374 192.726 92.1974C200.48 100.65 205.159 111.456 205.159 124.662C205.159 171.142 176.869 181.369 149.923 184.362C154.26 188.098 158.13 195.481 158.13 206.77C158.13 222.939 157.981 235.989 157.981 239.955C157.981 243.193 160.165 246.959 166.3 245.778C214.339 229.743 248.973 184.429 248.973 130.99C248.973 64.167 194.798 10 127.975 10Z"></path>
                </svg>
              </span>
              <span className="sr-only">Github</span>
            </a>
            <a
              className="group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200"
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/rytFErsARm"
            >
              <span className="block w-5 text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400">
                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M209.914 52.3C194.638 45.1524 178.303 39.9578 161.226 37C159.129 40.7918 156.678 45.8919 154.989 49.9491C136.835 47.219 118.849 47.219 101.029 49.9491C99.3397 45.8919 96.8338 40.7918 94.7177 37C77.6219 39.9578 61.2686 45.1715 45.9919 52.3378C15.1787 98.9007 6.82569 144.307 11.0022 189.069C31.4391 204.33 51.245 213.601 70.7167 219.668C75.5243 213.052 79.8121 206.018 83.5059 198.605C76.4709 195.932 69.7329 192.633 63.3662 188.803C65.0553 187.552 66.7074 186.244 68.3036 184.898C107.136 203.06 149.328 203.06 187.696 184.898C189.311 186.244 190.962 187.552 192.633 188.803C186.248 192.652 179.491 195.951 172.456 198.624C176.15 206.018 180.419 213.071 185.245 219.687C204.736 213.62 224.56 204.349 244.997 189.069C249.897 137.178 236.626 92.1892 209.914 52.3ZM88.7962 161.541C77.1393 161.541 67.5796 150.658 67.5796 137.406C67.5796 124.154 76.9351 113.252 88.7962 113.252C100.658 113.252 110.217 124.135 110.013 137.406C110.031 150.658 100.658 161.541 88.7962 161.541ZM167.203 161.541C155.546 161.541 145.986 150.658 145.986 137.406C145.986 124.154 155.342 113.252 167.203 113.252C179.064 113.252 188.624 124.135 188.42 137.406C188.42 150.658 179.064 161.541 167.203 161.541Z"></path>
                </svg>
              </span>
              <span className="sr-only">Discord</span>
            </a>
          </div>
        </nav>
      </div>
    </header>

    // <Navbar fluid rounded>
    //   <Navbar.Brand href="https://flowbite-react.com">
    //     <img
    //       alt="Flowbite React Logo"
    //       className="mr-3 h-6 sm:h-9"
    //       src="https://flowbite-react.com/favicon.svg"
    //     />
    //     <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    //       Flowbite React
    //     </span>
    //   </Navbar.Brand>
    //   <div className="flex md:order-2">
    //     <Dropdown
    //       inline
    //       label={
    //         <Avatar
    //           alt="User settings"
    //           img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
    //           rounded
    //         />
    //       }
    //     >
    //       <Dropdown.Header>
    //         <span className="block text-sm">Bonnie Green</span>
    //         <span className="block truncate text-sm font-medium">
    //           name@flowbite.com
    //         </span>
    //       </Dropdown.Header>
    //       <Dropdown.Item>Dashboard</Dropdown.Item>
    //       <Dropdown.Item>Settings</Dropdown.Item>
    //       <Dropdown.Item>Earnings</Dropdown.Item>
    //       <Dropdown.Divider />
    //       <Dropdown.Item>Sign out</Dropdown.Item>
    //     </Dropdown>
    //     <Navbar.Toggle />
    //   </div>
    //   <Navbar.Collapse>
    //     <Navbar.Link active href="#">
    //       <p>Home</p>
    //     </Navbar.Link>
    //     <Navbar.Link href="#">About</Navbar.Link>
    //     <Navbar.Link href="#">Services</Navbar.Link>
    //     <Navbar.Link href="#">Pricing</Navbar.Link>
    //     <Navbar.Link href="#">Contact</Navbar.Link>
    //   </Navbar.Collapse>
    // </Navbar>

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
