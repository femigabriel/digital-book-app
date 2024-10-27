import React from "react";
import { Form, Input, Button } from "antd";
import Image from "next/image";

export const ContactForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-5 bg-beige-100">
      <div className="flex-1 p-5 shadow-md ">
        <h2 className="text-2xl mb-5">We are a message away from you</h2>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Enter your email address" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please write your message" }]}
          >
            <Input.TextArea placeholder="Write your message here" rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="flex-1 flex justify-center mt-5 md:mt-0">
        <Image
          src="/images/Image Holder.svg"
          alt="Contact Illustration"
          width={516}
          height={516}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ContactForm;
