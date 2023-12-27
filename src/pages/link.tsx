import React, { useEffect } from 'react';
import banner from '../assets/proud.svg';
import sendEmail from '../utils/sendEmail';




const Link = () => {

  const handleEmail = async () => {
    if (sessionStorage.getItem('email') !== 'sent') {
      try {
        await sendEmail();
        sessionStorage.setItem('email', 'sent');
      } catch (error) {
        console.error('Error sending email:', error);

      }
    } else {
      console.log("Email already sent in this session");
    }
  };

  useEffect(() => {
    handleEmail();
  }, [])


  return (
    <>
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <div className='w-[90%] flex flex-col justify-center items-center fadeUp'>
      <h1 className='text-4xl sm:text-6xl font-anton mb-5 text-center'>Congratulations!</h1>
      <img className='w-[90%] sm:w-96 mt-5 mb-5' src={banner} alt="newspaper graphic" />
      <p className='text-center text-xl font-anton'>Your article has been successfully published!</p>
      <br />
      <p className='text-center text-xl'>A link to your article has been sent to your email. Please check your inbox to access and share your published work. If you don't receive the email shortly, please check your spam folder or contact us at support@journova.com for assistance.</p>
    </div>
    </div>
    </>
  )
}

export default Link;