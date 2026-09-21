import { useEffect, useRef, useState } from "react";

export default function useInView(threshold = 0) {
   const ref = useRef(null);
   const [inView, setInView] = useState(false);

   useEffect(() => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
         ([entry]) => setInView(entry.isIntersecting),
         { threshold },
      );

      observer.observe(ref.current);
      return () => observer.disconnect();
   }, [threshold]);

   return [ref, inView];
}
