import "./PortfolioCard.css";

function PortfolioCard({ image, title, description, link }) {
   return (
      <a
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="portfolio-card"
      >
         <img className="portfolio-card-img" src={image} alt={title} />
         <div className="portfolio-card-text">
            <h3>{title}</h3>
            <p>{description}</p>
         </div>
      </a>
   );
}

export default PortfolioCard;
