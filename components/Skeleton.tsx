export default function Skeleton({
  className = "h-4",
}: {
  className?: string;
}) {
  return (
    <div
      className={`w-full rounded bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse ${className}`}
    />
  );
}
