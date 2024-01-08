import React, { useEffect } from 'react';
import banner from '../assets/well_done.svg'
import sendEmail from '../utils/sendEmail';




const Confirmation = () => {

  // const handleEmail = async () => {
  //   await sendEmail();
  // }

  // useEffect(() => {
  //   handleEmail();
  // }, [])


  return (
    <>
    <div className='flex flex-col justify-center items-center min-h-screen fadeUp'>
      <div className='w-[90%] flex flex-col justify-center items-center mt-5 mb-5'>
      <h1 className='text-3xl sm:text-4xl font-anton mb-5 text-center'>Congratulations on Taking the First Step!</h1>
      <img className='w-[90%] sm:w-96 mt-5 mb-5' src={banner} alt="newspaper graphic" />
      <p className='text-center text-xl font-anton'>Thank you for your submission! Our team of skilled journalists is ready to bring your story to life.</p>
      <br />
      {/* <p className="text-gray-700 mb-3 text-lg">Here's what happens next:</p>
                <ul className="text-gray-600 list-inside list-disc mb-4 text-left text-lg">
                    <li>Stay Informed: You'll receive regular updates via email at each stage of the process.</li>
                    <li>Review and Approval: Once your article is crafted, you'll have the opportunity to review it.</li>
                    <li>Ready for the World: After your approval, we'll prepare your article for publishing.</li>
                </ul> */}
      <p className='text-center text-lg text-gray-600'>We appreciate your contribution to our storytelling journey. Your story is now in the hands of our dedicated team. We're excited to start working on your article. If you don't receive a confirmation email within 5 minutes, kindly check your spam folder or contact us at support@journova.com for assistance.</p>
    </div>
    </div>
     {/* <div className="bg-gradient-to-t from-green-200 to white min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white w-[90%] p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold mb-4">Congratulations on Taking the First Step!</h1>
                <img className='w-[90%] flex justify-center items-center sm:w-96 mt-5 mb-5' src={banner} alt="newspaper graphic" />
                <p className="text-lg font-semibold mb-3">Thank you for your submission! Our team of skilled journalists is ready to bring your story to life. We're excited to start working on your article.</p>
                <p className="text-gray-700 mb-3">Here's what happens next:</p>
                <ul className="text-gray-600 list-inside list-disc mb-4 text-left">
                    <li>Stay Informed: You'll receive regular updates via email at each stage of the process.</li>
                    <li>Review and Approval: Once your article is crafted, you'll have the opportunity to review it.</li>
                    <li>Ready for the World: After your approval, we'll prepare your article for publishing.</li>
                </ul>
                <p className="text-gray-600">If you have any questions or additional insights you'd like to add to your story, feel free to reach out to us. We're here to make sure your voice is heard loud and clear!</p>
            </div>
        </div> */}
    </>
  )
}

export default Confirmation;