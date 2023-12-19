import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RotatingSquare } from 'react-loader-spinner';


const FakeGenerate = () => {
  const [message, setMessage] = useState('Analyzing inputs...')

  const navigate = useNavigate();

  useEffect(() => {
    const messages = ['Analyzing inputs...', 'Gathering fresh insights...', 'Drafting outline...', 'Crafting customized story...', 'Injecting journalistic flair...', 'Finalizing a captivating read...'];
    let messageIndex = 0;

    const intervalId = setInterval(() => {
      messageIndex = messageIndex === messages.length - 1 ? 0 : messageIndex + 1;
      setMessage(messages[messageIndex]);
    }, 3000);

    const timeoutId = setTimeout(() => {
      navigate('/payment')
    }, 18000)

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

export default FakeGenerate;