'use client'
import { motion } from 'framer-motion';
import { fadeIn } from './components/varients';
import { BsFillStarFill } from "react-icons/bs";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination,Mousewheel } from 'swiper/modules';

function Saycostomer() {
  const [state,setState]=useState([{
    name:'Mobin Seyfolahi',
  discr:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis necessitatibus reprehenderit corrupti dolor alias consequatur, sint magni praesentium sed quasi aliquid obcaecati? Ipsum libero accusamus dolorem, enim nam ullam reprehenderit!'
    ,rate:'4.5',
    img:''
},{
  name:'Alireza Paridokht',
discr:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis necessitatibus reprehenderit corrupti dolor alias consequatur, sint magni praesentium sed quasi aliquid obcaecati? Ipsum libero accusamus dolorem, enim nam ullam reprehenderit!'
  ,rate:'3.5',
  img:''
},{
  name:'Mohammad Hossein Habibpoor',
discr:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis necessitatibus reprehenderit corrupti dolor alias consequatur, sint magni praesentium sed quasi aliquid obcaecati? Ipsum libero accusamus dolorem, enim nam ullam reprehenderit!'
  ,rate:'5.0',
  img:''
},{
  name:'Matin Seyfi',
discr:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis necessitatibus reprehenderit corrupti dolor alias consequatur, sint magni praesentium sed quasi aliquid obcaecati? Ipsum libero accusamus dolorem, enim nam ullam reprehenderit!'
  ,rate:'2.5',
  img:''
},{
  name:'Hossein Moazez',
discr:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis necessitatibus reprehenderit corrupti dolor alias consequatur, sint magni praesentium sed quasi aliquid obcaecati? Ipsum libero accusamus dolorem, enim nam ullam reprehenderit!'
  ,rate:'4.5',
  img:''
}])
  return (
    <div id='Costomer' className='w-full lg:h-screen h-full '>
                <div className="flex justify-center items-center flex-col h-full">
                <motion.h4 variants={fadeIn('down',0.4)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-white text-4xl font-bold text-center lg:text-left lg:text-5xl mt-14 lg:mt-4'>What Our <span className='text-orange-600'>Customers</span> Says?</motion.h4>
                <motion.p variants={fadeIn('down',0.6)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-gray-500 font-medium max-w-lg text-center mt-5 mx-3 lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aperiam ad cupiditate dolorem distinctio nam sapiente nihil accusamus iure quas officiis iste alias, dolor illum odio suscipit quos</motion.p>
                <div className='container mt-20'>
                <Swiper 
                 
                      breakpoints={{
                         420: {
                              
                              slidesPerView: 1,
                            },
            // when window width is >= 640px
            740: {
              
              slidesPerView: 2,
            },
            // when window width is >= 768px
           
            1000: {
              
              
              slidesPerView: 3,
            },
            2000: {
              
              
              slidesPerView: 4,
            },
           
            
          }
      }
      spaceBetween={20}
      
      direction={'horizontal'}
      scrollbar={true}
      
     
      mousewheel={true}
      modules={[Pagination,Mousewheel]}
      
      className='text-white mySwiper  flex items-center    mx-auto' style={{width:'90%',margin:'auto'}}
        >
                {state.map(item=><SwiperSlide style={{height:"430px",width:"100%"}} className='p-8 relative    hover:rotate-2 ease-in-out duration-200   rounded-lg  bg-slate-700 backdrop-blur-lg  drop-shadow-xl'>
                      
                      <motion.img src={`/images/${item.img}`} className='w-[100px] h-[100px] mx-auto rounded-full '></motion.img>
                      <motion.p variants={fadeIn('down',0.4)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-sm text-gray-500 text-center mt-5 '>{item.discr}</motion.p>
                      <motion.div variants={fadeIn('down',0.4)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}}  className='flex justify-center items-center gap-2 mt-4'>
                        <BsFillStarFill className='text-3xl text-orange-600'></BsFillStarFill>
                        <div className='text-gray-500 text-xl  font-bold'>{item.rate}</div>
                      </motion.div>
                      <motion.h6 variants={fadeIn('down',0.4)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-center text-2xl font-bold text-white mt-2'>{item.name}</motion.h6>
               
          </SwiperSlide>)}
        
                
               
               </Swiper>
                </div>
                </div>
    
    </div>
  )
}

export default Saycostomer