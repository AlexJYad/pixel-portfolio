import "./styles/App.css";
import "./styles/colors.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import TimelineSection from "./components/TimelineSection/TimelineSection";
import experienceItems from "./data/experience.json";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import portfolioItems from "./data/portfolioItems.json";
import chunkArray from "./utils/chunkArray";

function App() {
   const portfolioChunks = chunkArray(portfolioItems, 4);

   return (
      <>
         <Header />
         <div className="main-container">
            <section className="section" id="main">
               <ProfileSection />
            </section>
            <section className="section section-max" id="timeline">
               <TimelineSection items={experienceItems} />
            </section>
            {portfolioChunks.map((chunk, index) => (
               <section
                  className="section"
                  key={index}
                  id={index === 0 ? "portfolio" : undefined}
               >
                  <PortfolioSection items={chunk} />
               </section>
            ))}
            <Footer />
         </div>
      </>
   );
}

export default App;
