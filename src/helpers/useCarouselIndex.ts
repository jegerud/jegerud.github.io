import { RefObject, useEffect, useState } from "react";

export function useCarouselIndex(ref: RefObject<HTMLDivElement>, count: number) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (element == null) return;

    let frame: number | null = null;
    const handleScroll = () => {
      if (frame != null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const width = element.clientWidth;
        if (width === 0) return;
        const index = Math.round(element.scrollLeft / width);
        setActiveIndex(Math.min(Math.max(index, 0), count - 1));
      });
    };

    element.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      element.removeEventListener("scroll", handleScroll);
      if (frame != null) cancelAnimationFrame(frame);
    };
  }, [ref, count]);

  const scrollToIndex = (index: number) => {
    const element = ref.current;
    if (element == null) return;
    element.scrollTo({ left: element.clientWidth * index, behavior: "smooth" });
  };

  return { activeIndex, scrollToIndex };
}
