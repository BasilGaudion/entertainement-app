import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { MovieDataI } from "../app/types";

interface ItemCarouselProps {
  item: MovieDataI;
}

const Item: React.FC<ItemCarouselProps> = ({ item }) => {
  return (
    <Card className="w-[274px] bg-slate-950 border-none">
      <Image
        src={item.thumbnail.regular.large}
        alt="movie"
        width={280}
        height={174}
        className="rounded-lg"
      />
      <CardContent
        className="text-white font-body opacity-75 text-sm mt-2
            "
      >
        {item.year} &middot; {item.category} &middot; {item.rating}
      </CardContent>
      <CardFooter className="text-white font-body text-lg">
        {item.title}
      </CardFooter>
    </Card>
  );
};

export default Item;
