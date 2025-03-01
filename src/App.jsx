import './App.css'
import Card from './components/Card'
import games from './data.json'
import { useState, useEffect } from 'react'

function App() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          setIsSmallScreen(window.innerWidth <= 600);
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    
    <div>
      {!isSmallScreen && (
        <div className='background'>
        <div className='decor1'>
          <img src='/SmallLeaveDark.png' className='smallLeaveDark1'/>
          <img src='/BigCircle.png' className='bigCircle1'/>
          <img src='/Circle Small.png' className='smallCircle1'/>
          <img src='/SenseBig.png' className='senseBig2'/>
          <img src='/SenseSmall.png' className='senseSmall1'/>
          <img src='/StarLeftSide.png' className='starLeftSide'/>
        </div>

        <div className='SideRightTop'>
          <img src='/StarUpperRight.png' className='starRightSide'/>
        </div>

        <div className='Bottom-container'>
          <div className='Bottom'>
            <img src='/BigCircle.png' className='bigCircleBottom'/>
            <img src='/Circle Small.png' className='smallCircleBottom'/>
            <img src='/SenseBig.png' className='senseBigBottom'/>
            <img src='/SenseSmall.png' className='senseSmallBtoom'/>
            <img src='/StarLeftDown.png' className='starBottom'/>
          </div>
        </div>
        
    </div>
      )}
      <div className='header'>
        <h1>Badass Games</h1>
      </div>
      <div className='card-container'>
        {games.map((game, index) => (
          <Card key={index} content={game} />
        ))}
      </div>
    </div>
  )
}

export default App
