import React from "react";
import SearchBar from "./search-bar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="w-full ml-9">
      <SearchBar />
      <div className="mt-5">
        <h1 className="text-4xl text-slate-50 font-body font-normal">
          Trending
        </h1>
        <div>
          <div className="w-[470px] h-[230px]">
            <Card className="h-full flex flex-col justify-end pl-6">
              <CardContent>
                <h3 className="font-body text-white opacity-75 text-sm">
                  2019 &middot; Movie &middot; PG{" "}
                </h3>
              </CardContent>
              <CardFooter className="pb-6">
                <h2 className="font-body text-2xl text-white">Beyond Earth</h2>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
