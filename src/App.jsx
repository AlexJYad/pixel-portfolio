import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import "./styles/colors.css";
import Header from "./components/Header/Header";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <Header />
         <div className="main">
            <p>Start here!</p>
         </div>
      </>
   );
}

export default App;
