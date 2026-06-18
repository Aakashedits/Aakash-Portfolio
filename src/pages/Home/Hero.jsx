import React from 'react'
import heroVideo from "../../assets/heroVideo.mp4"
import useIsVisible from "../../utils/hooks/useIsVisible";

const Hero = ({ contentRef }) => {

    const contentVisible = useIsVisible(contentRef);

    const handleClick = () => {
        contentRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    };

  return (
    <div className="h-screen w-screen overflow-hidden relative">
        <div className="fixed inset-0 -z-10">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
        {!contentVisible && (<button onClick={handleClick} className="cursor-pointer absolute bottom-4 left-0 right-0 mx-auto w-fit flex justify-center items-center gap-2 rounded-full px-6 py-1 bg-slate-900/25 animate-bounce text-white backdrop-blur-2xl z-10">
            Explore
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-3 font-bold">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
        </button>)}
    </div>
  )
}

export default Hero