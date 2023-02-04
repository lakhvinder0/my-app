import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = 'grey'
      showAlert("dark mode has been enabled", "success")
      // document.title = ('DC-DarkMode')
    }
    else {
      setMode('light')
      document.body.style.background = 'white'
      showAlert("light mode has been enabled", "success")
      // document.title = ('DC-LightMode')

    }

  }
  return (
    <>
<Router>
      <Navbar title="DIgitech Computers" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route path='/about' exact element={<About mode={mode} />} />


          <Route path='/' exact element={<TextForm heading="Please Enter the text" showAlert={showAlert} mode={mode} />} />

        </Routes>
      </div>
      </Router>

    </>
  );
}

export default App;
