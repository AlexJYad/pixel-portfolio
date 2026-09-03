import { useState } from "react";
import "./TimelineSection.css";

function TimelineSection({ items }) {
   const [activeIndex, setActiveIndex] = useState(null);

   return (
      <section className="timeline-section" id="timeline">
         <div className="timeline-line" />
         {items.map((item, i) => (
            <div className="timeline-item" key={i}>
               <button
                  className="timeline-dot btn"
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
               />
               <div className="timeline-date">{item.date}</div>
               <div className="timeline-title">
                  <h4>{item.title}</h4>
               </div>
               <div className="timeline-content">
                  {activeIndex === i && (
                     <div>
                        <h5>{item.company}</h5>
                        <ul>
                           {item.bullets.map((b, j) => (
                              <li key={j}>{b}</li>
                           ))}
                        </ul>
                     </div>
                  )}
               </div>
            </div>
         ))}
      </section>
   );
}

export default TimelineSection;
