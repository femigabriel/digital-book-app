import React, { useState } from "react";
import { Form, Input, Button, Spin, notification } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignupForm = () => {
  const router = useRouter(); // Initialize useRouter
  const [loading, setLoading] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(1); // Track current step
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [form] = Form.useForm();

  const handleAvatarClick = (index: number) => {
    setSelectedAvatar(index);
    form.setFieldsValue({ avatarIndex: index });
    setCurrentStep(2); // Move to next step after selecting an avatar
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollPosition(e.currentTarget.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const walk = (e.pageX - startX) * 2;
    e.currentTarget.scrollLeft = scrollPosition - walk;
  };

  const onFinish = async (values: {
    name: string;
    email: string;
    avatarIndex: number;
  }) => {
    setLoading(true);
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        notification.success({
          message: "Success",
          description: data.message,
        });
        router.push("/login"); // Redirect to login page on success
      } else {
        throw new Error(data.error || "Failed to register user");
      }
    } catch (error: any) {
      notification.error({
        message: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="div">
      <div className=" w-full bg-[#FFFEE9]">
        <header className="flex justify-between h-[90px] shadow">
          <div className="div">
            <Link href="/">
              <Image
                src="/images/Logo.svg"
                alt="Logo"
                width={50}
                height={50}
                className="w-full max-w-[191px]"
              />
            </Link>
          </div>
          <div></div>
        </header>
      </div>
      <div className="flex justify-center items-center min-h-screen signup">
        <div className="px-5 py-7 w-[450px] rounded-lg shadow-md bg-[#FAD8E3]">
          {currentStep === 1 ? (
            // Step 1: Avatar selection
            <>
              <h3 className="text-[#303030] text-2xl text-center">
                Choose Your Avatar
              </h3>
              <p className="text-[#4A4A4A] text-base text-center mb-5">
                Select an avatar to proceed
              </p>
              <div className="avatar-scroll mt-5">
                <div
                  className="avatar-container mb-5"
                  onMouseDown={handleMouseDown}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseUp}
                  onMouseMove={handleMouseMove}
                  style={{
                    display: "flex",
                    overflowX: "auto",
                    cursor: isDragging ? "grabbing" : "grab",
                  }}
                >
                  {[...Array(9)].map((_, index) => (
                    <div
                      key={index}
                      className={`avatar-wrapper ${
                        selectedAvatar === index ? "selected" : ""
                      }`}
                      onClick={() => handleAvatarClick(index)}
                      style={{ margin: "0 10px" }}
                    >
                      <Image
                        src={`/avatar/Avatar Option${index + 1}.svg`}
                        alt={`Avatar Option ${index + 1}`}
                        width={60}
                        height={60}
                        className="avatar mb-5"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-base">
                  Already have a nickname?{" "}
                  <Link href="/login">
                    <span className="text-[#652D90] text-sm text-center">
                      Play Activities
                    </span>
                  </Link>
                </p>
              </div>
            </>
          ) : (
            // Step 2: Form with name and email
            <>
              <h3 className="text-[#303030] text-2xl text-center">
                Complete Your Registration
              </h3>
              <Form
                form={form}
                name="signup"
                layout="vertical"
                onFinish={onFinish}
                style={{ maxWidth: 400, margin: "0 auto" }}
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>

                <Form.Item
                  name="avatarIndex"
                  initialValue={selectedAvatar} // Pre-set avatarIndex for validation
                  rules={[
                    { required: true, message: "Please select an avatar" },
                  ]}
                  hidden
                />

                <Form.Item>
                  <Button type="primary" htmlType="submit" disabled={loading}>
                    {loading ? <Spin /> : "Sign Up"}
                  </Button>
                </Form.Item>
              </Form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
