import React from 'react'
import sedan from './images/icon-sedans.svg'
import suv from './images/icon-suvs.svg'
import luxury from './images/icon-luxury.svg'

const Preview = () => {
  return (
    <div className='w-screen h-[1502px] flex md:h-[800px]'>
        <div className='w-[327px] h-[1326px] flex flex-col mx-auto my-auto lg:flex-row lg:w-[920px] lg:h-[500px]'>
            <div className='orange-box w-full h-[442px] rounded-lg bg-[#E28625] lg:w-[307px] lg:h-[500px]'>
                <img className='w-[64px] h-[40px] ml-[49px] mt-[48px]' src={sedan}></img>
                <h2 className='text-white text-[40px] font-big ml-[49px] mt-[35px]'>SEDANS</h2>
                <p className='text-white text-[15px] font-deca mx-[48.5px] mt-[25px]'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
                <button className='w-[146px] h-[48px] bg-white text-[#E28625] text-[14px] font-deca rounded-3xl ml-[49px] mt-[25px] hover:bg-transparent hover:text-white hover:border lg:mt-[85px]'>Learn More</button>
            </div>
            <div className='green-box w-full h-[442px] rounded-lg bg-[#006971] lg:w-[307px] lg:h-[500px]'>
                <img className='w-[64px] h-[40px] ml-[49px] mt-[48px]' src={suv}></img>
                <h2 className='text-white text-[40px] font-big ml-[49px] mt-[35px]'>SUVS</h2>
                <p className='text-white text-[15px] font-deca mx-[48.5px] mt-[25px]'>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
                <button className='w-[146px] h-[48px] bg-white text-[#006971] text-[14px] font-deca rounded-3xl ml-[49px] mt-[25px] hover:bg-transparent hover:text-white hover:border lg:mt-[85px]'>Learn More</button>
            </div>
            <div className='forest-box w-full h-[442px] rounded-lg bg-[#004140] lg:w-[307px] lg:h-[500px]'>
                <img className='w-[64px] h-[40px] ml-[49px] mt-[48px]' src={luxury}></img>
                <h2 className='text-white text-[40px] font-big ml-[49px] mt-[35px]'>LUXURY</h2>
                <p className='text-white text-[15px] font-deca mx-[48.5px] mt-[25px]'>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. </p>
                <button className='w-[146px] h-[48px] bg-white text-[#004140] text-[14px] font-deca rounded-3xl ml-[49px] mt-[25px] hover:bg-transparent hover:text-white hover:border lg:mt-[85px] '>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Preview