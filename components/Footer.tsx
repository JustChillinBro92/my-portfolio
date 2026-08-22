import { FaLocationArrow } from "react-icons/fa"
import MagicButton from "./ui/magic-button"
import { socialMedia } from "@/data"

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-20" id="contact">
        <div className="w-full absolute left-0 -bottom-72
            min-h-96">
            <img 
                src="/footer-grid.svg" 
                alt="grid" 
                className="w-full h-full opacity-70"
            />
        </div>

        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                Ready to take <span
                className="text-purple">your </span> 
                digital presence to the next level
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center"> 
                Reach out to me today and let&apos;s discuss how I can help
                you achieve your goals. 
            </p>
            <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ayanpurkait82@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <MagicButton 
                    title="Lets get in touch"
                    icon={<FaLocationArrow/>}
                    position="right"
                />
            </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col 
            justify-between items-center">
            <p className="md:text-base text-sm md:font-normal
                font-light">
                Copyright © {new Date().getFullYear()} Ayan. 
                All rights reserved.
            </p>

            <div className="flex items-center md:gap-3 gap-6 mt-3 md:mt-0">
                {socialMedia.map((item) => (
                    <div key={item.id} className="w-10 h-10 cursor-pointer
                        flex justify-center items-center backdrop-filter
                        backdrop-blur-xl saturate-100 bg-black-300/50 
                        rounded-lg border border-black-200 hover:bg-black-300" 
                    >
                        <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img 
                                src={item.img} 
                                alt="social"
                                height={20} 
                                width={20}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer