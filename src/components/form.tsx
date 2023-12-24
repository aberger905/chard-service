import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Select, Checkbox, Card, InputNumber, Button, Radio, Modal } from 'antd';
import SubjectExamples from './subjectExamples';
import { FaSpinner } from "react-icons/fa";
import sendSubmission from '../utils/sendSubmission';

const ArticleForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedType, setSelectedType] = useState('')
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const totalSteps = 6;

  const { Option } = Select
  const next = async () => {
    try {
      const values = await form.validateFields();
      setFormData({...formData, ...values});
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.log('Validation Failed:', error);
    }
  };


  const back = () => {
    setCurrentStep(currentStep - 1);
  };

  const showModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }


  const handleSubmit = async (values: any) => {
    console.log('HERE ARE THE VALUES',formData)

    setIsLoading(true);
    try {
      const submissionId = await sendSubmission(formData);
      localStorage.setItem('submissionId', JSON.stringify(submissionId.submissionId));
      navigate('/payment');
    } catch (e) {
      setIsLoading(false);
      console.error('Submission error', e);
    }
  };

const renderStep = () => {
  switch (currentStep) {
                  case 0:
                    return (
                      <>
                      <div key={0} className='slide-in'>
                        <h1 className='text-2xl mb-2 font-anton'>Choosing Your Article Type</h1>
                        <Card
                          title="Highlighted Article"
                          bordered={true}
                          onClick={() => {
                            setSelectedType('highlighted');
                            form.setFieldsValue({ articleType: 'highlighted' })
                          }
                          }
                          className={`${selectedType === 'highlighted' ? ' border-blue-600 transition m-3 shadow-xl font-semibold' : 'm-3'}  cursor-pointer`}
                        >
                          <p>This type is all about you! If you have a special achievement or story, choose this. We'll focus on what makes your story unique and exciting.</p>
                        </Card>

                        <Card
                          title="Featured Article"
                          bordered={true}
                          onClick={() => {
                            setSelectedType('featured');
                            form.setFieldsValue({ articleType: 'featured' })
                            }
                          }
                          className={`${selectedType === 'featured' ? ' border-blue-600 transition m-3 shadow-xl font-semibold' : 'm-3'}  cursor-pointer`}
                        >
                          <p>Pick this to be part of a bigger story. You'll still be important, but you'll share the stage with a bigger theme, like trends in your industry or important social topics. It's great if you want to share your views or experiences as part of something larger.</p>
                        </Card>

                        {/* Hidden Form.Item to store the selected value */}
                        <Form.Item name="articleType" hidden>
                          <Input />
                        </Form.Item>
                      </div>
                      </>
                    );
                  case 1:
                    return (
                      <>
                      <div key={1} className='slide-in'>
                      <h1 className='text-2xl mb-2 font-anton'>Personal Details</h1>
                      <Form.Item label="Full Name" name="fullName" rules={[{ required: true }]}>
                        <Input placeholder="Full Name" />
                      </Form.Item>
                      <Form.Item label="Pronouns (what to refer to you by in the article)" name="pronouns" rules={[{ required: true }]}>
                        <Select placeholder="Select your pronouns" allowClear>
                          <Option value="he/him">He/Him</Option>
                          <Option value="she/her">She/Her</Option>
                          <Option value="they/them">They/Them</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="Age" name="age">
                        <InputNumber placeholder="Age" />
                      </Form.Item>
                    </div>
                    </>
                    );
                  case 2:
                    return (
                      <>
                      <div key={2} className='slide-in'>
                      <div className='mb-5'>
                      <h1 className='text-2xl mb-2 font-anton'>Define the Theme of Your Article</h1>
                      {/* <p>Please briefly state the central theme or topic of your article. This should be a concise overview or headline of what your article will be about. Think of it as a summary or the title of a chapter – it gives an idea of the story but doesn’t delve into the details. For instance, 'Overcoming Adversity in Competitive Sports', 'Finding Balance Between Work and Family', or 'My Journey with Learning a New Language'. Try to encapsulate your main idea in a sentence or two.</p> */}
                      {/* <p>Please specify the broader topic or theme you want your article to focus on. This should be an overarching subject that resonates with your personal experiences or stories. For example, it could be about a significant challenge you’ve overcome, a remarkable achievement, or an important issue you're passionate about. Think of it as the central thread that ties your narrative together.</p> */}
                      <p>What's your article about? Share the main idea in a few words, like a short summary or a headline. It's like giving us a sneak peek of your story without all the details. For example, you could say 'Winning Big in Sports', 'Juggling Work and Family', or 'My Adventure Learning Spanish'. Just a line or two is enough to give us an idea!</p>
                      <button type='button' onClick={showModal} className="text-blue-500 mt-3 cursor-pointer hover:underline">See Examples Here</button>
                      </div>
                      <Form.Item
                          rules={[{ required: true, message: 'Please choose a theme' }]}
                          label=""
                          name="subject"
                        >
                          <Input.TextArea placeholder="Example: Balancing Work and Personal Passions..." />
                        </Form.Item>
                        <Modal title="Examples" open={isModalVisible} onCancel={closeModal} footer={null}>
                          <SubjectExamples />
                        </Modal>
                    </div>
                     </>
                    );
                    case 3:
                      return (
                        <>
                        <div key={3} className='slide-in'>
                        <div className='mb-5'>
                        <h1 className='text-2xl mb-2 font-anton'>Detail Your Personal Journey</h1>
                        {/* <p>Now that you've identified the theme, this is where you can dive into the full narrative of your experiences. Share the detailed account of your personal journey, challenges, achievements, and insights related to your chosen theme. Feel free to describe specific events, turning points, and the emotions involved. The more descriptive and heartfelt your storytelling, the better we can capture and convey the depth of your unique perspective.</p> */}
                        {/* <p>This is your space to share the details of your personal journey or experiences related to the chosen subject. Feel free to recount specific events, challenges you’ve faced, milestones you’ve achieved, or insights you’ve gained. Think of it as narrating a chapter from your life that vividly captures the essence of your story. The more descriptive and heartfelt, the better we can understand and convey your unique perspective in the article.</p> */}
                        <p>Now, let's get into your story. Tell us everything about what you've been through – the ups and downs, key moments, and how you felt about them. It's your chance to really paint a picture of your experiences related to the theme you chose. The more you share, the more vividly we can tell your story. Think of it as sharing a chapter from your life's book.</p>
                        </div>
                      <Form.Item rules={[{ required: true, message: 'Please fill out your story' }]} label="" name="story">
                        <Input.TextArea placeholder="Example: My journey began in the small town of Springfield, where I first discovered my passion for painting. Overcoming initial challenges, like limited resources and lack of mentorship, I persevered, driven by my love for art. A pivotal moment was when my work was featured in a local exhibition, leading to unexpected opportunities and growth. This experience taught me the importance of resilience and staying true to one's vision..." />
                      </Form.Item>
                      </div>
                       </>
                      )
                    case 4:
                      return (
                        <>
                        <div key={4} className='slide-in'>
                        <div className='mb-5'>
                        <h1 className='text-2xl mb-2 font-anton'>Receive Your Article Link</h1>
                        <p>Enter your email address below, and we'll send you a direct link to the article.</p>
                        </div>
                        <Form.Item
                          name="email"
                          rules={[
                            {
                              type: 'email',
                              message: 'The input is not a valid email!',
                            },
                            {
                              required: true,
                              message: 'Please input your email!',
                            },
                          ]}
                        >
                          <Input placeholder="Enter your email" />
                        </Form.Item>
                      </div>
                       </>
                      )
                      case 5:
                        return (
                          <>
                          <div key={5} className='slide-in'>
                          <div className='mb-5'>
                          <h1 className='text-2xl mb-2 font-anton'>Final Review and Confirmation</h1>
                          <p>Please review your answers carefully. <strong>Once submitted, your story cannot be altered.</strong> Are you confident that your submission reflects your narrative in full detail?</p>
                          </div>
                          <Form.Item
                            name="confirmation"
                            valuePropName="checked"
                            rules={[
                              {
                                validator: (_, value) =>
                                  value ? Promise.resolve() : Promise.reject(new Error('You must confirm your answers before submitting')),
                              },
                            ]}
                          >
                            <Checkbox>
                              I confirm that my answers are as detailed as I want, and I understand that I cannot change my submission after this.
                            </Checkbox>
                          </Form.Item>
                        </div>
                         </>
                        );
                 }
};


return (
  <Form layout="vertical" form={form} onFinish={handleSubmit}>
    {renderStep()}
    <Form.Item>
      {currentStep > 0 && (
        <button type='button' className='border border-black transition hover:bg-black text-black hover:text-white px-6 py-2 rounded-lg' style={{ margin: '0 8px' }} onClick={back}>
          Back
        </button>
      )}
      {currentStep < totalSteps - 1 && (
        <button type='button' className='bg-black border transition border-black hover:border-slate-800 hover:bg-slate-800 text-white px-6 py-2 rounded-lg' onClick={next}>
          Next
        </button>
      )}
      {currentStep === totalSteps - 1 && (
        <Button className='bg-blue-600' disabled={isLoading} type="primary" htmlType="submit">
          {isLoading ? <div className='flex justify-center items-center'><FaSpinner className='animate-spin'/></div> : 'Submit'}
        </Button>
      )}
    </Form.Item>
  </Form>
);
};

export default ArticleForm;



