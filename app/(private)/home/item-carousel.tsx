import { CarouselItem } from "@/components/ui/carousel";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import BookMarkEmpty from "../../../public/assets/icon-bookmark-empty.svg";
import BookMarkFull from "../../../public/assets/icon-bookmark-full.svg";
import PlayButton from "../../../public/assets/icon-play.svg";
import { MovieDataI } from "../../types";

interface ItemCarouselProps {
  item: MovieDataI;
}

const ItemCarousel: React.FC<ItemCarouselProps> = ({ item }) => {
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
    <CarouselItem className="md:basis-1/2 max-w-[470px] cursor-pointer bg-slate-950">
      <div
        className="w-[470px] h-[229px] mt-6 relative"
        key={item.title}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          className="w-[470px] h-[230px] bg-opacity-50 bg-black z-20 flex items-center justify-center relative"
          ref={ref}
          style={{ display: "none", position: "absolute" }}
        >
          {/* TODO gerer l'affichagfe de l'image qui est en conflit avec le bg white ou l'opacity */}
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
        <div className="w-[470px] h-[229px] relative">
          <Image
            src={item.thumbnail.trending!.large}
            alt={item.title}
            width={470}
            height={230}
            className="rounded-lg absolute z-0 top-0 left-0"
          />
          <Card className="h-full flex flex-col justify-between pl-6 z-10">
            <CardHeader className="z-10 flex justify-end items-end">
              <span className="w-8 h-8 flex justify-center items-center rounded-full bg-black opacity-50">
                <Image
                  src={item.isBookmarked ? BookMarkFull : BookMarkEmpty}
                  alt="bookmark"
                  width={15}
                  height={15}
                ></Image>
              </span>
            </CardHeader>
            <div className="z-10">
              <CardContent>
                <h3 className="font-body text-white opacity-75 text-sm">
                  {item.year} &middot; {item.category} &middot; {item.rating}{" "}
                </h3>
              </CardContent>
              <CardFooter className="pb-6 z-10">
                <h2 className="font-body text-2xl text-white">{item.title}</h2>
              </CardFooter>
            </div>
          </Card>
        </div>
      </div>
    </CarouselItem>
  );
};

export default ItemCarousel;
