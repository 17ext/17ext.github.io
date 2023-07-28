import clsx from "clsx";

export function Skeleton(props: { className?: string }) {
  const { className } = props;
  return (
    <div
      className={clsx(
        "h-8 w-full animate-pulse rounded-md bg-neutral-700",
        className
      )}
    />
  );
}
