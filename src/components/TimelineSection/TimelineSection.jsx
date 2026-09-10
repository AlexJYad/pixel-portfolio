import { useState, useRef, useEffect } from "react";
import "./TimelineSection.css";

function TimelineSection({ items }) {
   const sectionRef = useRef(null);
   const itemRefs = useRef([]);
   const [visibleSet, setVisibleSet] = useState(new Set());

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            setVisibleSet((prev) => {
               const next = new Set(prev);
               entries.forEach((entry) => {
                  const index = Number(entry.target.dataset.index);
                  if (entry.isIntersecting) {
                     next.add(index);
                  } else {
                     next.delete(index);
                  }
               });
               return next;
            });
         },
         { threshold: 0.4 },
      );

      itemRefs.current.forEach((el) => el && observer.observe(el));
      return () => observer.disconnect();
   }, [items]);

   const firstVisibleIndex = visibleSet.size > 0 ? Math.min(...visibleSet) : -1;
   const lineFraction =
      firstVisibleIndex >= 0 ? (firstVisibleIndex + 1) / items.length : 0;

   return (
      <section
         className="timeline-section"
         ref={sectionRef}
         style={{ "--progress": lineFraction }}
      >
         {items.map((item, i) => (
            <div
               className={`timeline-container ${visibleSet.has(i) ? "is-visible" : ""}`}
               key={i}
               ref={(el) => (itemRefs.current[i] = el)}
               data-index={i}
            >
               <div className="timeline-content">
                  <div className="timeline-dot btn"></div>
                  <h2 className="timeline-title">{item.title}</h2>
                  <small className="timeline-date">{item.date}</small>
                  <h5>{item.company}</h5>
                  <ul>
                     {item.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                     ))}
                  </ul>
                  <span className="timeline-container-arrow"></span>
               </div>
            </div>
         ))}
      </section>
   );
}

export default TimelineSection;
