import { useState, useEffect } from 'react'

function App() {

  // States
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Effects
  useEffect(() => {

    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      console.log('clean up')
      window.removeEventListener('pointermove', handleMove);
    }
    
  }, [enabled]);

  return (
    <>
      <h1>Mouse Follower Project</h1>
      <div className="dot" style={{transform: `translate(${position.x}px, ${position.y}px)`}}></div>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Deactivate' : 'Activate'} the mouse follower!</button>
    </>
  )
}

export default App
