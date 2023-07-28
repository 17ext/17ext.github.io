import { Skeleton } from "~/components/loading/Skeleton";
import { PostCard } from "./PostCard";
import { api } from "~/utils/api";

export function PostList() {
   let sort = "createdAt";
   let sortDir = "desc";
  const { data, fetchNextPage, isLoading } = api.feed.getAll.useInfiniteQuery(
    {
      limit: 10,
      sort: sort,
      sortDir: sortDir,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );


  const loadMore = () => {
    fetchNextPage();
  };
//   const { isError, isLoading, data } = api.post.getAll.useQuery();

//   if (isError) {
//     return <p>게시글을 불러오는데 실패했습니다.</p>;
//   } else if (isLoading) {
//     return <Skeleton />;
//   }
  return (
    <div className="PostList">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
