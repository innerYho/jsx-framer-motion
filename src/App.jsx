
import './App.css'
import { motion } from 'framer-motion'
function App() {

  return (
    <div>
      <motion.div className='box'
        initial={{ scale: 1 }} transition={{ duration: 2 }}
        animate={{ scale: 2, rotate: 45 }} ></motion.div>

      {/* <motion.h1
        initial={{ color: '#fff' }}
        transition={{ duration: 3 }}
        animate={{ y: 100, color: '#000' }}>Hello World</motion.h1> */}

      <motion.div className='box' style={{ marginTop: '200px' }}
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
        }} ></motion.div>
    </div>
  )
}

export default App
