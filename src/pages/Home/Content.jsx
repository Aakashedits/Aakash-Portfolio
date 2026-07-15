import React, { useEffect, useState } from 'react'
import GenreSection from "./components/GenreSection"
import useIsVisible from "../../utils/hooks/useIsVisible"
import { IoClose } from "react-icons/io5"
import axios from "axios"


const Content = ({ connectRef, contentRef }) => {

    const connectVisible = useIsVisible(connectRef);
    const contentVisible = useIsVisible(contentRef);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showVideoOverlay, setShowVideoOverlay] = useState(false);
    const [content, setContent] = useState([]);

    const handleClick = () => {
        connectRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const [selectedItem, setSelectedItem] = useState(content[0]?.items[0]);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        (async () => {

            const fetchedContent = await axios.get("https://api.github.com/repos/Aakashedits/Portfolio-data/contents/New%20Text%20Document.json");
            const base64Content = fetchedContent.data.content;
            const jsonString = atob(base64Content.replace(/\n/g, ""));

            // Parse JSON
            const jsonData = JSON.parse(jsonString);

            console.log("fetched data ", jsonData);

            setContent([...jsonData]);
            setSelectedItem(jsonData[0]?.items[0])
        })()

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="relative w-full bg-secondary-dark z-20 py-12 px-12 3xl:py-20 sm:px-20 2xl:px-40 flex items-center gap-20 3xl:gap-40 text-white min-h-screen">
            <div className="flex flex-col justify-center gap-10 w-full xl:w-[60%]">
                {
                    content.map((contentItem) => (
                        <GenreSection key={contentItem.genre} setShowVideoOverlay={setShowVideoOverlay} setSelectedItem={setSelectedItem} content={contentItem} />
                    ))
                }
            </div>
            {
                screenWidth >= 1280 && (
                    <div className="border border-slate-500 rounded-lg bg-primary-dark p-8 w-[40%] sticky top-1/2 -translate-y-1/2 h-fit">
                        <iframe src={selectedItem?.video} title={selectedItem?.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className="aspect-video w-full"></iframe>
                        <p className="text-lg mt-6">{selectedItem?.title}</p>
                        <div className="flex gap-2 items-center">
                            <span className="text-xs font-extralight">{selectedItem?.genre}</span>
                            <div className="w-0.5 h-0.5 rounded-full bg-white"></div>
                            <span className="text-xs font-extralight">{selectedItem?.length || "0:00"}</span>
                        </div>
                        <p className="text-sm font-light mt-2">
                            {selectedItem?.summary}
                        </p>
                    </div>
                )
            }
            {
                showVideoOverlay && (
                    <div className="fixed z-50 flex justify-center items-center inset-0 w-screen h-screen m-auto bg-black/25 backdrop-blur-3xl">
                        <div className="w-screen mx-6 sm:mx-10 flex flex-col sm:flex-row sm:gap-6 bg-primary-dark">
                            <iframe src={selectedItem?.video} title={selectedItem?.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="aspect-video grow sm:w-[60%]"></iframe>
                            <div className="py-6 px-6 sm:pr-10 sm:w-[40%] relative">
                                <button onClick={() => setShowVideoOverlay(false)} className="cursor-pointer absolute top-4 right-4"><IoClose /></button>
                                <p className="text-lg">{selectedItem?.title}</p>
                                <div className="flex gap-2 items-center">
                                    <span className="text-xs font-extralight">{selectedItem?.genre}</span>
                                    <div className="w-0.5 h-0.5 rounded-full bg-white"></div>
                                    <span className="text-xs font-extralight">{selectedItem?.length || "0:00"}</span>
                                </div>
                                <p className="text-sm font-light mt-2">
                                    {selectedItem?.summary}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
            {!connectVisible && contentVisible && (
                <button onClick={handleClick} className="cursor-pointer fixed bottom-4 left-0 right-0 mx-auto w-fit flex justify-center items-center gap-2 rounded-full px-6 py-1 lg:py-2 bg-slate-900/25 animate-bounce text-white backdrop-blur-3xl z-10">
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