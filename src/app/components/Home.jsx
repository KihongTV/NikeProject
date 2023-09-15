'use client'
import React, { useState } from 'react'
import Navbar from './components/navbar'
import { BsBasketFill } from "react-icons/bs";
import { motion } from 'framer-motion';
import { fadeIn } from './components/varients';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../../app/header.css'



const Home = () => {
    const [items,setItems]=useState([{
        id:1,
        name:'Nike air Force 1',
        price:110,
        in:'stock',
        like:true,
        img:'airforce1.png',
        offer:true,
        offercount:'99'
    }
    ,
    {
        id:2,
        name:'Nike air Jordan 2',
        price:200,
        in:'stock',
        like:true,
        img:'airforce2.png',
        offer:true,
        offercount:'20'
    },
    {
        id:3,
        name:'Nike air Force Jordan',
        price:250,
        in:'stock',
        like:true,
        img:'airforce3.png',  offer:true,
        offercount:'20'
    },
   {
        id:4,
        name:'Jordan 2020 pro',
        price:410,
        in:'stock',
        like:true,
        img:'2020pro.png' , offer:true,
        offercount:'20'
    }

])
const likehandler=(id)=>{
    const item= items.find(itemss=>itemss.id==id)
    
    item.like=!item.like
    setItems([...items])
    
   
}
  return (
   <div id='home' className='w-full h-full lg:h-screen '>
     <Navbar></Navbar>
        <div className='flex flex-col-reverse h-full lg:flex-row justify-between container mx-auto items-center'>
            <div className="flex flex-col text-white text-center lg:text-left">
                <motion.p variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-orange-500 hidden  mb-2 italic font-medium text-xs gap-2 lg:flex items-center'>All of Items Are Orginall<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 48 48">
                <path fill="#F4511E" d="M6,16c-3.1,3.7-6,7.6-6,11.1c0,2,1.7,4.9,5.9,4.9c2.3,0,4.5-0.9,6.3-1.6c3-1.2,35.7-15.1,35.7-15.1c0.3-0.2,0.3-0.4-0.1-0.3c-0.2,0-35.6,9.4-35.6,9.4c-0.7,0.2-1.4,0.3-2.1,0.3c-3.1,0-5.1-1.5-5.1-4.7C4.9,18.7,5.1,17.8,6,16L6,16z"></path>
                </svg></motion.p>
                <motion.h2 variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='font-bold text-4xl max-w-lg lg:text-6xl mx-3 mt-3 lg:mt-0 lg:mx-0'>The New Arrival <span className='text-orange-600'>Nike</span> Shoes</motion.h2>
                <motion.p variants={fadeIn('down',0.6)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-gray-500 font-medium max-w-lg mt-3 mx-3 lg:mx-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, a? Commodi, pariatur</motion.p>
                <motion.button variants={fadeIn('down',0.7)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='rounded-3xl text-white flex justify-center items-center gap-3 bg-orange-700 mt-5 text-xl font-medium w-[250px] mx-auto lg:mx-0 py-3'>Shop Now<BsBasketFill></BsBasketFill></motion.button>
                <div  className='flex gap-8 pb-6 lg:pb-0 mt-12 text-center justify-center lg:justify-start items-center' >
                    <motion.div variants={fadeIn('down',0.8)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className="flex flex-col">
                        <h2 className='font-extrabold text-3xl'>1K+</h2>
                        <p className='text-gray-500'>Brands</p>
                    </motion.div>
                    <motion.div variants={fadeIn('down',0.9)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className="flex flex-col">
                        <h2 className='font-extrabold text-3xl'>500+</h2>
                        <p className='text-gray-500'>Shops</p>
                    </motion.div>
                    <motion.div variants={fadeIn('down',1.0)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className="flex flex-col">
                        <h2 className='font-extrabold text-3xl'>250K+</h2>
                        <p className='text-gray-500'>Views In mount</p>
                    </motion.div>
                </div>
            </div>
            <Swiper
        pagination={true} modules={[Pagination]}
      >
        {items.map(item=>
            <SwiperSlide  key={item.id} className='bg-slate-700  p-4 lg:p-0 mt-5 lg:mt-0 rounded-3xl relative'>
              {item.offer?<motion.div variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} style={{translateX:'50%'}}  className='absolute top-1 w-[100px] h-[60px]  flex items-center justify-center right-1/2   rounded-3xl bg-slate-900 font-bold text-orange-600'>OFF {item.offercount}%</motion.div>:""}
            <div    class="flex flex-col ">
            <div class=" w-full mx-auto">
           <motion.img variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} src={`/images/${item.img}`} alt="" class="  w-full lg:h-[400px] lg:[w-400px] h-[200px] object-scale-down" loading="lazy" />
         </div>
         <form class="flex-auto md:p-4 sm:p-2 lg:p-6 ">
           <div class="flex flex-wrap">
             <motion.h1 variants={fadeIn('down',0.6)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} class="flex-auto text-2xl font-bold text-slate-300">
               {item.name}
             </motion.h1>
             <div className='flex flex-col'>
             <motion.div variants={fadeIn('down',0.7)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}}  class={`${item.offer?'line-through':''} text-2xl font-semibold text-slate-300`}>
               ${item.price}.00
             </motion.div>
             {item.offer?<motion.div variants={fadeIn('down',0.7)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}}  class={`text-orange-600 text-2xl font-semibold `}>
               ${item.price/100*(100-item.offercount)}
             </motion.div>:''}
             </div>
             <motion.div variants={fadeIn('down',0.7)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} class="w-full flex-none text-sm font-medium text-slate-400 mt-2">
               In {item.in}
             </motion.div>
           </div>
           <motion.div variants={fadeIn('down',0.8)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
             <div class="space-x-2 font-semibold flex text-sm">
               <label>
                 <input class="sr-only peer" name="size" type="radio" value="xs"  />
                 <div  class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 peer-checked:font-semibold peer-checked:bg-slate-800 peer-checked:text-white">
                   39
                 </div>
               </label>
               <label>
                 <input class="sr-only peer" name="size" type="radio" value="s" />
                 <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 peer-checked:font-semibold peer-checked:bg-slate-800 peer-checked:text-white">
                   40
                 </div>
               </label>
               <label>
                 <input class="sr-only peer" name="size" type="radio" value="m" />
                 <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 peer-checked:font-semibold peer-checked:bg-slate-800 peer-checked:text-white">
                   41
                 </div>
               </label>
               <label>
                 <input class="sr-only peer" name="size" type="radio" value="l" />
                 <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 peer-checked:font-semibold peer-checked:bg-slate-800 peer-checked:text-white">
                   42
                 </div>
               </label>
               <label>
                 <input class="sr-only peer" name="size" type="radio" value="xl" />
                 <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 peer-checked:font-semibold peer-checked:bg-slate-800 peer-checked:text-white">
                   43
                 </div>
               </label>
             </div>
           </motion.div>
           <motion.div variants={fadeIn('down',0.8)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} class="flex space-x-4 mb-6 text-sm font-medium">
             <div class="flex-auto flex space-x-4">
               <button class="h-10 px-6 font-semibold rounded-md bg-orange-700 shadow-lg shadow-black text-white w-full" type="submit">
                 Buy now
               </button>
               
             </div>
             <button class={`flex-none flex items-center justify-center w-9 h-9 rounded-md ${item.like==true?'text-slate-300':'text-red-500 bg-slate-800 border-gray-800'} border shadow-black shadow-md`} onClick={()=>likehandler(item.id)} type="button" aria-label="Like">
               <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
               </svg>
             </button>
           </motion.div>
           
         </form>
    </div>
            </SwiperSlide>
        )}
   

      </Swiper>
            
        </div>
   </div>
  )
}

export default Home