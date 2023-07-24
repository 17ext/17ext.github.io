import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { Navbar } from "flowbite-react";

export default function navbar() {
  return (
    <Navbar className="dark:bg-transparent">
      <Navbar.Brand href="https://michalk.nl" className="ml-4 mt-4">
        <Image
          src="/logo.png"
          className="mr-3 h-10 w-10 rounded-full sm:h-9"
          alt="Scraayp's Logo"
          width={45}
          height={50}
        />
        <span className="text-primary self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
          Michal
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="hover:text-primary text-xl">
          Home
        </Navbar.Link>
        <Navbar.Link href="#about" className="hover:text-primary text-xl">
          About
        </Navbar.Link>
        <Navbar.Link href="#projects" className="hover:text-primary text-xl">
          Projects
        </Navbar.Link>
        <Navbar.Link href="#contact" className="hover:text-primary text-xl">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
