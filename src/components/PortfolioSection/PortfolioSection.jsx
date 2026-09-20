import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./PortfolioSection.css";

function PortfolioSection({ items, language }) {
   return (
      <div className="portfolio-grid">
         {items.map((item) => (
            <PortfolioCard
               key={item.id}
               image={item.image}
               alt={item.title}
               title={item.title}
               description={item.description[language]}
               link={item.link}
            />
         ))}
      </div>
   );
}

export default PortfolioSection;
