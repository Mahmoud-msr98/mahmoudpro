import React from "react";
import { useState } from "react";
import "./Sing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const Sing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleComponents = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between   ">
      <div className="xl:w-[70%] rounded-[40px] ">
        <h1 className="text-[40px] text-[#0A0E3F] text-center">أنشاء حساب</h1>
        <form action="" className=" flex justify-between  sect   ">
          <div className="items-start  flex flex-col   mb-[20px] mr-[40px] mt-[40px] h-[auto]   w-[30%] space-y-4">
            <label htmlFor="" className="relative ">
              <input
                type="text"
                className="border-[1px] border-[#000] border-solid pr-[20px] outline-none z-index-[12] xl:w-[120%] xl:h-[50px] rounded-[20px] "
              />
              <span className=" spam absolute right-[15px]  xl:bottom-[35px] sm:bottom[] z-index-[111] bg-[#fff] pr-[10px] pl-[10px] text-center  ">
                ايميل
              </span>
            </label>
            <label htmlFor="" className="relative">
              <input
                type="text"
                className="border-[1px] border-[#000] border-solid pr-[20px]  outline-none z-index-[12] xl:w-[120%] xl:h-[50px] rounded-[20px] "
              />
              <span className=" spam absolute right-[15px]  bottom-[35px] z-index-[111] bg-[#fff]  text-center pr-[10px] pl-[10px]">
                اسم المستخدم
              </span>
            </label>
            <label htmlFor="" className="relative">
              <input
                type="text"
                className="border-[1px] border-[#000] border-solid pr-[20px] outline-none z-index-[12]  xl:w-[120%] xl:h-[50px] rounded-[20px] "
              />
              <span className=" spam absolute right-[15px]  bottom-[35px] z-index-[111] bg-[#fff]  text-center pr-[10px] pl-[10px]">
                رقم الهاتف
              </span>
            </label>
            <label htmlFor="" className="relative">
              <input
                type="text"
                className="border-[1px] border-[#000] border-solid pr-[20px] outline-none z-index-[12] xl:w-[120%] xl:h-[50px] rounded-[20px] "
              />
              <span className=" spam absolute right-[15px]  bottom-[35px] z-index-[111] bg-[#fff]  text-center pr-[10px] pl-[10px]">
                كلمة المرور
              </span>
            </label>
            <label htmlFor="" className="relative">
              <input
                type="text"
                className="border-[1px] border-[#000] border-solid pr-[20px] outline-none z-index-[12]  xl:w-[120%] xl:h-[50px] rounded-[20px] "
              />
              <span className=" spam absolute right-[15px]  bottom-[35px] z-index-[111] bg-[#fff]   text-center pr-[10px] pl-[10px]">
                كلمة المرور
              </span>
            </label>
          </div>

          <div className="  flex flex-col ml-[20px] mt-[40px] space-y-4 w-auto">
            <label
              htmlFor=""
              className="relative border-[1px] border-[#000] border-dashed z-index-[12] mb-[40px]  rounded-[20px] mr-3"
            >
              <span className="absolute right-[15px]  bottom-[73px] z-index-[111] bg-[#fff]  text-center ">
                صورة شخصية
              </span>
              <label htmlFor="img1">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="absolute top-[30px] right-[300px]"
                />
                <input
                  type="file"
                  id="img1"
                  className="hidden border-[1px] border-[#000] border-dashed pr-[20px] outline-none z-index-[12]  rounded-[20px] "
                />
              </label>
              <h1 className=" pr-[10px] pt-[20px]">
                اسحب و افلت الصورة هنا او قم برفعها من الملفات
              </h1>
              <p className="pr-[10px] pt-[10px]">الحجم الاقصى: 2MB</p>
            </label>
            <label
              htmlFor=""
              className="relative bg-[#6B48FF33] border-[1px] border-[#000] border-dashed border-t-none z-index-[12] mr-3 rounded-[20px]"
            >
              <span className="absolute right-[15px]  bottom-[60px] z-index-[111] bg-transparent text-center  text-[13px] rounded-[50px]">
                اثبات الصورة الشخصية
              </span>
              <label htmlFor="img2">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="absolute top-[30px] right-[300px]"
                />
                <input
                  type="file"
                  id="img2"
                  className=" hidden border-[1px] border-[#000] border-dashed pr-[20px] outline-none z-index-[12] xl:w-[450px] xl:h-[90px] rounded-[20px] "
                />
              </label>
              <h1 className="pt-[20px] pr-[10px]">
                اسحب و افلت الصورة هنا او قم برفعها من الملفات
              </h1>
              <p className="pr-[10px]">الحجم الاقصى:1MB</p>
            </label>

            <input
              type="submit"
              value={"إنشاء حساب"}
              className="bg-[#1EE3CF] text-[#0A0E3F] w-[300px] h-[40px] mr-[40px] rounded-[40px]"
            />
            <h1>
              لديك حساب؟{" "}
              <button
                onClick={toggleComponents}
                className="text-[#6B48FF] underline underline-offset-1"
              >
                تسجيل الدخول
              </button>
            </h1>
          </div>
        </form>
        <div className="s text-center text-[#ACACAC] mb-[30px] sm:text-[10px]">
          _______________________ أو _________________________
        </div>
        <div className="">
          <span></span>
        </div>
      </div>

      <div className="img xl:w-[30%] "></div>
    </div>
  );
};

export default Sing;
