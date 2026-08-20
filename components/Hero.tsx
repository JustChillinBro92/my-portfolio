import { cn } from "@/lib/utils";

import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa";

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

      <div className="h-screen w-full dark:bg-black-100
       bg-white flex items-center justify-center absolute top-0 left-0">
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
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] 
          flex flex-col justify-center items-center">
          <h2 className="uppercase tracking-widest 
            text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px]
            md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
          />

          <p className="text-center md:tracking-wider mb-4
            text-sm md:text-lg lg:text-2xl">
            Hi, I'm Ayan, a software developer based in Kolkata
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow/>}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
