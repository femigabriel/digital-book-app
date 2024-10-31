import React, { useState } from "react";
import { Upload, message, Button, Table, Modal } from "antd";
import { UploadOutlined, FileTextOutlined, EyeOutlined } from "@ant-design/icons";
import type { UploadProps, UploadRequestOption } from "antd/es/upload/interface";
import type { RcFile } from "antd/es/upload/interface"; 
import Image from "next/image";

interface FileData {
  key: string;
  name: string;
  fileName: string;
  fileUrl: string;
}

interface Props {
  onUploadSuccess: (fileUrl: string) => void;
}

const FileUploadTicket: React.FC<Props> = ({ onUploadSuccess }) => {
  const [fileList, setFileList] = useState<any[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<FileData[]>([]);
  const [uploading, setUploading] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const uploadProps: UploadProps = {
    multiple: false,
    fileList,
    beforeUpload: (file) => {
      const isAllowedType =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "application/pdf";

      if (!isAllowedType) {
        message.error(`${file.name} is not a valid file type.`);
      }
      return isAllowedType;
    },
    onChange: (info) => {
      let newFileList = [...info.fileList];
      newFileList = newFileList.slice(-1); 
      setFileList(newFileList);

      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        onUploadSuccess(info.file.response.url);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    customRequest: async ({ file, onSuccess, onError }: UploadRequestOption<RcFile>) => {
      setUploading(true);
      setTimeout(() => {
        if (Math.random() > 0.2) {
          const fileUrl = "https://example.com/path/to/file"; 
          onUploadSuccess(fileUrl);
          message.success("File uploaded successfully");

          // Add file details to the table
          const newFile: FileData = {
            key: file.uid.toString(), 
            name: "John Doe", 
            fileName: file.name, 
            fileUrl,
          };
          setUploadedFiles((prevFiles) => [...prevFiles, newFile]);

          if (onSuccess) onSuccess(fileUrl); // Call onSuccess with the file URL
        } else {
          if (onError) onError("Upload failed.");
          message.error("File upload failed, please try again.");
        }
        setUploading(false);
      }, 2000);
    },
  };

  const columns = [
    {
      title: "Uploader Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "File Name",
      dataIndex: "fileName",
      key: "fileName",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: FileData) => (
        <Button
          icon={<EyeOutlined />}
          onClick={() => handlePreview(record.fileUrl)}
          className="text-blue-600 hover:text-blue-800"
        >
          View
        </Button>
      ),
    },
  ];

  const handlePreview = (fileUrl: string) => {
    setPreviewImage(fileUrl);
    setPreviewVisible(true);
  };

  return (
    <div className="flex flex-col items-center bg-[#f9fafb] p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Upload Your Ticket</h3>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Upload your ticket image or PDF to keep a record. Only .jpeg, .png, and .pdf files are allowed.
      </p>

      <Upload {...uploadProps} listType="picture" className="w-full max-w-md mb-4">
        <Button
          icon={<UploadOutlined />}
          loading={uploading}
          className="bg-blue-600 text-white hover:bg-blue-700 transition-all"
          size="large"
        >
          {uploading ? "Uploading..." : "Select File"}
        </Button>
      </Upload>

      {fileList.length > 0 && (
        <div className="flex items-center mt-4 text-green-600">
          <FileTextOutlined className="mr-2" />
          <p className="text-sm font-medium">Selected File: {fileList[0].name}</p>
        </div>
      )}

      <div className="mt-6 w-full">
        <Table columns={columns} dataSource={uploadedFiles} pagination={false} />
      </div>

      <Modal
        open={previewVisible}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        {previewImage ? (
          <Image src={previewImage} alt="File Preview" width={500} height={500} />
        ) : (
          <p>No preview available</p>
        )}
      </Modal>
    </div>
  );
};

export default FileUploadTicket;
