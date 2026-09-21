import useInView from "../../hooks/useInView";
import PixelStar from "./PixelStar";

const MAX_STARS = 5;

function LanguageRow({ label, stars }) {
   const [ref, inView] = useInView(0.5);

   return (
      <li ref={ref} className={`lang-row ${inView ? "is-active" : ""}`}>
         <span>{label}</span>
         <span className="lang-stars" aria-hidden="true">
            {Array.from({ length: MAX_STARS }, (_, i) => (
               <PixelStar key={i} on={i < stars} index={i} />
            ))}
         </span>
      </li>
   );
}

export default LanguageRow;
