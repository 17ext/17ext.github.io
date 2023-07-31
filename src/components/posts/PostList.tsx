import InfiniteScroll from "react-infinite-scroller";
// import { Skeleton } from "~/components/loading/Skeleton";
import { Loading } from "~/components/Loading";
import { PostCard } from "./PostCard";
import { api } from "~/utils/api";

export function PostList() {
  const { data, fetchNextPage, hasNextPage, isInitialLoading } =
    api.post.getAll.useInfiniteQuery(
      {limit: 5},
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );

  const posts: any = data?.pages.flatMap((page) => page.items);


  if (isInitialLoading) {
    return <Loading width={"full"} height={"full"} />;
  }
  return (
    <InfiniteScroll
      pageStart={0}
      hasMore={hasNextPage}
      loadMore={() => fetchNextPage()}
      className={"grid-view grid-view-center grid-view-lg"}
    >
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </InfiniteScroll>
  );
}
