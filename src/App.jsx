import { useState } from "react";
import "./styles/App.css";
import "./styles/colors.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import TimelineSection from "./components/TimelineSection/TimelineSection";

function App() {
   const [count, setCount] = useState(0);
   const experienceItems1 = [
      {
         date: "2018",
         title: "Degree in Computer Science",
         company: "Moscow Aviation Institute",
         bullets: [],
      },
      {
         date: "2020 - 2022",
         title: "SYSTEMS ADMINISTRATOR",
         company: "Syrius",
         bullets: [
            "Provided on-site and remote technical support for corporate users.",
            "Managed user accounts and installed specialized software, including CryptoPro and banking applications.",
            "Configured and maintained network infrastructure — routers, cabling, and printers.",
            "Ensured stable connectivity and reliable operation of corporate systems.",
         ],
      },
      {
         date: "2022-2024",
         title: "TECHNICAL SUPPORT SPECIALIST",
         company: "Monastyrev and CO",
         bullets: [
            "Delivered internal technical support, both general and specialized.",
            "Diagnosed, repaired, and maintained hardware and software components.",
            "Ensured continuous and stable operation of company equipment.",
            "Advised users and teams on IT-related matters.",
            "Provided training to help staff make better use of available technology.",
         ],
      },
   ];
   const experienceItems2 = [
      {
         date: "2024",
         title: "Move to Spain",
         company: "And now have promishon to work",
         bullets: [],
      },
      {
         date: "2025",
         title: "Curso: Java Programming and Analysis",
         company: "INADECO",
         bullets: ["140 hours"],
      },
      {
         date: "2026",
         title: "Curso: Web Page Publishing and Development",
         company: "Factoría F5",
         bullets: [
            "Level 2 Professional Certificate in Web Page Publishing and Development",
         ],
      },
   ];

   return (
      <>
         <Header />
         <div className="main-container">
            <section className="section">
               <ProfileSection />
            </section>
            <section className="section">
               <TimelineSection items={experienceItems1} />
            </section>
            <section className="section">
               <TimelineSection items={experienceItems2} />
            </section>
            <Footer />
         </div>
      </>
   );
}

export default App;
