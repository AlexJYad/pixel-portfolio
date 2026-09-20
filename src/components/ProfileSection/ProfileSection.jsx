import "./ProfileSection.css";
import SkillsPanel from "../SkillsPanel/SkillsPanel";

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

         <SkillsPanel language={language} />

         <div className="profile-start">
            <div className="profile-start-point"></div>
            <div className="profile-start-point-line"></div>
         </div>
      </section>
   );
}

export default ProfileSection;
