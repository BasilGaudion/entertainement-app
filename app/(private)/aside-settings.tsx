import Image from "next/image";
import Logo from "../../public/assets/logo.svg";
import HomeLogo from "../../public/assets/icon-nav-home.svg";
import HomeLogoWhite from "../../public/assets/icon-nav-home-white.svg";
import HomeLogoRed from "../../public/assets/icon-nav-home-red.svg";
import MoviesIcon from "../../public/assets/icon-nav-movies.svg";
import MoviesIconWhite from "../../public/assets/icon-nav-movies-white.svg";
import MoviesIconRed from "../../public/assets/icon-nav-movies-red.svg";
import SeriesLogo from "../../public/assets/icon-nav-tv-series.svg";
import SeriesLogoWhite from "../../public/assets/icon-nav-tv-series-white.svg";
import SeriesLogoRed from "../../public/assets/icon-nav-tv-series-red.svg";
import BookMarkLogo from "../../public/assets/icon-nav-bookmark.svg";
import BookMarkLogoWhite from "../../public/assets/icon-nav-bookmark-white.svg";
import BookMarkLogoRed from "../../public/assets/icon-nav-bookmark-red.svg";
import Avatar from "../../public/assets/image-avatar.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useStoreSearch } from "../store/searchStore";
import { set } from "lodash";

const AsideSettings = () => {
  const [currentLogo, setCurrentLogo] = useState("HomeLogo");
  const setSearch = useStoreSearch((state) => state.setSearch);
  const router = useRouter();

  const handleNavigate = (location: string) => {
    return () => {
      router.push(`/${location}`);
      setSearch("");
      // TODO Gerer le changement de logo en fonction de l'url de la page
      location === "home" && setCurrentLogo("HomeLogo");
      location === "movies" && setCurrentLogo("MoviesIcon");
      location === "tv-series" && setCurrentLogo("SeriesLogo");
      location === "bookmarked" && setCurrentLogo("BookMarkLogo");
    };
  };

  return (
    <aside className="h-[95%] fixed bg-slate-700 rounded-2xl flex flex-col w-24 items-center justify-between z-20 ml-8">
      <div className="flex flex-col items-center">
        <div className="relative w-10 h-10 mt-8">
          <Image
            src={Logo}
            alt="logo"
            width={32}
            height={25.6}
            className="z-10 absolute left-0 right-0 top-0 bottom-0 m-auto"
          />
        </div>
        <div className="flex flex-col gap-3 mt-14">
          <Image
            src={currentLogo === "HomeLogo" ? HomeLogoWhite : HomeLogo}
            alt="home"
            width={20}
            height={20}
            className="my-2 cursor-pointer"
            onClick={handleNavigate("home")}
          />
          <Image
            src={currentLogo === "MoviesIcon" ? MoviesIconWhite : MoviesIcon}
            alt="movies"
            width={20}
            height={20}
            className="my-2 cursor-pointer"
            onClick={handleNavigate("movies")}
          />
          <Image
            src={currentLogo === "SeriesLogo" ? SeriesLogoWhite : SeriesLogo}
            alt="series"
            width={20}
            height={20}
            className="my-2 cursor-pointer"
            onClick={handleNavigate("tv-series")}
          />
          <Image
            src={
              currentLogo === "BookMarkLogo" ? BookMarkLogoWhite : BookMarkLogo
            }
            alt="bookmark"
            width={20}
            height={20}
            className="my-2 cursor-pointer"
            onClick={handleNavigate("bookmarked")}
          />
        </div>
      </div>
      <div className="mb-8">
        <Image
          src={Avatar}
          alt="avatar"
          width={40}
          height={40}
          className="my-2"
        />
      </div>
    </aside>
  );
};

export default AsideSettings;
