import React, { useRef, useEffect, useState } from "react";

const Carousel = ({
    children,
    length,
    onScrollabilityChange,
    className = "",
    itemWidth = "85%", // Mobile
    smItemWidth = "45%",
    lgItemWidth = "24%",
    prevRef,
    nextRef,
    loop = false,
}) => {
    const containerRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [canScroll, setCanScroll] = useState(false);

    useEffect(() => {
        const checkScrollable = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;

            const scrollable = container.scrollWidth > container.clientWidth + 1;

            setCanScroll(scrollable);
            onScrollabilityChange?.(scrollable);
        };

        checkScrollable();

        window.addEventListener("resize", checkScrollable);

        return () => {
            window.removeEventListener("resize", checkScrollable);
        };
    }, [length]);

    useEffect(() => {
        const updateWidth = () => {
            if (!containerRef.current?.firstChild) return;

            const width =
                containerRef.current.firstChild.getBoundingClientRect().width + 16; // gap

            setCardWidth(width);
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const scroll = (direction) => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const tolerance = 5;

        if (direction === "next") {
            // Already at the end
            if (loop && container.scrollLeft >= maxScroll - tolerance) {
                container.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
                return;
            }

            container.scrollBy({
                left: cardWidth,
                behavior: "smooth",
            });
        } else {
            // Already at the beginning
            if (loop && container.scrollLeft <= tolerance) {
                container.scrollTo({
                    left: maxScroll,
                    behavior: "smooth",
                });
                return;
            }

            container.scrollBy({
                left: -cardWidth,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const prevBtn = prevRef?.current;
        const nextBtn = nextRef?.current;

        if (prevBtn) prevBtn.onclick = () => scroll("prev");
        if (nextBtn) nextBtn.onclick = () => scroll("next");

        return () => {
            if (prevBtn) prevBtn.onclick = null;
            if (nextBtn) nextBtn.onclick = null;
        };
    }, [cardWidth, prevRef, nextRef]);

    return (
        <div
            ref={containerRef}
            className={`flex overflow-x-auto gap-4 scrollbar-hide snap-x snap-mandatory scroll-smooth ${className}`}
        >
            {React.Children.map(children, (child) => (
                <div
                    className="
            shrink-0
            snap-start
            basis-[85%]
            sm:basis-[45%]
            lg:basis-[24%]
          "
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Carousel;