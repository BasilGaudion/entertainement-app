"use client";

import { SWRConfig } from "swr";
import AsideSettings from "./aside-settings";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-slate-950 ">
      <div className="h-screen flex items-center">
        <AsideSettings />
      </div>
      <main className="flex justify-center">{children}</main>
    </div>
  );
};

export default PrivateLayout;
