import { projects } from "@/data"
import { PinContainer } from "./ui/3d-pin"
import { FaLocationArrow } from "react-icons/fa"

const RecentProjects = () => {
  return (
    <div className="py-20">
        <h1 className="heading">
            A small selection of {" "}
            <span className="text-purple">
                recent projects
            </span>
        </h1>

        <div className="flex flex-wrap justify-center 
            items-center p-4 gap-x-24 gap-y-8 mt-10">
            {projects.map((item) => (
                <div key={item.id} className="sm:h-164 lg:min-h-130 h-128
                    flex justify-center items-center sm:w-142.5 w-[80vw]">
                    <PinContainer title={item.link} href={item.link}>
                        <div className="relative flex justify-center items-center
                            sm:w-142.5 w-[80vw] overflow-hidden sm:h-[45vh] h-[30vh] mb-10">
                            <div className="relative w-full h-full overflow-hidden
                                lg:rounded-3xl bg-[#13162d]">
                                <img src="/bg.png" alt="bg-img" />
                            </div>
                            <img 
                                src={item.img} alt={item.title} 
                                className="z-10 absolute bottom-0"
                            />
                        </div>

                        <h1 className="font-bold lg:text-2xl md:text-xl
                            text-base line-clamp-1">
                            {item.title}
                        </h1>

                        <p className="lg:text-xl lg:font-normal font-light
                            text-sm line-clamp-2 mt-2">
                            {item.des}
                        </p>

                        <div className="flex justify-between items-center
                            mt-7 mb-3">
                            <div className="flex items-center">
                               {item.iconLists.map((icon, index ) => (
                                  <div key={icon} className="border border-white/20
                                    rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8
                                    flex justify-center items-center"
                                    style={{
                                        transform: `translateX(-${5 * index * 2}px)`
                                    }}>
                                    <img src={icon} alt={icon} className="p-2"/>
                                  </div>
                               ))}                                                                                                     
                            </div>

                            <div className="flex justify-center items-center">
                                <p className="flex lg:text-xl md:text-xs text-xm
                                    text-purple">
                                    Check Live Site
                                </p>
                                <FaLocationArrow className="ms-3" color="#CBACF9"/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects