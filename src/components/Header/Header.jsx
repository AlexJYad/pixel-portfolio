import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
   const [darkMode, setDarkMode] = useState(true);
   const [language, setLanguage] = useState("EN");

   const toggleTheme = () => {
      setDarkMode(!darkMode);
      document.body.classList.toggle("light-theme");
   };

   const toggleLanguage = () => {
      setLanguage(language === "EN" ? "RU" : "EN");
   };

   useEffect(() => {
      document.body.className = darkMode ? "dark-theme" : "light-theme";
   }, [darkMode]);

   return (
      <header className="header">
         <div className="header__logo">PixelPortfolio</div>
         <nav className="header__nav">
            <a href="#main">{language === "EN" ? "Home" : "Главная"}</a>
            <a href="#timeline">
               {language === "EN" ? "Timeline" : "Хронология"}
            </a>
            <a href="#portfolio">
               {language === "EN" ? "Portfolio" : "Портфолио"}
            </a>
            <a href="#contact">{language === "EN" ? "Contact" : "Контакты"}</a>
            {/* Файл заглужка - надо потом изменить */}
            <a href="/resume.pdf" className="header__resume" download>
               {language === "EN" ? "Download Resume" : "Скачать Резюме"}
            </a>
            <button className="header__btn" onClick={toggleTheme}>
               {darkMode ? "🌙" : "☀️"}
            </button>
            <button className="header__btn" onClick={toggleLanguage}>
               {language}
            </button>
         </nav>
      </header>
   );
};

export default Header;
