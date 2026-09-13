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
        const children = Array.from(element.children) as HTMLElement[];
        if (children.length === 0) return;
        const viewportCenter = element.scrollLeft + element.clientWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;
        children.forEach((child, index) => {
          const childCenter = child.offsetLeft + child.offsetWidth / 2;
          const distance = Math.abs(childCenter - viewportCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });
        setActiveIndex(closestIndex);
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
    const child = element?.children[index] as HTMLElement | undefined;
    if (element == null || child == null) return;
    const target = child.offsetLeft + child.offsetWidth / 2 - element.clientWidth / 2;
    element.scrollTo({ left: target, behavior: "smooth" });
  };

  return { activeIndex, scrollToIndex };
}
