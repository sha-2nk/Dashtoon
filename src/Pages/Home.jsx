import React, { useRef } from 'react'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import Images from '../Components/Images'
import { useSelector } from 'react-redux'

import { motion, useInView } from "framer-motion";
import Drawer from '../Components/Drawer'
import TopText from '../Components/TopText'

import img1 from "../Images/Static/1.png"
import img2 from "../Images/Static/2.jpg"
import img3 from "../Images/Static/3.jpg"
import img4 from "../Images/Static/4.jpg"
import img5 from "../Images/Static/5.png"
import img6 from "../Images/Static/6.jpg"
import { Note } from '../Components/Note'





const Home = () => {

  const imageState = useSelector((state) => state.image);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 3 }} transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 1 }
        }} className='overflow-hidden'>
        <div className="navbar overflow-hidden">
          <Navbar />
        </div>

        <div>
          <TopText />
        </div>

        {imageState.data.length > 0 ?
          <motion.div>
            <div className='w-screen text-center font-bold text-2xl px-2 sm:text-4xl text-white font-handwritten2 pt-8' >
              Your Comic
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xl:mx-16 pt-5 pb-7">
              {imageState.data.map((url, i) => {
                return <Images imgurl={url} key={i} typeo={"nstatic"}/>
              })}

            </div>
          </motion.div>
          : null}


        {/* Static Images */}

        <motion.div 
        className='text-center' >


          <motion.div nitial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          className='w-screen text-center font-bold text-2xl px-2 sm:text-4xl text-white font-handwritten2 pt-10' >
            Explore AI Generated Images From Our Gallery
          </motion.div>

          <motion.div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 xl:mx-16 pt-5 ">

            <Images imgurl={img1} typeo={"static"}/>
            <Images imgurl={img5} typeo={"static"}/>

            <Images imgurl={img6} typeo={"static"}/>

            <Images imgurl={img2} typeo={"static"}/>
            <Images imgurl={img3} typeo={"static"}/>

            <Images imgurl={img4} typeo={"static"}/>

            


          </motion.div>

         

        </motion.div>
        
       

      </motion.div>

    </>
  )
}

export default Home