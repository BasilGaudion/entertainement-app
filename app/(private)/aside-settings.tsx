import Image from "next/image";
import Logo from "../../public/assets/logo.svg";
import HomeLogo from "../../public/assets/icon-nav-home.svg";
import MoviesIcon from "../../public/assets/icon-nav-movies.svg";
import SeriesLogo from "../../public/assets/icon-nav-tv-series.svg";

const AsideSettings = () => {
  return (
    <aside className="h-[95%] bg-slate-700 rounded flex flex-col justify-between w-24 items-center overflow-hidden z-20">
      <div className="relative w-24 h-24">
        <Image
          src={Logo}
          alt="logo"
          width={40}
          height={37.7}
          className="z-10 absolute left-0 right-0 top-0 bottom-0 m-auto"
        />
        {/* <Image src={RectangleLogo} alt="logo" layout="fill" /> */}
      </div>
      <div>
        {/* <div className="flex items-center justify-center mb-8">
          <Image src={Moon} alt="Theme change" width={19.89} height={19.9} />
        </div> */}
        <span className="w-24 h-px bg-anthracite-line block mb-6" />
        <div className="w-full h-10 flex items-center justify-center mb-6">
          <span className="rounded-full bg-coolGrey w-10 h-10 flex items-center justify-center">
            BG
          </span>
        </div>
      </div>
    </aside>
  );
};

export default AsideSettings;
