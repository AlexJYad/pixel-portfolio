import React from "react";
import "./ProfileSection.css";

function ProfileSection() {
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
               <div className="pixel-chart-column-wrapper">
                  <div
                     className="pixel-chart-column-inner"
                     style={{ height: "80px" }}
                  ></div>
                  <span className="chart-text">HTML</span>
               </div>
               <div className="pixel-chart-column-wrapper">
                  <div
                     className="pixel-chart-column-inner"
                     style={{ height: "85px" }}
                  ></div>
                  <span className="chart-text">CSS</span>
               </div>
               <div className="pixel-chart-column-wrapper">
                  <div
                     className="pixel-chart-column-inner"
                     style={{ height: "92px" }}
                  ></div>
                  <span className="chart-text">JS</span>
               </div>
               <div className="pixel-chart-column-wrapper">
                  <div
                     className="pixel-chart-column-inner"
                     style={{ height: "60px" }}
                  ></div>
                  <span className="chart-text">React</span>
               </div>
               <div className="pixel-chart-column-wrapper">
                  <div
                     className="pixel-chart-column-inner"
                     style={{ height: "10px" }}
                  ></div>
                  <span className="chart-text">TS</span>
               </div>
            </div>

            <h4>Backend</h4>
            <div className="pixel-chart">
               <div className="pixel-chart-column-wrapper">
                  <div
                     className="pixel-chart-column-inner"
                     style={{ height: "60px" }}
                  ></div>
                  <span className="chart-text">SQL</span>
               </div>
               <div className="pixel-chart-column-wrapper">
                  <div
                     className="pixel-chart-column-inner"
                     style={{ height: "50px" }}
                  ></div>
                  <span className="chart-text">OOP</span>
               </div>
               <div className="pixel-chart-column-wrapper">
                  <div
                     className="pixel-chart-column-inner"
                     style={{ height: "10px" }}
                  ></div>
                  <span className="chart-text">Node.js</span>
               </div>
               <div className="pixel-chart-column-wrapper">
                  <div
                     className="pixel-chart-column-inner"
                     style={{ height: "76px" }}
                  ></div>
                  <span className="chart-text">Git</span>
               </div>
               <div className="pixel-chart-column-wrapper">
                  <div
                     className="pixel-chart-column-inner"
                     style={{ height: "50px" }}
                  ></div>
                  <span className="chart-text">Python</span>
               </div>
            </div>

            <h4>Languages</h4>
            <ul>
               <li>Rushan (nativ)</li>
               <li>English (B2 / C1)</li>
               <li>Spanish (A2 / B1)</li>
            </ul>
         </div>

         <div className="profile-start">
            <div className="profile-start-point">
               <i class="bi bi-balloon-heart"></i>
            </div>
            <div className="profile-start-point-line"></div>
         </div>
      </section>
   );
}

export default ProfileSection;
