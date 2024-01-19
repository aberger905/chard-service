import React from 'react'
import { FaCheck, FaSpinner, FaTimes, FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Pricing: React.FC = () => {

   const navigate = useNavigate();

  const handleClick = async () => {
    navigate('/')
  }



  return (
    <>
    <div className=' bg-gradient-to-t from-gray-300 to white min-h-screen'>
    <h1 className='text-5xl text-center pt-5 font-anton fadeUp'>Give the Gift of Recognition. </h1>
    <h2 className='text-xl text-center mb-10 font-anton fadeUp'>Celebrate their achievements and share their journey with the world.</h2>
    <div className='flex flex-col md:flex-row justify-center items-center pb-8'>
      <div className='bg-white flex flex-col justify-center items-center border shadow-sm rounded-lg p-5 w-72 fadeUp'>
        <p className='text-gray-700'>Basic</p>
        <h2 className='text-lg mt-2 font-anton'>Basic Article</h2>
        <p className='text-gray-700 text-center'>Professionally written article</p>
        <h2 className='font-semibold text-4xl'>$29</h2>
        <p className='text-gray-700 text-center'>one time payment</p>
        <button onClick={handleClick} className='border border-2 border-black  transition rounded-full  hover:bg-black hover:text-white px-5 py-2 w-[90%]'>Get Started</button>
        <div className='mt-5 mb-5'>
        <div className='flex items-center mt-1'>
        <div className='text-green-400'><FaCheck /></div>
        <p>Professional Article</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-green-400'><FaCheck /></div>
        <p>Frameable PDF Delivery</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-green-400'><FaCheck /></div>
        <p>3-Day Turnaround</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-red-400'><FaTimes /></div>
        <p>Not Published Online</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-red-400'><FaTimes /></div>
        <p>No Shareable Links</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-red-400'><FaTimes /></div>
        <p>No Revisions</p>
        </div>
        </div>
      </div>
      <div className='bg-white flex flex-col justify-center items-center border border-2 border-blue-600 shadow-lg rounded-lg p-8 w-72 m-5 fadeUp'>
        <p className='text-blue-600 border border-blue-600 p-1 rounded-lg'>Most Popular</p>
        <h2 className='text-lg mt-2 font-anton'>Published Article</h2>
        <p className='text-gray-700 text-center'>Professionally written article published on a news platform</p>
        <h2 className='font-semibold text-4xl'>$49</h2>
        <p className='text-gray-700 text-center'>one time payment</p>
        <button onClick={handleClick} className='border border-2 border-black bg-black text-white transition rounded-full  hover:bg-slate-700 hover:border-slate-700 px-5 py-2 w-[90%]'>Get Started</button>
        <div className='mt-5 mb-5'>
        <div className='flex items-center mt-1'>
        <div className='text-green-400'><FaCheck /></div>
        <p>Professional Article</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-green-400'><FaCheck /></div>
        <p>Frameable PDF Delivery</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-green-400'><FaCheck /></div>
        <p>3-Day Turnaround</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-yellow-400'><FaStar /></div>
        <p>Published Online</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-green-400'><FaCheck /></div>
        <p>Shareable Links</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-red-400'><FaTimes /></div>
        <p>No Revisions</p>
        </div>
        </div>
      </div>
      <div className='bg-white flex flex-col justify-center items-center border border-2 border-yellow-500 shadow-sm rounded-lg p-5 w-72 fadeUp'>
        <p className='text-yellow-500'>Premium</p>
        <h2 className='font-anton text-lg mt-2'>Published Article</h2>
        <p className='text-gray-700 text-center'>Expedited 24-hour delivery and 1 revision</p>
        <h2 className='font-semibold text-4xl'>$79</h2>
        <p className='text-gray-700 text-center'>one time payment</p>
        <button onClick={handleClick} className='border border-2 border-black  transition rounded-full  hover:bg-black hover:text-white px-5 py-2 w-[90%]'>Get Started</button>
        <div className='mt-5 mb-5'>
        <div className='flex items-center mt-1'>
        <div className='text-green-400'><FaCheck /></div>
        <p>Professional Article</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-green-400'><FaCheck /></div>
        <p>Frameable PDF Delivery</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-yellow-400'><FaStar /></div>
        <p>24-Hour Turnaround</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-yellow-400'><FaStar /></div>
        <p>Published Online</p>
        </div>
        {/* <div className='flex items-center mt-1'>
        <div className='text-green-400'><FaCheck /></div>
        <p>SEO Optimization</p>
        </div> */}
        <div className='flex items-center mt-1'>
        <div className='text-green-400'><FaCheck /></div>
        <p>Shareable Links</p>
        </div>
        <div className='flex items-center mt-1'>
        <div className='text-yellow-400'><FaStar /></div>
        <p>1 Revision</p>
        </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Pricing;