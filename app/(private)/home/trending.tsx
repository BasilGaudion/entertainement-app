import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { TrendingHomePropsI } from "../../types";

const TrendingHome: React.FC<TrendingHomePropsI> = ({ data }) => {
  return (
    <div className="mt-5">
      <h1 className="text-4xl text-slate-50 font-body font-normal">Trending</h1>
      <div className="w-[470px] h-[229px] mt-6">
        <div className="w-[470px] h-[229px] relative">
          <Image
            src="/assets/thumbnails/1998/trending/large.jpg"
            alt="interstellar"
            width={470}
            height={230}
            className="rounded-lg absolute z-0 top-0 left-0"
          />
          <Card className="h-full flex flex-col justify-end pl-6 z-10">
            <CardContent>
              <h3 className="font-body text-white opacity-75 text-sm">
                2019 &middot; Movie &middot; PG{" "}
              </h3>
            </CardContent>
            <CardFooter className="pb-6 z-10">
              <h2 className="font-body text-2xl text-white">Beyond Earth</h2>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrendingHome;
