import React from "react";
import { cs1 } from "../../assets/images";
import { sqaureDots } from "../../assets/decorImg";

const ContentSolution = () => {
  return (
    <div className="max-container lg:px-[96px] px-[20px] 2xl:mx-auto xxl:px-[156px] my-[40px] lg:my-[100px]">
      <div className=" relative">
        <div className="flex justify-center items-start space-x-[60px]">
          <img src={cs1} alt="" />
          <div className="">
            <div className="">
              <span className="multiverse-text text-5xl font-bold font-['Nunito Sans'] leading-[56px]">
                Content Solutions
              </span>
              <span className="text-zinc-900 text-5xl font-bold font-['Nunito Sans'] leading-[56px]">
                {" "}
              </span>
              <span className="text-zinc-900 text-5xl font-semibold font-['Nunito Sans'] leading-[56px]">
                that Drive Results
              </span>
            </div>
            <div className=" text-black text-lg font-normal font-['Nunito Sans'] lg:mt-6">
              At Mélange Digital, we redefine video production by seamlessly
              blending creativity with strategy. Our approach goes beyond the
              surface, delving deep into the core of your brand's identity. We
              specialize in crafting videos that not only captivate but
              strategically communicate your brand's narrative, providing
              solutions to your business challenges. Our mission is to go beyond
              the ordinary, ensuring that every frame serves a dual purpose – an
              aesthetic delight and a solution-driven connection with your
              audience.
              <br />
            </div>
            <div className="text-black text-lg font-normal font-['Nunito Sans'] lg:mt-4">
              Let's collaborate to bring your brand's visual story to life
              through the perfect blend of motion, audio, aesthetics, and, most
              importantly, strategy.
            </div>

            <div className="rounded-gradient-border p-[1px]  rounded-[30px] lg:mt-8 transition-all">
              <div className="bg-white transition-all rounded-[30px] mid hover:text-white ">
                <button className="multiverse-text2 font-semibold rounded-[30px] transition-all  text-[20px] py-1.5 px-7 ">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={sqaureDots}
          alt=""
          className="absolute -bottom-[60px] -z-10 -left-10 "
        />
      </div>
    </div>
  );
};

export default ContentSolution;
