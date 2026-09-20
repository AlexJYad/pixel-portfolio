import { useRef, useState, useEffect } from "react";
import "./ProfileSection.css";

const translations = {
   EN: {
      role: "Junior Frontend Developer",
      summary: "Professional Summary",
      skills: "Technical Skills",
      languages: "Languages",
      russian: "Russian (native)",
      english: "English (B2 / C1)",
      spanish: "Spanish (A2 / B1)",
      bio: "Junior Frontend Developer with a background in IT support and systems administration, now focused on building structured, user-friendly interfaces with JavaScript, Angular, and React. I combine systematic, detail-oriented thinking with hands-on experience across interactive projects — from API integrations to component architecture — to deliver solutions that are both reliable and easy to use.",
   },
   RU: {
      role: "Junior Frontend разработчик",
      summary: "Профессиональное резюме",
      skills: "Технические навыки",
      languages: "Языки",
      russian: "Русский (родной)",
      english: "Английский (B2 / C1)",
      spanish: "Испанский (A2 / B1)",
      bio: "Junior Frontend-разработчик с опытом в IT-поддержке и системном администрировании, сейчас сосредоточен на создании структурированных и удобных интерфейсов с использованием JavaScript, Angular и React. Сочетаю системное, внимательное к деталям мышление с практическим опытом в интерактивных проектах — от интеграции API до архитектуры компонентов — чтобы предлагать решения, которые одновременно надёжны и удобны в использовании.",
   },
   ES: {
      role: "Desarrollador Frontend Junior",
      summary: "Resumen Profesional",
      skills: "Habilidades Técnicas",
      languages: "Idiomas",
      russian: "Ruso (nativo)",
      english: "Inglés (B2 / C1)",
      spanish: "Español (A2 / B1)",
      bio: "Desarrollador Frontend Junior con experiencia en soporte de TI y administración de sistemas, actualmente enfocado en crear interfaces estructuradas y fáciles de usar con JavaScript, Angular y React. Combino un pensamiento sistemático y orientado al detalle con experiencia práctica en proyectos interactivos —desde integraciones de API hasta arquitectura de componentes— para ofrecer soluciones fiables y fáciles de usar.",
   },
};

function ProfileSection({ language }) {
   const t = translations[language] ?? translations.EN;

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

   return (
      <section className="profile-section">
         <div className="profile-avatar">
            <div className="profile-avatar-frame">
               <img src="/images/my-photo-2.png" alt="My Photo" />
            </div>
         </div>

         <div className="profile-info">
            <h1>Aleksandr Iakovlev</h1>
            <h2>{t.role}</h2>
            <h3>{t.summary}</h3>
            <p>{t.bio}</p>
         </div>

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
            <ul>
               <li>{t.russian}</li>
               <li>{t.english}</li>
               <li>{t.spanish}</li>
            </ul>
         </div>

         <div className="profile-start">
            <div className="profile-start-point"></div>
            <div className="profile-start-point-line"></div>
         </div>
      </section>
   );
}

export default ProfileSection;

function SkillBar({ name, level }) {
   const ref = useRef(null);
   const [animate, setAnimate] = useState(false);

   useEffect(() => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(([entry]) => {
         setAnimate(entry.isIntersecting);
      });

      observer.observe(ref.current);
      return () => observer.disconnect();
   }, []);

   return (
      <div className="pixel-chart-column-wrapper">
         <div
            ref={ref}
            className={`pixel-chart-column-inner ${animate ? "animate" : ""}`}
            style={{ "--target-height": `${level}px` }}
         ></div>
         <span className="chart-text">{name}</span>
      </div>
   );
}
