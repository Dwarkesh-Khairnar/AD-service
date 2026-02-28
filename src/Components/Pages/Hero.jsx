import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const scroll1 = useRef(null);
  const scroll2 = useRef(null);
  const arrowMove = useRef(null);
  
  const containerRef = useRef(null);
  const serviceRef = useRef(null);
  const RmoveSvgRef = useRef(null);

  useLayoutEffect(() => {
    if (!scroll1.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        scroll1.current,
        { height: 650 },
        {
          height: 0, // end at its natural position
          transformOrigin: "top",
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: 0,
            end: 800,
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef); // limit scope to container

    const op = gsap.context(() => {
      gsap.fromTo(
        scroll2.current,
        { height: 650},
        {
          height: 0, // end at its natural position
          ease: "power2.out",
          scrollTrigger: {
            trigger: serviceRef.current,
            start: 0,
            end: 800,
              scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, serviceRef); // limit scope to container

    const svgEM = gsap.context(() => {
      gsap.to(arrowMove.current, {
        rotate:-180,
        scrollTrigger: {
            trigger: serviceRef.current,
            start: 0,
            end: 800,
            toggleActions: "play none none reverse",
          },
      });
    }, RmoveSvgRef);

    const TRM=gsap.context(()=>{
      gsap.to()
    })
    return () => ctx.revert() + op.revert() + svgEM.revert(); // clean up on unmount
  }, []);

  return (
    <>
    {/* Scrolling animation */}
      <div className="bg-teal-400 z-1 h-[90%] w-screen absolute" ref={scroll1}>
        <span
          className="absolute font-bold hidden text-amber-300 md:text-[42vh] md:top-0 md:inset-s-20 md:block mask-linear-from-amber-900"
          ref={scroll2}
        >
         <span>SARVICE</span> 
        </span>
        <span
          className=" fixed font-semibold flex top-30 left-13 text-7xl text-amber-300 md:hidden"
        >
          INSPARA<br className="md:hidden block"/>TION
        </span>

        <span className="font-bold absolute bottom-10 left-10" ref={arrowMove}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="#fff" viewBox="0 0 12 12"><path fill="currentColor" d="m5.796 9.246-2.97-2.97-.762.782 4.356 4.356 4.356-4.356-.782-.782-2.96 2.96V1.039H5.806z"></path></svg></span>

        <span className=" absolute md:bottom-20 md:right-100 md:text-3xl bottom-35 right-22.5 text-[20px] md:text-white">Targeting & <br /> segmentation</span>
        <span className=" absolute md:bottom-20 md:right-20  md:text-3xl bottom-18 right-14 text-[20px] md:text-black text-white"> Performance, <br />Strategy, Design.</span>
        
        </div>
      <div className="h-59 bg-amber-600"></div>
      <div className=" bg-teal-300 text-center mb-1 h-screen overflow-hidden justify-center">
        <div className=" bg-amber-400 h-72 w-[230%] mt-44 -ml-60 -rotate-45 md:h-[80%] md:-ml-[50%] md:mt-96 md:rotate-45">
          <span className=" absolute top-100 start-50 font-bold text-6xl text-white mask-linear-from-amber-900 w-2x1 mix-blend-color rotate-45">
            WE ARE AD SARVICE PROVADER
          </span>
        </div>
        <p className=" absolute mix-blend-multiply text-amber-600 md:text-emerald-700 inset-s-10 top-70 w-[80%] md:top-80 md:w-[53%] md:inset-s-1/8 md:mix-blend-color"></p>
        {/* <img
          src={Hero_svg}
          alt=""
          className="absolute end-[18%] w-60 md:top-90 md:end-17 md:w-100"
        /> */}
      </div>

      {/* What we do Section */}
    </>
  );
}
export default Hero;
