import React, { useState } from 'react'

import { motion } from "framer-motion";
import SearchBar from './SearchBar';
import TextForm from './TextForm';
import { useSelector } from 'react-redux';
import showToast from '../Utils/showToast';

const TopText = () => {
    const [open, setOpen] = useState(false);

    const imageState = useSelector((state) => state.image);

    const handleOpen = () => {
        if(imageState.data.size<=10){
            showToast({
                msg:"You have reached the maximum limit of 10 images",
                type:"error",
                duration:3000
            })
        }else{
            setOpen(!open)
        }
    };

    

    return (
        <div className='overflow-hidden'>
            <motion.div  
                className='pb-10 bg-back2 w-full  h-[600px] xl:h-[500px]  transition-all duration-500 ease-in-out transform bg-center bg-cover min-h-[400px] hover:scale-[1.03]'>

                <motion.div initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
                className="entry_message mx-10 pt-16 sm:pt-28 ">

                    <div className='text-2xl sm:text-5xl text-center font-handwritten2 text-white'>
                        Welcome to AI Image Generator,
                    </div>
                    <div className='text-2xl sm:text-5xl text-center font-handwritten2 text-white'>
                        where creativity meets artificial intelligence!
                    </div>

                    <div className='text-center  text-white sm:mx-24 md:mx-36 xl:mx-64  mt-6  font-handwritten2'>
                        Unleash the power of cutting-edge technology to transform your ideas into stunning visuals. Our user-friendly platform seamlessly merges the world of art and artificial intelligence to bring your imagination to life.
                    </div>

                </motion.div>
                <div className='w-full text-center mt-20'>
                    <TextForm open={open} setOpen={setOpen} handleOpen={handleOpen} />
                </div>
            </motion.div>

        </div>
    )
}

export default TopText