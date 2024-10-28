import React, { useState } from "react";
import Image from "next/image";
import { Button, Progress } from "antd";
import Link from "next/link";

export const BooksList = () => {
  // Progress values for each book
  const [progress1, setProgress1] = useState(30);
  const [progress2, setProgress2] = useState(60);
  const [progress3, setProgress3] = useState(45);
  const [progress4, setProgress4] = useState(25);
  const [progress5, setProgress5] = useState(50);
  const [progress6, setProgress6] = useState(70);

  return (
    <div className="w-full min-h-screen bg-[#FAD8E3] flex flex-col px-10 py-5">
      <h3 className="text-3xl font-bold">Books</h3>

      <div className="flex justify-between w-full my-7">
        {/* Book 1 */}
        <div className="max-w-[360px] w-full book">
          <div className="cursor-pointer">
            <Image
              src="/images/Book Holder.svg"
              alt="Book Holder"
              width={360}
              height={50}
              className="shadow max-h-[495px]"
              draggable="false"
            />
          </div>
          <Progress
            percent={progress1}
            size="small"
            className="my-3"
            strokeColor="#92E3A9"
          />
          <Link href="/read-book">
            <button className="bg-[#FAD8E3] mt-2 hover:bg-none">
              <Image
                src="/images/play-button.svg"
                alt="Play Button"
                width={516}
                height={59}
                className="max-w-full h-auto"
              />
            </button>
          </Link>
        </div>

        {/* Book 2 */}
        <div className="max-w-[360px] w-full book">
          <div className="cursor-pointer">
            <Image
              src="/images/BookCover1.svg"
              alt="Book Cover 1"
              width={360}
              height={50}
              className="shadow max-h-[495px]"
              draggable="false"
            />
          </div>
          <Progress
            percent={progress2}
            size="small"
            className="my-3"
            strokeColor="#92E3A9"
          />
          <Button
            type="primary"
            className="bg-[#FAD8E3] mt-2"
            htmlType="submit"
            block
          >
            <Image
              src="/images/play-button.svg"
              alt="Play Button"
              width={516}
              height={59}
              className="max-w-full h-auto"
            />
          </Button>
        </div>

        {/* Book 3 */}
        <div className="max-w-[360px] w-full book">
          <div className="cursor-pointer">
            <Image
              src="/images/BookCover2.svg"
              alt="Book Cover 2"
              width={360}
              height={50}
              className="shadow max-h-[495px]"
              draggable="false"
            />
          </div>
          <Progress
            percent={progress3}
            size="small"
            className="my-3"
            strokeColor="#92E3A9"
          />
          <Button
            type="primary"
            className="bg-[#FAD8E3] mt-2"
            htmlType="submit"
            block
          >
            <Image
              src="/images/play-button.svg"
              alt="Play Button"
              width={516}
              height={59}
              className="max-w-full h-auto"
            />
          </Button>
        </div>
      </div>

      <div className="flex justify-between w-full my-7">
        {/* Book 4 */}
        <div className="max-w-[360px] w-full book">
          <div className="cursor-pointer">
            <Image
              src="/images/BookCover3.svg"
              alt="Book Cover 3"
              width={360}
              height={50}
              className="shadow max-h-[495px]"
              draggable="false"
            />
          </div>
          <Progress
            percent={progress4}
            size="small"
            className="my-3"
            strokeColor="#92E3A9"
          />
          <Button
            type="primary"
            className="bg-[#FAD8E3] mt-2"
            htmlType="submit"
            block
          >
            <Image
              src="/images/play-button.svg"
              alt="Play Button"
              width={516}
              height={59}
              className="max-w-full h-auto"
            />
          </Button>
        </div>

        {/* Book 5 */}
        <div className="max-w-[360px] w-full book">
          <div className="cursor-pointer">
            <Image
              src="/images/BookCover4.svg"
              alt="Book Cover 4"
              width={360}
              height={50}
              className="shadow max-h-[495px]"
              draggable="false"
            />
          </div>
          <Progress
            percent={progress5}
            size="small"
            className="my-3"
            strokeColor="#92E3A9"
          />
          <Button
            type="primary"
            className="bg-[#FAD8E3] mt-2"
            htmlType="submit"
            block
          >
            <Image
              src="/images/play-button.svg"
              alt="Play Button"
              width={516}
              height={59}
              className="max-w-full h-auto"
            />
          </Button>
        </div>

        {/* Book 6 */}
        <div className="max-w-[360px] w-full book">
          <div className="cursor-pointer">
            <Image
              src="/images/BookCover5.svg"
              alt="Book Cover 5"
              width={360}
              height={50}
              className="shadow max-h-[495px]"
              draggable="false"
            />
          </div>
          <Progress
            percent={progress6}
            size="small"
            className="my-3"
            strokeColor="#92E3A9"
          />
          <Button
            type="primary"
            className="bg-[#FAD8E3] mt-2"
            htmlType="submit"
            block
          >
            <Image
              src="/images/play-button.svg"
              alt="Play Button"
              width={516}
              height={59}
              className="max-w-full h-auto"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
