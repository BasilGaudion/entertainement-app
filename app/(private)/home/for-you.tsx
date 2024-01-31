import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ForYouHomePropsI } from "../../types";
import Image from "next/image";

const ForYou: React.FC<ForYouHomePropsI> = ({ data }) => {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-white font-body text-4xl">Recommended for you</h1>
      </div>
      <div className="mt-8 flex flex-wrap gap-20 h-[700px]">
        {data.map((item, key) => (
          <Card
            key={key}
            className="w-[274px] h-[173px] bg-slate-950 border-none"
          >
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
        ))}
      </div>
    </div>
  );
};

export default ForYou;
