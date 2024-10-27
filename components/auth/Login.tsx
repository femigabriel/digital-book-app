import React from "react";
import { Form, Input, Button, notification } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export const LoginPage = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = async (values: { name: string }) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        notification.success({
          message: "Login Successful",
          description: data.message,
        });
        router.push("/activities"); 
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      notification.error({
        message: "Login Failed",
        description: error.message,
      });
    }
  };

  return (
    <div className="login">
      <div className="flex justify-center items-center h-full">
        <div className="bg-[#FAD8E3] px-5 py-7 w-[450px] rounded-lg shadow-md">
          <h3 className="text-[#303030] text-2xl text-center">
            Your Nickname is your Passcode
          </h3>
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                placeholder="Enter your name"
                className="bg-[#ECE0F5] h-[45px] border border-[#D9D9D9]"
              />
            </Form.Item>
            <span className="text-[#652D90] text-sm text-center">
              Forgot Nickname?
            </span>
            <Form.Item className="mt-5">
              <Button type="primary" className="bg-[#FAD8E3]" htmlType="submit" block>
                <Image
                  src="/images/login-btn.svg"
                  alt="Contact Illustration"
                  width={516}
                  height={59}
                  className="max-w-full h-auto"
                />
              </Button>
            </Form.Item>
            <div className="flex justify-center items-center">
              <p className="text-base">
                Don’t have a nickname?{" "}
                <Link href="/signup">
                  <span className="text-[#652D90] text-sm text-center">Create One</span>
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
