import { signIn, signOut, useSession } from "next-auth/react";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div id="mainContent">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-black">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
          <h1 className="mt-32 text-center text-4xl font-bold text-black dark:text-white">
            <span className="text-primary">Hey!</span> I am Michal,
          </h1>
          <h2 className="mt-10 text-center text-3xl font-bold text-black dark:text-white">
            I build the <span className="text-primary">backend</span> side of
            apps and websites.
          </h2>
        </div>
        <div id="about" className="w-head m-auto mt-60 block h-64">
          <h1 className="text-primary block text-left text-4xl font-bold">
            About
          </h1>
          <p className="mt-5 inline-block text-lg font-semibold text-black dark:text-white">
            I am Michal, a software developer from{" "}
            <span className="text-primary">the Netherlands.</span> <br />I have
            been coding since 2012 and have been in{" "}
            <span className="text-primary">love</span> with it since. <br />
            In my free time, I spend the most time on{" "}
            <span className="text-primary">soccer</span>. <br />I am a player,
            referee and a trainer at my local club.
          </p>
          <br />
          <Link href="/api/cv">
            <button className="group relative mb-2 mr-2 mt-5 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800 md:mt-4">
              <span className="dark:bg-darkbg relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
                CV<i className="fa-solid fa-file pl-3"></i>
              </span>
            </button>
          </Link>

          <Image
            src={"/me.jpg"}
            alt="Yeah, that's me."
            width={400}
            height={400}
            className="right-0 float-right mb-16 mt-16 rounded-full md:mb-0 md:mt-0"
          />
        </div>
        <div id="projects" className="w-head m-auto mb-40 mt-96">
          <h1 className="text-primary block text-left text-4xl font-bold">
            Projects
          </h1>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="project mt-10">
              <div className="block h-72 w-auto rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:w-96">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Personal Portfolio
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  My first personal portfolio website.
                </p>
                <div>
                  <span className="text-sm italic text-gray-400">
                    Technologies used:
                  </span>
                  <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                    <span className="mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-red-500"></span>
                    Next.js
                    <span className="ml-3 mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-red-500"></span>
                    Tailwind
                    <span className="ml-3 mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-red-500"></span>
                    Figma
                  </span>
                  <span className="text-sm italic text-gray-400">
                    Languages used:
                  </span>
                  <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                    <span className="mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-yellow-300"></span>
                    Typescript
                  </span>
                  <span className="text-sm italic text-gray-400">Links</span>
                  <div className="y flex items-center text-sm font-medium text-gray-900 dark:text-white">
                    <span className="mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-purple-600"></span>
                    <Link
                      href="https://github.com/Scraayp/michalk.nl"
                      className=" hover:text-primary"
                    >
                      Repository
                    </Link>
                    <span className="ml-3 mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-purple-600"></span>
                    <Link
                      href="/api/redirect/portfolio"
                      className="hover:text-primary"
                    >
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="project mt-10">
              <div className="block h-72 w-auto rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:w-96">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Discord Anti Spam
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  A simple module with quick setup and different options to
                  implement anti-spam features in your bot.
                </p>
                <div>
                  <span className="text-sm italic text-gray-400">
                    Technologies used:
                  </span>
                  <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                    <span className="mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-red-500"></span>
                    NPM Modules
                  </span>
                  <span className="text-sm italic text-gray-400">
                    Languages used:
                  </span>
                  <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                    <span className="mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-yellow-300"></span>
                    Javascript
                    <span className="ml-3 mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-yellow-300"></span>
                    Typescript
                  </span>
                  <span className="text-sm italic text-gray-400">Links</span>
                  <div className=" flex items-center text-sm font-medium text-gray-900 dark:text-white">
                    <span className="mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-purple-600"></span>
                    <Link
                      href="https://github.com/Michael-J-Scofield/discord-anti-spam"
                      className=" hover:text-primary"
                    >
                      Repository
                    </Link>
                    <span className="ml-3 mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-purple-600"></span>
                    <Link
                      href="/api/redirect/das"
                      className=" hover:text-primary"
                    >
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="w-head m-auto mb-40">
          <h1 className="text-primary block text-left text-4xl font-bold">
            Contact
          </h1>
          <div className="flex flex-col items-center md:flex-row">
            <div id="formcontact">
              <form
                className="mt-10"
                method="post"
                action="/contact_submit"
                data-netlify="true"
                // @ts-ignore
                netlify
              >
                <input type="hidden" name="form-name" value="contact"></input>
                <div className="group relative z-0 mb-6 w-80">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                    placeholder=" "
                    required
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
                    Email address
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="group relative z-0 mb-6 w-80">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                      placeholder=" "
                      required
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
                      Name
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="group relative z-0 mb-6 w-80">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
                      Phone number (+3689716634)
                    </label>
                  </div>
                </div>
                <div className="group relative z-0 mb-6 w-80">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                    placeholder=" "
                    required
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
                    Subject
                  </label>
                </div>
                <div className="group relative z-0 mb-6 w-80">
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="peer block h-20 w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="center w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                >
                  Submit
                </button>
              </form>
              <span className="mt-5 block text-center text-gray-500 sm:text-left">
                You can also contact me trough email.
                <br />
                <Link
                  href="mailto:hello@michalk.nl"
                  className="hover:text-primary"
                >
                  hello@michalk.nl
                </Link>
              </span>
            </div>
            <div id="contactsocial">
              <h1 className="text-primary hidden text-3xl font-bold md:block">
                My (Social Media) accounts
              </h1>
              <div
                id="mobile"
                className="text-primary mt-10 flex flex-row justify-center dark:text-white md:hidden"
              >
                <a
                  href="
            https://www.github.com/scraayp"
                  target="_blank"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a
                  href="
              https://www.linkedin.com/in/michkolasa/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin fa-2x ml-4"></i>
                </a>
                <a
                  href="https://www.twitter.com/scraayp
            "
                  target="_blank"
                >
                  <i className="fab fa-twitter fa-2x ml-4"></i>
                </a>

                <a
                  href="
              https://discord.gg/bWsYCZNKaU"
                  target="_blank"
                >
                  <i className="fab fa-discord fa-2x ml-4"></i>
                </a>
              </div>
              <div id="largescreen" className="hidden md:block">
                <div className="mt-10 flex flex-col justify-center text-white">
                  <button
                    type="button"
                    className="text-primary border-primary hover:bg-primary dark:border-primary dark:text-primary dark:hover:bg-primary dark:focus:ring-primary mb-2 mr-2 rounded-lg border px-10 py-4 text-center text-sm font-medium hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:text-white"
                  >
                    <i className="fab fa-github fa-1x mr-2"></i>
                    Github
                  </button>
                  <button
                    type="button"
                    className="text-primary border-primary hover:bg-primary dark:border-primary dark:text-primary dark:hover:bg-primary dark:focus:ring-primary mb-2 mr-2 rounded-lg border px-10 py-4 text-center text-sm font-medium hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:text-white"
                  >
                    <i className="fab fa-linkedin fa-1x mr-2"></i>
                    Linkedin
                  </button>
                  <button
                    type="button"
                    className="text-primary border-primary hover:bg-primary dark:border-primary dark:text-primary dark:hover:bg-primary dark:focus:ring-primary mb-2 mr-2 rounded-lg border px-10 py-4 text-center text-sm font-medium hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:text-white"
                  >
                    <i className="fab fa-twitter fa-1x mr-2"></i>
                    Twitter
                  </button>
                  <button
                    type="button"
                    className="text-primary border-primary hover:bg-primary dark:border-primary dark:text-primary dark:hover:bg-primary dark:focus:ring-primary mb-2 mr-2 rounded-lg border px-10 py-4 text-center text-sm font-medium hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:text-white"
                  >
                    <i className="fab fa-discord fa-1x mr-2"></i>
                    Discord
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-black">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn("kakao")}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
