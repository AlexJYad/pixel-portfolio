import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./PortfolioSection.css";

function PortfolioSection({ items }) {
   return (
      <div className="portfolio-grid">
         {items.map((item) => (
            <PortfolioCard
               key={item.id}
               image={item.image}
               title={item.title}
               description={item.description}
               link={item.link}
            />
         ))}
      </div>
   );
}

export default PortfolioSection;
