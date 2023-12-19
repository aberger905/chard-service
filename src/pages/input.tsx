import React from 'react';
import Form from '../components/form'

const Input: React.FC = () => {

  return (
  <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-t from-blue-300 to white'>
    <div className='border rounded-lg shadow w-[90%] md:w-1/2 p-5 bg-white'>
    <Form />
   </div>
 </div>
  )
}

export default Input