import React from 'react'
import { WrapperComponents } from '../hoc'
import '../styles/Testimonials.css'
import { profil } from '../assets'

const Testimonials = () => {
  return (
    <div className='testimonials mt-10 py-10 px-10 lg:px-0'>
      <div className='text-2xl text-white mb-10 font-bold text-center md:text-4xl'>TESTIMONIALS</div>
      <div className='text-sm space-y-8 md:flex md:space-x-4 md:space-y-0 lg:w-9/12 lg:m-auto'>
        <div className='transparent-bg p-4 rounded-xl lg:flex lg:space-x-4 lg:p-10'>
          <div>
            <img src={profil} className='rounded-3xl w-12 m-auto lg:w-full lg:rounded-lg'/>
          </div>
          <div className='mt-3 text-secondary lg:mt-0 lg:justify-between lg:flex lg:flex-col'>
            <div>
              <p className='text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia esse nesciunt voluptatibus quia, hic laborum quae rem, dolorem porro, assumenda quam nostrum deleniti ullam accusamus magni reiciendis. Eos, facere!</p>
            </div>
            <div className='mt-4 font-semibold'>Koto Rabe</div>
          </div>
        </div>

        <div className='transparent-bg p-4 rounded-xl lg:flex lg:space-x-4 lg:p-10'>
          <div>
            <img src={profil} className='rounded-3xl w-12 m-auto lg:w-full lg:rounded-lg'/>
          </div>
          <div className='mt-3 text-secondary lg:mt-0 lg:justify-between lg:flex lg:flex-col'>
            <div>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia esse nesciunt voluptatibus quia, hic laborum quae rem, dolorem porro, assumenda quam nostrum deleniti ullam accusamus magni reiciendis. Eos, facere!</p>
            </div>
            <div className='mt-4 font-semibold'>Koto Rabe</div>
          </div>
        </div>

        <div className='transparent-bg p-4 rounded-xl lg:flex lg:space-x-4 lg:p-10'>
          <div>
            <img src={profil} className='rounded-3xl w-12 m-auto lg:w-full lg:rounded-lg'/>
          </div>
          <div className='mt-3 text-secondary lg:mt-0 lg:justify-between lg:flex lg:flex-col'>
            <div>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia esse nesciunt voluptatibus quia, hic laborum quae rem, dolorem porro, assumenda quam nostrum deleniti ullam accusamus magni reiciendis. Eos, facere!</p>
            </div>
            <div className='mt-4 font-semibold'>Koto Rabe</div>
          </div>
        </div>     

      </div>
    </div>
  )
}

export default WrapperComponents(Testimonials, 'testimonials')
