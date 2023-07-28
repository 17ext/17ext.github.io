import { Skeleton } from "~/components/loading/Skeleton";
import { PostCard } from "./PostCard";
import { api } from "~/utils/api";

export function PostList() {
  const { isError, isLoading, data } = api.post.getAll.useQuery();

  if (isError) {
    return <p>Failed to load posts.</p>;
  } else if (isLoading) {
    return <Skeleton />;
  }

  const posts = [...(data ?? [])].sort(
    (a, z) => z.createdAt.getTime() - a.createdAt.getTime()
  );
  return (
    <div className="PostList">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
