import React from 'react';
import './App.css';
import Welcome from './components/welcome/welcome';
import SplashScreen from './components/splashScreen/splashScreen';
import First_screen from "./components/screen1/firsrt_screen"
import Second_screen from './components/screen2/second_screen';
import Third_Screen from './components/screen3/ThirdScreen';
import Final_Screen from './components/final-screen/FinalScreen'
import { Routes,Route, Router } from 'react-router-dom';
import "./assets/scss/main.scss"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Welcome/>}   />
        <Route path='/splash' element={<SplashScreen/>}/> 
        <Route path='/first-screen' element={<First_screen/>}/> 
        <Route path='/second-screen' element={<Second_screen/>}/> 
        <Route path='/third-screen' element={<Third_Screen/>}/>
        <Route path='/final-screen' element={<Final_Screen/>}/>
      </Routes>
    </div>
  );
}

export default App;
