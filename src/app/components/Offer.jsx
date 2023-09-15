'use client'
import { BsBasketFill,BsFillBookFill } from "react-icons/bs";
import { motion } from 'framer-motion';
import { fadeIn } from './components/varients';
import Countdown from "react-countdown";


const Offer = () => {
  const launchDate = new Date('September 20, 2023, 24:00:00');
  const renderer = ({ days,hours, minutes, completed }) => {
    if (completed) {
      // Render a completed state
      return <div className="text-white text-5xl text-center pt-5 font-bold">Time Is <span className="text-orange-600">Expired</span></div>;
    } else {
      // Render a countdown
      return <motion.div variants={fadeIn('down',0.4)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className="text-center font-bold flex justify-center gap-3 text-white text-5xl py-5  rounded-b-3xl">
        <div className="flex flex-col">
        <div className="p-5 text-center bg-gray-700 rounded-3xl w-[100px]">
          {days}
          </div>
          <h6 className="text-sm ">days</h6>
        </div>
        <div className="flex flex-col">
        <div className="p-5 text-center bg-gray-700 rounded-3xl w-[100px]">
          {hours}
          </div>
          <h6 className="text-sm ">hours</h6>
        </div>
        <div className="flex flex-col">
        <div className="p-5 text-center bg-gray-700 text-orange-600 rounded-3xl w-[100px]">
          {minutes}
          </div>
          <h6 className="text-sm ">minutes</h6>
        </div>
        
        </motion.div>
    }
  };
  return (
    <div id='Offer' className='w-full h-full mt-20 xl:h-screen '>
        
          <div className='w-11/12 lg:w-10/12 mx-auto flex items-center justify-around xl:flex-row flex-col h-full'>
                <div className="flex flex-col">
                  <motion.img variants={fadeIn('down',0.2)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} src="/images/nike.jpg" className="lg:w-[500px]  md:w-[350px] w-full mx-auto lg:mx-0 rounded-3xl " alt="" />
                  <Countdown renderer={renderer} date={launchDate + 100000000} />,
                        
                            
                        
                </div>
                <div className='flex flex-col'>
                <motion.h4 variants={fadeIn('down',0.2)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-white text-4xl font-medium text-center lg:text-left lg:text-5xl'><span className='text-orange-600'>Special</span> Offer</motion.h4>
                <div className='text-gray-500 text-center lg:text-left text-sm lg:text-base  max-w-lg mt-5'>
                <motion.p  variants={fadeIn('down',0.3)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quam consectetur illo doloribus! Iste asperiores laudantium consequatur quos animi incidunt, dicta illo vitae. Maiores, vel quos totam quisquam tempore alias.</motion.p>
                <motion.p  variants={fadeIn('down',0.2)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsa impedit quod fugiat maiores eligendi, voluptatibus tempore animi aspernatur nisi consectetur.</motion.p>
                <div className="flex gap-3 flex-wrap mt-5">
                <motion.button variants={fadeIn('down',0.3)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='rounded-3xl text-white flex justify-center items-center gap-3 bg-orange-700 mt-2 text-xl font-medium w-[230px] mx-auto lg:mx-0 py-3'>Shop Now<BsBasketFill></BsBasketFill></motion.button>
                <motion.button variants={fadeIn('down',0.4)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='rounded-3xl text-white flex justify-center items-center gap-3 bg-slate-700 mt-2 text-xl font-medium w-[230px] mx-auto lg:mx-0 py-3'>Learn More<BsFillBookFill></BsFillBookFill></motion.button>

                </div>
                </div>
                 </div>
          </div>
    
    </div>
  )
}

export default Offer