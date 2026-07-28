import {createRoot} from 'react-dom/client';
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));

function MainContent(){
  return <h1>React is a Nigger</h1>
}
function SubContent(){
  return <h2>JavaScript is an even bigger nigger</h2>
}

root.render(
  <div>
    <MainContent />
    <div>
      <SubContent />
   </div>
  </div>
)

export default App;