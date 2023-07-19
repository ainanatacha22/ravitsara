import React from 'react'
import { WrapperComponents } from '../hoc'
import { teams } from '../assets'


const Teams = () => {
  return (
    <div className='pb-10'>
      <div className='text-2xl font-bold text-center my-10 md:text-4xl'>NOTRE EQUIPES</div>
      <div className='w-full lg:w-9/12 md:flex md:m-auto'>
        <div className='px-8 sm:pl-8 lg:px-0'>
          <div>
            <img src={teams} className='m-auto'/>
          </div>
          <div className='my-4 m-auto'>
            <h1 className='font-bold'>Name teams</h1>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className='px-8'>
          <div>
            <img src={teams} />
          </div>
          <div className='my-4'>
            <h1 className='font-bold'>Name teams</h1>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className='px-8 sm:pr-8 lg:px-0'>
          <div>
            <img src={teams} />
          </div>
          <div className='mt-4'>
            <h1 className='font-bold'>Name teams</h1>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WrapperComponents(Teams, "teams")
