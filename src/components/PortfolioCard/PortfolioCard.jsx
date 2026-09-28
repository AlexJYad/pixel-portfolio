import "./PortfolioCard.css";
import PixelArrow from "../PortfolioSection/PixelArrow";

function PortfolioCard({
   image,
   title,
   description,
   tags,
   liveLink,
   codeLink,
   isNew,
}) {
   const fileName = title.toUpperCase().replace(/\s+/g, "-") + ".EXE";

   return (
      <div className="portfolio-card">
         {isNew && <span className="portfolio-card-badge">NEW!</span>}

         <div className="portfolio-card-titlebar">
            <span className="portfolio-card-filename">{fileName}</span>
            <div className="portfolio-card-controls">
               <span className="portfolio-card-btn" />
               <span className="portfolio-card-btn" />
               <span className="portfolio-card-btn" />
            </div>
         </div>

         <div className="portfolio-card-body">
            <img className="portfolio-card-img" src={image} alt={title} />

            <div className="portfolio-card-text">
               <p className="portfolio-card-description">{description}</p>

               <div className="portfolio-card-tags">
                  {tags.map((tag, index) => (
                     <span key={index} className="portfolio-card-tag">
                        {tag}
                     </span>
                  ))}
               </div>

               <div className="portfolio-card-links">
                  {liveLink && (
                     <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-card-link portfolio-card-link--live"
                     >
                        <PixelArrow direction="right" size={1.5} /> LIVE
                     </a>
                  )}
                  {codeLink && (
                     <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-card-link portfolio-card-link--code"
                     >
                        {"</>"} CODE
                     </a>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

export default PortfolioCard;
