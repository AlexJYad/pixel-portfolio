import { useRef, useState, useEffect } from "react";
import "./ProfileSection.css";

function ProfileSection() {
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
      { name: "Git", level: 76 },
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
            <h2>Junior Frontend Developer</h2>
            <h3>Professional Summary</h3>
            <p>
               Junior Frontend Developer with experience working with data,
               documentation, and user processes. Specialising in JavaScript and
               React, I create structured, reliable, and user-friendly
               interfaces. Systematic thinking and experience in interactive
               projects enable me to deliver solutions that enhance both
               efficiency and user experience.
            </p>
         </div>
         <div className="profile-skills">
            <h3>Technical Skills</h3>

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

            <h4>Languages</h4>
            <ul>
               <li>Rushan (nativ)</li>
               <li>English (B2 / C1)</li>
               <li>Spanish (A2 / B1)</li>
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
