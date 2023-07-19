import React from 'react'
import { WrapperComponents } from '../hoc'
import { alambic2 } from '../assets'
import Button from '@mui/material/Button';


const About = () => {
  return (
    <div className='mt-10'>
      <div className='my-10'>
        <div className='text-2xl mb-8 font-bold text-center md:text-4xl'>A PROPOS DE NOUS</div>
        <div className='w-10/12 text-justify md:w-2/4 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi saepe soluta deserunt quo eveniet voluptate, quisquam, blanditiis neque dolorem tempore tempora magnam molestias quis excepturi atque distinctio? Mollitia, quasi repudiandae?</div>
      </div>

      <div className='bg-tertiary py-10'>
        <div className='mt-0'>
          <div className='w-full md:flex md:m-auto md:w-11/12 lg:w-9/12'>
            <div className='px-8 md:px-0 md:w-1/2 md:order-2'>
              <img src={alambic2} className='border w-full' />
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
      </div>
    </div>
  )
}

export default WrapperComponents(About, "about")
