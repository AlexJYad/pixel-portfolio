import "./styles/App.css";
import "./styles/colors.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import TimelineSection from "./components/TimelineSection/TimelineSection";
import experienceItems from "./data/experience.json";

function App() {
   return (
      <>
         <Header />
         <div className="main-container">
            <section className="section">
               <ProfileSection />
            </section>
            <section className="section section-max">
               <TimelineSection items={experienceItems} />
            </section>
            <Footer />
         </div>
      </>
   );
}

export default App;
