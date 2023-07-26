
export default function Footer() {
  return (
    <div className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
      <div className="mx-auto w-full max-w-screen-2xl space-y-8 px-4 py-8 md:p-8 md:pb-12 lg:flex lg:justify-between lg:space-y-0 lg:p-16 lg:pb-20">
        <div>
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
            <span>Contentlayer</span>
          </a>
          <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            <p>
              MIT Licenced - A project by
              <a
                href="https://www.stackbit.com/"
                target="_blank"
                className="text-violet-600 underline dark:text-violet-400"
                rel="noreferrer"
              >
                Stackbit
              </a>
            </p>
            <p className="mt-2">
              Made with 💜 by{" "}
              <a
                className="hover:text-slate-700 dark:hover:text-slate-300"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/schickling"
              >
                @schickling
              </a>{" "}
              &amp; community
            </p>
          </div>
        </div>
        <div className="space-y-8 md:flex md:space-x-16 md:space-y-0">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
              Docs
            </h4>
            <ul className="mx-0 mt-4 list-none space-y-2 text-sm">
              <li>
                <a
                  className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  href="/docs/getting-started"
                >
                  <span>Getting Started</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  href="/docs/concepts"
                >
                  <span>Concepts</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  href="/docs/sources"
                >
                  <span>Sources</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  href="/docs/environments"
                >
                  <span>Environments</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  href="/docs/reference"
                >
                  <span>API Reference</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
              Examples
            </h4>
            <ul className="mx-0 mt-4 list-none space-y-2 text-sm">
              <li>
                <a
                  className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  href="/examples/nextjs"
                >
                  <span>Next.js (TypeScript)</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
              Community
            </h4>
            <ul className="mx-0 mt-4 list-none space-y-2 text-sm">
              <li>
                <a
                  className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  target="_blank"
                  href="https://twitter.com/contentlayerdev"
                >
                  <span>Twitter</span>
                  <span className="inline-block w-4">
                    <svg
                      viewBox="0 0 256 256"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M59.1666 78.8334C56.5587 78.8334 54.0575 79.8694 52.2134 81.7135C50.3693 83.5576 49.3333 86.0587 49.3333 88.6667V196.833C49.3333 199.441 50.3693 201.942 52.2134 203.787C54.0575 205.631 56.5587 206.667 59.1666 206.667H167.333C169.941 206.667 172.442 205.631 174.287 203.787C176.131 201.942 177.167 199.441 177.167 196.833V137.833C177.167 132.403 181.569 128 187 128C192.431 128 196.833 132.403 196.833 137.833V196.833C196.833 204.657 193.725 212.161 188.193 217.693C182.661 223.225 175.157 226.333 167.333 226.333H59.1666C51.3427 226.333 43.8393 223.225 38.307 217.693C32.7747 212.161 29.6666 204.657 29.6666 196.833V88.6667C29.6666 80.8428 32.7747 73.3394 38.307 67.807C43.8393 62.2747 51.3427 59.1667 59.1666 59.1667H118.167C123.597 59.1667 128 63.5692 128 69C128 74.4308 123.597 78.8334 118.167 78.8334H59.1666Z"></path>
                      <path d="M147.667 39.5C147.667 34.0692 152.069 29.6667 157.5 29.6667H216.5C221.931 29.6667 226.333 34.0692 226.333 39.5V98.5C226.333 103.931 221.931 108.333 216.5 108.333C211.069 108.333 206.667 103.931 206.667 98.5V49.3334H157.5C152.069 49.3334 147.667 44.9308 147.667 39.5Z"></path>
                      <path d="M223.453 32.5468C227.293 36.387 227.293 42.6131 223.453 46.4532L115.287 154.62C111.446 158.46 105.22 158.46 101.38 154.62C97.54 150.78 97.54 144.554 101.38 140.713L209.547 32.5468C213.387 28.7066 219.613 28.7066 223.453 32.5468Z"></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  target="_blank"
                  href="https://discord.gg/rytFErsARm"
                >
                  <span>Discord</span>
                  <span className="inline-block w-4">
                    <svg
                      viewBox="0 0 256 256"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M59.1666 78.8334C56.5587 78.8334 54.0575 79.8694 52.2134 81.7135C50.3693 83.5576 49.3333 86.0587 49.3333 88.6667V196.833C49.3333 199.441 50.3693 201.942 52.2134 203.787C54.0575 205.631 56.5587 206.667 59.1666 206.667H167.333C169.941 206.667 172.442 205.631 174.287 203.787C176.131 201.942 177.167 199.441 177.167 196.833V137.833C177.167 132.403 181.569 128 187 128C192.431 128 196.833 132.403 196.833 137.833V196.833C196.833 204.657 193.725 212.161 188.193 217.693C182.661 223.225 175.157 226.333 167.333 226.333H59.1666C51.3427 226.333 43.8393 223.225 38.307 217.693C32.7747 212.161 29.6666 204.657 29.6666 196.833V88.6667C29.6666 80.8428 32.7747 73.3394 38.307 67.807C43.8393 62.2747 51.3427 59.1667 59.1666 59.1667H118.167C123.597 59.1667 128 63.5692 128 69C128 74.4308 123.597 78.8334 118.167 78.8334H59.1666Z"></path>
                      <path d="M147.667 39.5C147.667 34.0692 152.069 29.6667 157.5 29.6667H216.5C221.931 29.6667 226.333 34.0692 226.333 39.5V98.5C226.333 103.931 221.931 108.333 216.5 108.333C211.069 108.333 206.667 103.931 206.667 98.5V49.3334H157.5C152.069 49.3334 147.667 44.9308 147.667 39.5Z"></path>
                      <path d="M223.453 32.5468C227.293 36.387 227.293 42.6131 223.453 46.4532L115.287 154.62C111.446 158.46 105.22 158.46 101.38 154.62C97.54 150.78 97.54 144.554 101.38 140.713L209.547 32.5468C213.387 28.7066 219.613 28.7066 223.453 32.5468Z"></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  target="_blank"
                  href="https://github.com/contentlayerdev/contentlayer"
                >
                  <span>GitHub</span>
                  <span className="inline-block w-4">
                    <svg
                      viewBox="0 0 256 256"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M59.1666 78.8334C56.5587 78.8334 54.0575 79.8694 52.2134 81.7135C50.3693 83.5576 49.3333 86.0587 49.3333 88.6667V196.833C49.3333 199.441 50.3693 201.942 52.2134 203.787C54.0575 205.631 56.5587 206.667 59.1666 206.667H167.333C169.941 206.667 172.442 205.631 174.287 203.787C176.131 201.942 177.167 199.441 177.167 196.833V137.833C177.167 132.403 181.569 128 187 128C192.431 128 196.833 132.403 196.833 137.833V196.833C196.833 204.657 193.725 212.161 188.193 217.693C182.661 223.225 175.157 226.333 167.333 226.333H59.1666C51.3427 226.333 43.8393 223.225 38.307 217.693C32.7747 212.161 29.6666 204.657 29.6666 196.833V88.6667C29.6666 80.8428 32.7747 73.3394 38.307 67.807C43.8393 62.2747 51.3427 59.1667 59.1666 59.1667H118.167C123.597 59.1667 128 63.5692 128 69C128 74.4308 123.597 78.8334 118.167 78.8334H59.1666Z"></path>
                      <path d="M147.667 39.5C147.667 34.0692 152.069 29.6667 157.5 29.6667H216.5C221.931 29.6667 226.333 34.0692 226.333 39.5V98.5C226.333 103.931 221.931 108.333 216.5 108.333C211.069 108.333 206.667 103.931 206.667 98.5V49.3334H157.5C152.069 49.3334 147.667 44.9308 147.667 39.5Z"></path>
                      <path d="M223.453 32.5468C227.293 36.387 227.293 42.6131 223.453 46.4532L115.287 154.62C111.446 158.46 105.22 158.46 101.38 154.62C97.54 150.78 97.54 144.554 101.38 140.713L209.547 32.5468C213.387 28.7066 219.613 28.7066 223.453 32.5468Z"></path>
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}