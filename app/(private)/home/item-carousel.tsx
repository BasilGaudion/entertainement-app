import { CarouselItem } from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import BookMarkEmpty from "../../../public/assets/icon-bookmark-empty.svg";
import BookMarkFull from "../../../public/assets/icon-bookmark-full.svg";
import { MovieDataI } from "../../types";

interface ItemCarouselProps {
  item: MovieDataI;
}

const ItemCarousel: React.FC<ItemCarouselProps> = ({ item }) => {
  return (
    <CarouselItem className="md:basis-1/2 max-w-[470px]">
      <div className="w-[470px] h-[229px] mt-6" key={item.title}>
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
                  src={BookMarkEmpty}
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
