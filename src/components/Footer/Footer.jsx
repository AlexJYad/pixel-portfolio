import React from "react";
import "./Footer.css";

const Footer = () => {
   return (
      <footer className="footer terraria-striped">
         <div className="footer__socials">
            <a
               href="https://github.com/AlexJYad"
               target="_blank"
               rel="noreferrer"
            >
               <i className="bi bi-github"></i> GitHub
            </a>
            <a
               href="https://www.linkedin.com/in/aleksandr-iakovlev-702478284/"
               target="_blank"
               rel="noreferrer"
            >
               Linked<i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:alex@example.com" className="footer__email">
               <i class="bi bi-envelope-at"></i> alexjacob9606@gmail.com
            </a>
         </div>
         <div className="footer__copyright">
            <i className="bi bi-c-circle"></i> 2025 Aleksandr Iakovlev
         </div>
      </footer>
   );
};

export default Footer;
