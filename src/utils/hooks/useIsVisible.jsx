import { useEffect, useState } from "react";

export default function useIsVisible(
  ref,
  {
    threshold = 0.3,
    rootMargin = "0px",
    triggerOnce = false,
  } = {}
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, triggerOnce]);

  return isVisible;
}