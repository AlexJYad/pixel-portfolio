import "./styles/App.css";
import "./styles/colors.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import TimelineSection from "./components/TimelineSection/TimelineSection";
import experienceItems from "./data/experience.json";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import portfolioItems from "./data/portfolioItems.json";
import ContactSection from "./components/ContactSection/ContactSection";

const LANGUAGES = ["EN", "RU", "ES"];

function App() {
   const [language, setLanguage] = useState("EN");

   const cycleLanguage = () => {
      setLanguage((prev) => {
         const currentIndex = LANGUAGES.indexOf(prev);
         const nextIndex = (currentIndex + 1) % LANGUAGES.length;
         return LANGUAGES[nextIndex];
      });
   };

   return (
      <>
         <Header language={language} toggleLanguage={cycleLanguage} />
         <div className="main-container">
            <section className="section" id="main">
               <ProfileSection language={language} />
            </section>
            <section className="section section-max" id="timeline">
               <TimelineSection items={experienceItems[language]} />
            </section>
            <section className="section" id="portfolio">
               <PortfolioSection items={portfolioItems} language={language} />
            </section>
            <section>
               <ContactSection language={language} />
            </section>
            <Footer />
         </div>
      </>
   );
}

export default App;
