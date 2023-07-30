import InfiniteScroll from "react-infinite-scroller";
import { Skeleton } from "~/components/loading/Skeleton";
import { Loading } from "~/components/Loading";
import { PostCard } from "./PostCard";
import { api } from "~/utils/api";

export function PostList() {
  const { data, hasNextPage, isInitialLoading, fetchNextPage, isFetchingNextPage } =
    api.post.getAll.useInfiniteQuery(
      {},
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );

  const posts: any = data?.pages.flatMap((page) => page.posts);


  if (isInitialLoading) {
    return <Loading width={"full"} height={"full"} />;
  }
  return (
    <InfiniteScroll
        hasMore={hasNextPage}
        loadMore={fetchNextPage}
        className="PostList"
      >
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </InfiniteScroll>
  );
}
