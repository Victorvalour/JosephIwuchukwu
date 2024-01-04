import { React, useState } from 'react'
import { useCycle, motion } from 'framer-motion'
import NavModal from './NavModal'

const Navbar = () => {
    const [mobileNav, toggleMobileNav] = useCycle(false, true);
    const [showModal, setShowModal] = useState(false)
    const popModal = () => {
        toggleMobileNav()

       !showModal ? setShowModal(true) : setShowModal(false)
    }
  return (
    
    <div className='absolute right-3 top-2'>
                <div className='flex justify-end items-center w-full   h-20  lg:h-24'>

<div className='hidden text-blue-900 italic space-x-3 text-xl md:flex xl:text-2xl xl:mr-32 2xl:mr-72 xl:space-x-5 2xl:space-x-9'>
    <p>Home | </p>
    <p>About Us | </p>
    <p>Our Services | </p>
    <p>Contact Us | </p>
    <p></p>
</div>

        <motion.button 
        animate={mobileNav ? "open" : "closed"}
        onClick= {popModal}
        className="flex flex-col space-y-1.5 mr-3 bg-blue-800 opacity-100 w-fit h-fit py-2 rounded-lg px-2 md:hidden"
        >
            <motion.span variants={{
                closed: { rotate:0, y: 0},
                open: { rotate:45, y:8},
            }} 
            className="w-10 h-[4px] bg-white  block rounded-sm"></motion.span>
            <motion.span variants={{
                closed: { opacity: 1},
                open: { opacity: 0},
            }} 
            className="w-10 h-[4px] bg-white  block rounded-sm"></motion.span>
            <motion.span  variants={{
                closed: { rotate: 0, y:0},
                open: { rotate: -45, y:-8},
            }} 
             className="w-10 h-[4px] bg-white  block rounded-sm"></motion.span>
        </motion.button>
        </div>
        <NavModal isVisible={showModal} onClose={() => {setShowModal(false) 
        toggleMobileNav()} }/>
    </div>
  )
}

export default Navbar