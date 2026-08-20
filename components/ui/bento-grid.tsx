"use client"

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie"

import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GridGlobe } from "./grid-globe";

import { cn } from "@/lib/utils";
import animationData from "@/data/confetti.json";
import MagicButton from "./magic-button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  titleClassName?: string;
  imgClassName?: string;
  spareImg?: string;
}) => {  
  const leftItems = ["JavaScript", "ReactJS", "NextJS", "Express", "NodeJS"];
  const rightItems = ["MySQL", "MongoDB", "Python", "FastAPI", "GitHub", "HttPie"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ayanpurkait82@gmail.com')
    setCopied(true);
  }


  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento transition duration-200 shadow-input hover:shadow-xl dark:shadow-none flex flex-col justify-between space-y-4 border border-white/10",
        className,
      )}

      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
      }}>

      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}                    
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 &&
          'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center"}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName, 
          'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>

          <div className="font-sans font-extralight text-white-200 text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>


          {id === 2 && <GridGlobe/>}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-3 w-fit absolute -right-1 lg:right-0">

              {/* Bottom → Top */}
              <div className="h-100 overflow-hidden">
                <div className="animate-scroll-up">
                  {[...leftItems, ...leftItems].map((item, index) => (
                    <span
                      key={`${item}-${index}`}
                      className="mb-3 block px-3 py-2 lg:py-4 lg:px-3
                        text-xs lg:text-base opacity-50 lg:opacity-70
                        rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Top → Bottom */}
              <div className="h-100 overflow-hidden">
                <div className="animate-scroll-down">
                  {[...rightItems, ...rightItems].map((item, index) => (
                    <span
                      key={`${item}-${index}`}
                      className="mb-3 block px-3 py-2 lg:py-4 lg:px-3
                        text-xs lg:text-base opacity-50 lg:opacity-70
                        rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie 
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    }
                  }}
                />
              </div>

                <MagicButton
                  title={copied ? "Email copied" : "Copy my email"}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="!bg-[#161a31]"
                  handleClick={handleCopy}
                />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
