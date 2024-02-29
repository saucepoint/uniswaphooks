import { ChainPost } from "@/types/chain";
import ChainCard from "@/components/showcase/chain/ChainCard";

export default function ChainGrid({ chainPosts }: { chainPosts: ChainPost[] }) {
  return (
    <ul
      className="grid 
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    gap-4
    "
    >
      {chainPosts.map((chainPost) => (
        <li key={chainPost.slug} className=" marker:hidden marker:opacity-0">
          <ChainCard {...chainPost} />
        </li>
      ))}
    </ul>
  );
}
