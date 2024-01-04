import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

//import { useNavigate } from 'react-router';

const SignUp = ({isVisible, onClose}) => {

  
   // const navigate = useNavigate();

    if (!isVisible) return null;
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') {onClose()}
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            window.location.href="https://wa.link/0jkvc2"

            toast.success('Registration Successful', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            
        }
    
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center z-10 justify-center' id="wrapper" onClick={handleClose}
   >

        <motion.div className='fixed flex flex-col bg-white w-[75%] gap-10  pt-4 px-4 mx-auto items-center rounded-lg'
         initial={{ y : -180 }}
         animate={{ y : 0 }}
         transition={{ type: "spring" }}
         exit={{ y : -180 }}
        >

<motion.button 
        animate={"open"}
        onClick= {() => onClose()}
        className="flex flex-col self-end space-y-1.5 mr-3 bg-blue-700 w-fit h-fit py-2 rounded-lg px-2 md:hidden"
        >
            <motion.span variants={{
                closed: { rotate:0, y: 0},
                open: { rotate:45, y:8},
            }} 
            className="w-8 h-[2px] bg-white  block rounded-sm"></motion.span>
            <motion.span variants={{
                closed: { opacity: 1},
                open: { opacity: 0},
            }} 
            className="w-8 h-[2px] bg-white  block rounded-sm"></motion.span>
            <motion.span  variants={{
                closed: { rotate: 0, y:0},
                open: { rotate: -45, y:-8},
            }} 
             className="w-8 h-[2px] bg-white  block rounded-sm"></motion.span>
        </motion.button>

        <div className='w-[80%] flex flex-col'>


          <div className='mb-5 self-center text-lg'><p>Fill the form to register</p></div>
          
             
<form action="" className='flex flex-col justify-center' onSubmit={handleSubmit}>
<input type="text"  className='bg-slate-100 h-8 pl-2 mb-3' placeholder='First name'/>
<input type="text" className='bg-slate-100 h-8 pl-2 mb-3' placeholder='Last name'/>
<input type="text" className='bg-slate-100 h-8 pl-2 mb-3' placeholder='Email address'/>

<button  href='https://flutterwave.com/pay/edpgyxh1eoqp' type='submit'
    className='bg-blue-700 mt-4 h-10 text-white text-center text-xl mb-5'>Submit</button>


</form>


<ToastContainer />

                
    </div>

    </motion.div>



          
            
          
        </div>
  )
  }

export default SignUp