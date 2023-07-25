import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { FaTwitter, FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <footer className=" m-4 rounded-lg  shadow">
      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <span className="block pb-5 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2023{" "}
        <a href="mailto:hello@michalk.nl" className="hover:underline">
          Michal
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
