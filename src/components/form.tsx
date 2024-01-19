import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Upload, Select, Checkbox, Card, InputNumber, message, Button, Radio, Modal } from 'antd';
import SubjectExamples from './subjectExamples';
import { FaLessThanEqual, FaSpinner } from "react-icons/fa";
import sendSubmission from '../utils/sendSubmission';
import { UploadFile } from 'antd/lib/upload/interface';
import API_BASE from '../settings';
import landscape from '../assets/landscape.png';

const ArticleForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedType, setSelectedType] = useState('');
  const [uploaded, setUploaded] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const totalSteps = 8;

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

  const firstNameValidator = (_: any, value: any) => {
    if (!value) {
      return Promise.reject(new Error('Please enter your first name'));
    }

    if (value.length > 50) {
      return Promise.reject(new Error('First name must be less than 20 characters'));
    }

    if (!/^[A-Za-z ]+$/.test(value)) {
      return Promise.reject(new Error('First name can only contain letters and spaces'));
    }

    return Promise.resolve();
  };

  const lastNameValidator = (_: any, value: any) => {
    if (!value) {
      return Promise.reject(new Error('Please enter your last name'));
    }

    if (value.length > 50) {
      return Promise.reject(new Error('Last name must be less than 50 characters'));
    }

    // Allows letters, dashes, apostrophes, and spaces
    if (!/^[A-Za-z\-' ]+$/.test(value)) {
      return Promise.reject(new Error('Last name contains invalid characters'));
    }

    return Promise.resolve();
  };

  const maxWords = 1000; // Define the maximum number of words
  const maxWordsSubject = 50
const wordCountValidator = (_: any, value: any) => {
  if (!value) {
    return Promise.resolve(); // If no value, no validation error
  }

  const wordCount = value.trim().split(/\s+/).length;
  if (wordCount > maxWords) {
    return Promise.reject(new Error(`Your story must be no more than ${maxWords} words!`));
  }

  return Promise.resolve();
};

const wordCountValidatorSubject = (_: any, value: any) => {
  if (!value) {
    return Promise.resolve(); // If no value, no validation error
  }

  const wordCount = value.trim().split(/\s+/).length;
  if (wordCount > maxWordsSubject) {
    return Promise.reject(new Error(`Your theme must be no more than ${maxWordsSubject} words!`));
  }

  return Promise.resolve();
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
                        <h1 className='text-2xl mb-2 font-anton'>Choose Your Article Type - click one</h1>
                        <Card
                          title="Gift Article"
                          bordered={true}
                          onClick={() => {
                            setSelectedType('highlighted');
                            form.setFieldsValue({ articleType: 'highlighted' })
                          }
                          }
                          className={`${selectedType === 'highlighted' ? ' border-blue-600 transition m-3 shadow-xl font-semibold' : 'm-3'}  cursor-pointer`}
                        >
                          <p>This option is all about celebrating someone special in your life. Whether it's for their remarkable achievements, inspiring journey, or a unique personal story. We'll focus on capturing the qualities that make their story inspiring and memorable.</p>
                        </Card>

                        <Card
                          title="Personal Article"
                          bordered={true}
                          onClick={() => {
                            setSelectedType('featured');
                            form.setFieldsValue({ articleType: 'featured' })
                            }
                          }
                          className={`${selectedType === 'featured' ? ' border-blue-600 transition m-3 shadow-xl font-semibold' : 'm-3'}  cursor-pointer`}
                        >
                          <p>Choose this option if you're looking to highlight your own journey. Ideal for capturing significant milestones, challenges overcome, or unique experiences in your life. We'll work with you to bring out the essence of what makes your story distinct and engaging.</p>
                        </Card>

                        {/* Hidden Form.Item to store the selected value */}
                        <Form.Item name="articleType" rules={[{ required: true, message: 'Please select an article type!' }]} hidden>
                          <Input />
                        </Form.Item>
                      </div>
                      </>
                    );
                  case 1:
                    return (
                      <>
                      <div key={1} className='slide-in'>
                      <h1 className='text-2xl mb-2 font-anton'>Details About The Person</h1>
                      <Form.Item label="Person's First Name" name="firstName" rules={[ { validator: firstNameValidator}]}>
                        <Input placeholder="First Name" />
                      </Form.Item>
                      <Form.Item label="Person's Last Name" name="lastName" rules={[{ validator: lastNameValidator}]}>
                        <Input placeholder="Last Name" />
                      </Form.Item>
                      <Form.Item label="Person's Pronouns" name="pronouns" rules={[{ required: true }]}>
                        <Select placeholder="Select your pronouns" allowClear>
                          <Option value="he/him">He/Him</Option>
                          <Option value="she/her">She/Her</Option>
                          <Option value="they/them">They/Them</Option>
                        </Select>
                      </Form.Item>
                    </div>
                    </>
                    );
                    case 2:
                      return (
                        <>
                        <div key={2} className='slide-in'>
                        <div className='mb-5'>
                        <h1 className='text-2xl mb-2 font-anton'>Who Are You in Their Story?</h1>
                        <p>Let us know your connection to the person you're celebrating. Simply put, are you their family member, friend, coworker, or something else? This helps us tell the story from your perspective. You could write, for example, "A proud sister" or "A grateful team at work".</p>
                        </div>
                        <Form.Item
                            rules={[{ required: true, message: 'Please tell us your relation to them' }, { validator: wordCountValidatorSubject }]}
                            label=""
                            name="narrator"
                          >
                            <Input.TextArea placeholder="Example: A caring nephew, Mike" />
                          </Form.Item>
                      </div>
                       </>
                      );
                  case 3:
                    return (
                      <>
                      <div key={3} className='slide-in'>
                      <div className='mb-5'>
                      <h1 className='text-2xl mb-2 font-anton'>Define the Theme of Your Article</h1>
                      <p>Who Are You Celebrating? Describe the essence of their story in a few words. Think of it like a headline that captures their spirit or achievements. For instance, 'Community Hero's Impact', 'Innovator in Tech', 'Dedicated Volunteer', or 'Family’s Heart and Soul'. Just a brief description helps us understand the special qualities of the person you're honoring!</p>
                      <button type='button' onClick={showModal} className="text-blue-500 mt-3 cursor-pointer hover:underline">See Examples Here</button>
                      </div>
                      <Form.Item
                          rules={[{ required: true, message: 'Please choose a theme' }, { validator: wordCountValidatorSubject }]}
                          label=""
                          name="subject"
                        >
                          <Input.TextArea placeholder="Example: Honoring a Lifetime of Teaching and Mentorship" />
                        </Form.Item>
                        <Modal title="Examples" open={isModalVisible} onCancel={closeModal} footer={null}>
                          <SubjectExamples />
                        </Modal>
                    </div>
                     </>
                    );
                    case 4:
                      return (
                        <>
                        <div key={4} className='slide-in'>
                        <div className='mb-5'>
                        <h1 className='text-2xl mb-2 font-anton'>Tell Their Story</h1>
                        {/* <p>Now, let's get into your story. Tell us everything about what you've been through – the ups and downs, key moments, and how you felt about them. It's your chance to really paint a picture of your experiences related to the theme you chose. The more you share, the more vividly we can tell your story. Think of it as sharing a chapter from your life's book.</p> */}
                        <p>Tell us what you know about the person you're honoring. Focus on the key moments, achievements, or qualities that stand out to you. How have their actions, passions, or journey impacted you or others? Even if you don’t know every detail, your insights will help us create a meaningful and personalized tribute. Share as much as you can - every bit helps us understand and celebrate their story."</p>
                        </div>
                      <Form.Item rules={[{ required: true, message: 'Please fill out your story' }, { validator: wordCountValidator }]} label="" name="story">
                        <Input.TextArea placeholder="Example: My sister's journey began in the vibrant community of Maplewood, where she discovered her passion for gardening. Despite facing challenges like harsh weather conditions and initial failures, she remained dedicated, driven by her love for nature. A pivotal moment was when she transformed a barren local park into a blooming garden, bringing together the neighborhood and sparking a green movement in our town. This experience highlighted her creativity, community spirit, and the impact one person can have on their environment..." />
                      </Form.Item>
                      </div>
                       </>
                      )
                      case 5:
                        return (
                          <>
                            <div key={5} className='slide-in'>
                              <div className='mb-5'>
                                <h1 className='text-2xl mb-2 font-anton'>Upload Header Image (optional)</h1>
                                <p>Upload an image to use as the header for your article.</p>
                                <img src={landscape} />
                                <p><b>Note: Lanscape oriented images will look better as header image</b></p>
                              </div>
                              <Form.Item
                                name="headerImage"
                                valuePropName='fileList'
                                getValueFromEvent={(event) => {
                                  return event?.fileList;
                                }}
                                rules={[
                                  {
                                    required: false
                                  },
                                ]}
                              >
                             <Upload
                                    name="headerImage"
                                    maxCount={1}
                                    action={`${API_BASE}/article/image`}
                                    beforeUpload={(file) => {
                                      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                                      if (!isJpgOrPng) {
                                        message.error('You can only upload JPG/PNG file!');
                                        return Upload.LIST_IGNORE;
                                      }
                                      const isLt2M = file.size / 1024 / 1024 < 4;
                                      if (!isLt2M) {
                                        message.error('Image must smaller than 4MB!');
                                        return Upload.LIST_IGNORE;
                                      }

                                      // return new Promise((resolve, reject) => {
                                      //   const img = new Image();
                                      //   img.src = URL.createObjectURL(file);
                                      //   img.onload = () => {
                                      //     const width = img.naturalWidth;
                                      //     const height = img.naturalHeight;

                                      //     // Checking for more horizontal image
                                      //     if (width < height) {
                                      //       message.error('Please upload an image in landscape orientation!');
                                      //       reject(Upload.LIST_IGNORE);
                                      //     }
                                      //     resolve(true);
                                      //   };
                                      //   img.onerror = reject;
                                      // });
                                    }}
                                    onChange={info => {
                                      if (info.file.status === 'done') {
                                        console.log('File uploaded successfully', info.file.response.imageUrl);

                                        form.setFieldsValue({headerImage: [info.file.response.imageUrl]}); // setting image url as form field value
                                        setUploaded(true);
                                      } else if (info.file.status === 'error') {
                                        console.error('Upload failed:', info.file.error);
                                      }
                                  }}
                                >
                                    <Button >Upload Image Here</Button>
                                    <p className={`${uploaded ? 'text-green-600' : 'text-red-600'}`}>{uploaded ? 'Image uploaded!' : 'No image uploaded'}</p>
                                </Upload>
                              </Form.Item>
                            </div>
                          </>
                        )
                    case 6:
                      return (
                        <>
                        <div key={6} className='slide-in'>
                        <div className='mb-5'>
                        <h1 className='text-2xl mb-2 font-anton'>Receive Your Article Link</h1>
                        <p>Please provide your own email address below. We'll send the article link to you, the gift-giver, so you can surprise your chosen recipient at just the right moment.</p>
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
                      case 7:
                        return (
                          <>
                          <div key={7} className='slide-in'>
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



