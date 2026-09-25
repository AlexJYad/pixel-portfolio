import "./ProfileSection.css";
import SkillsPanel from "../SkillsPanel/SkillsPanel";

const translations = {
   EN: {
      role: "Junior Frontend Developer",
      summary: "Profile",
      bio: "Background in IT support and systems administration, now focused on building structured, user-friendly interfaces with JavaScript, Angular, and React. Systematic and detail-oriented, with hands-on experience in API integration, component architecture, and interactive web projects.",
      cv: "Download CV",
      contact: "Contact me",
   },
   RU: {
      role: "Junior Frontend разработчик",
      summary: "Профиль",
      bio: "Опыт в технической поддержке и системном администрировании, с фокусом на JavaScript, Angular и React. Системный и внимательный к деталям специалист с практическим опытом интеграции API, построения архитектуры компонентов и разработки интерактивных веб-проектов.",
      cv: "Скачать CV",
      contact: "Связаться со мной",
   },
   ES: {
      role: "Desarrollador Frontend Junior",
      summary: "Perfil",
      bio: "Experiencia en soporte técnico y administración de sistemas, con enfoque en JavaScript, Angular y React. Profesional sistemático y orientado al detalle, con experiencia práctica en integración de API, arquitectura de componentes y desarrollo de proyectos web interactivos.",
      cv: "Descargar CV",
      contact: "Contacta conmigo",
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
            <div className="profile-title">
               <h2 className="profile-name">Aleksandr Iakovlev</h2>
               <p className="profile-role">{t.role}</p>
            </div>
            <div className="profile-bio">
               <h3 className="bio-tab">{t.summary}</h3>
               <p>{t.bio}</p>
            </div>
            <div className="profile-btns">
               <a className="btn profile-btn">{t.cv}</a>
               <a className="btn profile-btn">{t.contact}</a>
            </div>
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
