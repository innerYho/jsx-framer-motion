
import './App.css'
import { motion, useTransform, useMotionValue } from 'framer-motion'
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const variants = {
    odd: {
      backgroundColor: '#222',
      color: '#ccc',
      scale: 0.8,
      transition: { duration: 2 }
    },
    even: {
      backgroundColor: '#bbb',
      color: '#000',
      scale: 1.1,
      transition: { duration: 1 }
    }
  }

  const y = useMotionValue(0)
  const backgroundColor = useTransform(y, [-100, 0, 100], ['#fff', '#999', '#000'])
  return (
    <div>
      {/* <motion.div className='box'
        initial={{ scale: 1 }} transition={{ duration: 2 }}
        animate={{ scale: 2, rotate: 45 }} ></motion.div> */}

      {/* <motion.h1
        initial={{ color: '#fff' }}
        transition={{ duration: 3 }}
        animate={{ y: 100, color: '#000' }}>Hello World</motion.h1> */}

      {/* <motion.div className='box' style={{ marginTop: '200px' }}
        initial={{ scale: 1 }} transition={{ duration: 2 }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"]
        }} ></motion.div>


      <motion.div className='box' style={{ marginTop: '200px' }}
        initial={{ scale: 1 }} transition={{ duration: 2 }}
        animate={{
          scale: [1, 2],
          rotate: [0, 90],
          borderRadius: ["20%", "50%"]
        }} ></motion.div> */}


      {/* counter    */}
      {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <motion.div className='box' variants={variants}
          animate={counter % 2 === 0 ? 'even' : 'odd'} >
          {counter}
        </motion.div>
        <button onClick={() => setCounter(counter => counter + 1)}>Dale</button>
      </div> */}

      {/* drag and drog */}
      {/* <motion.div className='box'
        drag='x'
        dragConstraints={{ //movimiento máximo permitido
          top: -50, left: -50, right: 50, bottom: 50
        }}></motion.div>
      <motion.div className='box' drag dragMomentum={false}>No dragMomentum</motion.div> */}

      <motion.div
        style={{ backgroundColor, y }}
        className='box' drag='y'
        dragConstraints={{
          top: -100,
          bottom: 100
        }}
      />

    </div>
  )
}

export default App
