import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { MovieDataI } from "../app/types";
import IconCategoryMovie from "../public/assets/icon-category-movie.svg";
import IconCategoryTv from "../public/assets/icon-category-tv.svg";

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
        className="text-white font-body opacity-75 text-sm mt-2 flex items-center gap-1
            "
      >
        {item.year} &middot;
        <Image
          src={item.category === "Movie" ? IconCategoryMovie : IconCategoryTv}
          alt=""
          width={12}
          height={12}
        />
        {item.category} &middot; {item.rating}
      </CardContent>
      <CardFooter className="text-white font-body text-lg">
        {item.title}
      </CardFooter>
    </Card>
  );
};

export default Item;
