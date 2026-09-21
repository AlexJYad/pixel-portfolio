import SkillBar from "./SkillBar";
import LanguageRow from "./LanguageRow";
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
      spanish: "Сastellano (A2 / B1)",
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
         <h3 className="skills-tab">{t.skills}</h3>

         <h4>Frontend</h4>
         <ul className="skills-list">
            {frontendSkills.map((skill) => (
               <SkillBar key={skill.name} {...skill} />
            ))}
         </ul>

         <h4>Backend</h4>
         <ul className="skills-list">
            {backendSkills.map((skill) => (
               <SkillBar key={skill.name} {...skill} />
            ))}
         </ul>

         <h4>{t.languages}</h4>
         <ul className="lang-list">
            {languages.map(({ key, stars }) => (
               <LanguageRow key={key} label={t[key]} stars={stars} />
            ))}
         </ul>
      </div>
   );
}

export default SkillsPanel;
