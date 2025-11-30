import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
   const [copied, setCopied] = useState(false);

   const copy = () => {
      navigator.clipboard.writeText("alexjacob9606@gmail.com");
      setCopied(true);

      setTimeout(() => setCopied(false), 1000);
   };

   return (
      <footer className="footer terraria-striped">
         <div className="footer__socials">
            <a
               href="https://www.linkedin.com/in/aleksandr-iakovlev-702478284/"
               target="_blank"
               rel="noreferrer"
            >
               Linked<i className="bi bi-linkedin"></i>
            </a>
            <a
               href="https://github.com/AlexJYad"
               target="_blank"
               rel="noreferrer"
            >
               <i className="bi bi-github"></i>&thinsp;&thinsp;GitHub
            </a>
            <a href="mailto:alexjacob9606@gmail.com" className="footer__email">
               <i className="bi bi-envelope-at"></i>
               &thinsp;&thinsp;alexjacob9606@gmail.com
            </a>
            <a>
               <i className="bi bi-copy copy" onClick={copy}></i>
            </a>
            {copied && <span className="copied-text">Copied!</span>}
         </div>
         <div className="footer__copyright">
            <i className="bi bi-c-circle"></i> 2025 Aleksandr Iakovlev
         </div>
      </footer>
   );
};

export default Footer;
