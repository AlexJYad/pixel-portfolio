import React, { useState, useEffect } from "react";
import PixelBackpack from "./PixelBackpack";
import "./Header.css";

const Header = ({ language, toggleLanguage }) => {
   const [darkMode, setDarkMode] = useState(true);

   const navLabels = {
      EN: {
         home: "Home",
         timeline: "Timeline",
         portfolio: "Portfolio",
         contact: "Contact",
      },
      RU: {
         home: "Главная",
         timeline: "Хронология",
         portfolio: "Портфолио",
         contact: "Контакты",
      },
      ES: {
         home: "Inicio",
         timeline: "Cronología",
         portfolio: "Portafolio",
         contact: "Contacto",
      },
   };
   const labels = navLabels[language];

   const toggleTheme = () => {
      setDarkMode(!darkMode);
      document.body.classList.toggle("light-theme");
   };

   useEffect(() => {
      document.body.className = darkMode ? "dark-theme" : "light-theme";
   }, [darkMode]);

   return (
      <header className="header">
         <a href="#main">
            <div className="header__logo">
               <PixelBackpack />
               <h1>PixelPortfolio</h1>
            </div>
         </a>
         <nav className="header__nav">
            <a href="#main" className="btn">
               {labels.home}
            </a>
            <a href="#timeline" className="btn">
               {labels.timeline}
            </a>
            <a href="#portfolio" className="btn">
               {labels.portfolio}
            </a>
            <a href="#contact" className="btn">
               {labels.contact}
            </a>
            {/* Файл заглужка - надо потом изменить */}
            <a
               href="/resume.pdf"
               className="header__resume header__btn tooltip btn"
               download
            >
               <i className="bi bi-file-earmark-arrow-down"></i>
               <span className="tooltip__text">Download CV</span>
            </a>

            <button className="header__btn btn" onClick={toggleTheme}>
               {!darkMode ?
                  <i className="bi bi-lightbulb-off"></i>
               :  <i className="bi bi-lightbulb-fill"></i>}
            </button>
            <button className="header__btn btn" onClick={toggleLanguage}>
               {language}
            </button>
         </nav>
      </header>
   );
};

export default Header;
