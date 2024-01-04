import React from 'react'
import { useState, useEffect } from 'react'
import GreenBg from '../images/GreenBg.jpg'
import Hero1 from '../images/Hero1.jpg'
import JoeFlyer from '../images/JoeFlyer.jpg'
import HappyImg from '../images/happy.jpg'
import { motion, useAnimate, stagger, } from "framer-motion"
import Navbar from '../components/Navbar'
import SignUp from '../components/SignUp'


const Homepage = () => {

  const [showModal, setShowModal] = useState(false)
    const popRegistrationForm = () => {


       !showModal ? setShowModal(true) : setShowModal(false)
    }
  return (
    <div className=''>
        <div className="relative bg-gradient-to-tr from-green-500 to-green-900 h-24 w-full  lg:flex lg:space-x-14 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.73)]">

<img src={GreenBg} alt="" className='w-full h-full object-cover absolute mix-blend-overlay opacity-90'/>
<Navbar />
        </div>

        <motion.div className="relative flex flex-col justify-center bg-gradient-to-tr from-black to-gray-600 h-[550px] w-full  lg:flex lg:space-x-14">
        <img src={Hero1} alt="" className='w-full h-full object-cover absolute mix-blend-overlay opacity-80'/>
        <div className='absolute top-14 left-4'>
    <p className=' w-[80%] text-4xl font-gothic text-white mb-4'>UNLOCK YOU CHALLENGE (UYC) <br />2.0</p>

    <p className='text-2xl text-white w-[80%]'>CRUSH YOUR INNER DEMONS PERMANENTLY AND UNLEASH YOUR HIDDEN POTENTIAL</p>
    </div>
    <button onClick={popRegistrationForm}
     className='absolute self-center bottom-14 overflow-hidden active:scale-125 text-white bg-[#25A80F] rounded-xl text-3xl px-6 '><motion.span 
    initial = {{ rotate: 24, x : 0, y: -5}}
    animate = {{ x : "100vw"}}
    transition={{ duration: 1, repeat: Infinity, repeatDelay:3 }}

    className='absolute left-0 w-1.5 opacity-60 h-24 bg-white'></motion.span> <p className='my-2'>Click to Join UYC 2.0!</p></button>

<SignUp isVisible={showModal} onClose={() => {setShowModal(false) 
       } }/> 
        </motion.div>

        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='py-7 px-3'>
          <motion.img src={JoeFlyer} alt=""
           initial={{
            opacity: 0,
            y: 50
          }}
         whileInView={{ opacity: 1,
          y: 0, // Slide in to its original position
          transition: {
            duration: 2 }
          }}
        viewport={{ once: false }}
          />
        </motion.div>

        <div className='px-4 '> 
        <p className='text-center font-spaceGrotesk text-4xl'>What do you hope to achieve in 2024?</p>

      <motion.div className='mt-4 bg-slate-100 px-10 py-4 mb-12 rounded-lg border-[#25A80F] border-2 border-opacity-30'
        initial={{
          opacity: 0,
          y: 50
        }}
       whileInView={{ opacity: 1,
        y: 0, // Slide in to its original position
        transition: {
          duration: 1 }
        }}
      viewport={{ once: false }}
      >
        <motion.ul 
        initial={{
          opacity: 0,
          y: 50
        }}
        whileInView={{ opacity: 1,
          y: 0, // Slide in to its original position
          transition: {
            duration: 1 }
          }}
        viewport={{ once: false }}
        
        className='text-2xl font-medium list-disc'>
          <motion.li>More Impact!</motion.li>
          <motion.li>More Influence!</motion.li>
          <motion.li>More Visibility!</motion.li>
          <motion.li>More Alignment to Your Purpose!</motion.li>
          <li>More Money!</li>
        </motion.ul>
      </motion.div>

      <motion.div className=' flex flex-col mt-4 bg-slate-100 px-5 py-4 rounded-lg font-spaceMono shadow-[0px_0px_5px_0px_rgba(13,184,40,0.75)]'
        initial={{
          opacity: 0,
          y: 50
        }}
       whileInView={{ opacity: 1,
        y: 0, // Slide in to its original position
        transition: {
          duration: 1 }
        }}
      viewport={{ once: false }}
      >
<div className='flex mb-4'>
        <motion.p 
        initial={{
          opacity: 0,
          y: 50
        }}
        whileInView={{ opacity: 1,
          y: 0, // Slide in to its original position
          transition: {
            duration: 1 }
          }}
        viewport={{ once: false }}
        
        className='text-xl list-disc mb-5 leading-6 mr-2'>
          Whichever it is, you are not the first to have such dreams in your lifetime.
          
        </motion.p>

        <img src={HappyImg} alt="" className='w-[40%] rounded-xl h-[100%] rotate-12' />

        </div>

        <motion.p 
        initial={{
          opacity: 0,
          y: 50
        }}
        whileInView={{ opacity: 1,
          y: 0, // Slide in to its original position
          transition: {
            duration: 1 }
          }}
        viewport={{ once: false }}
        
        className='text-xl list-disc leading-6'>
          There've been so many who had similar dreams. But these dreams remained with the dreamer and died there, unfortunately.

          </motion.p>

          <motion.p 
        initial={{
          opacity: 0,
          y: 50
        }}
        whileInView={{ opacity: 1,
          y: 0, // Slide in to its original position
          transition: {
            duration: 1 }
          }}
        viewport={{ once: false }}
        
        className='text-xl list-disc mt-4 leading-6'>
          Just like them, you are losing touch with your uniqueness because of the crippling effects of any/all of the following:

        </motion.p>
      </motion.div>
        </div>
    </div>
  )
}

export default Homepage