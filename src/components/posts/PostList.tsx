import InfiniteScroll from "react-infinite-scroller";
import { Post } from "@prisma/client";
// import { Skeleton } from "~/components/loading/Skeleton";
import { Loading } from "~/components/Loading";
import { PostCard } from "./PostCard";
import { api } from "~/utils/api";

export function PostList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isInitialLoading } =
    api.post.getAll.useInfiniteQuery(
      {limit: 5},
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );

  const posts: Post[] = data?.pages.flatMap((page) => page.items) ?? [];


  if (isInitialLoading) {
    return <Loading width={"full"} height={"full"} />;
  }
  return (
    <InfiniteScroll
      pageStart={0}
      hasMore={hasNextPage}
      loadMore={() => !isFetchingNextPage && void fetchNextPage()}
      className={"grid-view grid-view-center grid-view-lg"}
    >
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </InfiniteScroll>
  );
}
