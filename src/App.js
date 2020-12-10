import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [date, setDate] = useState(((new Date() - new Date(1998,10,16)) / 31536000000).toFixed(9))

  useEffect(() => {
    function yearsOld() {
      setDate(((new Date() - new Date(1998,10,16)) / 31536000000).toFixed(9))
      setTimeout(yearsOld, 100)
    }

    yearsOld();
  }, [])

  return (
    <div className="App" style={{padding: '36px'}}>
      <center>
        <h1>BRANDON PESSMAN</h1>
        <div style={{maxWidth: '550px'}}>
          <h2>I'm a {date} year old Developer who uses <span href="#" className="middle" style={{color: '#90c53f'}}>React</span>, <span href="#" className="middle" style={{color: '#5ec9f8'}}>Node.JS</span>, <span href="#" className="middle" style={{color: '#f16529'}}>HTML/CSS/JS</span>, and <span href="#" className="middle" style={{color: '#ffdd48'}}>more</span>.</h2>
          <h2>Checkout my <span href="#" className="middle" style={{color: '#949494'}}>Github</span>.</h2>
          <h2>Last seen working on <span href="#" className="middle" style={{color: '#949494'}}>Twitch and Discord Bots</span>.</h2>
          <h2>Want to make something together? <span href="#" className="middle" style={{color: '#949494'}}>Email me</span>!</h2>
        </div>
      </center>
    </div>
  );
}

export default App;
