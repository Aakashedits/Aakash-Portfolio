import React, { useEffect, useState } from 'react'
import GenreSection from "./components/GenreSection"
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import vid1 from "../../assets/vid1.mp4"
import vid2 from "../../assets/vid2.mp4"
import vid3 from "../../assets/vid3.mp4"
import vid4 from "../../assets/vid4.mp4"
import vid5 from "../../assets/vid5.mp4"
import vid6 from "../../assets/vid6.mp4"
import vid7 from "../../assets/vid7.mp4"
import useIsVisible from "../../utils/hooks/useIsVisible"
import { IoClose } from "react-icons/io5"

const content = [
    {
        genre: "SHORT FILMS",
        items : [
            {
                title: "The Last Call",
                thumbnail: img2,
                video: vid1,
                summary: "asudhn aosuh weowouvbweorug woiefb owefbwoebfwoeu fbowueb fvouwefvowehb owev b",
                genre: "SHORT FILMS",
            },
            {
                title: "The Last Call",
                thumbnail: img1,
                video: vid2,
                summary: "asudhn aosuh weowouvbweorug woiefb owefbwoebfwoeu fbowueb fvouwefvowehb owev b",
                genre: "SHORT FILMS",
            },
            {
                title: "The Last Call",
                thumbnail: img3,
                video: vid3,
                summary: "asudhn aosuh weowouvbweorug woiefb owefbwoebfwoeu fbowueb fvouwefvowehb owev b",
                genre: "SHORT FILMS",
            },
            {
                title: "The Last Call",
                thumbnail: img2,
                video: vid4,
                summary: "asudhn aosuh weowouvbweorug woiefb owefbwoebfwoeu fbowueb fvouwefvowehb owev b",
                genre: "SHORT FILMS",
            },
            {
                title: "The Last Call",
                thumbnail: img1,
                video: vid5,
                summary: "asudhn aosuh weowouvbweorug woiefb owefbwoebfwoeu fbowueb fvouwefvowehb owev b",
                genre: "SHORT FILMS",
            },
        ]
    },
    {
        genre: "MUSIC VIDEOS",
        items : [
            {
                title: "Lost in the Beat",
                thumbnail: img1,
                video: vid6,
                summary: "asudhn aosuh weowouvbweorug woiefb owefbwoebfwoeu fbowueb fvouwefvowehb owev b",
                genre: "MUSIC VIDEOS",
            },
            {
                title: "Lost in the Beat",
                thumbnail: img2,
                video: vid7,
                summary: "asudhn aosuh weowouvbweorug woiefb owefbwoebfwoeu fbowueb fvouwefvowehb owev b",
                genre: "MUSIC VIDEOS",
            },
            {
                title: "Lost in the Beat",
                thumbnail: img3,
                video: vid1,
                summary: "asudhn aosuh weowouvbweorug woiefb owefbwoebfwoeu fbowueb fvouwefvowehb owev b",
                genre: "MUSIC VIDEOS",
            },
            {
                title: "Lost in the Beat",
                thumbnail: img1,
                video: vid2,
                summary: "asudhn aosuh weowouvbweorug woiefb owefbwoebfwoeu fbowueb fvouwefvowehb owev b",
                genre: "MUSIC VIDEOS",
            },
            {
                title: "Lost in the Beat",
                thumbnail: img2,
                video: vid2,
                summary: "asudhn aosuh weowouvbweorug woiefb owefbwoebfwoeu fbowueb fvouwefvowehb owev b",
                genre: "MUSIC VIDEOS",
            },
        ]
    },
    {
        genre: "YOUTUBE CONTENT",
        items : [
            {
                title: "Behind the Scenes",
                thumbnail: img3,
                video: vid4,
                summary: "asudhn aosuh weowouvbweorug woiefb owefbwoebfwoeu fbowueb fvouwefvowehb owev b",
                genre: "YOUTUBE CONTENT",
            },
            {
                title: "Behind the Scenes",
                thumbnail: img1,
                video: vid5,
                summary: "asudhn aosuh weowouvbweorug woiefb owefbwoebfwoeu fbowueb fvouwefvowehb owev b",
                genre: "YOUTUBE CONTENT",
            },
            {
                title: "Behind the Scenes",
                thumbnail: img2,
                video: vid6,
                summary: "asudhn aosuh weowouvbweorug woiefb owefbwoebfwoeu fbowueb fvouwefvowehb owev b",
                genre: "YOUTUBE CONTENT",
            },
            {
                title: "Behind the Scenes",
                thumbnail: img3,
                video: vid7,
                summary: "asudhn aosuh weowouvbweorug woiefb owefbwoebfwoeu fbowueb fvouwefvowehb owev b",
                genre: "YOUTUBE CONTENT",
            },
            {
                title: "Behind the Scenes",
                thumbnail: img1,
                video: vid1,
                summary: "asudhn aosuh weowouvbweorug woiefb owefbwoebfwoeu fbowueb fvouwefvowehb owev b",
                genre: "YOUTUBE CONTENT",
            },
        ]
    },
];
const Content = ({ connectRef, contentRef }) => {

    const connectVisible = useIsVisible(connectRef);
    const contentVisible = useIsVisible(contentRef);
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);
    const [ showVideoOverlay, setShowVideoOverlay ] = useState(false);

    const handleClick = () => {
      connectRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const [ selectedItem, setSelectedItem ] = useState(content[0].items[0]);

    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <div className="relative min-h-screen w-full bg-secondary-dark z-20 py-12 px-12 sm:px-20 2xl:px-40 flex items-center gap-20 2xl:gap-40 text-white">
        <div className="flex flex-col justify-center gap-8 w-full xl:w-[60%]">
            {
                content.map((contentItem)=>(
                    <GenreSection setShowVideoOverlay={setShowVideoOverlay} setSelectedItem={setSelectedItem} content={contentItem} />
                ))
            }
        </div>
        {
            screenWidth >= 1280 && (
                <div className="border border-slate-500 rounded-lg bg-primary-dark p-8 w-[40%]">
                    {/* <video
                        src={selectedItem.video} 
                        controls
                        playsInline
                    /> */}
                    <iframe src="https://www.youtube.com/embed/0VFYVfHJtN4?si=9qlzSOs6Dy9aqscf" title={selectedItem.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="aspect-video w-full"></iframe>
                    <p className="text-lg mt-6">{selectedItem.title}</p>
                    <div className="flex gap-2 items-center">
                        <span className="text-xs font-extralight">{selectedItem.genre}</span>
                        <div className="w-0.5 h-0.5 rounded-full bg-white"></div>
                        <span className="text-xs font-extralight">8:24</span>
                    </div>
                    <p className="text-sm font-light mt-2">
                        {selectedItem.summary}
                    </p>
                </div>
            )
        }
        {
            showVideoOverlay && (
                <div className="fixed z-50 flex justify-center items-center inset-0 w-screen h-screen m-auto bg-black/25 backdrop-blur-2xl">
                    <div className="w-screen mx-6 sm:mx-10 flex flex-col sm:flex-row gap-6 bg-primary-dark">
                        <iframe src="https://www.youtube.com/embed/0VFYVfHJtN4?si=9qlzSOs6Dy9aqscf" title={selectedItem.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="aspect-video grow w-[60%]"></iframe>
                        <div className="py-12 pr-6 sm:pr-10 w-[40%] relative">
                            <button onClick={()=>setShowVideoOverlay(false)} className="cursor-pointer absolute top-4 right-4"><IoClose /></button>
                            <p className="text-lg">{selectedItem.title}</p>
                            <div className="flex gap-2 items-center">
                                <span className="text-xs font-extralight">{selectedItem.genre}</span>
                                <div className="w-0.5 h-0.5 rounded-full bg-white"></div>
                                <span className="text-xs font-extralight">8:24</span>
                            </div>
                            <p className="text-sm font-light mt-2">
                                {selectedItem.summary}
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
          {!connectVisible && contentVisible && (
            <button onClick={handleClick} className="cursor-pointer fixed bottom-4 left-0 right-0 mx-auto w-fit flex justify-center items-center gap-2 rounded-full px-6 py-1 bg-slate-900/25 animate-bounce text-white backdrop-blur-2xl z-10">
                Connect with me
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-3 font-bold">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
            </button>
          )}
    </div>
  )
}

export default Content