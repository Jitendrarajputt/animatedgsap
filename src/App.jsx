import "./index.css";
import Canvas from "./canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    if (headingRef.current) {
      headingRef.current.addEventListener("click", () => {
        setShowCanvas(true);
      });
    }

    return () => {
      locomotiveScroll.destroy();
      if (headingRef.current) {
        headingRef.current.removeEventListener("click", () =>
          setShowCanvas(true)
        );
      }
    };
  }, []);

  return (
    <>
      <div
        className="w-full relative min-h-screen font-sans"
        data-scroll-container
      >
        <div className="w-full relative min-h-screen">
          {showCanvas &&
            data[0].map((canvasdets, idx) => (
              <Canvas key={idx} details={canvasdets} />
            ))}

          <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center bg-black text-white z-50">
            <div className="brand text-2xl font-normal">thirtysixstudios</div>
            <div className="links flex gap-10 font-medium">
              {["Home", "About", "Projects", "Contact"].map((link, idx) => (
                <div key={idx} className="link cursor-pointer">
                  {link}
                </div>
              ))}
            </div>
          </nav>

       
          <div className="textcontainer w-full h-full flex items-start px-[20%] pt-[15%]">
            <div className="w-full relative h-screen text-white">
              {showCanvas &&
                data[1].map((canvasdets, idx) => (
                  <Canvas key={idx} details={canvasdets} />
                ))}

              <div className="text w-1/2 leading-relaxed text-white relative z-[10]">
                <h3 className="text-4xl font-bold">
                  At Thirtysixstudio, we build digital assets and immersive
                  experiences for purposeful brands.
                </h3>
                <p className="text-lg w-[80%] mt-10 font-medium">
                  We're a boutique production studio focused on design,
                  animation, and technology, constantly rethinking what digital
                  craft can do for present-day ads and campaigns.
                </p>
                <p className="text-md mt-10 w-[80%] font-medium">Scroll</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-hidden w-full">
            <div className="w-full text-center absolute bottom-0 left-0 translate-y-20">
              <h1
                ref={headingRef}
                className="text-[17rem] font-normal tracking-tight leading-none pl-5 cursor-pointer"
              >
                Thirtysixstudio
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen text-white mt-32 px-10">
        <div className="textcontainer w-full h-full flex items-start px-[10%] pt-[10%]">
          <div className="w-full relative h-full text-white flex gap-16 items-center">
         
            <div className="w-1/2 h-[700px]">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
                alt="brand visual"
              />
            </div>

            <div className="w-1/2 flex flex-col justify-center">
              {showCanvas &&
                data[2].map((canvasdets, idx) => (
                  <Canvas key={idx} details={canvasdets} />
                ))}
              <h1 className="text-8xl">About the brand</h1>
              <p className="text-2xl w-[90%] mt-10 font-light leading-relaxed">
                Thirtysixstudio is a boutique production studio focused on
                design, animation, and technology, constantly rethinking what
                digital craft can do for present-day ads and campaigns. Founded
                in 2020 by creative director Saman Kakar, the studio has since
                grown into a team of multidisciplinary artists and technologists
                who collaborate with agencies and brands worldwide to create
                engaging digital experiences and assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
