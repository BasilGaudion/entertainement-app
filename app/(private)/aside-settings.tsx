import Image from "next/image";
import Logo from "../../public/assets/logo.svg";
import HomeLogo from "../../public/assets/icon-nav-home.svg";
import MoviesIcon from "../../public/assets/icon-nav-movies.svg";
import SeriesLogo from "../../public/assets/icon-nav-tv-series.svg";
import BookMarkLogo from "../../public/assets/icon-nav-bookmark.svg";
import Avatar from "../../public/assets/image-avatar.png";

const AsideSettings = () => {
  return (
    <aside className="h-[95%] fixed bg-slate-700 rounded-2xl flex flex-col w-24 items-center justify-between overflow-hidden z-20">
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
            src={HomeLogo}
            alt="home"
            width={20}
            height={20}
            className="my-2"
          />
          <Image
            src={MoviesIcon}
            alt="movies"
            width={20}
            height={20}
            className="my-2"
          />
          <Image
            src={SeriesLogo}
            alt="series"
            width={20}
            height={20}
            className="my-2"
          />
          <Image
            src={BookMarkLogo}
            alt="bookmark"
            width={20}
            height={20}
            className="my-2"
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
