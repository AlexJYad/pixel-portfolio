import { useState, useMemo, useEffect } from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./PortfolioSection.css";
import PixelArrow from "./PixelArrow";

const ITEMS_PER_PAGE = 4;

function PortfolioSection({ items, language }) {
   const [activeFilter, setActiveFilter] = useState("all");
   const [page, setPage] = useState(1);

   const categories = useMemo(() => {
      const unique = [...new Set(items.map((item) => item.category))];
      return ["all", ...unique];
   }, [items]);

   const filteredItems = useMemo(() => {
      if (activeFilter === "all") return items;
      return items.filter((item) => item.category === activeFilter);
   }, [items, activeFilter]);

   const totalPages = Math.max(
      1,
      Math.ceil(filteredItems.length / ITEMS_PER_PAGE),
   );

   useEffect(() => {
      setPage(1);
   }, [activeFilter]);

   const pageItems = filteredItems.slice(
      (page - 1) * ITEMS_PER_PAGE,
      page * ITEMS_PER_PAGE,
   );

   return (
      <div className="portfolio-section">
         <div className="portfolio-filters-sticky">
            <div className="portfolio-filters">
               {categories.map((cat) => (
                  <button
                     key={cat}
                     type="button"
                     className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                     onClick={() => setActiveFilter(cat)}
                  >
                     {cat.toUpperCase()}
                  </button>
               ))}
            </div>
         </div>

         <div className="portfolio-grid">
            {pageItems.map((item) => (
               <PortfolioCard
                  key={item.id}
                  image={item.image}
                  alt={item.title}
                  title={item.title}
                  description={item.description[language]}
                  link={item.link}
                  tags={item.tags}
                  liveLink={item.live}
                  codeLink={item.link}
                  isNew={item.isNew}
               />
            ))}
         </div>

         {totalPages > 1 && (
            <div className="portfolio-pagination">
               <button
                  type="button"
                  className="page-btn"
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
               >
                  <PixelArrow direction="left" size={2} /> PREV
               </button>

               <span className="page-indicator">
                  {page} / {totalPages}
               </span>

               <button
                  type="button"
                  className="page-btn"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
               >
                  NEXT <PixelArrow direction="right" size={2} />
               </button>
            </div>
         )}
      </div>
   );
}

export default PortfolioSection;
