import { useState, useRef, useEffect } from "react";
import "./TimelineSection.css";

function TimelineSection({ items }) {
   const sectionRef = useRef(null);
   const itemRefs = useRef([]);
   const detailsRefs = useRef([]);

   const [visibleSet, setVisibleSet] = useState(new Set());
   const [sectionHeight, setSectionHeight] = useState(0);

   /*
    * =========================================================
    * INTERSECTION OBSERVER
    * =========================================================
    */

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
         {
            threshold: 0.4,
         },
      );

      itemRefs.current.forEach((element) => {
         if (element) {
            observer.observe(element);
         }
      });

      return () => observer.disconnect();
   }, [items]);

   /*
    * =========================================================
    * SECTION HEIGHT
    * =========================================================
    */

   useEffect(() => {
      const section = sectionRef.current;

      if (!section) return;

      const updateHeight = () => {
         const height = section.getBoundingClientRect().height;

         setSectionHeight(height);
      };

      updateHeight();

      const resizeObserver = new ResizeObserver(() => {
         updateHeight();
      });

      resizeObserver.observe(section);

      window.addEventListener("resize", updateHeight);

      return () => {
         resizeObserver.disconnect();
         window.removeEventListener("resize", updateHeight);
      };
   }, [items]);

   /*
    * =========================================================
    * VISIBLE / TARGET ITEM
    * =========================================================
    */

   const firstVisibleIndex = visibleSet.size > 0 ? Math.min(...visibleSet) : -1;

   const targetIndex =
      firstVisibleIndex >= 0 ?
         Math.min(firstVisibleIndex + 1, items.length - 1)
      :  -1;

   /*
    * =========================================================
    * LINE PROGRESS
    * =========================================================
    */

   const lineProgress = (() => {
      if (targetIndex < 0 || !sectionRef.current || !sectionHeight) {
         return 0;
      }

      const section = sectionRef.current;

      const dot = itemRefs.current[targetIndex]?.querySelector(".timeline-dot");

      if (!dot) return 0;

      const sectionRect = section.getBoundingClientRect();
      const dotRect = dot.getBoundingClientRect();

      const dotCenter = dotRect.top + dotRect.height / 2 - sectionRect.top;

      return dotCenter / sectionRect.height;
   })();

   /*
    * =========================================================
    * RENDER
    * =========================================================
    */

   return (
      <section
         className="timeline-section"
         ref={sectionRef}
         style={{
            "--progress": lineProgress,
         }}
      >
         {items.map((item, index) => (
            <div
               key={index}
               ref={(element) => {
                  itemRefs.current[index] = element;
               }}
               data-index={index}
               className={`timeline-container ${
                  visibleSet.has(index) ? "is-visible" : ""
               }`}
            >
               <div className="timeline-content">
                  <div className="timeline-dot" />

                  <div className="timeline-box">
                     <details
                        className="timeline-details"
                        ref={(element) => {
                           detailsRefs.current[index] = element;
                        }}
                        open
                     >
                        <summary className="timeline-summary">
                           <div className="timeline-header">
                              <h4 className="timeline-title">{item.title}</h4>

                              <small className="timeline-date">
                                 {item.date}
                              </small>
                           </div>
                        </summary>

                        <div className="timeline-company">
                           <span className="timeline-company-text">
                              {item.company}
                           </span>
                        </div>

                        <div className="timeline-details-content">
                           <ul>
                              {item.bullets.map((bullet, bulletIndex) => (
                                 <li key={bulletIndex}>{bullet}</li>
                              ))}
                           </ul>
                        </div>
                     </details>
                  </div>

                  <span className="timeline-container-arrow" />
               </div>
            </div>
         ))}
      </section>
   );
}

export default TimelineSection;
