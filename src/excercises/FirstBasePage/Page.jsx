import { createRoot } from 'react-dom/client';
import './App.css';

const root = createRoot(document.getElementById('root'));
import reactLogo from "./images/react_logo.png";


root.render(
    <MainContent />
);

function MainContent(){
   return (
     <>

       <nav className="navbar">
        <img src={reactLogo} alt="React Logo" className="logo react"  width="80" />

         <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
         </ul>
       </nav>
       <h1>Fun Facts about React!</h1>
       <ul className="facts">
         <li>Was first released in 2013</li>
         <li>Was originally created by Jordan Walke</li>
         <li>Has well over 100K stars on GitHub</li>
         <li>Is maintained by Facebook</li>
         <li>Powers thousands of enterprise apps, including mobile apps</li>
       </ul>
     </>
   );
}


export default App;