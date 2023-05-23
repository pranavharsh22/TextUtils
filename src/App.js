
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light')
  const togglemode=()=>{
    
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='darkblue'
      document.body.style.border="1 px solid white"
      showalert('Dark mode has been enabled','Success')
    
     // document.title='Textutils-Dark mode'//

    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showalert('Light mode has been enabled','Success')
      document.body.style.border="1 px solid black"
     
     // document.title='Textutils-Light mode'//

    }
  }
  const [green,darkgreen]=useState('light')
  const convert=()=>{
    if(green==="light"){
      darkgreen('darkgreen')
      document.body.style.background="darkgreen"
      showalert("Dark green mode has been enabled","Success")
    }else{
      darkgreen('light')
      document.body.style.background('Light')
      showalert("Light mode has been enabled","Success")
    }
  }
  const [alert,setalert]=useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
      
    }, 1000);
  }

  return (
    <>
    <Router>
    <Navbar title="Welcome" about="About us" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>   
          <Route exact path="/about" element={<About mode={mode}  />} />
          <Route exact path="/" element={<TextForm heading=" Try TextUtils- Word counter, Character counter, Remove extra space" mode={mode} showalert={showalert}/>} />
        </Routes>
      
   
    </div>
    </Router>
    </>

  );
}

export default App;
