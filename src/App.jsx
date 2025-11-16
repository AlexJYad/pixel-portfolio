import { useState } from "react";
import "./styles/App.css";
import "./styles/colors.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <Header />
         <div className="main">
            <p>Start here!</p>
         </div>
         <Footer />
      </>
   );
}

export default App;
