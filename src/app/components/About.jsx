'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from './components/varients';

const about = () => {
  return (
    <div id='About' className='w-full h-full lg:h-screen '>
          <div className='flex flex-col-reverse py-24 lg:py-0 lg:flex-row container items-center h-full lg:justify-around justify-center  mx-auto'>
            <div className='flex flex-col'>
            <motion.h4 variants={fadeIn('down',0.4)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-white text-4xl font-bold text-center lg:text-left lg:text-5xl mx-1 lg:mx-0 mt-14 lg:mt-4 max-w-lg'>We Provide You <span className='text-orange-600'>Super Quality</span> Shoes</motion.h4>
                <motion.p variants={fadeIn('down',0.6)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-gray-500 font-medium max-w-lg text-center lg:text-left mt-5 mx-3 lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aperiam ad cupiditate dolorem distinctio nam sapiente nihil accusamus iure quas officiis iste alias, dolor illum odio suscipit quos</motion.p>
                <motion.p variants={fadeIn('down',0.6)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-gray-500 font-medium max-w-lg text-center lg:text-left mt-3 mx-3 lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aperiam ad cupiditate dolorem distinctio nam sapiente nihil accusamus iure quas officiis iste alias, dolor illum odio suscipit quos</motion.p>
                <motion.button variants={fadeIn('down',0.7)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='rounded-3xl text-white flex justify-center items-center gap-3 bg-orange-700 mt-5 text-xl font-medium w-[200px] mx-auto lg:mx-0 py-3'>View Detail</motion.button>
              
            </div>
            <div className=''>
                <img src='/images/about.jpg' className='lg:w-[400px] w-11/12 mx-auto h-full lg:scale-125 object-scale-down rounded-3xl'></img>
            </div>
          </div>
    
    </div>
  )
}

export default about