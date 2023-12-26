import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Checkbox, Modal, Button, Select } from 'antd';
import PubPolicy from './publicationPolicy';
import publishArticle from '../utils/publishArticle';

const RevisionFooter = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = async (version: string) => {

    try {
      await publishArticle(version)
    } catch (e) {
      console.error('error submitting article')
    }

  }

  const onFinish = (values: any) => {
    console.log('Selected Article Version:', values.articleVersion);
    handleSubmit(values.articleVersion);
    navigate('/publish');
  };

  const onFormValuesChange = (_: any, allValues: any) => {
    setIsCheckboxChecked(allValues.agreement);
  };

  return (
    <div className="w-[90%] sm:w-96 bg-white p-4 shadow-md border rounded-3xl">
      <Form
        form={form}
        onFinish={onFinish}
        onValuesChange={onFormValuesChange}
        layout="vertical"
      >
          <Form.Item
          name="articleVersion"
          label="Choose Article Version"
          rules={[{ required: true, message: 'Please select an article version' }]}
        >
          <Select placeholder="Select version">
            <Select.Option value="original">Original</Select.Option>
            <Select.Option value="revised">Revised</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[{ required: true, message: 'You must agree to the terms' }]}
        >
          <Checkbox>
            I agree to the <Button type="link" onClick={showModal}>Publication Policy</Button>
          </Checkbox>
        </Form.Item>

        <Modal title="Publication Policy" open={isModalVisible} onCancel={handleClose} footer={null}>
          <PubPolicy />
        </Modal>

        <Form.Item>
          <Button
            className='bg-blue-600'
            type="primary"
            htmlType="submit"
            disabled={!isCheckboxChecked}>
            Submit for Publication
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RevisionFooter;

