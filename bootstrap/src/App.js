import './App.css';
import AppBar from './components/AppBar';
import Banar from './components/Banar';
import Achievements from './components/Achievements';
import About from './components/About';
import Contactus from './components/Contactus';



function App() {
  return (
    <>
    <AppBar/>
    <Banar/>
    <About/>
    <Achievements/>
    <Contactus/>
    <div className='text-center my-3 text-primary small'>Copyright 2022-2023</div>
    </>
  );
}

export default App;
