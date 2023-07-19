import React from 'react'
import { WrapperComponents } from '../hoc'
import Button from '@mui/material/Button';
import { ravitsara } from '../assets';

const Product = () => {
  return (
    <>
      <div className='text-2xl mb-4 font-bold text-center mt-10 md:text-4xl'>NOS PRODUITS</div>
      <div className='mt-10'>
        <div className='w-full md:flex md:m-auto md:w-11/12 lg:w-9/12'>
          <div className='px-8 md:px-0 md:w-1/2'>
            <img src={ravitsara} className='border w-full' alt='ravitsara'/>
          </div>
          <div className='px-8 mt-4 md:w-1/2 md:items-center md:flex md:flex-col md:m-auto'>
            <div>
              <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quae assumenda rerum earum praesentium, culpa iste voluptatum laborum alias ad esse corrupti dolor quam enim, perspiciatis temporibus quis? Unde, sunt.</p>
            </div>
            <div className='mt-4 mb-10 sm:mb-0'>
              <Button variant="contained" className='w-full md:w-32'
                style={{
                  backgroundColor: "#1E3025",
                }}
              >Action</Button>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-0'>
        <div className='w-full md:flex md:m-auto md:w-11/12 lg:w-9/12'>
          <div className='px-8 md:px-0 md:w-1/2 md:order-2'>
            <img src={ravitsara} className='border w-full' alt='ravina'/>
          </div>
          <div className='px-8 mt-4 md:w-1/2 md:items-center md:flex md:flex-col md:m-auto md:order-1'>
            <div>
              <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quae assumenda rerum earum praesentium, culpa iste voluptatum laborum alias ad esse corrupti dolor quam enim, perspiciatis temporibus quis? Unde, sunt.</p>
            </div>
            <div className='mt-4 mb-10 sm:mb-0'>
              <Button variant="contained" className='w-full md:w-32'
                style={{
                  backgroundColor: "#1E3025",
                }}
              >Action</Button>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-0'>
        <div className='w-full md:flex md:m-auto md:w-11/12 lg:w-9/12'>
          <div className='px-8 md:px-0 md:w-1/2'>
            <img src={ravitsara} className='border w-full ' alt='geranium'/>
          </div>
          <div className='px-8 mt-4 md:w-1/2 md:items-center md:flex md:flex-col md:m-auto'>
            <div>
              <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quae assumenda rerum earum praesentium, culpa iste voluptatum laborum alias ad esse corrupti dolor quam enim, perspiciatis temporibus quis? Unde, sunt.</p>
            </div>
            <div className='mt-4 mb-10 sm:mb-0'>
              <Button variant="contained" className='w-full md:w-32'
                style={{
                  backgroundColor: "#1E3025",
                }}
              >Action</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WrapperComponents(Product, 'product')
