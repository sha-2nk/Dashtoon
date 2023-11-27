import React, { useState } from 'react'

import logo from "../Images/749815-200.png"
import { easeOut, motion } from "framer-motion";
import { DrawerDefault } from './Drawer';

import TempDialog from './Dialog';
// import { IconButton } from "@material-tailwind/react";
// import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';


const Navbar = () => {

    const click = () => {
        window.open('https://github.com/JKP-2001/Dashtoon-Assignment', '_blank');
    }


    return (

        <div 
         className="flex overflow-hidden bg-white h-[80px] px-1 sm:px-16 justify-center  items-center justify-between border-b-[1px] border-gray-300 shadow-lg">
            <motion.div  initial={{ opacity: 0 }}
        animate={{ opacity: 3 }} transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 1 }
        }}
            className='flex transition delay-150 hover:scale-110 hover:cursor-pointer  items-center'>
                <img src={logo} className='w-10 sm:w-14 h-10 sm:h-14' alt="" />
                <div className=' ml-2 text-2xl sm:text-2xl font-extrabold  items-center font-custom'>
                    ImagiCraft AI
                </div>
            </motion.div>

            <motion.div animate={{ x: 0,opacity:1}} initial={{ x: 300,opacity:0 }} transition={{ duration: 1 }}
            className='flex items-center justify-between space-x-7'>

                <button className="hidden sm:block transition delay-150 duration-300 ease-in-out bg-blue-700 text-sm sm:text-base px-2 py-2 rounded-md text-white hover:scale-110 font-handwritten2" onClick={click}>Project Repo</button>
            </motion.div>

            <motion.div animate={{ x: 0,opacity:1}} initial={{ x: 50,opacity:0 }} transition={{ duration: 0.5 }} className='block sm:hidden mr-2 hover:cursor-pointer'>
                <TempDialog />
            </motion.div>
            
        </div>
    )
}

export default Navbar