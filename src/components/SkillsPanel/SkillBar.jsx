import useInView from "../../hooks/useInView";

const SEGMENTS = 10;

function SkillBar({ name, level }) {
   const filled = Math.round((level / 100) * SEGMENTS);
   const [ref, inView] = useInView(0.5);

   return (
      <li ref={ref} className={`skill-row ${inView ? "is-active" : ""}`}>
         <span className="skill-name">{name}</span>
         <span
            className="skill-bar"
            role="meter"
            aria-label={name}
            aria-valuenow={level}
            aria-valuemin={0}
            aria-valuemax={100}
         >
            {Array.from({ length: SEGMENTS }, (_, i) => (
               <i
                  key={i}
                  className={`skill-seg ${i < filled ? "is-filled" : ""}`}
                  style={{ "--i": i }}
               />
            ))}
         </span>
         <span className="skill-value">{level}</span>
      </li>
   );
}

export default SkillBar;
