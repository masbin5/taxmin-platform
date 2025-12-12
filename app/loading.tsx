import Skeleton from "../components/Skeleton";

export default function Loading() {
  return (
    <div className="px-6 py-24 max-w-6xl mx-auto space-y-6">
      <Skeleton className="h-10 w-1/2" />
      <Skeleton className="h-6 w-1/3" />
      <Skeleton className="h-40" />
    </div>
  );
}
