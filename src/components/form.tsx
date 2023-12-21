import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Select, InputNumber, Button, Checkbox, Radio, Modal, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import SubjectExamples from './subjectExamples';
import { FaSpinner } from "react-icons/fa";
import sendSubmission from '../utils/sendSubmission';

const ArticleForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [articleType, setArticleType] = useState('');
  const [fullName, setFullName] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [age, setAge] = useState('');
  const [subject, setSubject] = useState('');
  const [story, setStory] = useState('');
  const [email, setEmail] = useState('');
  // const [agreement, setAgreement] = useState(false);
  // const [mainImage, setMainImage] = useState([]);
  // const [additionalImage, setAdditionalImage] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }

  const navigate = useNavigate();

  const { Option } = Select;

  const [form] = Form.useForm();
  const totalSteps = 5;

  const next = async () => {
    try {
      await form.validateFields();
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.log('Validation Failed:', error);
    }
  };

  const back = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const formData = {
      articleType,
      fullName,
      pronouns,
      age,
      subject,
      story,
      email
    };
    try {
      const submissionId = await sendSubmission(formData);
      localStorage.setItem('submissionId', JSON.stringify(submissionId.submissionId));
    } catch (e) {
      setIsLoading(false);
      console.error('sumbission error', e)
    }
    navigate('/payment');
  };

  // const normFile = (e: any) => {
  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   return e && e.fileList;
  // };

  const renderStep = () => {
    switch (currentStep) {
                    case 0:
                      return (
                        <>
                        <div key={0} className='slide-in'>
                        <h1 className='text-2xl font-semibold mb-2'>Choosing Your Article Type</h1>
                        <h2 className='font-semibold'>1. Highlighted Article:</h2>
                        <p>This option focuses exclusively on you and your specific achievement or story. It's ideal if you have a notable accomplishment or event that's newsworthy on its own. The article will delve into your personal journey, exploring the details and impact of your particular achievement.</p>
                        <br />
                        <h3 className='font-semibold'>2. Featured Article:</h3>
                        <p className='mb-3'>Choose this if you want to be part of a broader story. In a Feature article, while you play a significant role, the narrative revolves around a wider topic. Your experiences and insights contribute to a larger theme, such as industry trends, societal issues, or general experiences. This option suits those who have valuable perspectives or experiences to share within a broader context.</p>
                          <Form.Item
                          name="radioGroup"
                          label="Select Article Type"
                          rules={[{ required: true, message: 'Please pick an option!' }]}
                        >
                          <Radio.Group onChange={(e) => setArticleType(e.target.value)}>
                            <Radio.Button value="highlighted">Highlighted</Radio.Button>
                            <Radio.Button value="featured">Featured</Radio.Button>
                          </Radio.Group>
                        </Form.Item>
                        </div>
                        </>
                      );
                    case 1:
                      return (
                        <>
                        <div key={1} className='slide-in'>
                        <h1 className='text-2xl font-semibold mb-2'>Personal Details</h1>
                        <Form.Item label="Full Name" name="fullName" rules={[{ required: true }]}>
                        <Input onChange={(e: any) => setFullName(e.target.value)} value={fullName} placeholder="Full Name" />
                      </Form.Item>
                        <Form.Item label="Pronouns (what to refer to you by in the article)" name="pronouns" rules={[{ required: true }]}>
                        <Select
                          placeholder="Select your pronouns"
                          onChange={(val: any) => setPronouns(val)}
                          allowClear
                        >
                          <Option value="he/him">He/Him</Option>
                          <Option value="she/her">She/Her</Option>
                          <Option value="they/them">They/Them</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="Age" name="age">
                        <InputNumber onChange={(val: any) => setAge(val)} value={age} placeholder="Age" />
                      </Form.Item>
                      </div>
                      </>
                      );
                    case 2:
                      return (
                        <>
                        <div key={2} className='slide-in'>
                        <div className='mb-5'>
                        <h1 className='text-2xl font-semibold mb-2'>Define the Theme of Your Article</h1>
                        <p>Please briefly state the central theme or topic of your article. This should be a concise overview or headline of what your article will be about. Think of it as a summary or the title of a chapter – it gives an idea of the story but doesn’t delve into the details. For instance, 'Overcoming Adversity in Competitive Sports', 'Finding Balance Between Work and Family', or 'My Journey with Learning a New Language'. Try to encapsulate your main idea in a sentence or two.</p>
                        {/* <p>Please specify the broader topic or theme you want your article to focus on. This should be an overarching subject that resonates with your personal experiences or stories. For example, it could be about a significant challenge you’ve overcome, a remarkable achievement, or an important issue you're passionate about. Think of it as the central thread that ties your narrative together.</p> */}
                        <button onClick={showModal} className="text-blue-500 mt-3 cursor-pointer hover:underline">See Examples Here</button>
                        </div>
                      <Form.Item rules={[{ required: true, message: 'Please choose a theme' }]} label="" name="subject">
                        <Input.TextArea onChange={(e: any) => setSubject(e.target.value)} placeholder="Example: Balancing Work and Personal Passions..." />
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
                          <h1 className='text-2xl font-semibold mb-2'>Detail Your Personal Journey</h1>
                          <p>Now that you've identified the theme, this is where you can dive into the full narrative of your experiences. Share the detailed account of your personal journey, challenges, achievements, and insights related to your chosen theme. Feel free to describe specific events, turning points, and the emotions involved. The more descriptive and heartfelt your storytelling, the better we can capture and convey the depth of your unique perspective.</p>
                          {/* <p>This is your space to share the details of your personal journey or experiences related to the chosen subject. Feel free to recount specific events, challenges you’ve faced, milestones you’ve achieved, or insights you’ve gained. Think of it as narrating a chapter from your life that vividly captures the essence of your story. The more descriptive and heartfelt, the better we can understand and convey your unique perspective in the article.</p> */}
                          </div>
                        <Form.Item rules={[{ required: true, message: 'Please fill out your story' }]} label="" name="story">
                          <Input.TextArea onChange={(e: any) => setStory(e.target.value)} placeholder="Example: My journey began in the small town of Springfield, where I first discovered my passion for painting. Overcoming initial challenges, like limited resources and lack of mentorship, I persevered, driven by my love for art. A pivotal moment was when my work was featured in a local exhibition, leading to unexpected opportunities and growth. This experience taught me the importance of resilience and staying true to one's vision..." />
                        </Form.Item>
                        </div>
                         </>
                        )
                    // case 4:
                    //   return (
                    //     <>
                    //     <div key={4} className='slide-in'>
                    //     <h1 className='text-2xl font-semibold mb-2'>Visual Elements</h1>
                    //     <Form.Item
                    //   name="mainImage"
                    //   label="Upload Main Image"
                    //   valuePropName="fileList"
                    //   getValueFromEvent={normFile}
                    //   extra="Select main image to be displayed."
                    // >
                    //   <Upload name="headerImage" action="/upload.do" listType="picture">
                    //     <Button icon={<UploadOutlined />}>Click to upload</Button>
                    //   </Upload>
                    // </Form.Item>

                    // <Form.Item
                    //   name="additionalImage"
                    //   label="Upload Additional Image"
                    //   valuePropName="fileList"
                    //   getValueFromEvent={normFile}
                    //   extra="Select an additional image."
                    // >
                    //   <Upload name="additionalImage" action="/upload.do" listType="picture">
                    //     <Button icon={<UploadOutlined />}>Click to upload</Button>
                    //   </Upload>
                    // </Form.Item>
                    // </div>
                    //     </>
                    //   );
                      case 4:
                        return (
                          <>
                          <div key={4} className='slide-in'>
                          <div className='mb-5'>
                          <h1 className='text-2xl font-semibold mb-2'>Receive Your Article Link</h1>
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
                            <Input onChange={(e: any) => setEmail(e.target.value)} placeholder="Enter your email" />
                        </Form.Item>
                        </div>
                         </>
                        );
                  //   case 6:
                  //     return (
                  //       <>
                  //       <div key={6} className='slide-in'>
                  //       <h1 className='text-2xl font-semibold mb-2'>Terms of Service</h1>
                  //       <Terms />
                  //       <Form.Item
                  //         name="agreement"
                  //         valuePropName="checked"
                  //         rules={[{ required: true, message: 'Please agree to continue' }]}
                  //         >
                  //         <Checkbox>
                  //           I have read and agree to the <a href="link-to-your-terms">Terms of Service</a>.
                  //         </Checkbox>
                  //       </Form.Item>
                  //       </div>
                  //       </>
                  //     )
                   }
  };

  return (
    <Form layout="vertical" form={form} onFinish={handleSubmit}>
      {renderStep()}
      <Form.Item>
        {currentStep > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={back}>
            Back
          </Button>
        )}
        {currentStep < totalSteps - 1 && (
          <Button className='bg-blue-600' type="primary" onClick={next}>
            Next
          </Button>
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


// import React, { useState } from 'react';
// import { Form, Input, InputNumber, Button, Checkbox, Radio, Upload } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import Terms from './terms';

// const ArticleForm = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [formData, setFormData] = useState({});

//   const totalSteps = 7;

//   const back = () => {
//     setCurrentStep(currentStep - 1);
//   };

//   const next = () => {
//     setCurrentStep(currentStep + 1);
//   };


//   const onFinish = () => {
//     console.log('Received values:', formData);
//   };

//   const handleFormChange = (_: any, allFields: any) => {
//     setFormData(allFields.reduce((acc: any, field: any) => ({
//       ...acc,
//       [field.name[0]]: field.value
//     }), {}));

//     console.log(formData)
//   };

//   // No changes needed here
//   const normFile = (e: any) => {
//     if (Array.isArray(e)) {
//       return e;
//     }
//     return e && e.fileList;
//   };

//   // Render step function remains the same
//   const renderStep = () => {
//     switch (currentStep) {
//             case 0:
//               return (
//                 <>
//                 <div key={0} className='slide-in'>
//                 <h1 className='text-2xl font-semibold mb-2'>Choosing Your Article Type (in next step)</h1>
//                 <h2 className='font-semibold'>1. Highlighted Article:</h2>
//                 <p>This option focuses exclusively on you and your specific achievement or story. It's ideal if you have a notable accomplishment or event that's newsworthy on its own. The article will delve into your personal journey, exploring the details and impact of your particular achievement.</p>
//                 <br />
//                 <h3 className='font-semibold'>2. Feature Article:</h3>
//                 <p>Choose this if you want to be part of a broader story. In a Feature article, while you play a significant role, the narrative revolves around a wider topic. Your experiences and insights contribute to a larger theme, such as industry trends, societal issues, or general experiences. This option suits those who have valuable perspectives or experiences to share within a broader context.</p>
//                 </div>
//                 </>
//               );
//             case 1:
//               return (
//                 <>
//                 <div key={1} className='slide-in'>
//                 <h1 className='text-2xl font-semibold mb-2'>Article Type</h1>
//                 <Form.Item
//                 name="radioGroup"
//                 label="Select Article Type"
//                 rules={[{ required: true, message: 'Please pick an option!' }]}
//               >
//                 <Radio.Group>
//                   <Radio.Button value="option1">Highlighted</Radio.Button>
//                   <Radio.Button value="option2">Featured</Radio.Button>
//                 </Radio.Group>
//               </Form.Item>
//               </div>
//               </>
//               );
//             case 2:
//               return (
//                 <>
//                 <div key={2} className='slide-in'>
//                 <h1 className='text-2xl font-semibold mb-2'>Personal Details</h1>
//                 <Form.Item label="Full Name" name="fullName" rules={[{ required: true }]}>
//                 <Input placeholder="Full Name" />
//               </Form.Item>
//               <Form.Item label="Age" name="age">
//                 <InputNumber placeholder="Age" />
//               </Form.Item>
//               </div>
//               </>
//               );
//             case 3:
//               return (
//                 <>
//                 <div key={3} className='slide-in'>
//                 <div className='mb-5'>
//                 <h1 className='text-2xl font-semibold mb-2'>Subject of the Article</h1>
//                 <p>Please specify the broader topic or theme you want your article to focus on. This should be an overarching subject that resonates with your personal experiences or stories. For example, it could be about a significant challenge you’ve overcome, a remarkable achievement, or an important issue you're passionate about. Think of it as the central thread that ties your narrative together.</p>
//                 </div>
//               <Form.Item rules={[{ required: true, message: 'Please choose a subject' }]} label="" name="subject">
//                 <Input.TextArea placeholder="Example: Balancing Work and Personal Passions..." />
//               </Form.Item>
//               </div>
//                </>
//               );
//               case 4:
//                 return (
//                   <>
//                   <div key={4} className='slide-in'>
//                   <div className='mb-5'>
//                   <h1 className='text-2xl font-semibold mb-2'>Tell Us Your Story</h1>
//                   <p>This is your space to share the details of your personal journey or experiences related to the chosen subject. Feel free to recount specific events, challenges you’ve faced, milestones you’ve achieved, or insights you’ve gained. Think of it as narrating a chapter from your life that vividly captures the essence of your story. The more descriptive and heartfelt, the better we can understand and convey your unique perspective in the article.</p>
//                   </div>
//                 <Form.Item rules={[{ required: true, message: 'Please fill out your story' }]} label="" name="story">
//                   <Input.TextArea placeholder="Example: My journey began in the small town of Springfield, where I first discovered my passion for painting. Overcoming initial challenges, like limited resources and lack of mentorship, I persevered, driven by my love for art. A pivotal moment was when my work was featured in a local exhibition, leading to unexpected opportunities and growth. This experience taught me the importance of resilience and staying true to one's vision..." />
//                 </Form.Item>
//                 </div>
//                  </>
//                 )
//             case 5:
//               return (
//                 <>
//                 <div key={5} className='slide-in'>
//                 <h1 className='text-2xl font-semibold mb-2'>Visual Elements</h1>
//                 <Form.Item
//               name="mainImage"
//               label="Upload Main Image"
//               valuePropName="fileList"
//               getValueFromEvent={normFile}
//               extra="Select main image to be displayed."
//             >
//               <Upload name="headerImage" action="/upload.do" listType="picture">
//                 <Button icon={<UploadOutlined />}>Click to upload</Button>
//               </Upload>
//             </Form.Item>

//             <Form.Item
//               name="additionalImage"
//               label="Upload Additional Image"
//               valuePropName="fileList"
//               getValueFromEvent={normFile}
//               extra="Select an additional image."
//             >
//               <Upload name="additionalImage" action="/upload.do" listType="picture">
//                 <Button icon={<UploadOutlined />}>Click to upload</Button>
//               </Upload>
//             </Form.Item>
//             </div>
//                 </>
//               );
//             case 6:
//               return (
//                 <>
//                 <div key={6} className='slide-in'>
//                 <h1 className='text-2xl font-semibold mb-2'>Terms of Service</h1>
//                 <Terms />
//                 <Form.Item
//                   name="agreement"
//                   valuePropName="checked"
//                   rules={[{ required: true, message: 'Please fill out your story' }]}
//                   >
//                   <Checkbox>
//                     I have read and agree to the <a href="link-to-your-terms">Terms of Service</a>.
//                   </Checkbox>
//                 </Form.Item>
//                 </div>
//                 </>
//               )
//           }
//   };

//   return (
//     <Form layout="vertical" onFieldsChange={handleFormChange} onFinish={onFinish}>
//       {renderStep()}
//       <Form.Item>
//         {currentStep > 0 && (
//           <Button style={{ margin: '0 8px' }} onClick={back}>
//             Back
//           </Button>
//         )}
//         {currentStep < totalSteps - 1 && (
//           <Button className='bg-blue-600' type="primary" onClick={next}>
//             Next
//           </Button>
//         )}
//         {currentStep === totalSteps - 1 && (
//           <Button className='bg-blue-600' type="primary" htmlType="submit">
//             Submit
//           </Button>
//         )}
//       </Form.Item>
//     </Form>
//   );
// };

// export default ArticleForm;



// import { useState } from 'react';
// import { Form, Upload, Input, DatePicker, InputNumber, Button, Checkbox, Radio } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import Terms from './terms';


// const ArticleForm = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const totalSteps = 7;

//   const next = () => {
//     setCurrentStep(currentStep + 1);
//   }

//   const back = () => {
//     setCurrentStep(currentStep - 1);
//   }

//   const onFinish = (values: any) => {
//     console.log('Received values:', values);
//   };

//   const normFile = (e: any) => {
//     if (Array.isArray(e)) {
//       return e;
//     }
//     return e && e.fileList;
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 0:
//         return (
//           <>
//           <div key={0} className='slide-in'>
//           <h1 className='text-2xl font-semibold mb-2'>Choosing Your Article Type (in next step)</h1>
//           <h2 className='font-semibold'>1. Highlighted Article:</h2>
//           <p>This option focuses exclusively on you and your specific achievement or story. It's ideal if you have a notable accomplishment or event that's newsworthy on its own. The article will delve into your personal journey, exploring the details and impact of your particular achievement.</p>
//           <br />
//           <h3 className='font-semibold'>2. Feature Article:</h3>
//           <p>Choose this if you want to be part of a broader story. In a Feature article, while you play a significant role, the narrative revolves around a wider topic. Your experiences and insights contribute to a larger theme, such as industry trends, societal issues, or general experiences. This option suits those who have valuable perspectives or experiences to share within a broader context.</p>
//           </div>
//           </>
//         );
//       case 1:
//         return (
//           <>
//           <div key={1} className='slide-in'>
//           <h1 className='text-2xl font-semibold mb-2'>Article Type</h1>
//           <Form.Item
//           name="radioGroup"
//           label="Select Article Type"
//           rules={[{ required: true, message: 'Please pick an option!' }]}
//         >
//           <Radio.Group>
//             <Radio.Button value="option1">Highlighted</Radio.Button>
//             <Radio.Button value="option2">Featured</Radio.Button>
//           </Radio.Group>
//         </Form.Item>
//         </div>
//         </>
//         );
//       case 2:
//         return (
//           <>
//           <div key={2} className='slide-in'>
//           <h1 className='text-2xl font-semibold mb-2'>Personal Details</h1>
//           <Form.Item label="Full Name" name="fullName" rules={[{ required: true }]}>
//           <Input placeholder="Full Name" />
//         </Form.Item>
//         <Form.Item label="Age" name="age">
//           <InputNumber placeholder="Age" />
//         </Form.Item>
//         </div>
//         </>
//         );
//       case 3:
//         return (
//           <>
//           <div key={3} className='slide-in'>
//           <div className='mb-5'>
//           <h1 className='text-2xl font-semibold mb-2'>Subject of the Article</h1>
//           <p>Please specify the broader topic or theme you want your article to focus on. This should be an overarching subject that resonates with your personal experiences or stories. For example, it could be about a significant challenge you’ve overcome, a remarkable achievement, or an important issue you're passionate about. Think of it as the central thread that ties your narrative together.</p>
//           </div>
//         <Form.Item rules={[{ required: true, message: 'Please choose a subject' }]} label="" name="subject">
//           <Input.TextArea placeholder="Example: Balancing Work and Personal Passions..." />
//         </Form.Item>
//         </div>
//          </>
//         );
//         case 4:
//           return (
//             <>
//             <div key={4} className='slide-in'>
//             <div className='mb-5'>
//             <h1 className='text-2xl font-semibold mb-2'>Tell Us Your Story</h1>
//             <p>This is your space to share the details of your personal journey or experiences related to the chosen subject. Feel free to recount specific events, challenges you’ve faced, milestones you’ve achieved, or insights you’ve gained. Think of it as narrating a chapter from your life that vividly captures the essence of your story. The more descriptive and heartfelt, the better we can understand and convey your unique perspective in the article.</p>
//             </div>
//           <Form.Item rules={[{ required: true, message: 'Please fill out your story' }]} label="" name="story">
//             <Input.TextArea placeholder="Example: My journey began in the small town of Springfield, where I first discovered my passion for painting. Overcoming initial challenges, like limited resources and lack of mentorship, I persevered, driven by my love for art. A pivotal moment was when my work was featured in a local exhibition, leading to unexpected opportunities and growth. This experience taught me the importance of resilience and staying true to one's vision..." />
//           </Form.Item>
//           </div>
//            </>
//           )
//       case 5:
//         return (
//           <>
//           <div key={5} className='slide-in'>
//           <h1 className='text-2xl font-semibold mb-2'>Visual Elements</h1>
//           <Form.Item
//         name="mainImage"
//         label="Upload Main Image"
//         valuePropName="fileList"
//         getValueFromEvent={normFile}
//         extra="Select main image to be displayed."
//       >
//         <Upload name="headerImage" action="/upload.do" listType="picture">
//           <Button icon={<UploadOutlined />}>Click to upload</Button>
//         </Upload>
//       </Form.Item>

//       <Form.Item
//         name="additionalImage"
//         label="Upload Additional Image"
//         valuePropName="fileList"
//         getValueFromEvent={normFile}
//         extra="Select an additional image."
//       >
//         <Upload name="additionalImage" action="/upload.do" listType="picture">
//           <Button icon={<UploadOutlined />}>Click to upload</Button>
//         </Upload>
//       </Form.Item>
//       </div>
//           </>
//         );
//       case 6:
//         return (
//           <>
//           <div key={6} className='slide-in'>
//           <h1 className='text-2xl font-semibold mb-2'>Terms of Service</h1>
//           <Terms />
//           <Form.Item
//             name="agreement"
//             valuePropName="checked"
//             rules={[{ required: true, message: 'Please fill out your story' }]}
//             >
//             <Checkbox>
//               I have read and agree to the <a href="link-to-your-terms">Terms of Service</a>.
//             </Checkbox>
//           </Form.Item>
//           </div>
//           </>
//         )
//     }
//   }

//   return (
//     <Form layout="vertical" onFinish={onFinish}>
//       {renderStep()}
//       <Form.Item>
//         {currentStep > 0 && (
//           <Button style={{ margin: '0 8px',}} onClick={back}>
//             Back
//           </Button>
//         )}
//         {currentStep < totalSteps - 1 && (
//           <Button className='bg-blue-600' type="primary" onClick={next}>
//             Next
//           </Button>
//         )}
//         {currentStep === totalSteps - 1 && (
//           <Button className='bg-blue-600' type="primary" htmlType="submit">
//             Submit
//           </Button>
//         )}
//       </Form.Item>
//     </Form>
//   );
// };

// export default ArticleForm;
