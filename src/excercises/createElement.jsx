import {createRoot} from 'react-dom/client';
import {createElement} from 'react';
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));

const reactElement = createElement('h1',null,'Hello, Niggers!');

console.log(reactElement);
root.render(reactElement);

export default App;