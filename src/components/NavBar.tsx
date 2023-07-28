import { Avatar, Dropdown } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

export default function NavBar() {
  const router = useRouter();
  const session = useSession();
  const user = session.data?.user;
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  return (
    <header className="fixed z-50 w-full border-b border-gray-200 bg-white bg-opacity-90 backdrop-blur backdrop-filter dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-start">
          <a
            className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white"
            href="/"
          >
            <Image
              src="/images/logo-32.png"
              width={22}
              height={24}
              alt="로고"
            />
            <span className="-mt-0.5 hidden lg:block">플라이</span>
          </a>
          <form action="#" method="GET" className="pl-2 lg:pl-5">
            <label htmlFor="search" className="sr-only">
              검색
            </label>
            <div className="relative mt-1 lg:w-96">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                placeholder="검색"
              />
            </div>
          </form>
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
              href="#"
            >
              <span className="">게시글</span>
            </a>
            <a
              className="group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200"
              href="#"
            >
              <span className="">태그</span>
            </a>
          </div>
          <div className="flex items-center pl-2 lg:space-x-2 lg:pl-8">
            <button
              onClick={switchTheme}
              type="button"
              aria-haspopup="menu"
              data-state="closed"
              className="flex h-8 items-center rounded-md bg-transparent px-3 text-gray-400 hover:bg-gray-50 hover:text-slate-500 dark:text-white dark:hover:bg-gray-900 dark:hover:text-slate-400"
            >
              <span className="block w-4">
                {mounted && theme == "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </button>
            {user ? (
              <Dropdown inline label={<Avatar rounded size="sm" />}>
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
                <Dropdown.Item onClick={() => void signOut()}>
                  로그아웃
                </Dropdown.Item>
              </Dropdown>
            ) : (
              <button
                className="rounded-full bg-white/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-white/20"
                onClick={() => router.push("/signin")}
              >
                로그인
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
