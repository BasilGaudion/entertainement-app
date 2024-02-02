import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { useRef } from "react";
import { MovieDataI } from "../app/types";
import IconCategoryMovie from "../public/assets/icon-category-movie.svg";
import IconCategoryTv from "../public/assets/icon-category-tv.svg";
import BookMarkEmpty from "../public/assets/icon-bookmark-empty.svg";
import BookMarkFull from "../public/assets/icon-bookmark-full.svg";
import PlayButton from "../public/assets/icon-play.svg";

interface ItemCarouselProps {
  item: MovieDataI;
}

const Item: React.FC<ItemCarouselProps> = ({ item }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => {
    const playHover = ref.current;
    if (playHover) {
      playHover.style.display = "flex";
    }
  };

  const handleMouseOut = () => {
    const playHover = ref.current;
    if (playHover) {
      playHover.style.display = "none";
    }
  };

  return (
    <Card
      className="w-[274px] bg-slate-950 border-none relative"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        className="w-[274px] h-[172px] bg-opacity-50 bg-black z-20 flex items-center justify-center relative"
        ref={ref}
        style={{ display: "none", position: "absolute" }}
      >
        <div className="bg-white bg-opacity-25 gap-3 flex items-center justify-center w-[117px] h-12 rounded-full z-10 absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
          <Image
            src={PlayButton}
            alt="play-button"
            width={30}
            height={30}
            className="z-20"
          />
          <span className="font-body text-lg ml-2 z-10 text-white">Play</span>
        </div>
      </div>
      <CardHeader className="z-10 flex justify-end items-end absolute right-4 top-4 p-0">
        <span className="w-8 h-8 flex justify-center items-center rounded-full bg-black opacity-50">
          <Image
            src={item.isBookmarked ? BookMarkFull : BookMarkEmpty}
            alt="bookmark"
            width={15}
            height={15}
          ></Image>
        </span>
      </CardHeader>
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
