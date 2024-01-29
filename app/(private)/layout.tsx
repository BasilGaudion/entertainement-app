"use client";

import { SWRConfig } from "swr";
import AsideSettings from "./aside-settings";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-screen bg-slate-950 h-screen items-center pl-8">
      <AsideSettings />
      <main className="w-screen flex justify-center">{children}</main>
    </div>
  );
};

export default PrivateLayout;
