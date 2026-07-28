import './App.css';
import claudelogo from './images/chefclaudelogo.png'

export default function Header(){
    return(
       <>
       <header className = 'header'>
            <img src={claudelogo} alt="Logo" />
            <h1>Chef Claude</h1>
       </header>
       </>
    );
}