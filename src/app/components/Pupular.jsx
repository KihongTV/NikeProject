'use client'
import { useState } from "react"
import { motion } from 'framer-motion';
import { fadeIn } from './components/varients';

const Pupular = () => {
  const [items,setItems]=useState([{
    id:1,
    name:'air Force 1',
    price:110,
    in:'stock',
    like:true,
    img:'airforce1.png'
}
,
{
    id:2,
    name:'air Jordan 2',
    price:200,
    in:'stock',
    like:true,
    img:'airforce2.png'
},
{
    id:3,
    name:'air Force Jordan',
    price:250,
    in:'stock',
    like:true,
    img:'airforce3.png'
},
{
    id:4,
    name:'Jordan 2020 pro',
    price:410,
    in:'stock',
    like:true,
    img:'2020pro.png'
}

])
const likehandler=(id)=>{
  const item= items.find(itemss=>itemss.id==id)
  
  item.like=!item.like
  setItems([...items])
  
 
}
  return (
    <div id='Pupular' className='w-full h-full 2xl:h-screen pt-12   lg:pt-36'>
      <div className=' w-11/12 lg:w-10/12 mx-auto flex flex-col '>
          <motion.h4 variants={fadeIn('down',0.3)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-white text-4xl font-medium text-center lg:text-left lg:text-5xl'>Our <span className='text-orange-600'>Popular</span> Products</motion.h4>
          <motion.p variants={fadeIn('down',0.3)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-gray-500 text-sm font-bold text-center lg:text-left mt-5 max-w-lg lg:mx-0 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates amet adipisci fugiat, quasi est harum atque tenetur obcaecati.</motion.p>
      </div>
      <div className='flex flex-wrap justify-center mt-12  gap-3'>
      {items.map(item=>
         <div className="bg-slate-700  shadow-lg shadow-black p-2 rounded-3xl ">
          <div    class="flex flex-col w-[320px] px-3">
         <div class=" w-48 mx-auto">
           <motion.img variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} src={`/images/${item.img}`} alt="" class="  w-full h-[200px] object-scale-down" loading="lazy" />
         </div>
         <form class="flex-auto md:p-4 sm:p-2 lg:p-6 ">
           <div class="flex flex-wrap">
             <motion.h1 variants={fadeIn('down',0.6)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} class="flex-auto text-lg font-bold text-slate-300">
               {item.name}
             </motion.h1>
             <motion.div variants={fadeIn('down',0.7)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}}  class="text-lg font-semibold text-slate-300">
               ${item.price}.00
             </motion.div>
             <motion.div variants={fadeIn('down',0.7)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} class="w-full flex-none text-sm font-medium text-slate-400 mt-2">
               In {item.in}
             </motion.div>
           </div>
           <motion.div variants={fadeIn('down',0.8)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
             <div class="space-x-2 flex text-sm">
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
          </div>
        )}
      </div>
   </div>
  )
}

export default Pupular