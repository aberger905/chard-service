import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import banner from '../../assets/writer3.svg'
import sendRevision from '../../utils/sendRevision';

const Revision: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const handleSubmission = async (input: string) => {
    await sendRevision(input)

  }

  const onFinish = (values: any) => {
    setClicked(true);
    console.log('Received values:', values);
    // Handle the submission of revision notes
    handleSubmission(values.revisionNotes);
  };

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen transition ${!clicked ? 'bg-gradient-to-t from-gray-300 to white' : ''}`}>
   { clicked ?
      <div className='w-[90%] flex flex-col justify-center items-center fadeUp mt-5 mb-5'>
      <h1 className='text-3xl sm:text-4xl font-anton mb-5 text-center'>Revision Received - We're on It!</h1>
      <img className='w-[90%] sm:w-96 mt-5 mb-5' src={banner} alt="newspaper graphic" />
      <p className='text-center text-xl font-bold'>Thank you for your valuable feedback. Our team is now diving back into your story with your revision notes in hand. We understand the importance of getting every detail just right and are committed to refining your article to better reflect your vision. Please be patient as this process may take some time, but rest assured, we're working diligently to perfect your story.</p>
      <br />
      <p className='text-center text-lg text-gray-600'>Once the revision is complete, we'll send it over for your final review. Your satisfaction is our priority, and we're eager to showcase your story in its best light.</p>
    </div> :

      <div className='border rounded-lg shadow w-[90%] md:w-1/2 p-5 bg-white transition fadeUp'>
        <h1 className='text-2xl mb-2 font-anton'>Help Us Perfect Your Story</h1>
        <p>We apologize if our initial draft didn't fully meet your expectations. To help our journalists craft the article to your satisfaction, please provide detailed and specific revision notes below. Note: Due to high demand, revised articles may take up to 12 hours to return. We appreciate your patience and strive to ensure your story is told just right.</p>
        <br />
        <Form onFinish={onFinish}>
          <Form.Item
            name="revisionNotes"
            rules={[{ required: true, message: 'Please input your revision notes!' }]}
          >
            <Input.TextArea rows={4} placeholder="Enter your revision notes here" />
          </Form.Item>
          <Form.Item>
            <Button className='bg-blue-600' disabled={clicked} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      }
    </div>
  );
}

export default Revision;
