import { useEffect, useState } from 'react'
import './App.css'

function App() {


  return (
    <>
        <Header/>
        <Time/>
        <Pomodoro/>
        <Settings/>
    </>
  )
}

function Header() {
  return(
    <>
      <h1>pomodoro</h1>
    </>
  )
}

function Time() {
  return(
    <>
      <div className="time">
        <a href='#'>pomodoro</a>
        <a href="#">short break</a>
        <a href="#">long break</a>
      </div>
    </>
  )
}

function Pomodoro() {
  const [timer, setTimer] = useState("01:00");
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    let [minutes, seconds] = timer.split(":").map(Number);
    if(running) {
      console.log("basladi");
      interval = setInterval(()=> {
        console.log("calisiyor");
        if(seconds === 0) {
          if(seconds === 0 && minutes === 0) {
            clearInterval(interval);
            setRunning(false);
            return;
            setTimer("00:00");
          }
          seconds = 59;
          minutes --;
        } else {
          seconds --;
        }
        setTimer(`${minutes} : ${seconds}`)
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    }
  }, [running, timer]);

  function handleRunnig() {
    setRunning(!running);
  }

  return(
    <>
      <div className="pomodoro">
        <span>{timer}</span>
        <button onClick={handleRunnig}>{running ? "pause" : "start"}</button>
      </div>
    </>
  )
}

function Settings() {
  const [showModal, setShowModal] = useState(false);
  return(
    <>
        <div className="settings">
         <button className='settingsbtn' onClick={() => setShowModal(true)}><img src="./Shape 2.png" alt="Settings" /></button>
         <Modal show={showModal} onClose={() => setShowModal(false)} />
        </div>
    </>
  )
}

function Modal ({ show, onClose }) {
  if (!show) return null;
  return (
    <div className='modal'>
        <div className="modalheader">
          <h5>Settings</h5>
          <button onClick={onClose}><img src="/Group 5.png" alt="" /></button>
        </div>
          <hr />
        <div className="modaltime">
          <h6>TIME (MINUTES)</h6>
          <div className="sure">
            <form>
                <p>pomodoro
                <input value={25} type="number" /></p>
                <p>short break
                <input value={5} type="number" /></p>
                <p>long break
                <input value={15} type="number" /></p>
            </form>
          </div>
        </div>
        <hr />
        <div className="font">
          <h6>FONT</h6>
          <div className="yazı">
            <button>Aa</button>
            <button>Aa</button>
            <button>Aa</button>
          </div>
        </div>
        <hr />
        <div className="color">
          <h6>COLOR</h6>
            <div className="renk">
              <button></button>
              <button></button>
              <button></button>
            </div>
        </div>
        <div className="btn">
          <button>Apply</button>
        </div>
    </div>
  )
}

export default App
