"use client"
import About from "@/components/About";
import Nav from "@/components/Nav";
import TypeOfGraphy from "@/components/Typeofgraphy";
import Gallery from "@/components/Gallery"
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import WorkSections from "@/components/WorkSections";
import VideoPlayer from "@/components/VideoSection";

export default function Home() {
 
  return (
    <div className="h-screen w-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
      <Nav/>
      <div className="relative mt-72 ml-40 text-7xl font-extralight text-white uppercase max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        sustainable
        <br />
        buildings
      </div>
      <div className="relative mt-9 ml-40 text-base font-thin text-white capitalize max-md:max-w-full">
        Green buildings are designed to reduce energy consumption <br />
        by incorporating features such as efficient insulation, high-
        <br />
        performance windows, and energy-efficient appliances and <br />
        lighting systems.
      </div>
      <div className="flex relative gap-3.5 mt-9 ml-40 text-base font-light text-white capitalize max-md:ml-2.5">
        <div>know more</div>
        <img
            loading="lazy"
            src="/arrow.png"
            className="w-3 aspect-[0.85]"
          />
      </div>
    <About/>
    <WorkSections/>
    <div className=" mx-auto py-8 bg-[#efefef]">
      <Gallery />
    </div>
    <TypeOfGraphy first={""} second={"Arcadia "} third={"Interiors"}/>
    <Slider/>
    <VideoPlayer/>
    <Footer/>
    </div>
  );
}
