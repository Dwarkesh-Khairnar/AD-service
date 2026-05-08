import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

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
        { height: 650 },
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
        rotate: -180,
        scrollTrigger: {
          trigger: serviceRef.current,
          start: 0,
          end: 800,
          toggleActions: "play none none reverse",
        },
      });
    }, RmoveSvgRef);

    // const TRM=gsap.context(()=>{
    //   gsap.to(

    //   )
    // })
    return () => ctx.revert() + op.revert() + svgEM.revert(); // clean up on unmount
  }, []);

  return (
    <>
      {/* Scrolling animation */}
      {/* <div className="bg-teal-400 z-1 h-[90%] w-full absolute" ref={scroll1}>
        <span
          className="absolute font-bold hidden text-amber-300 md:text-[42vh] md:top-0 md:inset-s-20 md:block mask-linear-from-amber-900"
          ref={scroll2}
        >
          <span>SERVICE</span>
        </span>
        <span
          className=" fixed font-semibold flex top-30 left-13 text-7xl text-amber-300 md:hidden"
        >
          INSPARA<br className="md:hidden block" />TION
        </span>

        <span className="font-bold absolute bottom-10 left-10" ref={arrowMove}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="#fff" viewBox="0 0 12 12"><path fill="currentColor" d="m5.796 9.246-2.97-2.97-.762.782 4.356 4.356 4.356-4.356-.782-.782-2.96 2.96V1.039H5.806z"></path></svg></span>

        <span className=" absolute md:bottom-20 md:right-100 md:text-3xl bottom-35 right-22.5 text-[20px] md:text-white">Targeting & <br /> segmentation</span>
        <span className=" absolute md:bottom-20 md:right-20  md:text-3xl bottom-18 right-14 text-[20px] md:text-black text-white"> Performance, <br />Strategy, Design.</span>

      </div> */}

      <div className="bg-teal-400 z-10 h-[95vh] w-full absolute shadow-2xl overflow-hidden" ref={scroll1}>

        {/* Desktop Background Text - 'SERVICE' */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span
           className="absolute font-bold hidden text-amber-300 md:text-[42vh] md:top-0 md:inset-s-20 md:block mask-linear-from-amber-900"
            ref={scroll2}
          >
            SERVICE
          </span>
        </div>

        {/* Mobile Headline */}
        <div className="md:hidden absolute top-24 left-8 z-20">
          <h1 className="font-black text-7xl text-amber-300 leading-tight tracking-tighter">
            INSPARA<br />TION
          </h1>
          <div className="w-16 h-2 bg-white mt-4"></div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-12 left-10 flex flex-col items-center gap-4 z-20" ref={arrowMove}>
          <span className="text-white text-xs font-bold tracking-widest uppercase [writing-mode:vertical-lr]">Scroll</span>
          <div className="p-3 border-2 border-white rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 12 12">
              <path fill="currentColor" d="m5.796 9.246-2.97-2.97-.762.782 4.356 4.356 4.356-4.356-.782-.782-2.96 2.96V1.039H5.806z"></path>
            </svg>
          </div>
        </div>

        <div className="absolute bottom-0 w-[90%] p-8 md:pl-40 pr-0 mr-0 flex flex-col md:flex-row md:gap-90 items-end md:items-center z-20 ">

          <div className="md:text-left text-end">
            <p className="text-white/80 uppercase tracking-[0.2em] text-[10px] font-bold mb-1">Capabilities</p>
            <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
              Targeting & <br className="md:hidden" /> Segmentation
            </h3>
          </div>

          <div className="text-right mt-6 md:mt-0">
            <p className="text-emerald-900/80 uppercase tracking-[0.2em] text-[10px] font-bold mb-1">Focus Areas</p>
            <h3 className="text-emerald-900 text-2xl md:text-3xl font-bold leading-tight">
              Performance, <br className="md:hidden" /> Strategy, Design.
            </h3>
          </div>

        </div>

      </div>

      <div className="h-59 bg-amber-600"></div>

      <div className="bg-teal-300 text-center mb-1 h-screen overflow-hidden flex items-center justify-center relative">
        {/* Your Original Slanted Background */}
        <div className="bg-amber-400 h-72 w-[230%] mt-44 -rotate-45 md:h-[80%] md:-ml-[50%] md:mt-96 md:rotate-45 absolute">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-5xl md:text-8xl text-white opacity-20 w-full select-none">
            ADVERTISING • MARKETING • REVENUE • GROWTH
          </span>
        </div>

        {/* NEW CONTENT: Floating Ad Mockups */}
        <div className="relative  w-full max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left Side: Large Text */}
          <div className="text-left md:w-1/2 ml-1">
            <h2 className="text-white font-black text-6xl md:text-8xl leading-none drop-shadow-2xl">
              WE ARE <br />
              <span className="text-emerald-900">AD SERVICE</span> <br />
              PROVIDER
            </h2>
            <p className="mt-6 text-emerald-800 text-xl font-medium max-w-md bg-white/30 backdrop-blur-md p-4 rounded-lg border-l-4 border-white">
              High-speed delivery for images, dynamic banners, and 4K video ads directly into your web applications.
            </p>
          </div>

          {/* Right Side: Visual Ad Previews */}
          <div className="md:w-1/2 relative h-[400px] w-full hidden md:block">
            {/* Video Ad Mockup */}
            <div className="absolute top-0 right-0 w-64 h-40 bg-slate-900 rounded-xl shadow-2xl border-4 border-white overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-red-600 text-[10px] text-white px-2 py-0.5 rounded">LIVE VIDEO AD</div>
            </div>

            {/* Banner Ad Mockup */}
            <div className="absolute bottom-10 left-10 w-80 h-24 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg shadow-2xl border-2 border-white flex items-center justify-center -rotate-6 hover:rotate-0 transition-transform duration-500">
              <span className="text-white font-bold tracking-widest text-lg">728 x 90 BANNER</span>
            </div>

            {/* Image Ad Mockup */}
            <div className="absolute top-20 left-0 w-48 h-64 bg-emerald-500 rounded-lg shadow-2xl border-2 border-white p-2 rotate-12 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-emerald-400/50 rounded flex flex-col items-center justify-end pb-4">
                <div className="w-10 h-10 bg-white rounded-full mb-2"></div>
                <div className="w-20 h-2 bg-white/50 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View Label (Hidden on Desktop) */}
        {/* <div className="md:hidden relative z-10 mt-10">
          <span className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white font-bold border border-white/40">
            IMAGE • BANNER • VIDEO
          </span>
        </div> */}
      </div>

      {/* Three number 3 page */}
      <div className="absolute top-10 left-0 w-full flex flex-wrap justify-around items-center px-10 gap-4 opacity-80 pointer-events-none">
        <div className="border-2 border-dashed border-white p-4 rounded text-white font-mono bg-black/20">
          [ IMAGE ADS ]
        </div>
        <div className="border-2 border-white p-2 w-64 h-12 flex items-center justify-center rounded bg-amber-500 text-white font-bold shadow-lg">
          DYNAMIC BANNER 728x90
        </div>
        <div className="border-2 border-dashed border-white p-4 rounded text-white font-mono bg-black/20">
          [ VIDEO STREAM ]
        </div>
      </div>

      {/* What we do Section */}
      <section className="py-20 bg-white text-black px-10">
        <h2 className="text-5xl font-black mb-10 text-teal-500">WHAT WE DO</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-teal-50 rounded-xl">
            <h3 className="font-bold text-2xl mb-2">Image Assets</h3>
            <p>Smart compression and global CDN delivery for static image ads.</p>
          </div>
          <div className="p-6 bg-amber-50 rounded-xl">
            <h3 className="font-bold text-2xl mb-2">Banner Engine</h3>
            <p>Responsive banner slots that adapt to any screen size automatically.</p>
          </div>
          <div className="p-6 bg-emerald-50 rounded-xl">
            <h3 className="font-bold text-2xl mb-2">Video Serving</h3>
            <p>Buffer-free video ad injection for immersive user experiences.</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white text-slate-900 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-teal-500 mb-16 text-center">ONE SCRIPT. ALL MEDIA.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group border-b-4 border-amber-400 p-8 hover:bg-amber-50 transition-colors">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-2xl font-bold mb-4">Image Optimization</h3>
              <p className="text-slate-600 leading-relaxed">Automatic compression to WebP/AVIF formats to keep your user's web app loading fast without losing quality.</p>
            </div>
            <div className="group border-b-4 border-teal-400 p-8 hover:bg-teal-50 transition-colors">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-4">Smart Banners</h3>
              <p className="text-slate-600 leading-relaxed">Responsive layouts that automatically adjust from sidebar rectangles to mobile leaderboards.</p>
            </div>
            <div className="group border-b-4 border-emerald-400 p-8 hover:bg-emerald-50 transition-colors">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold mb-4">HD Video Serving</h3>
              <p className="text-slate-600 leading-relaxed">Seamless video ad injection with adaptive bitrate streaming to prevent buffering on low-end devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works / Integration*/}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-amber-400">
              Simple Component <br /> Implementation
            </h2>

            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              No <span className="text-red-400 font-semibold underline decoration-red-400/30 underline-offset-4">external libraries</span> or heavy SDKs.
              Just drop the
              <span className="mx-2 px-2 py-1 bg-teal-500/10 border border-teal-500/30 rounded font-mono text-teal-400 text-sm">
                Ad_runing_component
              </span>
              into your project and wrap your main <span className="text-white font-bold italic">App</span>.
              It handles the logic for
              <span className="text-amber-400 font-bold ml-1">Images</span>,
              <span className="text-amber-400 font-bold mx-1">Banners</span>, and
              <span className="text-amber-400 font-bold">Videos</span> internally.
            </p>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-teal-500/20 p-1 rounded-full">
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="text-white font-bold block">Native Component Logic</span>
                  <span className="text-slate-400 text-sm">Works directly within your React source code—no hidden dependencies.</span>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-1 bg-teal-500/20 p-1 rounded-full">
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="text-white font-bold block">App-Wide Ad Delivery</span>
                  <span className="text-slate-400 text-sm">Once wrapped, your platform can inject ads into any child component automatically.</span>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-1 bg-teal-500/20 p-1 rounded-full">
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="text-white font-bold block">Lightweight & Fast</span>
                  <span className="text-slate-400 text-sm">Since it's your own component, you have 100% control over the performance.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-2xl font-mono text-sm overflow-hidden">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            {/* <pre className="text-teal-300">
              {`// Install SDK\nnpm install @adcart/sdk\n\n// Usage\nimport { AdSpace } from "@adcart/sdk";\n\n<AdSpace \n  slotId="banner-top-01"\n  type="video"\n/>`}
            </pre> */}
            <pre className="font-mono text-sm leading-relaxed">
              <code className="block">
                <span className="text-slate-500">// Wrap your root for auto-ads</span>{"\n"}
                <span className="text-purple-400">import</span> AdProvider <span className="text-purple-400">from</span> <span className="text-amber-300">"./Components/Ads/Ad_auto_runing"</span>;{"\n\n"}

                <span className="text-slate-500">// Implementation</span>{"\n"}
                <span className="text-blue-400">ReactDOM</span>.<span className="text-yellow-300">createRoot</span>(document.<span className="text-yellow-300">getElementById</span>(<span className="text-amber-300">"root"</span>)).<span className="text-yellow-300">render</span>({"("}{"\n"}
                {"  "}<span className="text-blue-300">{"<AdProvider>"}</span>{"\n"}
                {"    "}<span className="text-blue-300">{"<App />"}</span>{"\n"}
                {"  "}<span className="text-blue-300">{"</AdProvider>"}</span>{"\n"}
                {")"});
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Real-time Analytics Preview */}
      <section className="py-24 bg-teal-50 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Analytics you can trust.</h2>
          <p className="text-slate-600 mb-12">Monitor performance in real-time with our advertiser dashboard.</p>
          <div className="relative inline-block w-full max-w-4xl">
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-teal-100 h-32 rounded-lg flex flex-col items-center justify-center">
                <span className="text-teal-600 text-sm font-bold uppercase">Impressions</span>
                <span className="text-3xl font-black text-slate-800">0.0</span>
              </div>
              <div className="flex-1 bg-amber-100 h-32 rounded-lg flex flex-col items-center justify-center">
                <span className="text-amber-600 text-sm font-bold uppercase">Avg. CTR</span>
                <span className="text-3xl font-black text-slate-800">00%</span>
              </div>
              <div className="flex-1 bg-emerald-100 h-32 rounded-lg flex flex-col items-center justify-center">
                <span className="text-emerald-600 text-sm font-bold uppercase">Revenue</span>
                <span className="text-3xl font-black text-slate-800">$0k</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-400 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Ready to grow your revenue?</h2>
        <Link to="/singUp"><button className="bg-white text-amber-600 px-12 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-lg">
          Get Started for Free
        </button></Link>
        {/* <p className="mt-6 text-amber-800 font-medium">No credit card required. 14-day free trial.</p> */}
      </section>
      
    </>
  );
}
export default Hero;
