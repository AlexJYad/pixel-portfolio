import useInView from "../../hooks/useInView";

function SkillBar({ name, level }) {
   const [ref, animate] = useInView();

   return (
      <div className="pixel-chart-column-wrapper">
         <div
            ref={ref}
            className={`pixel-chart-column-inner ${animate ? "animate" : ""}`}
            style={{ "--target-height": `${level}px` }}
         ></div>
         <span className="chart-text">{name}</span>
      </div>
   );
}

export default SkillBar;
