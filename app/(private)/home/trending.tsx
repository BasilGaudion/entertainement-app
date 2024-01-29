import { TrendingHomePropsI } from "../../types";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import ItemCarousel from "./item-carousel";

const TrendingHome: React.FC<TrendingHomePropsI> = ({ data }) => {
  return (
    <div className="mt-5">
      <h1 className="text-4xl text-slate-50 font-body font-normal">Trending</h1>
      {/* TODO Fix length error when carousel max w > 1750px */}
      <Carousel className="w-full max-w-[1750px]">
        <CarouselContent className="flex gap-9">
          {data.map((item, key) => (
            <ItemCarousel item={item} key={key} />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TrendingHome;
