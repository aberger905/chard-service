import React from 'react';
import { Form, Input, Button } from 'antd';
import sendRevision from '../utils/sendRevision';

const Revision: React.FC = () => {

  const handleSubmission = async (input: string) => {
    await sendRevision(input)
  }

  const onFinish = (values: any) => {
    console.log('Received values:', values);
    // Handle the submission of revision notes
    handleSubmission(values.revisionNotes);
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-t from-gray-300 to white'>
      <div className='border rounded-lg shadow w-[90%] md:w-1/2 p-5 bg-white transition'>
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
            <Button className='bg-blue-600' type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Revision;
