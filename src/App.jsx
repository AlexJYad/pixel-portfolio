import { useState } from "react";
import "./styles/App.css";
import "./styles/colors.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProfileSection from "./components/ProfileSection/ProfileSection";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <Header />
         <div className="main-container">
            <section className="section">
               <ProfileSection />
            </section>
            <section className="section">
               <ProfileSection />
            </section>
            <Footer />
         </div>
      </>
   );
}

export default App;
