import SkillBar from "./SkillBar";
import PixelStar from "./PixelStar";
import "./SkillsPanel.css";

const translations = {
   EN: {
      skills: "Skills",
      languages: "Languages",
      russian: "Russian (native)",
      english: "English (B2 / C1)",
      spanish: "Spanish (A2 / B1)",
   },
   RU: {
      skills: "Навыки",
      languages: "Языки",
      russian: "Русский (родной)",
      english: "Английский (B2 / C1)",
      spanish: "Испанский (A2 / B1)",
   },
   ES: {
      skills: "Habilidades",
      languages: "Idiomas",
      russian: "Ruso (nativo)",
      english: "Inglés (B2 / C1)",
      spanish: "Español (A2 / B1)",
   },
};

const frontendSkills = [
   { name: "HTML", level: 80 },
   { name: "CSS", level: 85 },
   { name: "JS", level: 70 },
   { name: "React", level: 60 },
   { name: "TS", level: 10 },
];

const backendSkills = [
   { name: "SQL", level: 60 },
   { name: "OOP", level: 50 },
   { name: "Node.js", level: 10 },
   { name: "Git", level: 75 },
   { name: "Python", level: 50 },
];

const languages = [
   { key: "russian", stars: 5 },
   { key: "english", stars: 4 },
   { key: "spanish", stars: 2 },
];

function SkillsPanel({ language }) {
   const t = translations[language] ?? translations.EN;
   return (
      <div className="profile-skills">
         <h3>{t.skills}</h3>

         <h4>Frontend</h4>
         <div className="pixel-chart">
            {frontendSkills.map((skill) => (
               <SkillBar key={skill.name} {...skill} />
            ))}
         </div>

         <h4>Backend</h4>
         <div className="pixel-chart">
            {backendSkills.map((skill) => (
               <SkillBar key={skill.name} {...skill} />
            ))}
         </div>

         <h4>{t.languages}</h4>
         <ul className="lang-list">
            {languages.map(({ key, stars }) => (
               <li className="lang-row" key={key}>
                  <span>{t[key]}</span>
                  <span className="lang-stars" aria-hidden="true">
                     {Array.from({ length: 5 }, (_, i) => (
                        <PixelStar key={i} on={i < stars} />
                     ))}
                  </span>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default SkillsPanel;
