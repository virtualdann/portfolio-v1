import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Tools from './components/Tools'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Reveal from './components/Reveal'

import { useEffect, useState, useRef } from 'react';
import { motion, transform, useInView ,useAnimation, useScroll } from 'framer-motion';

function App() {

  const [visible, setVisible] = useState(false);

  const bottomDiv = useRef();
  const isInView = useInView(bottomDiv);

  return (
    <div className='flex flex-col place-items-center relative overflow-hidden'> 
        <Nav visible={visible} setVisible={setVisible} />
        <Hero />
        <Projects />
        <Contact visible={visible} setVisible={setVisible} isInView={isInView} />
        <div ref={bottomDiv} className='h-[100px]'></div>
    </div>
  )
}

export default App
