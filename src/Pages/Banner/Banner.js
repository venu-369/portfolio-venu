import React from "react";

import Lottie from "lottie-react";

import Typewriter from "typewriter-effect";

import webDevAnimation from "./../../assets/Bananer/127543-web-development.json";

const Banner = () => {
  return (
    <div>
      <div className="bg-base-200 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
          <div className="w-[300px] lg:w-full">
            <Lottie animationData={webDevAnimation} loop={true} />;
          </div>
          <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
            <h1 className="lg:text-5xl text-secondary font-bold">
              <Typewriter
                options={{
                  strings: ["Hello there!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="py-6 lg:text-lg text-sm text-center">
              My name is Venu Gopal Miriyala and I am a masters degree holder in
              AI Robotics. I have a strong passion for blockchain and
              cryptocurrency technology, and have a good command over
              programming languages such as Python, JavaScript, Node.js, and
              Solidity. I have always been fascinated by the potential of these
              technologies to revolutionize various industries and change the
              way we interact with each other and the world around us. With my
              knowledge and experience, I hope to contribute to the development
              and advancement of these technologies through my website blog.
              Thank you for visiting my website and I hope you find my content
              informative and useful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
