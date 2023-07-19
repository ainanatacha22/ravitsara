import React from 'react'
import { WrapperComponents } from '../hoc'

const Footer = () => {
  return (
    <div className='w-full bg-secondary h-auto py-5 text-white space-y-3'>
      <div>
        <p className='text-center'>Ravi-maintso</p>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='text-center'>@copyright 2023</div>
    </div>
  )
}

export default WrapperComponents(Footer, "footer")
