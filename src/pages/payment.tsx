import React, { useState, useEffect } from 'react'
import { FaCheck, FaSpinner } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import handleCheckout from '../utils/handleCheckout';

const Payment: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)



  useEffect(() => {
   confetti()
  }, [])

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await handleCheckout();
      // navigate to next page or handle post-payment logic
    } catch (error) {
      console.error('Payment error:', error);
      setIsLoading(false); // Re-enable the button in case of error
    }
  }



  return (
    <>
    <div className=' bg-gradient-to-t from-blue-300 to white min-h-screen'>
    <h1 className='text-5xl font-bold text-center pt-5 fadeUp'>You're one step away from recognition.</h1>
    <h2 className='text-xl font-semibold text-center mb-10 fadeUp'>Continue to review and have your article published</h2>
    <div className='flex flex-col justify-center items-center'>
      <div className='bg-white flex flex-col justify-center items-center border shadow-lg rounded-lg p-5 w-72 fadeUp'>
        <h2 className='font-bold text-lg mt-5'>Published Article</h2>
        <p className='text-gray-500 text-center'>continue to review and publish your article</p>
        <h2 className='font-semibold text-4xl'>$59</h2>
        <p className='text-gray-500 text-center'>one time payment</p>
        <button onClick={handleClick} disabled={isLoading} className='border rounded-lg bg-slate-800 hover:bg-slate-600 text-white px-5 py-2 font-bold w-[90%]'>{isLoading ? <div className='flex justify-center items-center'><FaSpinner className='animate-spin'/></div> : 'Continue'}</button>
        <div className='mt-5 mb-5'>
        <div className='flex items-center mt-1'>
        <div className='text-green-400'><FaCheck /></div>
        <p>Published on real news site</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-green-400'><FaCheck /></div>
        <p>Always Live</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-green-400'><FaCheck /></div>
        <p>Always Googleable</p>
        </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Payment;