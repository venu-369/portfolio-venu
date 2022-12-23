import React from "react";
import myphoto from "../../assets/aboutme/IMG_3976.JPG";

const AboutMe = () => {
  return (
    <div>
      <div className="bg-base-200 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
          <div className="w-[300px] lg:w-full">
            <img src={myphoto} alt="" className="rounded" />
          </div>
          <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
            <h1 className="lg:text-5xl text-secondary font-bold"></h1>
            <p className="py-6 lg:text-lg text-sm text-center">
              In addition to graduating with a Master's in Artificial
              Intelligence and Robotics, I have also gained practical experience
              through various internships and projects. For example, I have
              worked on a project to develop a decentralized application using
              Ethereum, which required me to familiarize myself with smart
              contracts and Solidity. I also have experience with other
              blockchain platforms such as Hyperledger Fabric and corda.
              <br></br>
              <br></br>
              Aside from my professional pursuits, I am also very passionate
              about computer science and have a strong interest in all areas of
              the field. In my spare time, I enjoy keeping up with the latest
              developments and trends in the industry. Additionally, I have a
              couple of hobbies outside of work, including art and music, which
              help me to bring a creative and diverse perspective to my work. I
              am excited about the opportunity to contribute my skills and
              knowledge to your team and help drive the development of
              innovative blockchain solutions. Thank you for checking my
              website. I look forward to work for the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
