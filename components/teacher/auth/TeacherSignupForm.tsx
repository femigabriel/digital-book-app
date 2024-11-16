import { Form, Input, Button, message, Spin } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const TeacherSignupForm = () => {
  const [loading, setLoading] = useState(false); // State for loading spinner
  const router = useRouter(); // Router to handle page redirects

  const onFinish = async (values: any) => {
    const { firstName, lastName, email, password, confirmPassword } = values;

    setLoading(true); // Show loading spinner when submitting

    try {
      const response = await fetch("/api/teacher/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        }),
      });

      const data = await response.json();

      setLoading(false); // Hide loading spinner

      if (response.ok) {
        message.success(data.message);
        // Redirect to the login page after successful signup
        router.push("/teacher-dashboard/login");
      } else {
        message.error(data.error);
      }
    } catch (error) {
      setLoading(false); // Hide loading spinner on error
      console.error("Error signing up:", error);
      message.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className=" min-h-screen teacher-auth">
      <div className="bg-[#FFFEE9] p-8 shadow-lg rounded-lg w-full max-w-xl">
        <h1 className="text-2xl text-center mb-6">
          Create your Teacher Account
        </h1>
        <Spin spinning={loading} tip="Submitting..." size="large">
          <Form
            name="teacherSignup"
            onFinish={onFinish}
            layout="vertical"
            initialValues={{ remember: true }}
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input className="bg-[#F1EEB8] h-[45px]" />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input className="bg-[#F1EEB8] h-[45px]" />
            </Form.Item>

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
              <Input.Password className="bg-[#F1EEB8] h-[45px]" />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password className="bg-[#F1EEB8] h-[45px]" />
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
                Already have a account?{" "}
                <Link href="/teacher-dashboard/login">
                  <span className="text-[#652D90] text-sm text-center">
                    Login here
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

export default TeacherSignupForm;
