import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RotatingSquare } from 'react-loader-spinner';


const GenerateLink = () => {
  const [message, setMessage] = useState('Talking to publisher...')

  const navigate = useNavigate();

  useEffect(() => {
    const messages = ['Talking to publisher...', 'Initiating final checks...', 'Finalizing layout and design elements...', 'Preparing your story for the spotlight...', 'Publishing...'];
    let messageIndex = 0;

    const intervalId = setInterval(() => {
      messageIndex = messageIndex === messages.length - 1 ? 0 : messageIndex + 1;
      setMessage(messages[messageIndex]);
    }, 2000);

    const timeoutId = setTimeout(() => {
      navigate('/link')
    }, 10000)

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId)
    };

  }, [navigate])

  return (
   <>
   <div className='flex flex-col justify-center items-center min-h-screen'>
      <RotatingSquare
      height="100"
      width="100"
      color="#3b82f6"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    <h1 className='text-3xl font-semibold animate-pulse'>{message}</h1>
   </div>
   </>
  )
}

export default GenerateLink;