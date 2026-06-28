import React, { useEffect, useRef, useState } from "react";
import CarouselItem from "./CarouselItem";
import Carousel from "../../../components/Carousel";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const GenreSection = (props) => {

  const prevRef = useRef();
  const nextRef = useRef();
  const [canScroll, setCanScroll] = useState(true);

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl">{props.content?.genre}</p>
          <div className="w-10 border border-primary-gold mt-1"></div>
        </div>

        <div className="flex gap-2">
          <button
            ref={prevRef}
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${ canScroll ? "cursor-pointer border-slate-700 text-slate-700 hover:border-primary-gold/50 hover:text-primary-gold/50" : "cursor-not-allowed border-slate-800/75 text-slate-800/70" }`}
            disabled={!canScroll}
          >
            <GoChevronLeft className="text-lg" />
          </button>

          <button
            ref={nextRef}
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${ canScroll ? "cursor-pointer border-slate-700 text-slate-700 hover:border-primary-gold/50 hover:text-primary-gold/50" : "cursor-not-allowed border-slate-800/75 text-slate-800/70" }`}
            disabled={!canScroll}
          >
            <GoChevronRight className="text-lg" />
          </button>
        </div>
      </div>

      <Carousel loop prevRef={prevRef} nextRef={nextRef} onScrollabilityChange={setCanScroll}>
        {props.content?.items?.map((contentItem) => (
          <CarouselItem
            key={contentItem.id}
            item={contentItem}
            setShowVideoOverlay={props.setShowVideoOverlay}
            setSelectedItem={props.setSelectedItem}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default GenreSection;