import { Form, Input, Button, message, Spin } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const TeacherLogin = () => {
  const [loading, setLoading] = useState(false); // For the loading state
  const router = useRouter(); // Router for redirection

  const onFinish = async (values: any) => {
    const { email, password } = values;

    setLoading(true); // Show loading spinner while submitting the form

    try {
      const response = await fetch("/api/teacher/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      setLoading(false); // Hide loading spinner

      if (response.ok) {
        message.success(data.message);
        // Redirect to teacher dashboard or wherever after login
        router.push("/teacher-dashboard");
      } else {
        message.error(data.error);
      }
    } catch (error) {
      setLoading(false); // Hide loading spinner on error
      console.error("Login Error:", error);
      message.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className=" min-h-screen teacher-auth">
      <div className="bg-[#FFFEE9] p-8 shadow-lg rounded-lg w-full max-w-xl">
        <h1 className="text-2xl text-center mb-6">Login to Teacher Zone</h1>
        <Spin spinning={loading} tip="Logging in..." size="large">
          <Form
            name="teacherLogin"
            onFinish={onFinish}
            layout="vertical"
            initialValues={{ remember: true }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input className="bg-[#F1EEB8] h-[45px]" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password className="bg-[#F1EEB8] h-[45px]"  />
            </Form.Item>

            
              <Form.Item className="mt-5">
              <Button
                // type="primary"
                className="bg-[#56BEE6 border-none h-[45px]"
                htmlType="submit"
                block
                disabled={loading}
              >
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
                Don’t have an account yet?
                <Link href="/teacher-dashboard/signup">
                  <span className="text-[#652D90] text-sm text-center ml-2">
                    Create One
                  </span>
                </Link>
              </p>
            </div>
          </Form>
        </Spin>
      </div>
    </div>
  );
};

export default TeacherLogin;
