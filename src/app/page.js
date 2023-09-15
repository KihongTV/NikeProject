import Image from 'next/image'
import Home from './components/Home'
import Pupular from './components/Pupular' 
import Offer from './components/Offer'
import Saycostomer from './components/Saycostomer'
import About from './components/About'
export default function Page() {
  return (
   <>
      <Home></Home>
      <Pupular></Pupular>
      <Offer></Offer>
      <Saycostomer></Saycostomer>
      <About></About>
   </>
  )
}
