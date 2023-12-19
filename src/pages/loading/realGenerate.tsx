import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RotatingSquare } from 'react-loader-spinner';
import checkStatus from '../../utils/checkStatus';


const RealGenerate = () => {
  const [message, setMessage] = useState('Fetching preview...')

  const navigate = useNavigate();

  useEffect(() => {
    const messages = [
      'Talking to provider...',
      'Fetching preview...',
      'Hold on...',
      'Almost ready...',
      'Please stay on page...',
      'Taking longer than expected...'
    ];
    let messageIndex = 0;

    const messageIntervalId = setInterval(() => {
      messageIndex = messageIndex === messages.length - 1 ? 0 : messageIndex + 1;
      setMessage(messages[messageIndex]);
    }, 3000);

    // Polling interval
    const statusIntervalId = setInterval(async () => {
      try {
        const status = await checkStatus();
        console.log(status);
        if (status.status === 'ready') {
          localStorage.setItem('articleId', JSON.stringify(status.articleId));
          clearInterval(statusIntervalId);
          clearInterval(messageIntervalId);
          navigate('/preview'); // Assuming '/preview' is the route for the preview page
        }
      } catch (error) {
        console.error('Error while checking status:', error);
        clearInterval(statusIntervalId);
        clearInterval(messageIntervalId);
        // Handle error (e.g., show error message to user)
      }
    }, 3000);

    return () => {
      clearInterval(statusIntervalId);
      clearInterval(messageIntervalId);
    };
  }, [navigate]);


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

export default RealGenerate;