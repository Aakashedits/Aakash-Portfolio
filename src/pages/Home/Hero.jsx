import React, { useEffect, useRef, useState } from 'react'
import useIsVisible from "../../utils/hooks/useIsVisible";

const Hero = ({ contentRef }) => {

  const contentVisible = useIsVisible(contentRef);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [heroVidSrc, setHeroVidSrc] = useState("https://res.cloudinary.com/dbyzyzx7p/video/upload/v1782227946/Final_With_Gradiant_zvg0ek.mp4");
  const [heroVidPoster, setHeroVidPoster] = useState("https://res.cloudinary.com/dbyzyzx7p/video/upload/v1782227946/Final_With_Gradiant_zvg0ek.mp4");

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleClick = () => {
    contentRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {

    const handleWindowResize = () => {
      if (window.innerWidth <= 640) {
        console.log("heroVidSrc0");
        setHeroVidSrc("https://res.cloudinary.com/dbyzyzx7p/video/upload/v1782232779/Vertical_Showreel_Final_1_grin3b.mp4");
        setHeroVidPoster("https://res.cloudinary.com/dbyzyzx7p/image/upload/v1782234262/vertical_thumb_mkr9we.webp")
      }

      else {
        console.log("heroVid1 ");
        setHeroVidSrc("https://res.cloudinary.com/dbyzyzx7p/video/upload/v1782227946/Final_With_Gradiant_zvg0ek.mp4");
        setHeroVidPoster("https://res.cloudinary.com/dbyzyzx7p/image/upload/v1782229732/Screenshot_160_fwyfje.webp")
      }

    }

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, []);
  useEffect(() => {
    console.log("heroVidSrc ", heroVidSrc);
  }, [heroVidSrc])


  return (
    <div className="aspect-9/16 sm:aspect-video max-h-screen w-full overflow-hidden relative">
      <div className="fixed aspect-9/16 sm:aspect-video inset-0 -z-10 w-full">
        <video
          src={heroVidSrc}
          poster={heroVidPoster}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="aspect-9/16 sm:aspect-video w-full object-contain"
        />
      </div>
      <button
        onClick={toggleMute}
        className="cursor-pointer absolute bottom-4 right-4 mx-auto w-fit justify-center items-center gap-2 rounded-full px-6 py-1 lg:py-2 bg-slate-900/25 text-white backdrop-blur-2xl z-10"
      >
        {isMuted ? "🔊 Unmute" : "🔇 Mute"}
      </button>
      {!contentVisible && (<button onClick={handleClick} className="cursor-pointer absolute bottom-4 left-0 right-0 mx-auto w-fit flex justify-center items-center gap-2 rounded-full px-6 py-1 lg:py-2 bg-slate-900/25 animate-bounce text-white backdrop-blur-2xl z-10">
        Explore
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-3 font-bold">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </button>)}
    </div>
  )
}

export default Hero