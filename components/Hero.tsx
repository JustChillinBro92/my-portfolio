import { cn } from "@/lib/utils";

import { Spotlight } from "./ui/spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div className="flex h-screen w-full dark:bg-black-100
       bg-white items-center justify-center absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,#e4e4e74D_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e74D_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,#2626264D_1px,transparent_1px),linear-gradient(to_bottom,#2626264D_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center 
          bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"
        />

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] 
            flex flex-col justify-center items-center">
            <h2 className="uppercase tracking-widest 
              text-xs text-center text-blue-100 max-w-80">
              Dynamic Web Magic with Next.js 
            </h2>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Hero;
