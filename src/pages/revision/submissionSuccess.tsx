import banner from '../../assets/newspapers.png'




const RevisionConfirmation = () => {

  return (
    <>
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <div className='w-[90%] flex flex-col justify-center items-center fadeUp mt-5 mb-5'>
      <h1 className='text-3xl sm:text-4xl font-bold mb-5 text-center'>Revision Received - We're on It!</h1>
      <img className='w-[90%] sm:w-96 mt-5 mb-5' src={banner} alt="newspaper graphic" />
      <p className='text-center text-xl font-bold'>Thank you for your valuable feedback. Our team is now diving back into your story with your revision notes in hand. We understand the importance of getting every detail just right and are committed to refining your article to better reflect your vision. Please be patient as this process may take some time, but rest assured, we're working diligently to perfect your story.</p>
      <br />
      <p className='text-center text-lg text-gray-600'>Once the revision is complete, we'll send it over for your final review. Your satisfaction is our priority, and we're eager to showcase your story in its best light.</p>
    </div>
    </div>
    </>
  )
}

export default RevisionConfirmation;