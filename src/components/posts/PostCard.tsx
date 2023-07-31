import { Avatar } from "flowbite-react";

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
//   likeCount: number;
//   likedByMe: boolean;
//   user: { id: string; image: string | null; name: string | null };
};

export function PostCard({post}: Post) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-5 flex items-center justify-between text-gray-500">
        <span className="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium">
          <svg
            className="mr-1 h-3 w-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
          </svg>
          Tutorial
        </span>
        <span className="text-sm">14 days ago</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">
          {post.title.length > 20
            ? post.title.substring(0, 20) + "..."
            : post.title}
        </a>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        Static websites are now used to bootstrap lots of websites and are
        becoming the basis for a variety of tools that even influence both web
        designers and developers influence both web designers and developers.
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar rounded size="sm" />

          <span className="font-medium dark:text-white">Jese Leos</span>
        </div>
        <a
          href="#"
          className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium hover:underline"
        >
          Read more
          <svg
            className="ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </article>
  );
}
