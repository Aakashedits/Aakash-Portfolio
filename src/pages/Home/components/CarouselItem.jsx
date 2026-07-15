import { memo, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const CarouselItem = (props) => {
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);
    const [ isLoaded, setIsLoaded ] = useState(false);

    const handleItemClick = () => {
        props.setSelectedItem(props.item);
        if( screenWidth < 1280 )
            props.setShowVideoOverlay(true);
    }

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
    <div
      onClick={handleItemClick}
      className="mt-3 cursor-pointer"
    >
        <div className="relative aspect-video overflow-hidden rounded-md">
          {!isLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-600/50" />
          )}
          <img
            src={props.item?.thumbnail}
            key={props.item?.title}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className={`aspect-video w-full object-cover transition-all duration-300 ease-out hover:scale-105 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            alt={props.item?.title}
          />
        </div>
        <p className="mt-2 text-sm">{props.item?.title}</p>
    </div>
  );
};

export default memo(CarouselItem);